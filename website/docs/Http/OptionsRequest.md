---
title: "[Http] Options请求的解释"
sidebar_position: 1
---


## 简单请求和复杂请求的区别

```js
/*
  简单请求
    1. 只能是get 和 post请求 或 head请求
    2. 不能手动设置以下4种之外的请求头信息
      accept
      accept-language
      content-language
      content-type
    3. 如果是post请求, 请求content-type只能是以下三个
      application/x-www-http-urlencoded
      multipart/form-data
      text/plain

      关于application/x-www-http-urlencoded,是传统表单默认请求方式,
      jquey的$ajax发送的post请求属于简单请求, 因为它默认是这种格式
      而axios封装的post请求默认是application/json格式的, 所以用axios发请求
      默认属于复杂请求
  复杂请求
    除简单请求之外的请求
*/
```

## 预检请求(Options)

:::tip
  因为复杂请求可能携带数据比较多, 比如post发数据
  所以不会直接发复杂请求, 比如跨域的话浏览器没有结果,
  发送成本较高, 所以采用先发一个空请求(预检请求),
  这个请求不会携带任何数据, 只需要服务器响应,
  如果跨域的话, 服务器会设置响应头, access-allow-origin等头,
  这个请求回来之后, 浏览器判断options请求的响应头里信息,
  如果允许跨域继续发送携带数据的请求,
  如果失败不发送后续请求
:::