import { NodeSegment, Receive, SendMessageSegment } from '../Structs.js'

// 心跳包
export interface HeartBeat {
    time: number
    self_id: number
    post_type: 'meta_event'
    meta_event_type: 'heartbeat'
    status: {
        online: boolean | undefined
        good: boolean
    }
    // 到下次的间隔
    interval: number
}

// 生命周期
export interface LifeCycleEnable {
    time: number
    self_id: number
    post_type: 'meta_event'
    meta_event_type: 'lifecycle'
    sub_type: 'enable'
}

export interface LifeCycleDisable {
    time: number
    self_id: number
    post_type: 'meta_event'
    meta_event_type: 'lifecycle'
    sub_type: 'disable'
}

export interface LifeCycleConnect {
    time: number
    self_id: number
    post_type: 'meta_event'
    meta_event_type: 'lifecycle'
    sub_type: 'connect'
}

export interface MetaEventHandler {
    'meta_event.lifecycle':
    | MetaEventHandler['meta_event.lifecycle.enable']
    | MetaEventHandler['meta_event.lifecycle.disable']
    | MetaEventHandler['meta_event.lifecycle.connect']
    'meta_event.lifecycle.enable': LifeCycleEnable
    'meta_event.lifecycle.disable': LifeCycleDisable
    'meta_event.lifecycle.connect': LifeCycleConnect
    'meta_event.heartbeat': HeartBeat
    meta_event: MetaEventHandler['meta_event.lifecycle'] | MetaEventHandler['meta_event.heartbeat']
}

// =====================================================================================

export type MessageType = {
    message_format: 'array'
    message: Receive[keyof Receive][]
}

// 私聊消息
export type PrivateFriendMessage = {
    self_id: number
    user_id: number
    time: number
    message_id: number
    message_seq: number
    real_id: number
    message_type: 'private'
    sender: {
        user_id: number
        nickname: string
        card: string
    }
    raw_message: string
    font: number
    sub_type: 'friend'
    post_type: 'message'
    quick_action: (reply: SendMessageSegment[]) => Promise<null>
} & MessageType

export type PrivateGroupMessage = {
    self_id: number
    user_id: number
    time: number
    message_id: number
    message_seq: number
    real_id: number
    message_type: 'private'
    sender: {
        user_id: number
        nickname: string
        card: string
    }
    raw_message: string
    font: number
    sub_type: 'group'
    post_type: 'message'
    quick_action: (reply: SendMessageSegment[], at_sender?: boolean) => Promise<null>
} & MessageType

// 群消息
export type GroupMessage = {
    self_id: number
    user_id: number
    time: number
    message_id: number
    message_seq: number
    real_id: number
    message_type: 'group'
    sender: {
        user_id: number
        nickname: string
        card: string
        role?: 'owner' | 'admin' | 'member'
    }
    raw_message: string
    font: number
    sub_type: 'normal'
    post_type: 'message'
    group_id: number
    quick_action: (reply: SendMessageSegment[], at_sender?: boolean) => Promise<null>
} & MessageType

export interface MessageHandler {
    'message.private':
    | MessageHandler['message.private.friend']
    | MessageHandler['message.private.group']
    'message.private.friend': PrivateFriendMessage
    'message.private.group': PrivateGroupMessage
    'message.group': MessageHandler['message.group.normal']
    'message.group.normal': GroupMessage
    message: MessageHandler['message.private'] | MessageHandler['message.group']
}

// =====================================================================================

export type PrivateFriendMessageSelf = {
    self_id: number
    user_id: number
    time: number
    message_id: number
    message_seq: number
    real_id: number
    message_type: 'private'
    sender: {
        user_id: number
        nickname: string
        card: string
    }
    raw_message: string
    font: number
    sub_type: 'friend'
    post_type: 'message_sent'
} & MessageType

export type PrivateGroupMessageSelf = {
    self_id: number
    user_id: number
    time: number
    message_id: number
    message_seq: number
    real_id: number
    message_type: 'private'
    sender: {
        user_id: number
        nickname: string
        card: string
    }
    raw_message: string
    font: number
    sub_type: 'group'
    post_type: 'message_sent'
} & MessageType

export type GroupMessageSelf = {
    self_id: number
    user_id: number
    time: number
    message_id: number
    message_seq: number
    real_id: number
    message_type: 'group'
    sender: {
        user_id: number
        nickname: string
        card: string
        role?: 'owner' | 'admin' | 'member'
    }
    raw_message: string
    font: number
    sub_type: 'normal'
    post_type: 'message_sent'
    group_id: number
} & MessageType

