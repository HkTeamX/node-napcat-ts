export interface UnSafeStruct {
  type: string
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [k: string]: any
  }
}

export interface Receive {
  text: {
    type: 'text'
    data: {
      text: string
    }
  }
  at: {
    type: 'at'
    data: {
      qq: string | 'all'
    }
  }
  image: {
    type: 'image'
    data:
    | {
      // 普通图片
      summary: string
      file: string
      sub_type: number
      url: string
      file_size: string
    }
    | {
      // 商城表情
      summary: string
      file: string
      sub_type: string
      url: string
      key: string
      emoji_id: string
      emoji_package_id: number
    }
  }
  file: {
    type: 'file'
    data: {
      file: string
      file_id: string
      file_size: string
    }
  }
  poke: {
    type: 'poke'
    data: {
      type: string
      id: string
    }
  }
  dice: {
    type: 'dice'
    data: {
      result: string
    }
  }
  rps: {
    type: 'rps'
    data: {
      result: string
    }
  }
  face: {
    type: 'face'
    data: {
      id: string
      raw: {
        faceIndex?: number
        faceText?: string
        faceType?: number
        packId?: string
        stickerId?: string
        sourceType?: number
        stickerType?: number
        resultId?: string
        surpriseId?: string
        randomType?: number
        imageType?: number
        pokeType?: number
        spokeSummary?: string
        doubleHit?: number
        vaspokeId?: number
        vaspokeName?: string
        vaspokeMinver?: number
        pokeStrength?: number
        msgType?: number
        faceBubbleCount?: number
        oldVersionStr?: string
        pokeFlag?: number
        chainCount?: number
      }
      // 超级表情固定 ''
      // 黄豆固定 null
      resultId: string | null
      // 超级表情固定 0
      // 黄豆固定 null
      chainCount: number | null
    }
  }
  reply: {
    type: 'reply'
    data: {
      id: string
    }
  }
  video: {
    type: 'video'
    data: {
      file: string
      url: string
      file_size: string
    }
  }
  record: {
    type: 'record'
    data: {
      file: string
      file_size: string
    }
  }
  forward: {
    type: 'forward'
    data: {
      id: string
      content?: Receive[keyof Receive][]
    }
  }
  json: {
    type: 'json'
    data: {
      data: string
    }
  }
  markdown: {
    type: 'markdown'
    data: {
      content: string
    }
  }
}

// 泛型基类，包含通用的 type 和 data 字段
interface BaseSegment<T extends string, D> {
  type: T
  data: D
}

// 各种具体消息类型，继承自 BaseSegment
export interface TextSegment extends BaseSegment<'text', { text: string }> { }

export interface AtSegment extends BaseSegment<'at', { qq: string | 'all' }> { }

export interface ReplySegment extends BaseSegment<'reply', { id: string }> { }

export interface FaceSegment extends BaseSegment<'face', { id: string }> { }

export interface MFaceSegment extends BaseSegment<
  'mface',
  {
    emoji_id: string
    emoji_package_id: string
    key: string
    summary?: string
  }
> { }

export interface ImageSegment extends BaseSegment<
  'image',
  {
    file: string
    summary?: string
    sub_type?: string
  }
> { }

export interface FileSegment extends BaseSegment<'file', { file: string; name?: string }> { }

export interface VideoSegment extends BaseSegment<
  'video',
  { file: string; name?: string; thumb?: string }
> { }

export interface RecordSegment extends BaseSegment<'record', { file: string }> { }

export interface JsonSegment extends BaseSegment<'json', { data: string }> { }

export interface DiceSegment extends BaseSegment<'dice', Record<string, never>> { }

export interface RPSSegment extends BaseSegment<'rps', Record<string, never>> { }

export interface MarkdownSegment extends BaseSegment<'markdown', { content: string }> { }

export interface CloudMusicSegment extends BaseSegment<
  'music',
  { type: 'qq' | '163' | 'kugou' | 'kuwo' | 'migu'; id: string }
> { }

export interface MusicSegmentCustom extends BaseSegment<
  'music',
  {
    type: 'qq' | '163' | 'kugou' | 'kuwo' | 'migu' | 'custom'
    url: string
    image: string
    audio?: string
    title?: string
    singer?: string
  }
> { }

export type MusicSegment = CloudMusicSegment | MusicSegmentCustom

export interface NodeSegment extends BaseSegment<
  'node',
  ({ content: SendMessageSegment[] } | { id: string }) & {
    user_id?: string
    nickname?: string
    source?: string
    news?: { text: string }[]
    summary?: string
    prompt?: string
    time?: string
  }
> { }

export interface ForwardSegment extends BaseSegment<'forward', { id: string }> { }

export interface ContactSegment extends BaseSegment<
  'contact',
  { type: 'qq' | 'group'; id: string }
> { }

// 联合类型
export type SendMessageSegment =
  | TextSegment
  | AtSegment
  | ReplySegment
  | FaceSegment
  | MFaceSegment
  | ImageSegment
  | FileSegment
  | VideoSegment
  | RecordSegment
  | JsonSegment
  | DiceSegment
  | RPSSegment
  | MarkdownSegment
  | MusicSegment
  | NodeSegment
  | ForwardSegment
  | ContactSegment


