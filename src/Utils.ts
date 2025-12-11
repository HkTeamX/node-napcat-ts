import type { Receive, SendMessageSegment, UnSafeStruct } from './Structs.js'

const getTime = () => new Date().toLocaleString()

export const logger = {
  warn: (...args: any[]) => {
    console.warn(`[${getTime()}]`, ...args)
  },
  debug: (...args: any[]) => {
    console.debug(`[${getTime()}]`, ...args)
  },
  dir: (json: any) => {
    console.dir(json, { depth: null })
  },
}

export const SPLIT = /(?=\[CQ:)|(?<=])/
export const CQ_TAG_REGEXP = /^\[CQ:([a-z]+)(?:,([^\]]+))?]$/

/**
 * CQ码转JSON
 */
export function convertCQCodeToJSON(msg: string): Receive[keyof Receive][] | SendMessageSegment[] {
  return CQCodeDecode(msg)
    .split(SPLIT)
    .map((tagStr) => {
      const match = CQ_TAG_REGEXP.exec(tagStr)
      if (match === null) return { type: 'text', data: { text: tagStr } }

      const [, tagName, value] = match
      if (value === undefined) return { type: tagName, data: {} }

      const data = Object.fromEntries(value.split(',').map((item) => item.split('=')))
      return { type: tagName, data }
    }) as Receive[keyof Receive][] | SendMessageSegment[]
}

const _conver = (json: any) => {
  if (json.type === 'text') return json.data.text
  return `[CQ:${json.type}${Object.entries(json.data)
    .map(([k, v]) => (v ? `,${k}=${v}` : ''))
    .join('')}]`
}

/**
 * JSON转CQ码
 */
export function convertJSONToCQCode(json: UnSafeStruct | UnSafeStruct[]): string {
  if (Array.isArray(json)) {
    return json.map((item) => _conver(item)).join('')
  } else {
    return _conver(json)
  }
}

export function CQCodeDecode(str: string | any): string {
  if (typeof str !== 'string') return String(str || '') // 尝试转换为字符串，或返回空字符串
  return str
    .replace(/&#44;/g, ',')
    .replace(/&#91;/g, '[')
    .replace(/&#93;/g, ']')
    .replace(/&amp;/g, '&')
}

export function CQCodeEncode(str: string): string {
  return str
    .replace(/,/g, '&#44;')
    .replace(/\[/g, '&#91;')
    .replace(/]/g, '&#93;')
    .replace(/&/g, '&amp;')
}
