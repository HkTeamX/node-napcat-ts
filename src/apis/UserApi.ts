import { NCWebsocketBase } from '../NCWebsocketBase.js'
import { WSSendParam } from '../Interfaces.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function UserApi<TBase extends new (...args: any[]) => NCWebsocketBase>(Base: TBase) {
  return class extends Base {
    send_private_msg(params: WSSendParam['send_private_msg']) {
      return this.send('send_private_msg', params)
    }

    send_like(params: WSSendParam['send_like']) {
      return this.send('send_like', params)
    }

    set_friend_add_request(params: WSSendParam['set_friend_add_request']) {
      return this.send('set_friend_add_request', params)
    }

    set_friend_remark(params: WSSendParam['set_friend_remark']) {
      return this.send('set_friend_remark', params)
    }

    get_login_info() {
      return this.send('get_login_info', {})
    }

    get_stranger_info(params: WSSendParam['get_stranger_info']) {
      return this.send('get_stranger_info', params)
    }

    get_friend_list() {
      return this.send('get_friend_list', {})
    }

    set_qq_profile(params: WSSendParam['set_qq_profile']) {
      return this.send('set_qq_profile', params)
    }

    get_unidirectional_friend_list() {
      return this.send('get_unidirectional_friend_list', {})
    }

    delete_friend(params: WSSendParam['delete_friend']) {
      return this.send('delete_friend', params)
    }

    send_private_forward_msg(params: WSSendParam['send_private_forward_msg']) {
      return this.send('send_private_forward_msg', params)
    }

    upload_private_file(params: WSSendParam['upload_private_file']) {
      return this.send('upload_private_file', params)
    }

    set_diy_online_status(params: WSSendParam['set_diy_online_status']) {
      return this.send('set_diy_online_status', params)
    }

    set_online_status(params: WSSendParam['set_online_status']) {
      return this.send('set_online_status', params)
    }

    get_friends_with_category() {
      return this.send('get_friends_with_category', {})
    }

    set_qq_avatar(params: WSSendParam['set_qq_avatar']) {
      return this.send('set_qq_avatar', params)
    }

    forward_friend_single_msg(params: WSSendParam['forward_friend_single_msg']) {
      return this.send('forward_friend_single_msg', params)
    }

    mark_private_msg_as_read(params: WSSendParam['mark_private_msg_as_read']) {
      return this.send('mark_private_msg_as_read', params)
    }

    get_friend_msg_history(params: WSSendParam['get_friend_msg_history']) {
      return this.send('get_friend_msg_history', params)
    }

    get_profile_like() {
      return this.send('get_profile_like', {})
    }

    set_self_longnick(params: WSSendParam['set_self_longnick']) {
      return this.send('set_self_longnick', params)
    }
  }
}