export interface MessageSentHandler {
    'message_sent.private':
    | MessageSentHandler['message_sent.private.friend']
    | MessageSentHandler['message_sent.private.group']
    'message_sent.private.friend': PrivateFriendMessageSelf
    'message_sent.private.group': PrivateGroupMessageSelf
    'message_sent.group': MessageSentHandler['message_sent.group.normal']
    'message_sent.group.normal': GroupMessageSelf
    message_sent:
    | MessageSentHandler['message_sent.private']
    | MessageSentHandler['message_sent.group']
}

// =====================================================================================

// 加好友请求
export interface RequestFriend {
    time: number
    self_id: number
    post_type: 'request'
    request_type: 'friend'
    user_id: number
    comment: string
    flag: string
    quick_action: (approve?: boolean) => Promise<null>
}

// 加群请求／邀请
export interface RequestGroupAdd {
    time: number
    self_id: number
    post_type: 'request'
    group_id: number
    user_id: number
    request_type: 'group'
    comment: string
    flag: string
    sub_type: 'add'
    quick_action: (approve?: boolean, reason?: string) => Promise<null>
}

export interface RequestGroupInvite {
    time: number
    self_id: number
    post_type: 'request'
    group_id: number
    user_id: number
    request_type: 'group'
    comment: string
    flag: string
    sub_type: 'invite'
    quick_action: (approve?: boolean, reason?: string) => Promise<null>
}

export interface RequestHandler {
    'request.friend': RequestFriend
    'request.group': RequestHandler['request.group.invite'] | RequestHandler['request.group.add']
    'request.group.invite': RequestGroupInvite
    'request.group.add': RequestGroupAdd
    request: RequestHandler['request.friend'] | RequestHandler['request.group']
}

// =====================================================================================

export interface BotOffline {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'bot_offline'
    user_id: number
    tag: string
    message: string
}

export interface FriendAdd {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'friend_add'
    user_id: number
}

export interface FriendRecall {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'friend_recall'
    user_id: number
    message_id: number
}

export interface GroupAdminSet {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_admin'
    sub_type: 'set'
}

export interface GroupAdminUnset {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_admin'
    sub_type: 'unset'
}

export interface GroupBanBan {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_ban'
    operator_id: number
    duration: number
    sub_type: 'ban'
}

export interface GroupBanLiftBan {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_ban'
    operator_id: number
    duration: number
    sub_type: 'lift_ban'
}

export interface GroupCard {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_card'
    card_new: string
    card_old: string
}

export interface GroupDecreaseLeave {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_decrease'
    sub_type: 'leave'
    operator_id: number
}

export interface GroupDecreaseKick {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_decrease'
    sub_type: 'kick'
    operator_id: number
}

export interface GroupDecreaseKickMe {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_decrease'
    sub_type: 'kick_me'
    operator_id: number
}

export interface GroupEssenceAdd {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'essence'
    message_id: number
    sender_id: number
    sub_type: 'add'
}

export interface GroupEssenceDelete {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'essence'
    message_id: number
    sender_id: number
    sub_type: 'delete'
}

export interface GroupIncreaseApprove {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'group_increase'
    sub_type: 'approve'
    group_id: number
    operator_id: number
    user_id: number
}

export interface GroupIncreaseInvite {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'group_increase'
    sub_type: 'invite'
    group_id: number
    operator_id: number
    user_id: number
}

export interface NotifyGroupName {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'notify'
    sub_type: 'group_name'
    name_new: string
}

export interface GroupRecall {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_recall'
    operator_id: number
    message_id: number
}

export interface NotifyTitle {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'notify'
    sub_type: 'title'
    title: string
}

export interface GroupUpload {
    time: number
    self_id: number
    post_type: 'notice'
    group_id: number
    user_id: number
    notice_type: 'group_upload'
    file: {
        id: string
        name: string
        size: number
        busid: number
    }
}

export interface NotifyInputStatusGroup {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'notify'
    sub_type: 'input_status'
    status_text: string
    event_type: number
    user_id: number
    group_id: number
}

export interface NotifyInputStatusFriend {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'notify'
    sub_type: 'input_status'
    status_text: string
    event_type: number
    user_id: number
    group_id: 0
}

export interface GroupMsgEmojiLike {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'group_msg_emoji_like'
    group_id: number
    user_id: number
    message_id: number
    likes: { emoji_id: string; count: number }[]
}

