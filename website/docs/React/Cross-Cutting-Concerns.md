---
title: "[React] 组件复用"
sidebar_position: 9
---

## 组件复用的说明

+ 思考：如果两个组件中的部分功能相似或相同，该如何处理？
+ 处理方式：复用相似的功能（联想函数封装）
+ 复用什么？1. state 2. 操作state的方法   **复用组件的状态和组件的逻辑，组件的UI不一样**
+ 两种解决方案
  + render-props
  + HOC（高阶组件）

+ 注意：这两种方式不是新的API，而是利用React自身特点的编码技巧，演化而成的固定模式（写法）

hooks出现之前, react的三种组件复用方式
1. mixin 已废弃
2. render-props
3. HOC

## mixins（已废弃）

> https://react.docschina.org/blog/2016/07/13/mixins-considered-harmful.html

+ mixin引入了隐式依赖关系
  + 对于组件中的方法和数据的来源不明确，不容易维护
+ Mixins 导致名称冲突
+ Mixins 导致滚雪球般的复杂性

## render-props

### render-props基本使用

+ 思路：将要复用的state和操作state的方法封装到一个组件中

+ 问题：渲染的UI内容不一样，该怎么办
+ **在使用组件时，添加一个值为函数的prop，通常把这个prop命名为render，在组件内部调用这个函数。传进来的函数负责渲染UI**
+ 问题2：如果获取组件内部的状态
+ **在组件内部调用方法的时候，把状态当成参数进行传递**

```jsx
class Mouse extends React.Component {
	// … 省略state和操作state的方法
    render() {
    	return this.props.render(this.state)
    }
}
```

```jsx
<Mouse render={(mouse) => (
	<p>鼠标当前位置 {mouse.x}，{mouse.y}</p>
)}/>
```

### children代替render属性

+ 注意：并不是该模式叫 render props 就必须使用名为render的prop，实际上可以使用任意名称的prop
+ 把prop是一个函数并且告诉组件要渲染什么内容的技术叫做：render props模式
+ 推荐：使用 children 代替 render 属性

```jsx
<Mouse>
	{({x, y}) => <p>鼠标的位置是 {x}，{y}</p> }
</Mouse>
// 组件内部：
this.props.children(this.state)
```



```jsx
// Context 中的用法：
<Consumer>
	{data => <span>data参数表示接收到的数据 -- {data}</span>}
</Consumer>
```

### render-props优化

+ 推荐：给 render props 模式添加 props校验
+ 应该在组件卸载时解除 mousemove 事件绑定

```jsx
Mouse.propTypes = {
  chidlren: PropTypes.func.isRequired
}
```



```jsx
componentWillUnmount() {
 window.removeEventListener('mousemove', this.handleMouseMove)
}
```

封装一个组件，用于提取公共的状态和逻辑，比如鼠标的位置以及鼠标位置的更新，渲染的内容是不确定的，让组件接受一个叫children的prop，而且children必须是一个函数

## 高阶组件  HOC higher order component

### 概述

+ 目的：实现状态逻辑复用   增强一个组件的能力

+ 采用 包装（装饰）模式 ，比如说：手机壳
+ 手机：获取保护功能
+ 手机壳 ：提供保护功能
+ 高阶组件就相当于手机壳，通过包装组件，增强组件功能


### 思路分析

+ 高阶组件（HOC，Higher-Order Component）是一个函数，接收要包装的组件，返回增强后的组件
+ 高阶组件的命名： `withMouse`  `withRouter` `withXXX`
+ 高阶组件内部创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过prop将复用的状态传递给
  被包装组件 

```jsx
const CatWithMouse = withMouse(Cat)
const PositionWithMOuse = withMouse(Position)
```



```jsx
// 高阶组件内部创建的类组件：
const WithMouse = (Base) => {
  class Mouse extends React.Component {
        // 处理鼠标的位置等操作
        render() {
            return <Base {...this.state} />
        }
	}	
  return Mouse
}
```

### 使用步骤

+ 创建一个函数，名称约定以 with 开头
+ 指定函数参数（作为要增强的组件）  传入的组件只能渲染基本的UI
+ 在函数内部创建一个类组件，**提供复用的状态逻辑代码**，并返回
+ 在内部创建的组件的render中，需要渲染传入的基本组件，增强功能，通过props的方式给基本组件传值
+ 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件，并将其渲染到页面中

```jsx
// 创建组件
const MousePosition = withMouse(Position)

// 渲染组件
<MousePosition />
```

### 传递props

+ 问题：props丢失
+ 原因：高阶组件没有往下传递props
+ 解决方式：渲染 WrappedComponent 时，将 state 和 this.props 一起传递给组件
+ 传递方式：

```js
<WrappedComponent {...this.state} {...this.props} />
```
