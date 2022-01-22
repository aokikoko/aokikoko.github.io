---
title: "[React] JSX语法使用简介"
sidebar_position: 1
---


## React 的基本使用

### 基本步骤

+ 使用步骤

```
- 导入react和react-dom     
- 创建react元素(虚拟DOM)
- 渲染react元素到页面中
```

+ 导入react和react-dom

```js
// 导入react和react-dom
import React from 'react'
import ReactDOM from 'react-dom'
```
:::tip 
因为是web开发导入react-dom,   
如果是app开发导入的则是react-native或其他库
:::

+ 创建react元素

```js
/** <h1 id="box">我是内容</h1>
 * @param {标签名, 标签属性, 标签的内容}
 */
const element = React.createElement('h1', {id: 'box', title: '哈哈'}, '我是内容')
```

+ 渲染react元素到页面

```js
/**
 * @param {渲染的虚拟dom, 需要渲染到哪个容器中}
 */
ReactDOM.render(element, document.getElementById('root'))
```

### 练习

1. 使用react，生成以下结构

```jsx
<div id="box" class="demo">这是一个react案例</div>
```

2. 生成结构2

```jsx
<ul class="list">
    <li>香蕉</li>
    <li>橘子</li>
    <li>苹果</li>
</ul>
```

### 小结

+ 能够说出react是什么
  + 是用于构建用户界面的javascript库
+ 能够说出react的特点
  + 声明式ui
  + 组件化
  + 一处学习，多次使用  react-dom  react-native

## JSX

### 学习目标

- 能够知道什么是jsx
- 能够使用jsx创建react元素
- 能够在jsx中使用javascript表达式 `{}`
- 能够使用jsx的条件渲染和列表渲染
- 能够给jsx添加样式

### JSX的基本使用

### createElement的问题

- 繁琐不简洁,不直观，无法一眼看出所描述的结构

### JSX简介 

`JSX`是`JavaScript XML`的简写，表示了在Javascript代码中写XML(HTML)格式的代码

优势：声明式语法更加直观，与HTML结构相同，降低学习成本，提高开发效率。

 **JSX是react的核心内容**

注意：*JSX 不是标准的 JS 语法，是 JS 的语法扩展。脚手架中内置的 `@babel/plugin-transform-react-jsx` 包，用来解析该语法。*



### 使用步骤

```
- 导入react和reactDOM包
- 使用jsx语法创建react元素
- 把react元素渲染到页面中
```

+ 导入react和reactDOM

```js
// 导入react和react-dom
import React from 'react'
import ReactDOM from 'react-dom'
```

+ 创建react元素

```js
// 创建元素
const title = <h1 title="哈哈"></h1>
```

+ 渲染元素

```js
// 渲染元素
ReactDOM.render(title, document.getElementById('root'))
```

### 17版本以上JSX注意点

:::caution 17版本
即便不import react, 仅导入ReactDOM, 依然可以渲染  
因为17版本以后jsx不依赖react包  
17版本之前是通过babel转成React.createElement
17版本之后是转成_jsxRuntime.jsxs
:::

+ 只有在脚手架中才能使用jsx语法
  + 因为JSX需要经过babel的编译处理，才能在浏览器中使用。脚手架中已经默认有了这个配置。
+ JSX必须要有一个根节点， `<></>`  `<React.Fragment></React.Fragment>`

+ JSX可以换行，如果JSX有多行，推荐使用`()`包裹JSX，防止自动插入分号的bug

### 使用prettier插件格式化react代码

+ 安装插件

+ 添加prettier的配置