export interface NotifyPokeFriend {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'notify'
    sub_type: 'poke'
    target_id: number
    user_id: number
    raw_info: [
        { col: string; nm: string; type: 'qq'; uid: string },
        { col: string; nm: string; tp: string; type: 'qq'; uid: string },
    ]
}

export interface NotifyPokeGroup {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'notify'
    sub_type: 'poke'
    target_id: number
    user_id: number
    group_id: number
    raw_info: [
        { col: string; nm: string; type: 'qq'; uid: string },
        { jp: string; src: string; type: 'img' },
        { txt: string; type: 'nor' },
        { col: string; nm: string; tp: string; type: 'qq'; uid: string },
        { txt: string; type: 'nor' },
    ]
}

export interface NotifyProfileLike {
    time: number
    self_id: number
    post_type: 'notice'
    notice_type: 'notify'
    sub_type: 'profile_like'
    operator_id: number
    operator_nick: string
}

export interface NoticeHandler {
    'notice.bot_offline': BotOffline
    'notice.friend_add': FriendAdd
    'notice.friend_recall': FriendRecall
    'notice.group_admin':
    | NoticeHandler['notice.group_admin.set']
    | NoticeHandler['notice.group_admin.unset']
    'notice.group_admin.set': GroupAdminSet
    'notice.group_admin.unset': GroupAdminUnset
    'notice.group_ban':
    | NoticeHandler['notice.group_ban.ban']
    | NoticeHandler['notice.group_ban.lift_ban']
    'notice.group_ban.ban': GroupBanBan
    'notice.group_ban.lift_ban': GroupBanLiftBan
    'notice.group_card': GroupCard
    'notice.group_decrease':
    | NoticeHandler['notice.group_decrease.leave']
    | NoticeHandler['notice.group_decrease.kick']
    | NoticeHandler['notice.group_decrease.kick_me']
    'notice.group_decrease.leave': GroupDecreaseLeave
    'notice.group_decrease.kick': GroupDecreaseKick
    'notice.group_decrease.kick_me': GroupDecreaseKickMe
    'notice.essence': NoticeHandler['notice.essence.add'] | NoticeHandler['notice.essence.delete']
    'notice.essence.add': GroupEssenceAdd
    'notice.essence.delete': GroupEssenceDelete
    'notice.group_increase':
    | NoticeHandler['notice.group_increase.approve']
    | NoticeHandler['notice.group_increase.invite']
    'notice.group_increase.approve': GroupIncreaseApprove
    'notice.group_increase.invite': GroupIncreaseInvite
    'notice.notify':
    | NoticeHandler['notice.notify.group_name']
    | NoticeHandler['notice.notify.title']
    | NoticeHandler['notice.notify.input_status.group']
    | NoticeHandler['notice.notify.input_status.friend']
    | NoticeHandler['notice.notify.poke.friend']
    | NoticeHandler['notice.notify.poke.group']
    | NoticeHandler['notice.notify.profile_like']
    'notice.notify.group_name': NotifyGroupName
    'notice.notify.title': NotifyTitle
    'notice.notify.input_status':
    | NoticeHandler['notice.notify.input_status.group']
    | NoticeHandler['notice.notify.input_status.friend']
    'notice.notify.input_status.group': NotifyInputStatusGroup
    'notice.notify.input_status.friend': NotifyInputStatusFriend
    'notice.notify.poke':
    | NoticeHandler['notice.notify.poke.friend']
    | NoticeHandler['notice.notify.poke.group']
    'notice.notify.poke.friend': NotifyPokeFriend
    'notice.notify.poke.group': NotifyPokeGroup
    'notice.notify.profile_like': NotifyProfileLike
    'notice.group_recall': GroupRecall
    'notice.group_upload': GroupUpload
    'notice.group_msg_emoji_like': GroupMsgEmojiLike
    notice:
    | NoticeHandler['notice.bot_offline']
    | NoticeHandler['notice.friend_add']
    | NoticeHandler['notice.friend_recall']
    | NoticeHandler['notice.group_admin']
    | NoticeHandler['notice.group_ban']
    | NoticeHandler['notice.group_card']
    | NoticeHandler['notice.group_decrease']
    | NoticeHandler['notice.essence']
    | NoticeHandler['notice.group_increase']
    | NoticeHandler['notice.notify']
    | NoticeHandler['notice.group_recall']
    | NoticeHandler['notice.group_upload']
    | NoticeHandler['notice.group_msg_emoji_like']
}
