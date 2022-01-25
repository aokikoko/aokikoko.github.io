---
title: "[React] 表单处理"
sidebar_position: 4
---

## 表单处理

> 我们在开发过程中，经常需要操作表单元素，比如获取表单的值或者是设置表单的值。

react中处理表单元素有两种方式：

+ 受控组件
+ 非受控组件（DOM操作）

### 受控组件基本概念

+ HTML中表单元素是可输入的，即表单用户并维护着自己的可变状态（value）。

+ 但是在react中，可变状态通常是保存在state中的，并且要求状态只能通过`setState`进行修改。

+ React中将state中的数据与表单元素的value值绑定到了一起，`由state的值来控制表单元素的值`
+ 受控组件：**value值受到了react控制的表单元素** 

<!-- ![](images/受控组件.png) -->

### 受控组件使用步骤

1. 在state中添加一个状态，作为表单元素的value值（控制表单元素的值）
2. 给表单元素添加change事件，设置state的值为表单元素的值（控制值的变化）

```js
class App extends React.Component {
  state = {
    msg: 'hello react'
  }

  handleChange = (e) => {
    this.setState({
      msg: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.msg} onChange={this.handleChange}/>
      </div>
    )
  }
}
```

### 常见的受控组件

+ 文本框、文本域、下拉框（操作value属性）
+ 复选框（操作checked属性）

```js
class App extends React.Component {
  state = {
    usernmae: '',
    desc: '',
    city: "2",
    isSingle: true
  }
 
  handleName = e => {
    this.setState({
      name: e.target.value
    })
  }
  handleDesc = e => {
    this.setState({
      desc: e.target.value
    })
  }
  handleCity = e => {
    this.setState({
      city: e.target.value
    })
  }
  handleSingle = e => {
    this.setState({
      isSingle: e.target.checked
    })
  }

  render() {
    return (
      <div>
        姓名：<input type="text" value={this.state.username} onChange={this.handleName}/>
        <br/>
        描述：<textarea value={this.state.desc} onChange={this.handleDesc}></textarea>
        <br/>
        城市：<select value={this.state.city} onChange={this.handleCity}>
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
        <br/>
        是否单身：<input type="checkbox" checked={this.state.isSingle} onChange={this.handleSingle}/>
      </div>
    )
  }
}
```

### 多表单元素的优化

问题：每个表单元素都需要一个单独的事件处理程序，处理太繁琐

优化：使用一个事件处理程序处理多个表单元素

步骤

 + 给表单元素添加name属性，名称与state属性名相同
 + 根据表单元素类型获取对应的值
 + 在事件处理程序中通过`[name]`修改对应的state

```js
class App extends React.Component {
  state = {
    username: '',
    desc: '',
    city: "2",
    isSingle: true
  }
 
  handleChange = e => {
    let {name, type, value, checked} = e.target
    console.log(name, type, value, checked)
    value = type === 'checkbox' ? checked : value
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        姓名：<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <br/>
        描述：<textarea name="desc" value={this.state.desc} onChange={this.handleChange}></textarea>
        <br/>
        城市：<select name="city" value={this.state.city} onChange={this.handleChange}>
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
        <br/>
        是否单身：<input type="checkbox" name="isSingle" checked={this.state.isSingle} onChange={this.handleChange}/>
      </div>
    )
  }
}
```

### 属性名表达式
:::tip 回顾ES6属性名表达式
  ```jsx
  // 在es6以前, 属性的名字必须是指定好的, 属性的值可以是任意的表达式
  const obj = {
    name: 'zs' + 'ls',
    age: 18 + 100,
  }
  // 在es6以后, 属性的名字也可以是任意的表达式, 前提: 放在 [] 中
  const key = 'age'
  const obj = {
    ['na' + 'me'] : 'zs',
    [key]: 200,
  }
  ```
:::


## 非受控组件

> 非受控组件借助于ref，使用原生DOM的方式来获取表单元素的值  
> ref作用: 给某个dom或者组件加引用 vue中用this.$refs

### react中ref使用步骤

+ 调用`React.createRef()`方法创建一个ref

```js
constructor() {
  super()
  this.txtRef = React.createRef()
}
```

+ 通过ref={this.xxx} 关联给某个DOM对象或者组件

```js
<input type="text" ref={this.txtRef}/>
```

+ 通过this.xxx.current属性获取到对应的DOM

```js
handleClick = () => {
  console.log(this.txtRef.current.value)
}
```

:::tip
非受控组件用的不多，推荐使用受控组件  
除非真的要操作某个dom对象,   
或者使用组件里某个方法等场景 
:::


# 综合案例

评论列表案例

## 列表展示功能

渲染评论列表（列表渲染）

+ 在state中初始化评论列表数据
+ 使用数组的map方法遍历列表数据
+ 给每个li添加key属性

## 发表评论功能

获取评论信息，评论人和评论内容（受控组件）

+ 使用受控组件的方式获取评论数据

发表评论，更新评论列表（更新状态）

 + 给comments增加一条数据

边界处理

 + 清空内容
 + 判断非空

## 清空评论功能

+ 给清空评论按钮注册事件

+ 清空评论列表
+ 没有更多评论的处理