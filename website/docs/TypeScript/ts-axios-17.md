---
title: "[TS] ts-axios(17) - 参数序列化与baseURL"
sidebar_position: 25
---
----------------------------------------------------------------

## 自定义参数序列化需求分析

在之前的章节，我们对请求的 url 参数做了处理，我们会解析传入的 params 对象，根据一定的规则把它解析成字符串，然后添加在 url 后面。在解析的过程中，我们会对字符串 encode，但是对于一些特殊字符比如 `@`、`+` 等却不转义，这是 axios 库的默认解析规则。当然，我们也希望自己定义解析规则，于是我们希望 `ts-axios` 能在请求配置中允许我们配置一个 `paramsSerializer` 函数来自定义参数的解析规则，该函数接受 `params` 参数，返回值作为解析后的结果，如下：

```typescript
axios.get('/more/get', {
  params: {
    a: 1,
    b: 2,
    c: ['a', 'b', 'c']
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
}).then(res => {
  console.log(res)
})
```

## 代码实现

首先修改一下类型定义。

`types/index.ts`：

```typescript
export interface AxiosRequestConfig {
  // ...
  paramsSerializer?: (params: any) => string
}
```

然后修改 `buildURL` 函数的实现。

`helpers/url.ts`：

```typescript
export function buildURL(
  url: string,
  params?: any,
  paramsSerializer?: (params: any) => string
): string {
  if (!params) {
    return url
  }

  let serializedParams

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params)
  } else if (isURLSearchParams(params)) {
    serializedParams = params.toString()
  } else {
    const parts: string[] = []

    Object.keys(params).forEach(key => {
      const val = params[key]
      if (val === null || typeof val === 'undefined') {
        return
      }
      let values = []
      if (Array.isArray(val)) {
        values = val
        key += '[]'
      } else {
        values = [val]
      }
      values.forEach(val => {
        if (isDate(val)) {
          val = val.toISOString()
        } else if (isPlainObject(val)) {
          val = JSON.stringify(val)
        }
        parts.push(`${encode(key)}=${encode(val)}`)
      })
    })

    serializedParams = parts.join('&')
  }

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
```

这里我们给 `buildURL` 函数新增了 `paramsSerializer` 可选参数，另外我们还新增了对 `params` 类型判断，如果它是一个 `URLSearchParams` 对象实例的话，我们直接返回它 `toString` 后的结果。

`helpers/util.ts`：

```typescript
export function isURLSearchParams(val: any): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams
}
```

最后我们要修改 `buildURL` 调用的逻辑。

`core/dispatchRequest.ts`：

```typescript
function transformURL(config: AxiosRequestConfig): string {
  const { url, params, paramsSerializer } = config
  return buildURL(url!, params, paramsSerializer)
}
```

## demo 编写

```typescript
axios.get('/more/get', {
  params: new URLSearchParams('a=b&c=d')
}).then(res => {
  console.log(res)
})

axios.get('/more/get', {
  params: {
    a: 1,
    b: 2,
    c: ['a', 'b', 'c']
  }
}).then(res => {
  console.log(res)
})

const instance = axios.create({
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

instance.get('/more/get', {
  params: {
    a: 1,
    b: 2,
    c: ['a', 'b', 'c']
  }
}).then(res => {
  console.log(res)
})
```

我们编写了 3 种情况的请求，第一种满足请求的 params 参数是 `URLSearchParams` 对象类型的。后两种请求的结果主要区别在于前者并没有对 `[]` 转义，而后者会转义。

至此，`ts-axios` 实现了自定义参数序列化功能，用户可以配置 `paramsSerializer` 自定义参数序列化规则。下一节课我们来实现 `ts-axios` 对 `baseURL` 的支持。

----------------------------------------------------------------

## baseURL需求分析

有些时候，我们会请求某个域名下的多个接口，我们不希望每次发送请求都填写完整的 url，希望可以配置一个 `baseURL`，之后都可以传相对路径。如下：

```typescript
const instance = axios.create({
  baseURL: 'https://some-domain.com/api'
})

instance.get('/get')

instance.post('/post')
```

我们一旦配置了 `baseURL`，之后请求传入的 `url` 都会和我们的 `baseURL` 拼接成完整的绝对地址，除非请求传入的 `url` 已经是绝对地址。

### 代码实现

首先修改一下类型定义。

`types/index.ts`：

```typescript
export interface AxiosRequestConfig {
  // ...
  baseURL?: string
}
```

接下来实现 2 个辅助函数。

`helpers/url.ts`：

```typescript
export function isAbsoluteURL(url: string): boolean {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

export function combineURL(baseURL: string, relativeURL?: string): string {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}
```

最后我们来调用这俩个辅助函数。

`core/dispatchRequest.ts`：

```typescript
function transformURL(config: AxiosRequestConfig): string {
  let { url, params, paramsSerializer, baseURL } = config
  if (baseURL && !isAbsoluteURL(url!)) {
    url = combineURL(baseURL, url)
  }
  return buildURL(url!, params, paramsSerializer)
}
```

### demo 编写

```typescript
const instance = axios.create({
  baseURL: 'https://img.mukewang.com/'
})

instance.get('5cc01a7b0001a33718720632.jpg')

instance.get('https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg')
```

这个 demo 非常简单，我们请求了慕课网的 2 张图片，注意当第二个请求 `url` 已经是绝对地址的时候，我们并不会再去拼接 `baseURL`。

至此，`ts-axios` 就实现了 `baseURL` 的配置功能，接下来我们来实现 `ts-axios` 的静态方法扩展。