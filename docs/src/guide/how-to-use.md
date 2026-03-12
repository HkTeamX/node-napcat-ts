# 如何使用

node-napcat-ts 使用 `正向连接` 来连接到 `NapcatQQ`

## 1.初始化SDK

有一个基类 `NCWebsocket` 用于初始化连接参数

我们支持两种连接方式, 根据自己的喜好选择

如果开启了 `DEBUG` 模式，那么会输出收到的所有数据

### 详细配置

```typescript
import { NCWebsocket } from 'node-napcat-ts'

const napcat = new NCWebsocket(
  {
    protocol: 'wss',
    host: 'napcat.example',
    port: 443,
    accessToken: 'your token',
    // ↓ 自动重连(可选)
    reconnection: {
      enable: true,
      attempts: 10,
      delay: 5000,
    },
    // ↓ 是否开启 DEBUG 模式
  },
  false,
)
```

### 快速配置

```typescript
import { NCWebsocket } from 'node-napcat-ts'

const napcat = new NCWebsocket(
  {
    baseUrl: 'ws://napcat.example',
    accessToken: 'your token',
    // ↓ 自动重连(可选)
    reconnection: {
      enable: true,
      attempts: 10,
      delay: 5000,
    },
    // ↓ 是否开启 DEBUG 模式
  },
  false,
)
```

## 2.绑定事件

请查看 [绑定事件](./bind-event.md)

## 3.连接

```typescript
// 正常连接
napcat.connect()

// 可追加 await 以在连接成功后往后运行
await napcat.connect()

// 断开连接
napcat.disconnect()

// 重新连接
// 类似 connect 方法一样可以用 await
napcat.reconnect()
```
