import type { WSSendParam } from './Interfaces.js'
import { NCWebsocketBase } from './NCWebsocketBase.js'

export class NCWebsocket extends NCWebsocketBase {
  /**
   * @onebot11
   * 发送私聊消息
   */
  send_private_msg(params: WSSendParam['send_private_msg']) {
    return this.send('send_private_msg', params)
  }

  /**
   * @onebot11
   * 发送群聊信息
   */
  send_group_msg(params: WSSendParam['send_group_msg']) {
    return this.send('send_group_msg', params)
  }

  /**
   * @onebot11
   * 发送信息
   */
  send_msg(params: WSSendParam['send_msg']) {
    return this.send('send_msg', params)
  }

  /**
   * @onebot11
   * 撤回信息
   */
  delete_msg(params: WSSendParam['delete_msg']) {
    return this.send('delete_msg', params)
  }

  /**
   * @onebot11
   * 获取信息
   */
  get_msg(params: WSSendParam['get_msg']) {
    return this.send('get_msg', params)
  }

  /**
   * @onebot11
   * 获取合并转发信息
   */
  get_forward_msg(params: WSSendParam['get_forward_msg']) {
    return this.send('get_forward_msg', params)
  }

  /**
   * @onebot11
   * 点赞
   */
  send_like(params: WSSendParam['send_like']) {
    return this.send('send_like', params)
  }

  /**
   * @onebot11
   * 群组踢人
   */
  set_group_kick(params: WSSendParam['set_group_kick']) {
    return this.send('set_group_kick', params)
  }

  /**
   * @onebot11
   * 群组禁言
   */
  set_group_ban(params: WSSendParam['set_group_ban']) {
    return this.send('set_group_ban', params)
  }

  /**
   * @onebot11
   * 群组匿名用户禁言
   */
  // set_group_anonymous_ban(params: WSSendParam['set_group_anonymous_ban']) {
  //   return this.send('set_group_anonymous_ban', params)
  // }

  /**
   * @onebot11
   * 群组全员禁言
   */
  set_group_whole_ban(params: WSSendParam['set_group_whole_ban']) {
    return this.send('set_group_whole_ban', params)
  }

  /**
   * @onebot11
   * 群组设置管理员
   */
  set_group_admin(params: WSSendParam['set_group_admin']) {
    return this.send('set_group_admin', params)
  }

  /**
   * @onebot11
   * 群组匿名
   */
  // set_group_anonymous(params: WSSendParam['set_group_anonymous']) {
  //   return this.send('set_group_anonymous', params)
  // }

  /**
   * @onebot11
   * 设置群名片
   */
  set_group_card(params: WSSendParam['set_group_card']) {
    return this.send('set_group_card', params)
  }

  /**
   * @onebot11
   * 设置群名
   */
  set_group_name(params: WSSendParam['set_group_name']) {
    return this.send('set_group_name', params)
  }

  /**
   * @onebot11
   * 退出群组
   */
  set_group_leave(params: WSSendParam['set_group_leave']) {
    return this.send('set_group_leave', params)
  }

  /**
   * @onebot11
   * 设置群聊特殊头衔
   */
  set_group_special_title(params: WSSendParam['set_group_special_title']) {
    return this.send('set_group_special_title', params)
  }

  /**
   * @onebot11
   * 设置好友添加请求
   */
  set_friend_add_request(params: WSSendParam['set_friend_add_request']) {
    return this.send('set_friend_add_request', params)
  }

  /**
   * @onebot11
   * 设置好友备注
   */
  set_friend_remark(params: WSSendParam['set_friend_remark']) {
    return this.send('set_friend_remark', params)
  }

  /**
   * @onebot11
   * 设置群组添加请求
   */
  set_group_add_request(params: WSSendParam['set_group_add_request']) {
    return this.send('set_group_add_request', params)
  }

  /**
   * @onebot11
   * 获取登录号信息
   */
  get_login_info() {
    return this.send('get_login_info', {})
  }

  /**
   * @onebot11
   * 获取非好友信息
   */
  get_stranger_info(params: WSSendParam['get_stranger_info']) {
    return this.send('get_stranger_info', params)
  }

  /**
   * @onebot11
   * 获取好友列表
   */
  get_friend_list() {
    return this.send('get_friend_list', {})
  }

  /**
   * @onebot11
   * 获取群信息
   */
  get_group_info(params: WSSendParam['get_group_info']) {
    return this.send('get_group_info', params)
  }

