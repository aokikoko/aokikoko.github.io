---
title: "[TS] ts-axios"
sidebar_position: 8
---

-----

## Features
* 在浏览器端使用XMLHttpRequest对象通讯
* 支持Promise API
* 支持请求和响应的拦截器
* 支持请求数据和响应数据的转换
* 支持请求的取消
* JSON数据的自动转换
* 客户端防止XSRF

---
## 初始化项目
  ### 创建代码仓库
  ### 使用typescript-library-starter
  * Usage

  ```javascript
  git clone https://github.com/alexjoverm/typescript-library-starter.git YOURFOLDERNAME
  cd YOURFOLDERNAME

  npm install
  ```

  ### 创建好后的代码关联远程仓库
  ```git
  git remote add origin ssh地址
  git push 代码
  ```

-----
## 编写基础请求代码

### Features
目标实现简单的发送请求功能, 即客户端通过XMLHttpRequest 对象把请求发送到server端, server端能接收到请求并响应即可.  
实现axios最基本的操作, 通过传入一个对象发送请求, 如下:

  ```javascript
  axios({
    method: 'get',
    url: '/xx',
    params: {
      a: 1, 2, 3
      b: 20
    }
  })
  ```

```typescript
import { AxiosRequestConfig } from './types'

function axios(config: AxiosRequestConfig) {
  // todo
}

export default axios

// 项目中所有公共的类型定义文件
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'OPTIONS'
  | 'options'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  methods?: Method
  data?: any
  params?: any
}

```