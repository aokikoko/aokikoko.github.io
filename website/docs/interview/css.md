---
slug: css
title: "[面试题] CSS"
sidebar_position: 99
---

## 居中的方法

### 水平居中

行内元素 text-align: center

块级元素 margin: 0 auto

多个块级元素 display: inline-block; text-align: center

用 flex , 给父元素加 display: flex; justify-content: center

### 垂直居中

行内元素 行高等于 line-height

多个块级元素 display: flex; justify-content: center; flex-direction: column

用定位 top left 50% ; transform: translateY(-50%)

## Flex

flex-direction ：设置主轴的方向
justify-content ：设置主轴上的子元素排列方式
flex-wrap ：设置子元素是否换行
align-content ：设置侧轴上的子元素排列方式（多行）
align-items ：设置侧轴上的子元素排列方式（单行）
flex-flow ：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

## React

使用 Fragment

不在 JSX 中定义函数, 比如箭头函数. 因为 React 中的 jsx 会频繁执行, state 更改一次, jsx 执行一词

优化 React 中的条件渲染；

、路由懒加载；

列表渲染的时候加 key；

在函数组件中使用 useCallback 和 useMemo 来进行组件优化，依赖没有变化的话，不重复执行；