  /**
   * @onebot11
   * 获取群列表
   */
  get_group_list(params?: WSSendParam['get_group_list']) {
    return this.send('get_group_list', params ?? {})
  }

  /**
   * @onebot11
   * 获取群成员信息
   */
  get_group_member_info(params: WSSendParam['get_group_member_info']) {
    return this.send('get_group_member_info', params)
  }

  /**
   * @onebot11
   * 获取群成员列表
   */
  get_group_member_list(params: WSSendParam['get_group_member_list']) {
    return this.send('get_group_member_list', params)
  }

  /**
   * @onebot11
   * 获取群荣誉信息
   */
  get_group_honor_info(params: WSSendParam['get_group_honor_info']) {
    return this.send('get_group_honor_info', params)
  }

  /**
   * @onebot11
   * 获取Cookies
   */
  get_cookies(params: WSSendParam['get_cookies']) {
    return this.send('get_cookies', params)
  }

  /**
   * @onebot11
   * 获取CsrfToken
   */
  get_csrf_token() {
    return this.send('get_csrf_token', {})
  }

  /**
   * @onebot11
   * 获取Credentials
   */
  get_credentials() {
    return this.send('get_credentials', {})
  }

  /**
   * @onebot11
   * 获取语音
   */
  get_record(params: WSSendParam['get_record']) {
    return this.send('get_record', params)
  }

  /**
   * @onebot11
   * 获取图片
   */
  get_image(params: WSSendParam['get_image']) {
    return this.send('get_image', params)
  }

  /**
   * @onebot11
   * 能否发送图片
   */
  can_send_image() {
    return this.send('can_send_image', {})
  }

  /**
   * @onebot11
   * 能否发送语音
   */
  can_send_record() {
    return this.send('can_send_record', {})
  }

  /**
   * @onebot11
   * 获取运行状态
   */
  get_status() {
    return this.send('get_status', {})
  }

  /**
   * @onebot11
   * 获取版本信息
   */
  get_version_info() {
    return this.send('get_version_info', {})
  }

  /**
   * @onebot11
   * 重启
   */
  // set_restart() {
  //   return this.send('set_restart', {})
  // }

  /**
   * @onebot11
   * 清理缓存
   */
  clean_cache() {
    return this.send('clean_cache', {})
  }

  /**
   * @onebot11
   * 退出机器人
   */
  bot_exit() {
    return this.send('bot_exit', {})
  }

  /**
   * @gocqhttp
   * 设置QQ资料
   */
  set_qq_profile(params: WSSendParam['set_qq_profile']) {
    return this.send('set_qq_profile', params)
  }

  /**
   * @gocqhttp
   * 获取企点QQ资料
   */
  // qidian_get_account_info(params: WSSendParam['qidian_get_account_info']) {
  //   return this.send('qidian_get_account_info', params)
  // }

  /**
   * @gocqhttp
   * 获取型号列表
   */
  _get_model_show(params: WSSendParam['_get_model_show']) {
    return this.send('_get_model_show', params)
  }

  /**
   * @gocqhttp
   * 设置型号
   */
  // _set_model_show(params: WSSendParam['_set_model_show']) {
  //   return this.send('_set_model_show', params)
  // }

  /**
   * @gocqhttp
   * 获取登陆的客户端
   */
  // get_online_clients() {
  //   return this.send('get_online_clients', {})
  // }

  /**
   * @gocqhttp
   * 获取单向好友列表
   */
  get_unidirectional_friend_list() {
    return this.send('get_unidirectional_friend_list', {})
  }

  /**
   * @gocqhttp
   * 删除好友
   */
  delete_friend(params: WSSendParam['delete_friend']) {
    return this.send('delete_friend', params)
  }

  /**
   * @gocqhttp
   * 删除单向好友
   */
  // delete_unidirectional_friend(params: WSSendParam['delete_unidirectional_friend']) {
  //   return this.send('delete_unidirectional_friend', params)
  // }

  /**
   * @gocqhttp
   * 标记消息已读
   */
  mark_msg_as_read(params: WSSendParam['mark_msg_as_read']) {
    return this.send('mark_msg_as_read', params)
  }

  /**
   * @gocqhttp
   * 发送群合并转发
   */
  send_group_forward_msg(params: WSSendParam['send_group_forward_msg']) {
    return this.send('send_group_forward_msg', params)
  }

