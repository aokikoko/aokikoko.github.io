---
title: "[TS] ts-axios(8) - 异常处理"
sidebar_position: 16
---

-----

## 需求分析

在上一章节，我们实现了 `ts-axios` 的基础功能，但目前为止我们都是处理了正常接收请求的逻辑，并没有考虑到任何错误情况的处理，这对于一个程序的健壮性而言是远不够的，因此我们这一章需要对 AJAX 各种错误情况做处理。

并且我们希望程序也能捕获到这些错误，做进一步的处理。

```typescript
axios({
  method: 'get',
  url: '/error/get'
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})
```

如果在请求的过程中发生任何错误，我们都可以在 `reject` 回调函数中捕获到。

我们把错误分成了几类，接下来我们就来分别处理这些错误情况。

## 处理网络异常错误

当网络出现异常（比如不通）的时候发送请求会触发 `XMLHttpRequest` 对象实例的 `error` 事件，于是我们可以在 [`onerror`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onerror) 的事件回调函数中捕获此类错误。

我们在 `xhr` 函数中添加如下代码：

```typescript
request.onerror = function handleError() {
  reject(new Error('Network Error'))
}
```

## 处理超时错误

我们可以设置某个请求的超时时间 [`timeout`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout)，也就是当请求发送后超过某个时间后仍然没收到响应，则请求自动终止，并触发 `timeout` 事件。

请求默认的超时时间是 0，即永不超时。所以我们首先需要允许程序可以配置超时时间：

```typescript
export interface AxiosRequestConfig {
  // ...
  timeout?: number
}
```

接着在 `xhr` 函数中添加如下代码：

```typescript
const { /*...*/ timeout } = config

if (timeout) {
  request.timeout = timeout
}

request.ontimeout = function handleTimeout() {
  reject(new Error(`Timeout of ${timeout} ms exceeded`))
}
```

## 处理非 200 状态码

对于一个正常的请求，往往会返回 200-300 之间的 HTTP 状态码，对于不在这个区间的状态码，我们也把它们认为是一种错误的情况做处理。

处理状态码的时机, 是在接收到响应的时候

```typescript
request.onreadystatechange = function handleLoad() {
  if (request.readyState !== 4) {
    return
  }

  if (request.status === 0) {
    return
  }

  const responseHeaders = parseHeaders(request.getAllResponseHeaders())
  const responseData =
    responseType && responseType !== 'text' ? request.response : request.responseText
  const response: AxiosResponse = {
    data: responseData,
    status: request.status,
    statusText: request.statusText,
    headers: responseHeaders,
    config,
    request
  }
  handleResponse(response)
}

function handleResponse(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    resolve(response)
  } else {
    reject(new Error(`Request failed with status code ${response.status}`))
  }
}
```

我们在 `onreadystatechange` 的回调函数中，添加了对 [`request.status`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status) 的判断，因为当出现网络错误或者超时错误的时候，该值都为 0。

接着我们在 `handleResponse` 函数中对 `request.status` 的值再次判断，如果是 `2xx` 的状态码，则认为是一个正常的请求，否则抛错。

## demo 编写

在 `examples` 目录下创建 `error` 目录，在 `error` 目录下创建 `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Error example</title>
  </head>
  <body>
    <script src="/__build__/error.js"></script>
  </body>
</html>
```

接着创建 `app.ts` 作为入口文件：

```typescript
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1'
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})

axios({
  method: 'get',
  url: '/error/get'
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e.message)
})
```

接着在 `server.js` 添加新的接口路由：

```typescript
router.get('/error/get', function(req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: `hello world`
    })
  } else {
    res.status(500)
    res.end()
  }
})

router.get('/error/timeout', function(req, res) {
  setTimeout(() => {
    res.json({
      msg: `hello world`
    })
  }, 3000)
})
```

然后在命令行运行 `npm run dev`，接着打开 chrome 浏览器，访问 `http://localhost:8080/` 即可访问我们的 demo 了，我们点到 `Error` 目录下，通过开发者工具的 network 部分我们可以看到不同的错误情况。

至此我们对各种错误都做了处理，并把它们抛给了程序应用方，让他们对错误可以做进一步的处理。但是这里我们的错误都仅仅是简单的 Error 实例，只有错误文本信息，并不包含是哪个请求、请求的配置、响应对象等其它信息。那么下一节课，我们会对错误信息做增强。

----------------------------------------------------------------
## 错误信息增强
我们已经捕获了几类 AJAX 的错误，但是对于错误信息提供的非常有限，我们希望对外提供的信息不仅仅包含错误文本信息，还包括了请求对象配置 `config`，错误代码 `code`，`XMLHttpRequest` 对象实例 `request`以及自定义响应对象 `response`。

```typescript
axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log(e.message)
  console.log(e.request)
  console.log(e.code)
})
```

这样对于应用方来说，他们就可以捕获到这些错误的详细信息，做进一步的处理。

那么接下来，我们就来对错误信息做增强。

### 创建 AxiosError 类

我们先来定义 `AxiosError` 类型接口，用于外部使用。

`types/index.ts`：

```typescript
export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}
```

接着我们创建 `error.ts` 文件，然后实现 `AxiosError` 类，它是继承于 `Error` 类。

`helpers/error.ts`：

```typescript
import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  const error = new AxiosError(message, config, code, request, response)

  return error
}
```

`AxiosError` 继承于 `Error` 类，添加了一些自己的属性：`config`、`code`、`request`、`response`、`isAxiosError` 等属性。这里要注意一点，我们使用了 `Object.setPrototypeOf(this, AxiosError.prototype)`，这段代码的目的是为了解决 TypeScript 继承一些内置对象的时候的坑，[参考](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work)。

另外，为了方便使用，我们对外暴露了一个 `createError` 的工厂方法。

### createError 方法应用

修改关于错误对象创建部分的逻辑，如下：

`xhr.ts`：

```typescript
import { createError } from './helpers/error'

request.onerror = function handleError() {
  reject(createError(
    'Network Error',
    config,
    null,
    request
  ))
}

request.ontimeout = function handleTimeout() {
  reject(createError(
    `Timeout of ${config.timeout} ms exceeded`,
    config,
    'ECONNABORTED',
    request
  ))
}

function handleResponse(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    resolve(response)
  } else {
    reject(createError(
      `Request failed with status code ${response.status}`,
      config,
      null,
      request,
      response
    ))
  }
}
```

### 导出类型定义

在 demo 中，TypeScript 并不能把 `e` 参数推断为 `AxiosError` 类型，于是我们需要手动指明类型，为了让外部应用能引入 `AxiosError` 类型，我们也需要把它们导出。

我们创建 `axios.ts` 文件，把之前的 `index.ts` 的代码拷贝过去，然后修改 `index.ts` 的代码。

`index.ts`：

```typescript
import axios from './axios'

export * from './types'

export default axios
```

这样我们在 demo 中就可以引入 `AxiosError` 类型了。

`examples/error/app.ts`：

```typescript
import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log(e.message)
  console.log(e.code)
})
```

至此，我们关于 `ts-axios` 的异常处理逻辑就告一段落。下面的章节，我们会对 `ts-axios` 的接口做扩展，让它提供更多好用和方便的 API。
