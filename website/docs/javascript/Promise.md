---
title: "[JS] Promise"
sidebar_position: 3
---

----------------------------------------------------------------

## 回调地狱
多层回调函数的相互嵌套, 就形成了回调地狱

```javascript
setTimeout(() => { // 第1层回调函数
  console.log('延时1秒后输出')

  setTimeout(() => {
    console.log('延时2秒后输出')

    setTimeout(() => {
      console.log('延时3秒后输出')
    }, 3000)
  }, 2000)
}, 1000)
```

## Promise
为了解决回调地狱, ES6中新增了Promise

  ### 基本概念
  1. promise是一个构造函数
      - 可以被new一个实例出来  
      - new出来的promise实例对象, 代表一个异步操作
  2. Promise.prototype 上包含一个 .then()方法
      - 每一次new Promise() 得到的实例对象, 都可以 `通过原型链的方式` 访问到.then() 方法
  3. .then() 方法用来预先指定成功和失败的回调函数
  ```javascript
    p.then(成功的回调, 失败的回调)
    p.then(result => {}, error => {})
    <!-- 调用.then() 方法时, 成功的回调函数是必选的, 失败的回调是可选的 -->
  ```