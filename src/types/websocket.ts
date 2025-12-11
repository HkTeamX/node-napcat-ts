export interface NCWebsocketOptionsBaseUrl {
    baseUrl: string
    accessToken?: string
    throwPromise?: boolean
    reconnection?: {
        enable?: boolean
        attempts?: number
        delay?: number
    }
}

export interface NCWebsocketOptionsHost {
    protocol: 'ws' | 'wss'
    host: string
    port: number
    accessToken?: string
    throwPromise?: boolean
    reconnection?: {
        enable?: boolean
        attempts?: number
        delay?: number
    }
}

export type NCWebsocketOptions = NCWebsocketOptionsBaseUrl | NCWebsocketOptionsHost

// =====================================================================================

export interface WSReconnection {
    enable: boolean
    attempts: number
    delay: number
    nowAttempts: number
}

export interface WSConnecting {
    reconnection: WSReconnection
}

export interface WSOpenRes {
    reconnection: WSReconnection
}

export interface WSCloseRes {
    code: number
    reason: string
    reconnection: WSReconnection
}

export type WSErrorRes = {
    reconnection: WSReconnection
} & (
        | {
            error_type: 'response_error'
            info: {
                errno: number
                message: string
                url: string
            }
        }
        | {
            error_type: 'connect_error'
            errors: ({
                errno: number
                code: string
                syscall: string
                address: string
                port: number
            } | null)[]
        }
    )

export interface SocketHandler {
    'socket.connecting': WSConnecting
    'socket.open': WSOpenRes
    'socket.close': WSCloseRes
    'socket.error': WSErrorRes
    socket:
    | SocketHandler['socket.connecting']
    | SocketHandler['socket.open']
    | SocketHandler['socket.close']
    | SocketHandler['socket.error']
}
