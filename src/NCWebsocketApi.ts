import { NCWebsocketBase } from './NCWebsocketBase.js'
import { CommonApi } from './apis/CommonApi.js'
import { GroupApi } from './apis/GroupApi.js'
import { UserApi } from './apis/UserApi.js'

/**
 * NCWebsocket Implementation using Mixins
 * Combine all API definitions into the final class.
 */
// NCWebsocket Implementation using Mixins
export class NCWebsocket extends CommonApi(GroupApi(UserApi(NCWebsocketBase))) {
  // Can override or add specific logic here if needed
}
