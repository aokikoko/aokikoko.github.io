---
slug: module
title: "[面试题] 模块化"
sidebar_position: 14
---

## 模块化发展过程(上)

1. 文件划分模块

早期根据文件划分, 每个文件就是一个独立的模块, 在使用时引入文件即可

```js
// a文件
console.log('a')

// b文件去使用
<script src="a.js"></script>
```

这种方式存在命名冲突的问题, 所以这种方式模块化需要进行一些约定, 随着项目越来越大存在各种各样的问题

2. 命名空间全局对象

约定每个模块只暴露一个全局对象, 模块所有成员都挂载到全局对象的下面

```js
// a.js

var moduleObj = {
  userName: "zs",
  fn: function () {
    console.log("hello world");
  },
};

// b文件去使用
<script src="a.js"></script>
<script>
  moduleObj.fn()
</script>
```

这种方式没有实现私有, 模块外部可以访问并且修改模块内的东西

3. 立即执行函数方式

```js
// a.js
(function () {
  var userName = "lisi";
  function fn1() {
    console.log(userName);
  }
  function fn2() {
    console.log("hello world");
  }
  window.moduleObj = {
    fn1: fn1,
    fn2: fn2,
  };
})();

// b文件去使用
<script src="a.js"></script>
<script>
  moduleObj.fn1()
</script>
```

实现了私有成员的概念, 也就是说外部无法访问模块内的成员, 比如

```js
在b文件中
<script>
  moduleObj.userName // undefined
</script>
```

## 模块化的发展过程(下)

上面几种方式都是通过一些约定的方式来实现, 在实际应用中难免出现意想不到的情况. 所以在模块化开发的时候需要一些标准和规范, 同时在使用时都是通过 script 标签, 手动来引入模块. 这样容易忘记引入或者移除等等问题.

所以如果可以通过一些代码来自动引入, 所以出现了一些库和规范

### CommonJS(module.exports)

它也是 nodejs 提供的规范, 浏览器端使用这种规范不能用, 因为 commonjs 是同步模式加载模块的, 因为 nodejs 的执行机制是在启动的时候就加载模块, 在执行过程中是不需要加载模块的, 所以在浏览器端会出现加载效率低的问题, 比如每次页面加载的时候就发送大量同步请求. 这样就降低了模块加载效率, 所以 commonjs 适合在 node 环境

```js
// commonjs的规范要求
1. 一个文件就是一个模块
2. 通过module.exports导出成员项
3. 通过require函数加载模块
4. 每个模块都有单独的作用域
```

### AMD(Require.js)

异步模块规范. 为了解决浏览器端 commonjs 规范的问题

```js
// 伪代码
define("创建的模块名", ["创建的模块依赖项"]);

// 比如
define("moduleA", ["jquery", "./moduleB"], function ($, moduleB) {
  return {
    fn: function () {
      // $('p')...
    },
  };
});
require(["要加载的模块的路径"], function (moduleA) {
  moduleA.fn();
});
```

### ES Module

```js
// 浏览器支持
<script type="module">console.log('hello world')</script>;

// 1. 自动开启了严格模式
console.log(this); // undefined
// 2. 每个ES Module 都是运行在单独的私有的作用域中
// 3. ES Module通过CORS的方式请求外部的JS模块, 如果服务端不支持CORS, 则会出现跨域的问题
// 4. ES Module的script标签会延迟执行脚本， 类似于添加了defer
```
