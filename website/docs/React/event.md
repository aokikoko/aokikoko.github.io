---
title: "[React] 事件处理"
sidebar_position: 3
---

# 事件处理

## 注册事件

React注册事件与DOM的事件语法非常像

语法`on+事件名=｛事件处理程序｝` 比如`onClick={this.handleClick}`

注意：**React事件采用驼峰命名法**，比如`onMouseEnter`, `onClick`

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    )
  }

  handleClick() {
    console.log('点击事件触发了')
  }
}
```

## 事件对象

+ 可以通过事件处理程序的参数获取到事件对象

+ React 中的事件对象叫做：合成事件（对象）
+ 合成事件：兼容所有浏览器，无需担心跨浏览器兼容性问题

```js
function handleClick(e) {
    e.preventDefault()
    console.log('事件对象', e)
}
<a onClick={this.handleClick}>点我，不会跳转页面</a>
```

## this指向问题

> 事件处理程序中的this指向的是undefined
>
> render方法中的this指向的而是当前react组件。**只有事件处理程序中的this有问题**

```jsx
class App extends React.Component {
  state = {
    count: 0
  }
  clickFn() {
    console.log(this)  // undefined
    console.log(this.state.msg)  // 报错Undefined
  }
  render() {
    console.log('render中的:', this)  // App组件
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>点我+1</button>
      </div>
    )
  }
}
```
对比vue, vue中的注册事件中的this就是当前组件

### 回顾this

```js
var length = 10
var obj = {
    length: 20,
    sayHi() {
        console.log(this.length)
    }
}
obj.sayHi()  //20  因为是obj调用的

const fn = obj.sayHi
fn()  // 这个是函数调用的this, 函数调用相当于全局作用域下, window调用的
// this指向window, 所以打印10

var arr = [obj.sayHi, 1, 2]

arr[0]()  // 这个obj.sayHi在数组里, 所以是数组arr调用的
// 打印的是arr的length, 所以打印3
```

:::tip 总结
谁调用指向谁
:::

### 分析this问题
```jsx
class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    console.log('render函数执行了')  // 自动打印输出说明自动执行了, 那么谁调用的它
    this.clickFn()   // 这样调用没问题
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>点我+1</button>
      </div>
    )
  }
}

// 将render方法名故意改成render1之后, 报错
// 分析源码发现是类似如下方式执行的render方法
const instance = new App()
instance.render()  //因为没有render1方法, 所以报错
// 所以render是被当前组件实例调用的
// 所以在类组件中render的this不会有问题
// this就指向当前组件

// 而注册事件中的this存在问题
// 因为在注册事件中 this.clickFn赋值给了onClick, 可以理解为如下代码

const onClick = this.clickFn
// 点一下按钮就执行 onClick()
// 模块化环境中是严格模式
// 严格模式中this不指向window, 而是undefined

// 因此如果想解决, 可以有如下一个方式
  render() {
    console.log('render函数执行了')
    // this.clickFn()   // 这样调用没问题
    const onClick = this.clickFn //把this.clickFn给onClick
    onClick.call(this)
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>点我+1</button>
      </div>
    )
  }
```

## this指向问题解决方案

```js
方案1：箭头函数
方案2：bind修改this指向
方案3：类实例方法
```

### 方式1: 箭头函数

+ 在render中使用箭头函数

箭头函数的特点：自身没有this，访问的是外部的this

  原本会错误的写法: onClick = {this.clickFn}  
  箭头函数写法: onClick = {() => {this.clickFn()}}

```js
class App extends React.Component {
  state = {
    msg: 'hello react'
    count: 1
  }
  render() {
    return (
      <div>
        <button onClick={() => this.clickFn()}>点我</button>
        // 这么写相当于onClick={() => {
          this.clickFn()
        }} 也就是让箭头函数调用this.clickFn这个函数
        // 箭头函数的this是render的this
        <button onClick={() => { console.log(this.state.msg) }}>点我</button>
      </div>
    )
  }
}
```

缺点：会把大量的js处理逻辑放到JSX中，将来不容易维护

### 方式2: bind

:::tip call和apply和bind区别
call和apply会调用函数, 也就是让函数执行  
bind不会执行这个函数, 而是返回一个新函数, 并且新函数的this指向是修改过的
:::

+ 解决方案2：使用bind

```js
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>点我</button>
      </div>
    )
  }
```

```js
class App extends React.Component {
  state = {
    msg: 'hello react'
  }
  handleClick() {
    console.log(this.state.msg)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>点我</button>
      </div>
    )
  }
}
```

或者

```js
class App extends React.Component {
  constructor() {
  	super()
    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    msg: 'hello react'
  }
  handleClick() {
    console.log(this.state.msg)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    )
  }
}
```

缺点：把大量的js逻辑写在了JSX结构中，不好维护

+ 解决方案3：class实例方法

```js
class App extends React.Component {
  state = {
    msg: 'hello react'
  }

  handleClick = () => {
    console.log(this.state.msg)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    )
  }
}
```

**注意：这个语法是试验性的语法，但是有babel的转义，所以没有任何问题**

# setState修改状态

+ 组件中的状态是可变的
+ 语法`this.setState({要修改的数据})`
+ 注意：不要直接修改state中的值，必须通过`this.setState()`方法进行修改
+ `setState`的作用
  + 修改state
  + 更新UI

+ 思想：数据驱动视图

```js
class App extends React.Component {
  state = {
    count: 1
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p>次数: {this.state.count}</p>
        <button onClick={this.handleClick.bind(this)}>点我+1</button>
      </div>
    )
  }
}
```

# 表单处理

> 我们在开发过程中，经常需要操作表单元素，比如获取表单的值或者是设置表单的值。

react中处理表单元素有两种方式：

+ 受控组件
+ 非受控组件（DOM操作）

## 受控组件基本概念

+ HTML中表单元素是可输入的，即表单用户并维护着自己的可变状态（value）。

+ 但是在react中，可变状态通常是保存在state中的，并且要求状态只能通过`setState`进行修改。

+ React中将state中的数据与表单元素的value值绑定到了一起，`由state的值来控制表单元素的值`
+ 受控组件：**value值受到了react控制的表单元素** 

<!-- ![](images/受控组件.png) -->

## 受控组件使用步骤

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

## 常见的受控组件

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

## 多表单元素的优化

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

## 非受控组件

> 非受控组件借助于ref，使用原生DOM的方式来获取表单元素的值

使用步骤

+ 调用`React.createRef()`方法创建一个ref

```js
constructor() {
  super()
  this.txtRef = React.createRef()
}
```

+ 将创建好的ref对象添加到文本框中

```js
<input type="text" ref={this.txtRef}/>
```

+ 通过ref对象获取文本框的值

```js
handleClick = () => {
  console.log(this.txtRef.current.value)
}
```

非受控组件用的不多，推荐使用受控组件



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