  /**
   * @gocqhttp
   * 发送私聊合并转发
   */
  send_private_forward_msg(params: WSSendParam['send_private_forward_msg']) {
    return this.send('send_private_forward_msg', params)
  }

  /**
   * @gocqhttp
   * 获取群聊历史消息
   */
  get_group_msg_history(params: WSSendParam['get_group_msg_history']) {
    return this.send('get_group_msg_history', params)
  }

  /**
   * @gocqhttp
   * OCR图片
   */
  ocr_image(params: WSSendParam['ocr_image']) {
    return this.send('ocr_image', params)
  }

  /**
   * @gocqhttp
   * 获取群系统消息
   */
  get_group_system_msg(params?: WSSendParam['get_group_system_msg']) {
    return this.send('get_group_system_msg', params ?? {})
  }

  /**
   * @gocqhttp
   * 获取群精华列表
   */
  get_essence_msg_list(params: WSSendParam['get_essence_msg_list']) {
    return this.send('get_essence_msg_list', params)
  }

  /**
   * @gocqhttp
   * 获取@全体成员剩余次数
   */
  get_group_at_all_remain(params: WSSendParam['get_group_at_all_remain']) {
    return this.send('get_group_at_all_remain', params)
  }

  /**
   * @gocqhttp
   * 设置群头像
   */
  set_group_portrait(params: WSSendParam['set_group_portrait']) {
    return this.send('set_group_portrait', params)
  }

  /**
   * @gocqhttp
   * 设置精华消息
   */
  set_essence_msg(params: WSSendParam['set_essence_msg']) {
    return this.send('set_essence_msg', params)
  }

  /**
   * @gocqhttp
   * 删除精华消息
   */
  delete_essence_msg(params: WSSendParam['delete_essence_msg']) {
    return this.send('delete_essence_msg', params)
  }

  /**
   * @gocqhttp
   * 设置群公告
   */
  _send_group_notice(params: WSSendParam['_send_group_notice']) {
    return this.send('_send_group_notice', params)
  }

  /**
   * @gocqhttp
   * 获取群公告
   */
  _get_group_notice(params: WSSendParam['_get_group_notice']) {
    return this.send('_get_group_notice', params)
  }

  /**
   * @gocqhttp
   * 上传群文件
   */
  upload_group_file(params: WSSendParam['upload_group_file']) {
    return this.send('upload_group_file', params)
  }

  /**
   * @gocqhttp
   * 删除群文件
   */
  delete_group_file(params: WSSendParam['delete_group_file']) {
    return this.send('delete_group_file', params)
  }

  /**
   * @gocqhttp
   * 创建群文件文件夹
   */
  create_group_file_folder(params: WSSendParam['create_group_file_folder']) {
    return this.send('create_group_file_folder', params)
  }

  /**
   * @gocqhttp
   * 删除群文件文件夹
   */
  delete_group_folder(params: WSSendParam['delete_group_folder']) {
    return this.send('delete_group_folder', params)
  }

  /**
   * @gocqhttp
   * 获取群文件系统信息
   */
  get_group_file_system_info(params: WSSendParam['get_group_file_system_info']) {
    return this.send('get_group_file_system_info', params)
  }

  /**
   * @gocqhttp
   * 获取群文件树
   */
  get_group_root_files(params: WSSendParam['get_group_root_files']) {
    return this.send('get_group_root_files', params)
  }

  /**
   * @gocqhttp
   * 根据文件夹获取群文件
   */
  get_group_files_by_folder(params: WSSendParam['get_group_files_by_folder']) {
    return this.send('get_group_files_by_folder', params)
  }

  /**
   * @gocqhttp
   * 获取群文件链接
   */
  get_group_file_url(params: WSSendParam['get_group_file_url']) {
    return this.send('get_group_file_url', params)
  }

  /**
   * @gocqhttp
   * 发送私聊文件
   */
  upload_private_file(params: WSSendParam['upload_private_file']) {
    return this.send('upload_private_file', params)
  }

  /**
   * @gocqhttp
   * 重置事件过滤器
   */
  // reload_event_filter() {
  //   return this.send('reload_event_filter', {})
  // }

  /**
   * @gocqhttp
   * 下载文件
   */
  download_file(params: WSSendParam['download_file']) {
    return this.send('download_file', params)
  }

  /**
   * @gocqhttp
   * 检查链接安全性
   */
  // check_url_safely(params: WSSendParam['check_url_safely']) {
  //   return this.send('check_url_safely', params)
  // }

