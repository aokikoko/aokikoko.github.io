---
title: "[TS] ts-axios(9) - 接口扩展"
sidebar_position: 17
---

-----

## 需求分析

为了用户更加方便地使用 axios 发送请求，我们可以为所有支持请求方法扩展一些接口：

- `axios.request(config)`

- `axios.get(url[, config])`

- `axios.delete(url[, config])`

- `axios.head(url[, config])`

- `axios.options(url[, config])`

- `axios.post(url[, data[, config]])`

- `axios.put(url[, data[, config]])`

- `axios.patch(url[, data[, config]])`

如果使用了这些方法，我们就不必在 `config` 中指定 `url`、`method`、`data` 这些属性了。

从需求上来看，`axios` 不再单单是一个方法，更像是一个混合对象，本身是一个方法，又有很多方法属性，接下来我们就来实现这个混合对象。

## 接口类型定义

根据需求分析，混合对象 `axios` 本身是一个函数，我们再实现一个包括它属性方法的类，然后把这个类的原型属性和自身属性再拷贝到 `axios` 上。

我们先来给 `axios` 混合对象定义接口：

`types/index.ts`：

```typescript
export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise

  get(url: string, config?: AxiosRequestConfig): AxiosPromise

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise

  head(url: string, config?: AxiosRequestConfig): AxiosPromise

  options(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise
}

export interface AxiosRequestConfig {
  url?: string
  // ...
}

```

首先定义一个 `Axios` 类型接口，它描述了 `Axios` 类中的公共方法，接着定义了 `AxiosInstance` 接口继承 `Axios`，它就是一个混合类型的接口。

另外 `AxiosRequestConfig` 类型接口中的 `url` 属性变成了可选属性。

## 创建 Axios 类

我们创建一个 `Axios` 类，来实现接口定义的公共方法。我们创建了一个 `core` 目录，用来存放发送请求核心流程的代码。我们在 `core` 目录下创建 `Axios.ts` 文件。

`core/Axios.ts`

```typescript
import { AxiosRequestConfig, AxiosPromise, Method } from '../types'
import dispatchRequest from './dispatchRequest'

export default class Axios {
  request(config: AxiosRequestConfig): AxiosPromise {
    return dispatchRequest(config)
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('delete', url, config)
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('head', url, config)
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('options', url, config)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('post', url, data, config)
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('put', url, data, config)
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('patch', url, data, config)
  }

  _requestMethodWithoutData(method: Method, url: string, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    )
  }

  _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    )
  }
}
```

其中 `request` 方法的功能和我们之前的 `axios` 函数功能是一致。`axios` 函数的功能就是发送请求，基于模块化编程的思想，我们把这部分功能抽出一个单独的模块，在 `core` 目录下创建 `dispatchRequest` 方法，把之前 `axios.ts` 的相关代码拷贝过去。另外我们把 `xhr.ts` 文件也迁移到 `core` 目录下。

`core/dispatchRequest.ts`：

```typescript
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
```

回到 `Axios.ts` 文件，对于 `get`、`delete`、`head`、`options`、`post`、`patch`、`put` 这些方法，都是对外提供的语法糖，内部都是通过调用 `request` 方法实现发送请求，只不过在调用之前对 `config` 做了一层合并处理。

## 混合对象实现

混合对象实现思路很简单，首先这个对象是一个函数，其次这个对象要包括 `Axios` 类的所有原型属性和实例属性，我们首先来实现一个辅助函数 `extend`。

`helpers/util.ts`

```typescript
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
```

`extend` 方法的实现用到了交叉类型，并且用到了类型断言。`extend` 的最终目的是把 `from` 里的属性都扩展到 `to` 中，包括原型上的属性。

我们接下来对 `axios.ts` 文件做修改，我们用工厂模式去创建一个 `axios` 混合对象。

`axios.ts`：

```typescript
import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
```

在 `createInstance` 工厂函数的内部，我们首先实例化了 `Axios` 实例 `context`，接着创建`instance` 指向 `Axios.prototype.request` 方法，并绑定了上下文 `context`；接着通过 `extend` 方法把 `context` 中的原型方法和实例方法全部拷贝到 `instance` 上，这样就实现了一个混合对象：`instance` 本身是一个函数，又拥有了 `Axios` 类的所有原型和实例属性，最终把这个 `instance` 返回。由于这里 `TypeScript` 不能正确推断 `instance` 的类型，我们把它断言成 `AxiosInstance` 类型。

这样我们就可以通过 `createInstance` 工厂函数创建了 `axios`，当直接调用 `axios` 方法就相当于执行了 `Axios` 类的 `request` 方法发送请求，当然我们也可以调用 `axios.get`、`axios.post` 等方法。

## demo 编写

在 `examples` 目录下创建 `extend` 目录，在 `extend` 目录下创建 `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Extend example</title>
  </head>
  <body>
    <script src="/__build__/extend.js"></script>
  </body>
</html>
```

接着创建 `app.ts` 作为入口文件：

```typescript
import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

axios.get('/extend/get')

axios.options('/extend/options')

axios.delete('/extend/delete')

axios.head('/extend/head')

axios.post('/extend/post', { msg: 'post' })

axios.put('/extend/put', { msg: 'put' })

axios.patch('/extend/patch', { msg: 'patch' })
```

