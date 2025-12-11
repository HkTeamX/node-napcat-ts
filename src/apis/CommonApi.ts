import { NCWebsocketBase } from '../NCWebsocketBase.js'
import { WSSendParam } from '../Interfaces.js'

export function CommonApi<TBase extends new (...args: any[]) => NCWebsocketBase>(Base: TBase) {
    return class extends Base {
        send_msg(params: WSSendParam['send_msg']) {
            return this.send('send_msg', params)
        }

        delete_msg(params: WSSendParam['delete_msg']) {
            return this.send('delete_msg', params)
        }

        get_msg(params: WSSendParam['get_msg']) {
            return this.send('get_msg', params)
        }

        get_forward_msg(params: WSSendParam['get_forward_msg']) {
            return this.send('get_forward_msg', params)
        }

        get_cookies(params: WSSendParam['get_cookies']) {
            return this.send('get_cookies', params)
        }

        get_csrf_token() {
            return this.send('get_csrf_token', {})
        }

        get_credentials() {
            return this.send('get_credentials', {})
        }

        get_record(params: WSSendParam['get_record']) {
            return this.send('get_record', params)
        }

        get_image(params: WSSendParam['get_image']) {
            return this.send('get_image', params)
        }

        can_send_image() {
            return this.send('can_send_image', {})
        }

        can_send_record() {
            return this.send('can_send_record', {})
        }

        get_status() {
            return this.send('get_status', {})
        }

        get_version_info() {
            return this.send('get_version_info', {})
        }

        clean_cache() {
            return this.send('clean_cache', {})
        }

        bot_exit() {
            return this.send('bot_exit', {})
        }

        _get_model_show(params: WSSendParam['_get_model_show']) {
            return this.send('_get_model_show', params)
        }

        mark_msg_as_read(params: WSSendParam['mark_msg_as_read']) {
            return this.send('mark_msg_as_read', params)
        }

        ocr_image(params: WSSendParam['ocr_image']) {
            return this.send('ocr_image', params)
        }

        download_file(params: WSSendParam['download_file']) {
            return this.send('download_file', params)
        }

        '.handle_quick_operation'(params: WSSendParam['.handle_quick_operation']) {
            return this.send('.handle_quick_operation', params)
        }

        ArkSharePeer(params: WSSendParam['ArkSharePeer']) {
            return this.send('ArkSharePeer', params)
        }

        get_robot_uin_range() {
            return this.send('get_robot_uin_range', {})
        }

        get_file(params: WSSendParam['get_file']) {
            return this.send('get_file', params)
        }

        translate_en2zh(params: WSSendParam['translate_en2zh']) {
            return this.send('translate_en2zh', params)
        }

        set_msg_emoji_like(params: WSSendParam['set_msg_emoji_like']) {
            return this.send('set_msg_emoji_like', params)
        }

        send_forward_msg(params: WSSendParam['send_forward_msg']) {
            return this.send('send_forward_msg', params)
        }

        create_collection(params: WSSendParam['create_collection']) {
            return this.send('create_collection', params)
        }

        get_collection_list(params: WSSendParam['get_collection_list']) {
            return this.send('get_collection_list', params)
        }

        get_recent_contact(params?: WSSendParam['get_recent_contact']) {
            return this.send('get_recent_contact', params ?? {})
        }

        _mark_all_as_read() {
            return this.send('_mark_all_as_read', {})
        }
    }
}