  /**
   * @gocqhttp
   * 获取中文分词
   */
  // '.get_word_slices' = (params: WSSendParam['.get_word_slices']) => {
  //   return this.send('.get_word_slices', params)
  // }

  /**
   * @gocqhttp
   * 快捷操作
   */
  '.handle_quick_operation' = (params: WSSendParam['.handle_quick_operation']) => {
    return this.send('.handle_quick_operation', params)
  }

  /**
   * @napcat
   * 留空占位符
   */
  // unknown() {
  //   return this.send('unknown', {})
  // }

  /**
   * @napcat
   * 设置自定义在线状态
   */
  set_diy_online_status(params: WSSendParam['set_diy_online_status']) {
    return this.send('set_diy_online_status', params)
  }

  /**
   * @napcat
   * 获取分享卡片JSON
   */
  ArkSharePeer(params: WSSendParam['ArkSharePeer']) {
    return this.send('ArkSharePeer', params)
  }

  /**
   * @napcat
   * 获取分享卡片JSON
   */
  ArkShareGroup(params: WSSendParam['ArkShareGroup']) {
    return this.send('ArkShareGroup', params)
  }

  /**
   * @napcat
   * 正常重启
   */
  // reboot_normal(params: WSSendParam['reboot_normal']) {
  //   return this.send('reboot_normal', params)
  // }

  /**
   * @napcat
   * 获取机器人ID范围
   */
  get_robot_uin_range() {
    return this.send('get_robot_uin_range', {})
  }

  /**
   * @napcat
   * 设置在线状态
   */
  set_online_status(params: WSSendParam['set_online_status']) {
    return this.send('set_online_status', params)
  }

  /**
   * @napcat
   * 获取分类好友列表
   */
  get_friends_with_category() {
    return this.send('get_friends_with_category', {})
  }

  /**
   * @napcat
   * 设置QQ头像
   */
  set_qq_avatar(params: WSSendParam['set_qq_avatar']) {
    return this.send('set_qq_avatar', params)
  }

  /**
   * @napcat
   * 获取文件
   */
  get_file(params: WSSendParam['get_file']) {
    return this.send('get_file', params)
  }

  /**
   * @napcat
   * 转发消息给好友
   */
  forward_friend_single_msg(params: WSSendParam['forward_friend_single_msg']) {
    return this.send('forward_friend_single_msg', params)
  }

  /**
   * @napcat
   * 转发消息给群
   */
  forward_group_single_msg(params: WSSendParam['forward_group_single_msg']) {
    return this.send('forward_group_single_msg', params)
  }

  /**
   * @napcat
   * 中英文翻译
   */
  translate_en2zh(params: WSSendParam['translate_en2zh']) {
    return this.send('translate_en2zh', params)
  }

  /**
   * @napcat
   * 设置表情回复
   */
  set_msg_emoji_like(params: WSSendParam['set_msg_emoji_like']) {
    return this.send('set_msg_emoji_like', params)
  }

  /**
   * @napcat
   * 发送合并转发
   */
  send_forward_msg(params: WSSendParam['send_forward_msg']) {
    return this.send('send_forward_msg', params)
  }

  /**
   * @napcat
   * 标记私聊已读
   */
  mark_private_msg_as_read(params: WSSendParam['mark_private_msg_as_read']) {
    return this.send('mark_private_msg_as_read', params)
  }

  /**
   * @napcat
   * 标记群聊已读
   */
  mark_group_msg_as_read(params: WSSendParam['mark_group_msg_as_read']) {
    return this.send('mark_group_msg_as_read', params)
  }

  /**
   * @napcat
   * 获取私聊历史记录
   */
  get_friend_msg_history(params: WSSendParam['get_friend_msg_history']) {
    return this.send('get_friend_msg_history', params)
  }

  /**
   * @napcat
   * 创建收藏
   */
  create_collection(params: WSSendParam['create_collection']) {
    return this.send('create_collection', params)
  }

  /**
   * @napcat
   * 获取收藏
   */
  get_collection_list(params: WSSendParam['get_collection_list']) {
    return this.send('get_collection_list', params)
  }

  /**
   * @napcat
   * 设置签名
   */
  set_self_longnick(params: WSSendParam['set_self_longnick']) {
    return this.send('set_self_longnick', params)
  }

