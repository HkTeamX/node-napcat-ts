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

export const Structs = {
  /**
   * 发送文字消息
   * @param text 要发送的文字
   * @returns { type: 'text', data: { text } }
   */
  text: function (text: string): TextSegment {
    return { type: 'text', data: { text } }
  },
  /**
   * @某人
   * @param qq at的QQ号
   * @returns { type: 'at', data: { qq } }
   */
  at: function (qq: string | 'all' | number): AtSegment {
    return { type: 'at', data: { qq: qq.toString() } }
  },
  /**
   * 回复消息
   * @param id 回复的消息id
   * @returns { type: 'reply', data: { id } }
   */
  reply: function (id: string | number): ReplySegment {
    return { type: 'reply', data: { id: id.toString() } }
  },
  /**
   * 发送QQ表情
   * @param id QQ 表情 ID
   * @returns { type: 'face', data: { id, resultId, chainCount } }
   */
  face: function (id: string | number): FaceSegment {
    return { type: 'face', data: { id: id.toString() } }
  },
  /**
   * 发送QQ表情包
   * @param emoji_id 表情id
   * @param emoji_package_id 表情包id
   * @param key 未知(必要)
   * @param summary 表情简介,可选
   * @returns { type: 'mface', data: { summary, emoji_id, emoji_package_id, key } }
   */
  mface: function (
    emoji_id: string | number,
    emoji_package_id: string | number,
    key: string,
    summary?: string,
  ): MFaceSegment {
    return {
      type: 'mface',
      data: {
        summary,
        emoji_id: emoji_id.toString(),
        emoji_package_id: emoji_package_id.toString(),
        key,
      },
    }
  },
  /**
   * 发送图片
   * @param file 网络图片地址, 文件路径或者Buffer
   * @param name 图片名
   * @param summary 图片简介
   * @param sub_type 图片类型
   * @returns { type: 'image', data: { file, summary, sub_type } }
   */
  image: function (
    file: string | Buffer,
    summary?: string,
    sub_type?: string | number,
  ): ImageSegment {
    return {
      type: 'image',
      data: {
        file: Buffer.isBuffer(file) ? `base64://${file.toString('base64')}` : file,
        summary,
        sub_type: sub_type?.toString(),
      },
    }
  },
  /**
   * 发文件
   * @param file 网络文件地址, 文件路径或者Buffer
   * @param name 文件名
   * @returns { type: 'file', data: { file, name } }
   */
  file: function (file: string | Buffer, name?: string): FileSegment {
    return {
      type: 'file',
      data: {
        file: Buffer.isBuffer(file) ? `base64://${file.toString('base64')}` : file,
        name,
      },
    }
  },
  /**
   * 发视频
   * @param file 网络视频地址, 文件路径或者Buffer
   * @param name 视频名
   * @param thumb 预览图
   * @returns { type: 'video', data: { file, name, thumb } }
   */
  video: function (file: string | Buffer, name?: string, thumb?: string): VideoSegment {
    return {
      type: 'video',
      data: {
        file: Buffer.isBuffer(file) ? `base64://${file.toString('base64')}` : file,
        name,
        thumb,
      },
    }
  },
  /**
   * 发语音
   * @param file 网络语音地址, 文件路径或者Buffer
   * @param name 语音备注
   * @returns { type: 'record', data: { file, name } }
   */
  record: function (file: string | Buffer): RecordSegment {
    return {
      type: 'record',
      data: {
        file: Buffer.isBuffer(file) ? `base64://${file.toString('base64')}` : file,
      },
    }
  },
  /**
   * 发送json消息
   * @param data json信息(序列化后)
   * @returns { type: 'json', data: { data } }
   */
  json: function (data: string): JsonSegment {
    return { type: 'json', data: { data } }
  },
  /**
   * 发送骰子魔法表情
   * @returns { type: 'dice', data: {} }
   */
  dice: function (): DiceSegment {
    return { type: 'dice', data: {} }
  },
  /**
   * 发送猜拳魔法
   * @returns { type: 'rps', data: {} }
   */
  rps: function (): RPSSegment {
    return { type: 'rps', data: {} }
  },
  /**
   * 发送markdown
   * @param data markdown内容
   * @returns { type: 'markdown', data: {} }
   */
  markdown: function (content: string): MarkdownSegment {
    return { type: 'markdown', data: { content } }
  },
  /**
   * 音乐分享
   * @param type QQ音乐或网易云音乐QQ音乐
   * @param id 音乐id
   * @returns { type: 'music', data: { type, id } }
   */
  music: function (
    type: 'qq' | '163' | 'kugou' | 'migu' | 'kuwo',
    id: string | number,
  ): CloudMusicSegment {
    return { type: 'music', data: { type, id: id.toString() } }
  },
  /**
   * 分享非qq、网易云音乐 需要配置签名服务器
   * @param url 点击后跳转目标 URL
   * @param audio 音乐 URL
   * @param title 标题
   * @param image 发送时可选，内容描述
   * @param singer 发送时可选，图片 URL
   * @returns { type: 'music', data: { type: 'custom', url, audio, title, image, singer } }
   */
  customMusic: function (
    type: 'qq' | '163' | 'kugou' | 'migu' | 'kuwo' | 'custom',
    url: string,
    image: string,
    audio?: string,
    title?: string,
    singer?: string,
  ): MusicSegmentCustom {
    return { type: 'music', data: { type, url, audio, title, image, singer } }
  },
  /**
   * 转发消息节点
   * @param id 消息id
   * @param user_id 消息id
   * @param nickname 消息id
   * @param source 消息id
   * @param id 消息id
   * @param id 消息id
   * @returns { type: 'node', data: { id } }
   */
  node: function (
    id: string | number,
    user_id?: number | string,
    nickname?: string,
    source?: string,
    news?: { text: string }[],
    summary?: string,
    prompt?: string,
    time?: string | number,
  ): NodeSegment {
    return {
      type: 'node',
      data: {
        id: id.toString(),
        user_id: user_id?.toString(),
        nickname,
        source,
        news,
        summary,
        prompt,
        time: time?.toString(),
      },
    }
  },
  /**
   * 自定义转发消息节点
   * @param content 消息内容
   * @returns { type: 'node', data: { content } }
   */
  customNode: function (
    content: SendMessageSegment[],
    user_id?: number | string,
    nickname?: string,
    source?: string,
    news?: { text: string }[],
    summary?: string,
    prompt?: string,
    time?: string | number,
  ): NodeSegment {
    return {
      type: 'node',
      data: {
        content,
        user_id: user_id?.toString(),
        nickname,
        source,
        news,
        summary,
        prompt,
        time: time?.toString(),
      },
    }
  },
  /**
   * 转发消息
   * @param message_id 消息id
   * @return { type: 'forward', data: { id }}
   */
  forward: function (message_id: number): ForwardSegment {
    return { type: 'forward', data: { id: message_id.toString() } }
  },
  /**
   * 发送名片
   * @param type 名片类型
   * @param id 联系人QQ号
   * @returns { type: 'contact', data: { id } }
   */
  contact: function (type: 'qq' | 'group', id: number | string): ContactSegment {
    return { type: 'contact', data: { type, id: id.toString() } }
  },
}
