import WebSocket, { type Data } from 'isomorphic-ws'
import { nanoid } from 'nanoid'
import type {
  APIRequest,
  EventHandleMap,
  EventKey,
  HandlerResMap,
  NCWebsocketOptions,
  ResponseHandler,
  WSReconnection,
  WSSendParam,
  WSSendReturn,
} from './Interfaces.js'
import { NCEventBus } from './NCEventBus.js'
import { convertCQCodeToJSON, CQCodeDecode, logger } from './Utils.js'

export class NCWebsocketBase {
  #debug: boolean

  #baseUrl: string
  #accessToken: string
  #reconnection: WSReconnection
  #socket?: WebSocket
  #apiTimeout: number

  #eventBus: NCEventBus
  #echoMap: Map<string, ResponseHandler>
  #connectingPromise?: Promise<void>
  #reconnectTimer?: ReturnType<typeof setTimeout>
  #disconnected: boolean

  constructor(NCWebsocketOptions: NCWebsocketOptions, debug = false) {
    this.#accessToken = NCWebsocketOptions.accessToken ?? ''

    if ('baseUrl' in NCWebsocketOptions) {
      this.#baseUrl = NCWebsocketOptions.baseUrl
    } else if (
      'protocol' in NCWebsocketOptions &&
      'host' in NCWebsocketOptions &&
      'port' in NCWebsocketOptions
    ) {
      const { protocol, host, port } = NCWebsocketOptions
      this.#baseUrl = protocol + '://' + host + ':' + port
    } else {
      throw new Error(
        'NCWebsocketOptions must contain either "protocol && host && port" or "baseUrl"',
      )
    }

    // 整理重连参数
    const { enable = true, attempts = 10, delay = 5000 } = NCWebsocketOptions.reconnection ?? {}
    this.#reconnection = { enable, attempts, delay, nowAttempts: 1 }

    this.#apiTimeout = NCWebsocketOptions.apiTimeout ?? 2 * 60 * 1000
    this.#debug = debug
    this.#eventBus = new NCEventBus(this)
    this.#echoMap = new Map()
    this.#disconnected = false
  }

  // ==================WebSocket操作=============================

  /**
   * await connect() 等待 ws 连接
   */
  async connect() {
    // 如果正在连接中，等待连接完成
    if (this.#connectingPromise) return this.#connectingPromise
    // 如果已经连接成功，直接返回
    if (this.#socket) return

    this.#disconnected = false

    this.#connectingPromise = new Promise<void>((resolve) => {
      this.#eventBus.emit('socket.connecting', { reconnection: this.#reconnection })

      this.#socket = new WebSocket(`${this.#baseUrl}?access_token=${this.#accessToken}`)

      this.#socket.onmessage = (event) => this.#message(event.data)

      this.#socket.onopen = () => {
        this.#eventBus.emit('socket.open', { reconnection: this.#reconnection })

        this.#reconnection.nowAttempts = 1
        this.#connectingPromise = undefined

        resolve()
      }

      this.#socket.onclose = async (event) => {
        this.#eventBus.emit('socket.close', {
          code: event.code,
          reason: event.reason,
          reconnection: this.#reconnection,
        })