  /**
   * @napcat
   * 获取最近联系
   */
  get_recent_contact(params?: WSSendParam['get_recent_contact']) {
    return this.send('get_recent_contact', params ?? {})
  }

  /**
   * @napcat
   * 标记所有为已读
   */
  _mark_all_as_read() {
    return this.send('_mark_all_as_read', {})
  }

  /**
   * @napcat
   * 获取个人资料
   */
  get_profile_like() {
    return this.send('get_profile_like', {})
  }

  /**
   * @napcat
   * 获取收藏表情
   */
  fetch_custom_face(params?: WSSendParam['fetch_custom_face']) {
    return this.send('fetch_custom_face', params ?? {})
  }

  /**
   * @napcat
   * 获取表情回复
   */
  fetch_emoji_like(params: WSSendParam['fetch_emoji_like']) {
    return this.send('fetch_emoji_like', params)
  }

  /**
   * @napcat
   * 设置输入状态
   */
  set_input_status(params: WSSendParam['set_input_status']) {
    return this.send('set_input_status', params)
  }

  /**
   * @napcat
   * 获取群信息扩展
   */
  get_group_info_ex(params: WSSendParam['get_group_info_ex']) {
    return this.send('get_group_info_ex', params)
  }

  /**
   * @napcat
   * 获取群详细信息
   */
  get_group_detail_info(params: WSSendParam['get_group_detail_info']) {
    return this.send('get_group_detail_info', params)
  }

  /**
   * @napcat
   * 获取群忽略添加请求
   */
  get_group_ignore_add_request(params: WSSendParam['get_group_ignore_add_request']) {
    return this.send('get_group_ignore_add_request', params)
  }

  /**
   * @napcat
   * 删除群公告
   */
  _del_group_notice(params: WSSendParam['_del_group_notice']) {
    return this.send('_del_group_notice', params)
  }

  /**
   * @napcat
   * 发送好友戳一戳
   */
  friend_poke(params: WSSendParam['friend_poke']) {
    return this.send('friend_poke', params)
  }

  /**
   * @napcat
   * 发送群戳一戳
   */
  group_poke(params: WSSendParam['group_poke']) {
    return this.send('group_poke', params)
  }

  /**
   * @napcat
   * 获取数据包状态
   */
  nc_get_packet_status() {
    return this.send('nc_get_packet_status', {})
  }

  /**
   * @napcat
   * 获取用户状态
   */
  nc_get_user_status(params: WSSendParam['nc_get_user_status']) {
    return this.send('nc_get_user_status', params)
  }

  /**
   * @napcat
   * 获取 rkey
   */
  nc_get_rkey() {
    return this.send('nc_get_rkey', {})
  }

  /**
   * @napcat
   * 获取群禁言列表
   */
  get_group_shut_list(params: WSSendParam['get_group_shut_list']) {
    return this.send('get_group_shut_list', params)
  }

  /**
   * @napcat
   * 移动群文件
   */
  move_group_file(params: WSSendParam['move_group_file']) {
    return this.send('move_group_file', params)
  }

  /**
   * @napcat
   * 转移群文件
   */
  trans_group_file(params: WSSendParam['trans_group_file']) {
    return this.send('trans_group_file', params)
  }

  /**
   * @napcat
   * 重命名群文件
   */
  rename_group_file(params: WSSendParam['rename_group_file']) {
    return this.send('rename_group_file', params)
  }

  /**
   * @napcat
   * 获取频道列表
   */
  // get_guild_list(params: WSSendParam['get_guild_list']) {
  //   return this.send('get_guild_list', params)
  // }

  /**
   * @napcat
   * 获取频道服务简介
   */
  // get_guild_service_profile(params: WSSendParam['get_guild_service_profile']) {
  //   return this.send('get_guild_service_profile', params)
  // }

  /**
   * @napcat
   * 获取群忽略通知
   */
  get_group_ignored_notifies(params: WSSendParam['get_group_ignored_notifies']) {
    return this.send('get_group_ignored_notifies', params)
  }

  /**
   * @napcat
   * 发送群签到
   */
  set_group_sign(params: WSSendParam['set_group_sign']) {
    return this.send('set_group_sign', params)
  }

  /**
   * @napcat
   * 发送数据包
   */
  send_packet(params: WSSendParam['send_packet']) {
    return this.send('send_packet', params)
  }

  /**
   * @napcat
   * 获取小程序卡片
   */
  get_mini_app_ark(params: WSSendParam['get_mini_app_ark']) {
    return this.send('get_mini_app_ark', params)
  }

