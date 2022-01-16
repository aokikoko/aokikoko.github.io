---
title: "[TS] ts-axios(20) - 单元测试(辅助模块)"
sidebar_position: 28
---
----------------------------------------------------------------

## 辅助模块

### 单元测试准备工作

通常我们会优先为一个库的辅助方法编写测试，我们会优先为 `ts-axios` 库的 `helpers` 目录下的模块编写测试。我们在 `test` 目录下创建一个 `helpers` 目录，创建一个 `boot.ts` 空文件，这个是因为我们上节课给 Jest 配置了 `setupFilesAfterEnv` 指向了这个文件，后面的章节我们会编写这个文件。

然后我们可以在控制台运行 `npm test`，它实际上是执行了 `jest --coverage` 来跑单元测试，我们会发现它会报错，没有匹配的测试文件，那是因为我们还没有在 `test` 目录下编写任何一个 .spec.ts 结尾的测试文件。接下来我们就来为这些辅助模块编写相应的测试。

### util 模块测试

`test/helpers/util.spec.ts`：

```typescript
import {
  isDate,
  isPlainObject,
  isFormData,
  isURLSearchParams,
  extend,
  deepMerge
} from '../../src/helpers/util'

describe('helpers:util', () => {
  describe('isXX', () => {
    test('should validate Date', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate(Date.now())).toBeFalsy()
    })

    test('should validate PlainObject', () => {
      expect(isPlainObject({})).toBeTruthy()
      expect(isPlainObject(new Date())).toBeFalsy()
    })

    test('should validate FormData', () => {
      expect(isFormData(new FormData())).toBeTruthy()
      expect(isFormData({})).toBeFalsy()
    })

    test('should validate URLSearchParams', () => {
      expect(isURLSearchParams(new URLSearchParams())).toBeTruthy()
      expect(isURLSearchParams('foo=1&bar=2')).toBeFalsy()
    })
  })

  describe('extend', () => {
    test('should be mutable', () => {
      const a = Object.create(null)
      const b = { foo: 123 }

      extend(a, b)

      expect(a.foo).toBe(123)
    })

    test('should extend properties', function() {
      const a = { foo: 123, bar: 456 }
      const b = { bar: 789 }
      const c = extend(a, b)

      expect(c.foo).toBe(123)
      expect(c.bar).toBe(789)
    })
  })

  describe('deepMerge', () => {
    test('should be immutable', () => {
      const a = Object.create(null)
      const b: any = { foo: 123 }
      const c: any = { bar: 456 }

      deepMerge(a, b, c)

      expect(typeof a.foo).toBe('undefined')
      expect(typeof a.bar).toBe('undefined')
      expect(typeof b.bar).toBe('undefined')
      expect(typeof c.foo).toBe('undefined')
    })

    test('should deepMerge properties', () => {
      const a = { foo: 123 }
      const b = { bar: 456 }
      const c = { foo: 789 }
      const d = deepMerge(a, b, c)

      expect(d.foo).toBe(789)
      expect(d.bar).toBe(456)
    })

    test('should deepMerge recursively', function() {
      const a = { foo: { bar: 123 } }
      const b = { foo: { baz: 456 }, bar: { qux: 789 } }
      const c = deepMerge(a, b)

      expect(c).toEqual({
        foo: {
          bar: 123,
          baz: 456
        },
        bar: {
          qux: 789
        }
      })
    })

    test('should remove all references from nested objects', () => {
      const a = { foo: { bar: 123 } }
      const b = {}
      const c = deepMerge(a, b)

      expect(c).toEqual({
        foo: {
          bar: 123
        }
      })

      expect(c.foo).not.toBe(a.foo)
    })

    test('should handle null and undefined arguments', () => {
      expect(deepMerge(undefined, undefined)).toEqual({})
      expect(deepMerge(undefined, { foo: 123 })).toEqual({ foo: 123 })
      expect(deepMerge({ foo: 123 }, undefined)).toEqual({ foo: 123 })

      expect(deepMerge(null, null)).toEqual({})
      expect(deepMerge(null, { foo: 123 })).toEqual({ foo: 123 })
      expect(deepMerge({ foo: 123 }, null)).toEqual({ foo: 123 })
    })
  })
})
```