```json
// 保存到额时候用使用prettier进行格式化
"editor.formatOnSave": true,
// 不要有分号
"prettier.semi": false,
// 使用单引号
"prettier.singleQuote": true,
// 默认使用prittier作为格式化工具
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

### JSX中嵌入JavaScript表达式

> 在jsx中可以在`{}`来使用js表达式

+ 基本使用

```js
const name = 'zs'
const age = 18
const title = (
  <h1>
    姓名：{name}, 年龄：{age}
  </h1>
)
```

+ 可以访问对象的属性

```js
const car = {
    brand: '玛莎拉蒂'
}
const title = (
  <h1>
    汽车：{car.brand}
  </h1>
)
```

+ 可以访问数组的下标

```js
const friends = ['张三', '李四']
const title = (
  <h1>
    汽车：{friends[1]}
  </h1>
)
```

+ 可以使用三元运算符

```js
const gender = 18
const title = (
  <h1>
    性别：{age >= 18? '是':'否'}
  </h1>
)
```

+ 可以调用方法

```js
function sayHi() {
  return '你好'
}
const title = <h1>姓名：{sayHi()}</h1>
```

+ JSX本身

```js
const span = <span>我是一个span</span>
const title = <h1>盒子{span}</h1>
```

+ JSX中的注释

```js
{/* 这是jsx中的注释 */}   推荐快键键 ctrl + /
```

+ 不要出现语句，比如`if` `for`

## 条件渲染

> 在react中，一切都是javascript，所以条件渲染完全是通过js来控制的

+ 通过判断`if/else`控制 

```js
const isLoding = false
const loadData = () => {
  if (isLoding) {
    return <div>数据加载中.....</div>
  } else {
    return <div>数据加载完成，此处显示加载后的数据</div>
  }
}

const title = <div>条件渲染：{loadData()}</div>
```

+ 通过三元运算符控制

```js
const isLoding = false
const loadData = () => {
  return isLoding ? (
    <div>数据加载中.....</div>
  ) : (
    <div>数据加载完成，此处显示加载后的数据</div>
  )
}
```

+ 逻辑运算符

```js
const isLoding = false
const loadData = () => {
  return isLoding && <div>加载中...</div>
}

const title = <div>条件渲染：{loadData()}</div>
```

## vscode配置自动补全

```jsx
// 当按tab键的时候，会自动提示
"emmet.triggerExpansionOnTab": true,
"emmet.showAbbreviationSuggestions": true,
// jsx的提示
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}
```



## 列表渲染

> 我们经常需要遍历一个数组来重复渲染一段结构
>
> 在react中，通过map方法进行列表的渲染

+ 列表的渲染 

```js
const songs = ['温柔', '倔强', '私奔到月球']

const list = songs.map(song => <li>{song}</li>)

const dv = (
  <div>
    <ul>{list}</ul>
  </div>
)
```

+ 直接在JSX中渲染

```js
const songs = ['温柔', '倔强', '私奔到月球']

const dv = (
  <div>
    <ul>{songs.map(song => <li>{song}</li>)}</ul>
  </div>
)
```

+ key属性的使用

```js
const dv = (
  <div>
    <ul>
      {songs.map(song => (
        <li key={song}>{song}</li>
      ))}
    </ul>
  </div>
)
```

**注意：列表渲染时应该给重复渲染的元素添加key属性，key属性的值要保证唯一**

**注意：key值避免使用index下标，因为下标会发生改变**

## 样式处理

### 行内样式-style

```js
const dv = (
  <div style={{ color: 'red', backgroundColor: 'pink' }}>style样式</div>
)
```

### 类名-className

```js
// 导入样式
import './base.css'
const dv = <div className="title">style样式</div>
```

base.css样式文件

```css
.title {
  text-align: center;
  color: red;
  background-color: pink;
}
```

## 总结

+ JSX是React的核心内容
+ JSX表示在JS代码中书写HTML结构，是React声明式的体现
+ 使用JSX配合嵌入的JS表达式，条件渲染，列表渲染，可以渲染任意的UI结构
+ 结果使用className和style的方式给JSX添加样式

+ React完全利用JS的语言自身的能力来编写UI，而不是造轮子增强HTML的功能。（对比VUE）

