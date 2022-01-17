---
title: "[Node] dgram"
sidebar_position: 2
---
# nodejs核心api

## dgram

`dgram` 模块提供了 UDP 数据包 socket 的实现。

```js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`服务器异常：\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`服务器接收到来自 ${rinfo.address}:${rinfo.port} 的 ${msg}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`服务器监听 ${address.address}:${address.port}`);
});

server.bind(41234);
// 服务器监听 0.0.0.0:41234
```

#### send

- `msg` [](http://nodejs.cn/s/6x1hD3) | [](http://nodejs.cn/s/ZbDkpm) | [](http://nodejs.cn/s/9Tw2bK) | [](http://nodejs.cn/s/ZJSz23) 要发送的消息。
- `offset` [](http://nodejs.cn/s/SXbo1v) 指定消息的开头在 buffer 中的偏移量。
- `length` [](http://nodejs.cn/s/SXbo1v) 消息的字节数。
- `port` [](http://nodejs.cn/s/SXbo1v) 目标端口。
- `address` [](http://nodejs.cn/s/9Tw2bK) 目标主机名或 IP 地址。
- `callback` [](http://nodejs.cn/s/ceTQa6) 当消息被发送时会被调用。

```js
示例，发送 UDP 包到 localhost 上的某个端口：

const dgram = require('dgram');
const message = Buffer.from('一些字节');
const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) => {
  client.close();
});
示例，发送包含多个 buffer 的 UDP 包到 127.0.0.1 上的某个端口：

const dgram = require('dgram');
const buf1 = Buffer.from('一些 ');
const buf2 = Buffer.from('字节');
const client = dgram.createSocket('udp4');
client.send([buf1, buf2], 41234, (err) => {
  client.close();
});
发送多个 buffer 的速度取决于应用和操作系统。 逐案运行基准来确定最佳策略是很重要的。 但是一般来说，发送多个 buffer 速度更快。

示例，使用已连接的 socket 发送 UDP 包到 localhost 上的某个端口：

const dgram = require('dgram');
const message = Buffer.from('一些字节');
const client = dgram.createSocket('udp4');
client.connect(41234, 'localhost', (err) => {
  client.send(message, (err) => {
    client.close();
  });
});
```