然后在命令行运行 `npm run dev`，接着打开 chrome 浏览器，访问 `http://localhost:8080/` 即可访问我们的 demo 了，我们点到 `Extend` 目录下，通过开发者工具的 network 部分我们可以看到每个请求的发送情况。

至此我们支持了对 `axios` API 的扩展，把它变成了一个混合对象。官方的 `axios` 实例除了支持了 `axios(config)`，还支持了传入 2 个参数 `axios(url, config)`，这里就涉及到函数重载的概念了，下一节我们来实现这个 feature。

--------------------------------
## 响应数据支持泛型

### 需求分析

通常情况下，我们会把后端返回数据格式单独放入一个接口中：

```typescript
// 请求接口数据
export interface ResponseData<T = any> {
  /**
   * 状态码
   * @type { number }
   */
  code: number

  /**
   * 数据
   * @type { T }
   */
  result: T

  /**
   * 消息
   * @type { string }
   */
  message: string
}
```

我们可以把 API 抽离成单独的模块：

```typescript
import { ResponseData } from './interface.ts';

export function getUser<T>() {
  return axios.get<ResponseData<T>>('/somepath')
    .then(res => res.data)
    .catch(err => console.error(err))
}
```

接着我们写入返回的数据类型 `User`，这可以让 TypeScript 顺利推断出我们想要的类型：

```typescript
interface User {
  name: string
  age: number
}

async function test() {
  // user 被推断出为
  // {
  //  code: number,
  //  result: { name: string, age: number },
  //  message: string
  // }
  const user = await getUser<User>()
}
```

### 接口添加泛型参数

根据需求分析，我们需要给相关的接口定义添加泛型参数。

`types/index.ts`：

```typescript
export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {
}

export interface Axios {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}
```

这里我们先给 `AxiosResponse` 接口添加了泛型参数 `T`，`T=any` 表示泛型的类型参数默认值为 `any`。

接着我们为 `AxiosPromise`、`Axios` 以及 `AxiosInstance` 接口都加上了泛型参数。我们可以看到这些请求的返回类型都变成了 `AxiosPromise<T>`，也就是 `Promise<AxiosResponse<T>>`，这样我们就可以从响应中拿到了类型 `T` 了。

### demo 编写

`examples/extend/app.ts`：

```typescript
interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err))
}


async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}

test()
```

当我们调用 `getUser<User>` 的时候，相当于调用了 `axios<ResponseData<User>>`，也就是我们传入给 `axios` 函数的类型 `T` 为 `ResponseData<User>`；相当于返回值 `AxiosPromise<T>` 的 `T`，实际上也是 `Promise<AxiosResponse<T>>` 中的 `T` 的类型是 `ResponseData<User>`，所以响应数据中的 `data` 类型就是 `ResponseData<User>`，也就是如下数据结构：

```json
{
  code: number
  result: User
  message: string
}
```

这个也是 `const user = await getUser<User>()` 返回值 `user` 的数据类型，所以 TypeScript 能正确推断出 `user` 的类型。

至此，我们的 `ts-axios` 接口扩展章节就告一段落了，下一章我们来实现 `axios` 的一个非常好用的功能 —— 拦截器。


--------------------------------
## axios 函数重载

### 需求分析

目前我们的 axios 函数只支持传入 1 个参数，如下：

```typescript
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})
```

我们希望该函数也能支持传入 2 个参数，如下：

```typescript
axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hello'
  }
})
```

第一个参数是 `url`，第二个参数是 `config`，这个函数有点类似 `axios.get` 方法支持的参数类型，不同的是如果我们想要指定 HTTP 方法类型，仍然需要在 `config` 传入 `method`。

这就用到我们之前所学的函数重载知识点了，接下来我们来实现它。

### 重载实现

首先我们要修改 `AxiosInstance` 的类型定义。

`types/index.ts`：

```typescript
export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise

  (url: string, config?: AxiosRequestConfig): AxiosPromise
}
```

我们增加一种函数的定义，它支持 2 个参数，其中 `url` 是必选参数，`config` 是可选参数。

由于 `axios` 函数实际上指向的是 `request` 函数，所以我们来修改 `request` 函数的实现。

`core/Axios.ts`：

```typescript
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    return dispatchRequest(config)
  }
``` 

我们把 `request` 函数的参数改成 2 个，`url` 和 `config` 都是 `any` 类型，`config` 还是可选参数。

接着在函数体我们判断 `url` 是否为字符串类型，一旦它为字符串类型，则继续对 `config` 判断，因为它可能不传，如果为空则构造一个空对象，然后把 `url` 添加到 `config.url` 中。如果 `url` 不是字符串类型，则说明我们传入的就是单个参数，且 `url` 就是 `config`，因此把 `url` 赋值给 `config`。

这里要注意的是，我们虽然修改了 `request` 的实现，支持了 2 种参数，但是我们对外提供的 `request` 接口仍然不变，可以理解为这仅仅是内部的实现的修改，与对外接口不必一致，只要保留实现兼容接口即可。

### 编写 demo

`examples/extend/app.ts`：

```typescript
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hello'
  }
})
```

我们使用了 `axios` 2 种请求方式，打开页面运行 `demo`，通过 network 我们可以看到 2 种请求都是运行正常的。

至此我们实现了 `axios` 函数的重载。官方 axios 支持了一种能力，我们可以去定义返回数据的类型，并在请求的时候指定该类型，然后在响应数据中我们就可以获取到该数据类型。下一节课我们就来实现这个 feature。
