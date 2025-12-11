import { SocketHandler } from './types/websocket.js'

import { ApiHandler } from './types/api.js'

import {
  MessageHandler,
  MessageSentHandler,
  MetaEventHandler,
  RequestHandler,
  NoticeHandler,
} from './types/events.js'

export * from './types/websocket.js'
export * from './types/events.js'
export * from './types/api.js'

// =====================================================================================

export type AllHandlers = SocketHandler &
  ApiHandler &
  MessageHandler &
  MessageSentHandler &
  MetaEventHandler &
  RequestHandler &
  NoticeHandler

export type WSReceiveHandler = MessageHandler &
  MessageSentHandler &
  MetaEventHandler &
  RequestHandler &
  NoticeHandler

export type EventKey = keyof AllHandlers
export type HandlerResMap = {
  [K in EventKey]: AllHandlers[K]
}
export type EventHandleMap = {
  [K in EventKey]: (context: HandlerResMap[K]) => void
}
