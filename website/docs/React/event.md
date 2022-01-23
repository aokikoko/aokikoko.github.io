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

```jsx title="使用bind写法1"
  render() {
    // bind把this绑定为render里的this
    // render里的this没有问题, 因为是通过实例调用的
    this.clickFn = this.clickFn.bind(this)
    return (
      <div>
        <button onClick={this.clickFn}>点我</button>
      </div>
    )
  }
```

```jsx  title="使用bind写法2"
  render() {
    return (
      <div>
        <button onClick={this.clickFn.bind(this)}>点我</button>
      </div>
    )
  }
```

```jsx title="使用bind写法3"
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

### 方式3: 类实例语法


+ 解决方案3：class实例方法

```jsx title="错误示例"
class App extends React.Component {
  state = {
    count: 0
  }

  handleClick = function () {
    console.log(this)   // 此时虽然能执行了, 但是输出undefined
    // 因为function内部有this, 但this取决于谁调用
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

```js
class App extends React.Component {
  state = {
    count: 0
  }

  handleClick = () => {
    console.log(this)  // 改成箭头函数相当于实例的属性了, 值还是一个箭头函数, 箭头函数内部没this
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

:::tip 类实例语法补充
```js  
class Person {  
  constructor() {  
    this.name = 'haha'  
    this.age = 18  
  }  
  say() {  
    console.log('哈哈')  
  }  
}  
const p = new Person()
console.log(p)

// 注意: 打印的say方法不是在实例上, 而是在原型__proto__上
// 而下面方式
class Person {  
  // constructor() {  
  //   this.name = 'haha'  
  //   this.age = 18  
  // }  
  name = 'haha'
  age = 18
  say = () => {  
    console.log('哈哈')  
  }  
}  
const p = new Person()
console.log(p)
// 这样写属性增加给创建的p对象上了
// 相当于this.say = () => {}
```
:::

## setState修改状态

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

### 对比vue

:::tip 对比vue
vue数据变视图会变  
而react并不一定  
因为vue双向数据绑定  
react没有这个概念  
vue劫持了数据的变化, 用了ES5的object.defineProperty  
这个存在缺陷是无法监听数组的下标和长度变化  
无法监听对象的新增的属性  
无法监听对象的删除的变化  
为了解决这个问题 vue3使用了Proxy代替  
那么也导致了es6的Proxy在IE11的兼容性  
vue3不支持ie11

而react不采用defineProperty和Proxy来监听数据变化,  
那么又不需要直接操作dom,  
所以提供了setState, 更新state和DOM
但需要开发者手动调用, 所以你也清楚何时更新dom
:::

### count++和count + 1的区别
```jsx
const num = 1 
num+1 // num+1结果变成了num本身还是1, 因为没赋值
num++ // num++ 等价于 num = num + 1, num的值发生变化 
```

### 状态不可变

+ 核心理念: `状态不可变`
> 不要直接修改react中state的值, 而是提供新的值
> 直接修改react中state的值, 组件并不会更新
```jsx
  state = {
    count: 0, 
    msg: 'hello world',
    user: {
      name: 'zs'
      age: 18,
    }
    list: ['张三', '李四', '王五']
  }
  clickFn = () => {
    this.setState({
      count: 1,
      msg: 'hello',
      user: {
        ...this.state.user,
        name: 'ls'
      }, 
      list: this.state.list.filter((item) => item !== '李四')
    })
  }
```
