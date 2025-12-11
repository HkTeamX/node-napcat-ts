import { NCWebsocketBase } from '../NCWebsocketBase.js'
import { WSSendParam } from '../Interfaces.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function GroupApi<TBase extends new (...args: any[]) => NCWebsocketBase>(Base: TBase) {
  return class extends Base {
    send_group_msg(params: WSSendParam['send_group_msg']) {
      return this.send('send_group_msg', params)
    }

    set_group_kick(params: WSSendParam['set_group_kick']) {
      return this.send('set_group_kick', params)
    }

    set_group_ban(params: WSSendParam['set_group_ban']) {
      return this.send('set_group_ban', params)
    }

    set_group_whole_ban(params: WSSendParam['set_group_whole_ban']) {
      return this.send('set_group_whole_ban', params)
    }

    set_group_admin(params: WSSendParam['set_group_admin']) {
      return this.send('set_group_admin', params)
    }

    set_group_card(params: WSSendParam['set_group_card']) {
      return this.send('set_group_card', params)
    }

    set_group_name(params: WSSendParam['set_group_name']) {
      return this.send('set_group_name', params)
    }

    set_group_leave(params: WSSendParam['set_group_leave']) {
      return this.send('set_group_leave', params)
    }

    set_group_special_title(params: WSSendParam['set_group_special_title']) {
      return this.send('set_group_special_title', params)
    }

    set_group_add_request(params: WSSendParam['set_group_add_request']) {
      return this.send('set_group_add_request', params)
    }

    get_group_info(params: WSSendParam['get_group_info']) {
      return this.send('get_group_info', params)
    }

    get_group_list(params?: WSSendParam['get_group_list']) {
      return this.send('get_group_list', params ?? {})
    }

    get_group_member_info(params: WSSendParam['get_group_member_info']) {
      return this.send('get_group_member_info', params)
    }

    get_group_member_list(params: WSSendParam['get_group_member_list']) {
      return this.send('get_group_member_list', params)
    }

    get_group_honor_info(params: WSSendParam['get_group_honor_info']) {
      return this.send('get_group_honor_info', params)
    }

    send_group_forward_msg(params: WSSendParam['send_group_forward_msg']) {
      return this.send('send_group_forward_msg', params)
    }

    get_group_msg_history(params: WSSendParam['get_group_msg_history']) {
      return this.send('get_group_msg_history', params)
    }

    get_group_system_msg(params?: WSSendParam['get_group_system_msg']) {
      return this.send('get_group_system_msg', params ?? {})
    }

    get_essence_msg_list(params: WSSendParam['get_essence_msg_list']) {
      return this.send('get_essence_msg_list', params)
    }

    get_group_at_all_remain(params: WSSendParam['get_group_at_all_remain']) {
      return this.send('get_group_at_all_remain', params)
    }

    set_group_portrait(params: WSSendParam['set_group_portrait']) {
      return this.send('set_group_portrait', params)
    }

    set_essence_msg(params: WSSendParam['set_essence_msg']) {
      return this.send('set_essence_msg', params)
    }

    delete_essence_msg(params: WSSendParam['delete_essence_msg']) {
      return this.send('delete_essence_msg', params)
    }

    _send_group_notice(params: WSSendParam['_send_group_notice']) {
      return this.send('_send_group_notice', params)
    }

    _get_group_notice(params: WSSendParam['_get_group_notice']) {
      return this.send('_get_group_notice', params)
    }

    upload_group_file(params: WSSendParam['upload_group_file']) {
      return this.send('upload_group_file', params)
    }

    delete_group_file(params: WSSendParam['delete_group_file']) {
      return this.send('delete_group_file', params)
    }

    create_group_file_folder(params: WSSendParam['create_group_file_folder']) {
      return this.send('create_group_file_folder', params)
    }

    delete_group_folder(params: WSSendParam['delete_group_folder']) {
      return this.send('delete_group_folder', params)
    }

    get_group_file_system_info(params: WSSendParam['get_group_file_system_info']) {
      return this.send('get_group_file_system_info', params)
    }

    get_group_root_files(params: WSSendParam['get_group_root_files']) {
      return this.send('get_group_root_files', params)
    }

    get_group_files_by_folder(params: WSSendParam['get_group_files_by_folder']) {
      return this.send('get_group_files_by_folder', params)
    }

    get_group_file_url(params: WSSendParam['get_group_file_url']) {
      return this.send('get_group_file_url', params)
    }

    ArkShareGroup(params: WSSendParam['ArkShareGroup']) {
      return this.send('ArkShareGroup', params)
    }

    mark_group_msg_as_read(params: WSSendParam['mark_group_msg_as_read']) {
      return this.send('mark_group_msg_as_read', params)
    }
  }
}
