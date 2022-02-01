---
title: "[React] 生命周期"
sidebar_position: 6
---

## 概述

+  意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因等
+ 组件的生命周期：组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程
+  钩子函数的作用：为开发人员在不同阶段操作组件提供了时机。
+  **只有 类组件 才有生命周期。**

## 生命周期的整体说明

+ 每个阶段的执行时机
+ 每个阶段钩子函数的执行顺序
+ 每个阶段钩子函数的作用
+ <http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

![](assets/组件生命周期.jpg)

## 挂载阶段

执行时机：组件创建时（页面加载时）

执行顺序：

![](assets/组件的执行顺序.png)

| 钩子 函数   | 触发时机             | 作用                                     |
| ----------- | -------------------- | ---------------------------------------- |
| constructor | 创建组件时，最先执行 |  1. 初始化state  2. 创建Ref等  |
| render      | 每次组件渲染都会触发 | 渲染UI（**注意： 不能调用setState()** ） |
| componentDidMount | 组件挂载（完成DOM渲染）后 | 1. 发送网络请求   2.DOM操作 |

```jsx title="各钩子函数作用"
constructor: 初始化, 
类刚初始化的时候, 此时没有dom,
此时适合 
1. 提供数据
this.state = {}
2. 提供ref 
this.inputRef = React.createRef()
3. 绑定this指向
this.handlClick = this.handlClick.bind(this)

render: 渲染组件的结构, 渲染页面
不只执行一次, 更新的时候也要执行render
因为更新需要重新渲染新结构
所以意味着有注意事项: 不能调用setState()
因为如果这样做, 代码进入render执行setState
setState执行的时候会把组件更新, 比如
<input type="text" value={this.state.msg} onClick={this.setState({})}></input>

componentDidMount: 代表dom挂载好了
1. 网络发送请求
dom渲染好, 在渲染的时候没数据, 所以只有初始的结构.
发请求数据回来, 把原来默认数据改掉, vue里数据变了会重新渲染
2. DOM操作
```

## 更新阶段

+ 执行时机：1. setState() 2. forceUpdate() 3. 组件接收到新的props
+ 说明：以上三者任意一种变化，组件就会重新渲染
+ 执行顺序

![](assets/更新阶段.png)

| 钩子函数           | 触发时机                  | 作用                                                 |
| ------------------ | ------------------------- | ---------------------------------------------------- |
| render             | 每次组件渲染都会触发      | 渲染UI（与 挂载阶段 是同一个render）                 |
| componentDidUpdate | 组件更新（完成DOM渲染）后 | DOM操作，可以获取到更新后的DOM内容，**不要调用setState** |

:::tip 更新时机
1. new props    
父组件给的props变化  
2. setState()  
组件调setState, 修改自己的状态  
3. forceUpdate()  
强制更新  
:::

## 卸载阶段

+ 执行时机：组件从页面中消失

| 钩子函数             | 触发时机                 | 作用                               |
| -------------------- | ------------------------ | ---------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |



