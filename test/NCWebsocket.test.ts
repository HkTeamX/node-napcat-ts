import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NCWebsocket } from '../src/NCWebsocketApi.js'
import { Server } from 'mock-socket'

// Mock isomorphic-ws to use mock-socket
vi.mock('isomorphic-ws', async () => {
    const { WebSocket } = await import('mock-socket')
    return { default: WebSocket }
})

describe('NCWebsocket', () => {
    let mockServer: Server
    let bot: NCWebsocket
    const TEST_URL = 'ws://localhost:8080'

    beforeEach(() => {
        mockServer = new Server(TEST_URL)
        bot = new NCWebsocket(
            {
                protocol: 'ws',
                host: 'localhost',
                port: 8080,
            },
            false, // debug off
        )
    })

    afterEach(() => {
        mockServer.stop()
        vi.restoreAllMocks()
    })

    it('should connect successfully', async () => {
        const connectPromise = bot.connect()
        await connectPromise
        expect(bot).toBeDefined()
    })

    it('should send a message and receive response', async () => {
        // Setup mock server response
        mockServer.on('connection', (socket) => {
            socket.on('message', (data) => {
                const parsed = JSON.parse(data as string)
                if (parsed.action === 'send_private_msg') {
                    socket.send(JSON.stringify({
                        status: 'ok',
                        retcode: 0,
                        data: { message_id: 123 },
                        echo: parsed.echo
                    }))
                }
            })
        })

        await bot.connect()
        const response = await bot.send_private_msg({
            user_id: 123456789,
            message: [{ type: 'text', data: { text: 'hello' } }],
        })

        expect(response).toEqual({ message_id: 123 })
    })
})
