---
title: "[Http] 缓存"
sidebar_position: 3
---

## 缓存头部字段

### Cache-Control

请求/响应头, 缓存控制字段

- no-store: 所有内容都不缓存
- no-cache: 缓存, 但是浏览器使用缓存前, 都会请求服务器判断缓存资源是否是最新
- max-age=x(单位秒): 请求缓存后的 X 秒不再发起请求
- s-maxage=x(单位秒): 代理服务器请求源站缓存后的 X 秒不再发起请求, 只对 CDN 缓存有效