  /**
   * @napcat
   * 获取 AI 语音
   */
  get_ai_record(params: WSSendParam['get_ai_record']) {
    return this.send('get_ai_record', params)
  }

  /**
   * @napcat
   * 获取 AI 角色列表
   */
  get_ai_characters(params: WSSendParam['get_ai_characters']) {
    return this.send('get_ai_characters', params)
  }

  /**
   * @napcat
   * 发送群 AI 记录
   */
  send_group_ai_record(params: WSSendParam['send_group_ai_record']) {
    return this.send('send_group_ai_record', params)
  }

  /**
   * @napcat
   * 获取客户端密钥
   */
  get_clientkey() {
    return this.send('get_clientkey', {})
  }

  /**
   * @napcat
   * 发送戳一戳
   */
  send_poke(params: WSSendParam['send_poke']) {
    return this.send('send_poke', params)
  }

  /**
   * @napcat
   * 设置群踢人
   */
  set_group_kick_members(params: WSSendParam['set_group_kick_members']) {
    return this.send('set_group_kick_members', params)
  }

  /**
   * @napcat
   * 设置群机器人添加选项
   */
  set_group_robot_add_option(params: WSSendParam['set_group_robot_add_option']) {
    return this.send('set_group_robot_add_option', params)
  }

  /**
   * @napcat
   * 设置群添加选项
   */
  set_group_add_option(params: WSSendParam['set_group_add_option']) {
    return this.send('set_group_add_option', params)
  }

  /**
   * @napcat
   * 设置群搜索选项
   */
  set_group_search(params: WSSendParam['set_group_search']) {
    return this.send('set_group_search', params)
  }

  /**
   * @napcat
   * 获取可疑好友添加请求
   */
  get_doubt_friends_add_request(params?: WSSendParam['get_doubt_friends_add_request']) {
    return this.send('get_doubt_friends_add_request', params ?? {})
  }

  /**
   * @napcat
   * 设置可疑好友添加请求
   */
  set_doubt_friends_add_request(params: WSSendParam['set_doubt_friends_add_request']) {
    return this.send('set_doubt_friends_add_request', params)
  }

  /**
   * @napcat
   * 获取 RKey
   */
  get_rkey() {
    return this.send('get_rkey', {})
  }

  /**
   * @napcat
   * 获取 RKey 服务器
   */
  get_rkey_server() {
    return this.send('get_rkey_server', {})
  }

  /**
   * @napcat
   * 设置群备注
   */
  set_group_remark(params: WSSendParam['set_group_remark']) {
    return this.send('set_group_remark', params)
  }

  /**
   * @napcat
   * 获取私聊文件链接
   */
  get_private_file_url(params: WSSendParam['get_private_file_url']) {
    return this.send('get_private_file_url', params)
  }

  /**
   * @napcat
   * 点击消息中的按钮
   */
  click_inline_keyboard_button(params: WSSendParam['click_inline_keyboard_button']) {
    return this.send('click_inline_keyboard_button', params)
  }

  /**
   * @napcat
   * 设置群待办
   */
  set_group_todo(params: WSSendParam['set_group_todo']) {
    return this.send('set_group_todo', params)
  }

  /**
   * @napcat
   * 获取群相册列表
   */
  get_qun_album_list(params: WSSendParam['get_qun_album_list']) {
    return this.send('get_qun_album_list', params)
  }

  /**
   * @napcat
   * 上传图片到群相册
   */
  upload_image_to_qun_album(params: WSSendParam['upload_image_to_qun_album']) {
    return this.send('upload_image_to_qun_album', params)
  }

  /**
   * @napcat
   * 获取群相册媒体列表
   */
  get_group_album_media_list(params: WSSendParam['get_group_album_media_list']) {
    return this.send('get_group_album_media_list', params)
  }

  /**
   * @napcat
   * 评论群相册
   */
  do_group_album_comment(params: WSSendParam['do_group_album_comment']) {
    return this.send('do_group_album_comment', params)
  }

  /**
   * @napcat
   * 点赞群相册媒体
   */
  set_group_album_media_like(params: WSSendParam['set_group_album_media_like']) {
    return this.send('set_group_album_media_like', params)
  }

  /**
   * @napcat
   * 删除群相册媒体
   */
  del_group_album_media(params: WSSendParam['del_group_album_media']) {
    return this.send('del_group_album_media', params)
  }
}