其中 [`describe`](https://jestjs.io/docs/en/api#describename-fn) 方法用来定义一组测试，它可以支持嵌套，[`test`](https://jestjs.io/docs/en/api#testname-fn-timeout) 函数是用来定义单个测试用例，它是测试的最小单元。[`expect`](https://jestjs.io/docs/en/expect#expectvalue) 是断言函数，所谓"断言"，就是判断代码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。

测试文件编写好后，我们可以去控制台运行一次 `npm test`，看一下测试结果，我们可以看跑了几个测试文件，测试是否通过，测试覆盖率等。

### cookie 模块测试

`test/helpers/cookie.spec.ts`：

```typescript
import cookie from '../../src/helpers/cookie'

describe('helpers:cookie', () => {
  test('should read cookies', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('foo')).toBe('baz')
  })

  test('should return null if cookie name is not exist', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('bar')).toBeNull()
  })
})
```

这里我们可以通过 `document.cookie` 去设置 cookie，就像在浏览器里一样操作。

### data 模块测试

`test/helpers/data.spec.ts`：

```typescript
import { transformRequest, transformResponse } from '../../src/helpers/data'

describe('helpers:data', () => {
  describe('transformRequest', () => {
    test('should transform request data to string if data is a PlainObject', () => {
      const a = { a: 1 }
      expect(transformRequest(a)).toBe('{"a":1}')
    })

    test('should do nothing if data is not a PlainObject', () => {
      const a = new URLSearchParams('a=b')
      expect(transformRequest(a)).toBe(a)
    })
  })

  describe('transformResponse', () => {
    test('should transform response data to Object if data is a JSON string', () => {
      const a = '{"a": 2}'
      expect(transformResponse(a)).toEqual({ a: 2 })
    })

    test('should do nothing if data is a string but not a JSON string', () => {
      const a = '{a: 2}'
      expect(transformResponse(a)).toBe('{a: 2}')
    })

    test('should do nothing if data is not a string', () => {
      const a = { a: 2 }
      expect(transformResponse(a)).toBe(a)
    })
  })
})
```

### error 模块测试

`test/helpers/error.spec.ts`：

```typescript
import { createError } from '../../src/helpers/error'
import { AxiosRequestConfig, AxiosResponse } from '../../src/types'

describe('helpers::error', function() {
  test('should create an Error with message, config, code, request, response and isAxiosError', () => {
    const request = new XMLHttpRequest()
    const config: AxiosRequestConfig = { method: 'post' }
    const response: AxiosResponse = {
      status: 200,
      statusText: 'OK',
      headers: null,
      request,
      config,
      data: { foo: 'bar' }
    }
    const error = createError('Boom!', config, 'SOMETHING', request, response)
    expect(error instanceof Error).toBeTruthy()
    expect(error.message).toBe('Boom!')
    expect(error.config).toBe(config)
    expect(error.code).toBe('SOMETHING')
    expect(error.request).toBe(request)
    expect(error.response).toBe(response)
    expect(error.isAxiosError).toBeTruthy()
  })
})
```

该模块跑完我们会发现，分支覆盖率是在 `50%`，因为第十七行代码

```typescript
super(message)
```

这个是 `super` 继承对测试覆盖率支持的坑，目前没有好的解决方案，可以先忽略。

### headers 模块测试

`test/helpers/headers.spec.ts`：

```typescript
import { parseHeaders, processHeaders, flattenHeaders } from '../../src/helpers/headers'

describe('helpers:header', () => {
  describe('parseHeaders', () => {
    test('should parse headers', () => {
      const parsed = parseHeaders(
        'Content-Type: application/json\r\n' +
          'Connection: keep-alive\r\n' +
          'Transfer-Encoding: chunked\r\n' +
          'Date: Tue, 21 May 2019 09:23:44 GMT\r\n' +
          ':aa\r\n' +
          'key:'
      )

      expect(parsed['content-type']).toBe('application/json')
      expect(parsed['connection']).toBe('keep-alive')
      expect(parsed['transfer-encoding']).toBe('chunked')
      expect(parsed['date']).toBe('Tue, 21 May 2019 09:23:44 GMT')
      expect(parsed['key']).toBe('')
    })

    test('should return empty object if headers is empty string', () => {
      expect(parseHeaders('')).toEqual({})
    })
  })

  describe('processHeaders', () => {
    test('should normalize Content-Type header name', () => {
      const headers: any = {
        'conTenT-Type': 'foo/bar',
        'Content-length': 1024
      }
      processHeaders(headers, {})
      expect(headers['Content-Type']).toBe('foo/bar')
      expect(headers['conTenT-Type']).toBeUndefined()
      expect(headers['Content-length']).toBe(1024)
    })

    test('should set Content-Type if not set and data is PlainObject', () => {
      const headers: any = {}
      processHeaders(headers, { a: 1 })
      expect(headers['Content-Type']).toBe('application/json;charset=utf-8')
    })

    test('should set not Content-Type if not set and data is not PlainObject', () => {
      const headers: any = {}
      processHeaders(headers, new URLSearchParams('a=b'))
      expect(headers['Content-Type']).toBeUndefined()
    })

    test('should do nothing if headers is undefined or null', () => {
      expect(processHeaders(undefined, {})).toBeUndefined()
      expect(processHeaders(null, {})).toBeNull()
    })
  })

  describe('flattenHeaders', () => {
    test('should flatten the headers and include common headers', () => {
      const headers = {
        Accept: 'application/json',
        common: {
          'X-COMMON-HEADER': 'commonHeaderValue'
        },
        get: {
          'X-GET-HEADER': 'getHeaderValue'
        },
        post: {
          'X-POST-HEADER': 'postHeaderValue'
        }
      }

      expect(flattenHeaders(headers, 'get')).toEqual({
        Accept: 'application/json',
        'X-COMMON-HEADER': 'commonHeaderValue',
        'X-GET-HEADER': 'getHeaderValue'
      })
    })

    test('should flatten the headers without common headers', () => {
      const headers = {
        Accept: 'application/json',
        get: {
          'X-GET-HEADER': 'getHeaderValue'
        }
      }

      expect(flattenHeaders(headers, 'patch')).toEqual({
        Accept: 'application/json'
      })
    })

    test('should do nothing if headers is undefined or null', () => {
      expect(flattenHeaders(undefined, 'get')).toBeUndefined()
      expect(flattenHeaders(null, 'post')).toBeNull()
    })
  })
})
```

运行后，我们会发现 `parseHeaders` 测试组的 `should parse headers` 测试没通过，`expect(parsed['date']).toBe('Tue, 21 May 2019 09:23:44 GMT')` 我们期望解析后的 `date` 字段是 `Tue, 21 May 2019 09:23:44 GMT`，而实际的值是 `Tue, 21 May 2019 09`。

测试没通过，我们检查一下代码，发现我们 `parseHeaders` 的代码逻辑漏洞，我们只考虑了第一个 ":" 号，没考虑后半部分的字符串内部也可能有 ":"，按我们现有的逻辑就会把字符串中 ":" 后面部分都截断了。

因此我们修改 `parseHeaders` 的实现逻辑。

```typescript
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    let [key, ...vals] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    let val = vals.join(':').trim()
    parsed[key] = val
  })

  return parsed
}
```

这样我们再重新跑测试，就会通过了。

### url 模块测试

`test/helpers/url.spec.ts`：

```typescript
import { buildURL, isAbsoluteURL, combineURL, isURLSameOrigin } from '../../src/helpers/url'

describe('helpers:url', () => {
  describe('buildURL', () => {
    test('should support null params', () => {
      expect(buildURL('/foo')).toBe('/foo')
    })

    test('should support params', () => {
      expect(
        buildURL('/foo', {
          foo: 'bar'
        })
      ).toBe('/foo?foo=bar')
    })

    test('should ignore if some param value is null', () => {
      expect(
        buildURL('/foo', {
          foo: 'bar',
          baz: null
        })
      ).toBe('/foo?foo=bar')
    })

    test('should ignore if the only param value is null', () => {
      expect(
        buildURL('/foo', {
          baz: null
        })
      ).toBe('/foo')
    })

    test('should support object params', () => {
      expect(
        buildURL('/foo', {
          foo: {
            bar: 'baz'
          }
        })
      ).toBe('/foo?foo=' + encodeURI('{"bar":"baz"}'))
    })

    test('should support date params', () => {
      const date = new Date()

      expect(
        buildURL('/foo', {
          date: date
        })
      ).toBe('/foo?date=' + date.toISOString())
    })

    test('should support array params', () => {
      expect(
        buildURL('/foo', {
          foo: ['bar', 'baz']
        })
      ).toBe('/foo?foo[]=bar&foo[]=baz')
    })

    test('should support special char params', () => {
      expect(
        buildURL('/foo', {
          foo: '@:$, '
        })
      ).toBe('/foo?foo=@:$,+')
    })

    test('should support existing params', () => {
      expect(
        buildURL('/foo?foo=bar', {
          bar: 'baz'
        })
      ).toBe('/foo?foo=bar&bar=baz')
    })

    test('should correct discard url hash mark', () => {
      expect(
        buildURL('/foo?foo=bar#hash', {
          query: 'baz'
        })
      ).toBe('/foo?foo=bar&query=baz')
    })

    test('should use serializer if provided', () => {
      const serializer = jest.fn(() => {
        return 'foo=bar'
      })
      const params = { foo: 'bar' }
      expect(buildURL('/foo', params, serializer)).toBe('/foo?foo=bar')
      expect(serializer).toHaveBeenCalled()
      expect(serializer).toHaveBeenCalledWith(params)
    })

    test('should support URLSearchParams', () => {
      expect(buildURL('/foo', new URLSearchParams('bar=baz'))).toBe('/foo?bar=baz')
    })
  })

  describe('isAbsoluteURL', () => {
    test('should return true if URL begins with valid scheme name', () => {
      expect(isAbsoluteURL('https://api.github.com/users')).toBeTruthy()
      expect(isAbsoluteURL('custom-scheme-v1.0://example.com/')).toBeTruthy()
      expect(isAbsoluteURL('HTTP://example.com/')).toBeTruthy()
    })

    test('should return false if URL begins with invalid scheme name', () => {
      expect(isAbsoluteURL('123://example.com/')).toBeFalsy()
      expect(isAbsoluteURL('!valid://example.com/')).toBeFalsy()
    })

    test('should return true if URL is protocol-relative', () => {
      expect(isAbsoluteURL('//example.com/')).toBeTruthy()
    })

    test('should return false if URL is relative', () => {
      expect(isAbsoluteURL('/foo')).toBeFalsy()
      expect(isAbsoluteURL('foo')).toBeFalsy()
    })
  })

  describe('combineURL', () => {
    test('should combine URL', () => {
      expect(combineURL('https://api.github.com', '/users')).toBe('https://api.github.com/users')
    })

    test('should remove duplicate slashes', () => {
      expect(combineURL('https://api.github.com/', '/users')).toBe('https://api.github.com/users')
    })

    test('should insert missing slash', () => {
      expect(combineURL('https://api.github.com', 'users')).toBe('https://api.github.com/users')
    })

    test('should not insert slash when relative url missing/empty', () => {
      expect(combineURL('https://api.github.com/users', '')).toBe('https://api.github.com/users')
    })

    test('should allow a single slash for relative url', () => {
      expect(combineURL('https://api.github.com/users', '/')).toBe('https://api.github.com/users/')
    })
  })

  describe('isURLSameOrigin', () => {
    test('should detect same origin', () => {
      expect(isURLSameOrigin(window.location.href)).toBeTruthy()
    })

    test('should detect different origin', () => {
      expect(isURLSameOrigin('https://github.com/axios/axios')).toBeFalsy()
    })
  })
})
```

这里要注意的是，我们使用了 [`jest.fn`](https://jestjs.io/docs/en/jest-object#jestfnimplementation) 去模拟了一个函数，这个也是在编写 Jest 测试中非常常用的一个 API。

至此，我们就实现了 `ts-axios` 库 `helpers` 目录下所有模块的测试，并把该目录下的测试覆盖率达到了近乎 100% 的覆盖率。下面的章节我们就开始测试 `ts-axios` 的核心流程，针对不同的 `feature` 去编写单元测试了。

----------------------------------------------------------------


## 请求模块

请求模块是 axios 最基础的模块，通过一个 axios 方法发送 Ajax 请求。

### jasmine-ajax

[Jasmine](https://jasmine.github.io/pages/getting_started.html) 是一个 BDD(行为驱动开发)的测试框架，它有很多成熟的插件，比如我们要用到的 [`jasmine-ajax`](https://github.com/jasmine/jasmine-ajax)，它会为我们发出的 Ajax 请求根据规范定义一组假的响应，并跟踪我们发出的Ajax请求，可以让我们方便的为结果做断言。

其实 Jest 也可以去写插件，但并没有现成的 Ajax 相关的 Jest 插件，但是 Jest 测试中我们仍然可以使用 Jasmine 相关的插件，只需要做一些小小的配置即可。

当然，未来我也会考虑去编写一个 Ajax 相关的 Jest 插件，目前我们仍然使用 `jasmine-ajax` 去配合我们编写测试。

`jasmine-ajax` 依赖 `jasmine-core`，因此首先我们要安装几个依赖包，`jasmine-ajax`、`jasmine-core` 和 `@types/jasmine-ajax`。

这个时候我们需要去修改 `test/boot.ts` 文件，因为每次跑具体测试代码之前会先运行该文件，我们可以在这里去初始化 `jasmine-ajax`。

```typescript
const JasmineCore = require('jasmine-core')
// @ts-ignore
global.getJasmineRequireObj = function() {
  return JasmineCore
}
require('jasmine-ajax')
```

这里为了让 `jasmine-ajax` 插件运行成功，我们需要手动添加全局的 `getJasmineRequireObj` 方法，参考 [issue](https://github.com/jasmine/jasmine-ajax/issues/178)。

接下来，我们就开始编写请求模块的单元测试。

### 测试代码编写

`test/requests.spec.ts`：

```typescript
import axios, { AxiosResponse, AxiosError } from '../src/index'
import { getAjaxRequest } from './helper'

describe('requests', () => {
  beforeEach(() => {
    jasmine.Ajax.install()
  })

  afterEach(() => {
    jasmine.Ajax.uninstall()
  })

  test('should treat single string arg as url', () => {
    axios('/foo')

    return getAjaxRequest().then(request => {
      expect(request.url).toBe('/foo')
      expect(request.method).toBe('GET')
    })
  })

  test('should treat method value as lowercase string', done => {
    axios({
      url: '/foo',
      method: 'POST'
    }).then(response => {
      expect(response.config.method).toBe('post')
      done()
    })

    getAjaxRequest().then(request => {
      request.respondWith({
        status: 200
      })
    })
  })

  test('should reject on network errors', done => {
    const resolveSpy = jest.fn((res: AxiosResponse) => {
      return res
    })

    const rejectSpy = jest.fn((e: AxiosError) => {
      return e
    })

    jasmine.Ajax.uninstall()

    axios('/foo')
      .then(resolveSpy)
      .catch(rejectSpy)
      .then(next)

    function next(reason: AxiosResponse | AxiosError) {
      expect(resolveSpy).not.toHaveBeenCalled()
      expect(rejectSpy).toHaveBeenCalled()
      expect(reason instanceof Error).toBeTruthy()
      expect((reason as AxiosError).message).toBe('Network Error')
      expect(reason.request).toEqual(expect.any(XMLHttpRequest))

      jasmine.Ajax.install()

      done()
    }
  })

  test('should reject when request timeout', done => {
    let err: AxiosError

    axios('/foo', {
      timeout: 2000,
      method: 'post'
    }).catch(error => {
      err = error
    })

    getAjaxRequest().then(request => {
      // @ts-ignore
      request.eventBus.trigger('timeout')

      setTimeout(() => {
        expect(err instanceof Error).toBeTruthy()
        expect(err.message).toBe('Timeout of 2000 ms exceeded')
        done()
      }, 100)
    })
  })

  test('should reject when validateStatus returns false', done => {
    const resolveSpy = jest.fn((res: AxiosResponse) => {
      return res
    })

    const rejectSpy = jest.fn((e: AxiosError) => {
      return e
    })

    axios('/foo', {
      validateStatus(status) {
        return status !== 500
      }
    })
      .then(resolveSpy)
      .catch(rejectSpy)
      .then(next)

    getAjaxRequest().then(request => {
      request.respondWith({
        status: 500
      })
    })

    function next(reason: AxiosError | AxiosResponse) {
      expect(resolveSpy).not.toHaveBeenCalled()
      expect(rejectSpy).toHaveBeenCalled()
      expect(reason instanceof Error).toBeTruthy()
      expect((reason as AxiosError).message).toBe('Request failed with status code 500')
      expect((reason as AxiosError).response!.status).toBe(500)

      done()
    }
  })

  test('should resolve when validateStatus returns true', done => {
    const resolveSpy = jest.fn((res: AxiosResponse) => {
      return res
    })

    const rejectSpy = jest.fn((e: AxiosError) => {
      return e
    })

    axios('/foo', {
      validateStatus(status) {
        return status === 500
      }
    })
      .then(resolveSpy)
      .catch(rejectSpy)
      .then(next)

    getAjaxRequest().then(request => {
      request.respondWith({
        status: 500
      })
    })

    function next(res: AxiosResponse | AxiosError) {
      expect(resolveSpy).toHaveBeenCalled()
      expect(rejectSpy).not.toHaveBeenCalled()
      expect(res.config.url).toBe('/foo')

      done()
    }
  })

  test('should return JSON when resolved', done => {
    let response: AxiosResponse

    axios('/api/account/signup', {
      auth: {
        username: '',
        password: ''
      },
      method: 'post',
      headers: {
        Accept: 'application/json'
      }
    }).then(res => {
      response = res
    })

    getAjaxRequest().then(request => {
      request.respondWith({
        status: 200,
        statusText: 'OK',
        responseText: '{"a": 1}'
      })

      setTimeout(() => {
        expect(response.data).toEqual({ a: 1 })
        done()
      }, 100)
    })
  })

  test('should return JSON when rejecting', done => {
    let response: AxiosResponse

    axios('/api/account/signup', {
      auth: {
        username: '',
        password: ''
      },
      method: 'post',
      headers: {
        Accept: 'application/json'
      }
    }).catch(error => {
      response = error.response
    })

    getAjaxRequest().then(request => {
      request.respondWith({
        status: 400,
        statusText: 'Bad Request',
        responseText: '{"error": "BAD USERNAME", "code": 1}'
      })

      setTimeout(() => {
        expect(typeof response.data).toBe('object')
        expect(response.data.error).toBe('BAD USERNAME')
        expect(response.data.code).toBe(1)
        done()
      }, 100)
    })
  })

  test('should supply correct response', done => {
    let response: AxiosResponse

    axios.post('/foo').then(res => {
      response = res
    })

    getAjaxRequest().then(request => {
      request.respondWith({
        status: 200,
        statusText: 'OK',
        responseText: '{"foo": "bar"}',
        responseHeaders: {
          'Content-Type': 'application/json'
        }
      })

      setTimeout(() => {
        expect(response.data.foo).toBe('bar')
        expect(response.status).toBe(200)
        expect(response.statusText).toBe('OK')
        expect(response.headers['content-type']).toBe('application/json')
        done()
      }, 100)
    })
  })

  test('should allow overriding Content-Type header case-insensitive', () => {
    let response: AxiosResponse

    axios
      .post(
        '/foo',
        { prop: 'value' },
        {
          headers: {
            'content-type': 'application/json'
          }
        }
      )
      .then(res => {
        response = res
      })

    return getAjaxRequest().then(request => {
      expect(request.requestHeaders['Content-Type']).toBe('application/json')
    })
  })
})
```

我们要注意的一些点，在这里列出：

- beforeEach & afterEach

[beforeEach](https://jestjs.io/docs/en/api#beforeeachfn-timeout)表示每个测试用例运行前的钩子函数，在这里我们执行 `jasmine.Ajax.install()` 安装 `jasmine.Ajax`。

[afterEach](https://jestjs.io/docs/en/api#aftereachfn-timeout)表示每个测试用例运行后的钩子函数，在这里我们执行 `jasmine.Ajax.uninstall()` 卸载 `jasmine.Ajax`。

- `getAjaxRequest`

`getAjaxRequest` 是我们在 `test/helper.ts` 定义的一个辅助方法，通过 `jasmine.Ajax.requests.mostRecent()` 拿到最近一次请求的 `request` 对象，这个 `request` 对象是 `jasmine-ajax` 库伪造的 `xhr` 对象，它模拟了 `xhr` 对象上的方法，并且提供一些 `api` 让我们使用，比如 `request.respondWith` 方法返回一个响应。

- 异步测试

注意到我们这里大部分的测试用例不再是同步的代码了，几乎都是一些异步逻辑，Jest 非常好地支持[异步测试代码](https://jestjs.io/docs/en/asynchronous)。通常有 2 种解决方案。

第一种是利用 `done` 参数，每个测试用例函数有一个 `done` 参数，一旦我们使用了该参数，只有当 `done` 函数执行的时候表示这个测试用例结束。

第二种是我们的测试函数返回一个 Promise 对象，一旦这个 Promise 对象 `resolve` 了，表示这个测试结束。

- expect.any(constructor)

它表示匹配任意由 `constructor` 创建的对象实例。

- `request.eventBus.trigger`

由于 `request.responseTimeout` 方法内部依赖了 `jasmine.clock` 方法会导致运行失败，这里我直接用了 `request.eventBus.trigger('timeout')` 方法触发了 `timeout` 事件。因为这个方法不在接口定义中，所以需要加 `// @ts-ignore`。


另外，我们在测试中发现 2 个 case 没有通过。

第一个是 `should treat method value as lowercase string`，这个测试用例是我们发送请求的 ` method` 需要转换成小写字符串，这么做的目的也是为了之后 `flattenHeaders` 能正常处理这些 `method`，所以我们需要修改源码逻辑。

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

    config = mergeConfig(this.defaults, config)
    config.method = config.method.toLowerCase()
    
    // ...
  }
```

在合并配置后，我们需要把 `config.method` 转成小写字符串。

另一个是 `should return JSON when rejecting`，这个测试用例是当我们发送请求失败后，也能把响应数据转换成 JSON 格式，所以也需要修改源码逻辑。

`core/dispatchRequest.ts`：

```typescript
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  throwIfCancellationRequested(config)
  processConfig(config)
  return xhr(config).then(
    res => {
      return transformResponseData(res)
    },
    e => {
      if (e && e.response) {
        e.response = transformResponseData(e.response)
      }
      return Promise.reject(e)
    }
  )
}
```

除了对正常情况的响应数据做转换，我们也需要对异常情况的响应数据做转换。

至此我们完成了 `ts-axios` 库对请求模块的测试，下一节课我们会从业务的角度来测试 `headers` 模块。
