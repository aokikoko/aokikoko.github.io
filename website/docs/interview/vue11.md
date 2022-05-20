---
slug: yuanma
title: "[面试题] Vue精讲-vue源码"
sidebar_position: 23
---

##

`Vue`源码的获取

项目地址：`https://github.com/vuejs/vue`

为什么分析`Vue2.6`? 新的版本发布后，现有项目不会升级到`3.0`,`2.x`还有很长的一段过渡期。

`3.0`项目地址`https://github.com/vuejs/vue-next`

源码目录结构(在`src`目录下面定义的就是源码内容)：

```
compiler: 编译相关（主要作用:就是把模板转换成render函数，在render函数中创建虚拟DOM）
core:Vue核心库
platforms:平台相关代码,web:基于web的开发，weex是基于移动端的开发
server:SSR，服务端渲染
sfc:将.vue文件编译为js对象
shared:公共的代码
```

​ 在`core`目录是`Vue`的核心库，在`core`目录下面，也定义了很多的文件夹，下面我们先简单来看一下。

`components`目录下面定义的是`keep-alive.js`组件。

`global-api`:定义的是`Vue`中的静态方法。`vue.filter`,`vue.extend`,`vue.mixin`,`vue.use`等。

`Instance`:创建`vue`的实例，定义了`Vue`的构造函数，初始化，以及生命周期的钩子函数等。

`observer`:定义响应式机制的位置，

`util`:定义公共成员。

`vodom`:定义虚拟`DOM`
