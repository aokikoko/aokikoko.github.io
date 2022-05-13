---
slug: es6
title: "[面试题] 模块化"
sidebar_position: 14
---

## 模块化发展过程

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

```