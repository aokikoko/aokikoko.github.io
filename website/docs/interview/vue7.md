---
slug: vue-virtual
title: "[面试题] Vue精讲-虚拟DOM"
sidebar_position: 19
---

## Vue 生成虚拟 dom 的过程

![virtual](assets/virtual.png)

从`Vue2.x`开始内部使用的虚拟`DOM`，就是改造的`Snabbdom`.

`Snabbdom`源码大约 200 行作用，可以通过模块来进行扩展，所以功能比较强大。

源码使用`TypeScript`开发，官方宣称是最块的`Virtual Dom`之一。
