# 绑定事件

推荐在调用 `connect` 方法前注册哦~

```typescript
// 传入的回调将会在每次事件被触发时被调用
napcat.on('事件名', (context) => {
  console.log(context)
})

// 传入的回调在首次触发调用后随即被取消绑定
napcat.once('事件名', (context) => {
  console.log(context)
})

// 链式使用绑定函数
napcat
  .once('事件名', (context) => {
    console.log(context)
  })
  .on('事件名', (context) => {
    console.log(context)
  })

// 取消绑定 向off传入与绑定函数传入的回调的同一个引用以取消绑定
const handler = (context) => {
  console.log(context);
};
napcat.on('事件名', handler)
napcat.off('同一个事件名', handler)

// 手动触发事件(高级方法)
napcat.emit('事件名', context)
```

## 快捷操作

```typescript
// 背后调用的接口是 .handle_quick_operation
// 只支持 message request 这两个事件
napcat.on('message', (context) => {
  await context.quick_action([Structs.text('233')])
})
```

## 注意事项

虽然这里直接编写函数是有类型的,不过一般我们是分开写的,比如:

```typescript
napcat.on('message', handler)

//                 ↓ 这里会缺少类型,导致没有提词器等
function handler(context) {
  console.log(context.message)
}

//            ↓ 还能单独导入SocketHandlers等
import type { AllHandlers } from 'node-napcat-ts'
//                 ↓ 手动加上,这样就可以拥有完整的类型检查和提词器
function handler(context: AllHandlers['message']) {
  console.log(context.message)
}
```

## 事件名大全

::: tip 注意
如有缺少或类型错误请提交 [pr](https://github.com/HkTeamX/node-napcat-ts/compare)
:::

以 [NapCatQQ 文档](https://napneko.github.io/develop/event) 为准

::: tip 注意
使用父类可以被子类触发

比如:

`message` 可以被 `message.private` 触发
:::