        if (this.#disconnected) return

        this.#socket = undefined

        if (
          this.#reconnection.enable &&
          this.#reconnection.nowAttempts < this.#reconnection.attempts
        ) {
          this.#reconnection.nowAttempts++

          clearTimeout(this.#reconnectTimer)
          this.#reconnectTimer = setTimeout(async () => {
            this.#reconnectTimer = undefined
            if (this.#disconnected) return
            await this.reconnect()
          }, this.#reconnection.delay)
        }
      }

      this.#socket.onerror = (event) => {
        this.#eventBus.emit('socket.error', {
          reconnection: this.#reconnection,
          error_type: 'connect_error',
          errors: event?.error?.errors ?? [event?.error ?? null],
        })
      }
    })

    return this.#connectingPromise
  }

  async disconnect() {
    this.#disconnected = true
    this.#connectingPromise = undefined

    clearTimeout(this.#reconnectTimer)
    this.#reconnectTimer = undefined

    const socket = this.#socket
    if (!socket) return

    return new Promise<void>((resolve) => {
      if (socket.readyState === WebSocket.CLOSED) {
        this.#socket = undefined
        resolve()
        return
      }

      const handleClose = () => {
        socket.removeEventListener('close', handleClose)
        this.#socket = undefined
        resolve()
      }
      socket.addEventListener('close', handleClose)

      socket.close(1000)
    })
  }

  async reconnect() {
    await this.disconnect()
    await this.connect()
  }

  async #message(data: Data) {
    let strData: string
    try {
      strData = data.toString()

      // 检查数据是否看起来像有效的JSON (以 { 或 [ 开头)
      if (!(strData.trim().startsWith('{') || strData.trim().startsWith('['))) {
        logger.warn('[node-napcat-ts]', '[socket]', 'received non-JSON data:', strData)
        return
      }

      let json = JSON.parse(strData)
      if (json.post_type === 'message' || json.post_type === 'message_sent') {
        if (json.message_format === 'string') {
          // 直接处理message字段，而不是整个json对象
          json.message = convertCQCodeToJSON(CQCodeDecode(json.message))
          json.message_format = 'array'
        }
        if (typeof json.raw_message === 'string') {
          json.raw_message = CQCodeDecode(json.raw_message)
        }
      }

      if (this.#debug) {
        logger.debug('[node-napcat-ts]', '[socket]', 'receive data')
        logger.dir(json)
      }

      if (json.echo) {
        const handler = this.#echoMap.get(json.echo)

        if (handler) {
          if (json.retcode === 0) {
            this.#eventBus.emit('api.response.success', json)
            handler.onSuccess(json)
          } else {
            this.#eventBus.emit('api.response.failure', json)
            handler.onFailure(json)
          }
        }
      } else {
        if (json?.status === 'failed' && json?.echo === null) {
          this.#reconnection.enable = false

          this.#eventBus.emit('socket.error', {
            reconnection: this.#reconnection,
            error_type: 'response_error',
            info: {
              url: this.#baseUrl,
              errno: json.retcode,
              message: json.message,
            },
          })

          await this.disconnect()

          return
        }

        this.#eventBus.parseMessage(json)
      }
    } catch (error) {
      logger.warn('[node-napcat-ts]', '[socket]', 'failed to parse JSON')
      logger.dir(error)
      return
    }
  }

  // ==================事件绑定=============================

  /**
   * 发送API请求
   * @param method API 端点
   * @param params 请求参数
   */
  send<T extends keyof WSSendParam>(method: T, params: WSSendParam[T]) {
    const echo = nanoid()

    const message: APIRequest<T> = {
      action: method,
      params: params,
      echo,
    }

    if (this.#debug) {
      logger.debug('[node-open-napcat] send request')
      logger.dir(message)
    }

    return new Promise<WSSendReturn[T]>((resolve, reject) => {
      const onSuccess = (response: any) => {
        this.#echoMap.delete(echo)
        clearTimeout(timeoutTimer)
        return resolve(response.data)
      }

      const onFailure = (reason: any) => {
        this.#echoMap.delete(echo)
        clearTimeout(timeoutTimer)
        return reject(reason)
      }

      const timeoutTimer = setTimeout(() => {
        onFailure({
          status: 'failed',
          retcode: -1,
          data: null,
          message: 'api response timeout',
          echo,
        })
      }, this.#apiTimeout)

      this.#echoMap.set(echo, {
        message,
        onSuccess,
        onFailure,
        timeoutTimer,
      })

      this.#eventBus.emit('api.preSend', message)

      if (this.#socket === undefined || this.#socket.readyState !== WebSocket.OPEN) {
        onFailure({
          status: 'failed',
          retcode: -1,
          data: null,
          message: 'api socket is not connected',
          echo,
        })
      } else {
        this.#socket.send(JSON.stringify(message))
      }
    })
  }

  /**
   * 注册监听方法
   * @param event
   * @param handle
   * @returns 返回自身引用
   */
  on<T extends EventKey>(event: T, handle: EventHandleMap[T]) {
    this.#eventBus.on<T>(event, handle)
    return this
  }

  /**
   * 注册一次性监听方法，触发一次后自动解除监听
   * @deprecated 因为once方法会创建一个函数包裹，无法正确的off，所以不推荐使用once方法，建议使用subscribeOnce方法替代
   * @param event
   * @param handle
   * @returns 返回自身引用
   */
  once<T extends EventKey>(event: T, handle: EventHandleMap[T]) {
    this.#eventBus.once(event, handle)
    return this
  }

  /**
   * 解除监听方法
   * @param event
   * @param handle
   * @returns 返回自身引用
   */
  off<T extends EventKey>(event: T, handle: EventHandleMap[T]) {
    this.#eventBus.off(event, handle)
    return this
  }

  /**
   * effect风格的订阅 效果同on
   * @param event
   * @param handle
   * @returns 返回用于取消订阅的函数
   */
  subscribe<T extends EventKey>(event: T, handle: EventHandleMap[T]) {
    return this.#eventBus.subscribe(event, handle)
  }

  /**
   * effect风格的订阅 效果同once
   * @param event
   * @param handle
   * @returns 返回用于取消订阅的函数
   */
  subscribeOnce<T extends EventKey>(event: T, handle: EventHandleMap[T]) {
    return this.#eventBus.subscribeOnce(event, handle)
  }

  /**
   * 手动模拟触发某个事件
   * @param type
   * @param context
   */
  emit<T extends EventKey>(type: T, context: HandlerResMap[T]) {
    this.#eventBus.emit(type, context)
    return this
  }
}
