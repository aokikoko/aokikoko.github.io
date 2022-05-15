---
slug: vue3
title: "[面试题] Vue精讲"
sidebar_position: 15
---

## MVVM 框架作用

数据(`Model`)和视图(`View`)是不能直接通讯的，而是需要通过`ViewModel`来实现双方的通讯。当数据(`Model`)变化的时候，`ViewModel`能够监听到这种变化，并及时通知`View`视图做出修改。同样的，当页面有事件触发的时候，`ViewModel`也能够监听到事件，并通知数据(`Model`)进行响应。所以`ViewModel`就相当于一个观察者，监控着双方的动作，并及时通知对方进行相应的操作。

简单的理解就是：`MVVM` 实现了将业务(数据)与视图进行分离的功能。

## MVVM 框架三要素

`MVVM`框架的三要素：响应式，模板引擎，渲染

响应式：`vue`如何监听数据的变化？

模板：`Vue`的模板如何编写和解析？怎样将具体的值替换掉`{{msg}}`内容，这就是模板引擎的解析。

渲染：`Vue`如何将模板转换成`html`? 其实就是有虚拟`DOM` 向真实`DOM`的转换。

## 模板语法

### v-bind 属性绑定

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>

  <div id="app">
    <h2 v-bind:title="msg">{{msg}}</h2>
  </div>


  <script>
    var app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue!'
  }
})
  </script>
</body>
</html>
```

### v-for 列表渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>列表渲染</title>
  </head>
  <body>
    <div id="app">
      <ul>
        <!-- users表示数组，item表示从数组中取出的对象,这个名字可以随意取 -->
        <!-- 注意 v-for必须结合key属性来使用，它会唯一标识数组中的每一项，未来当数组中的那一项改变的时候，它会只更新那一项，好处就是提升性能。注意key的值唯一，不能重复 -->
        <!-- index表示数组的索引值，该名字可以随意定义 -->
        <li v-for="(item,index) in users" :key="item.id">
          编号：{{item.id}} 姓名:{{item.name}}---索引:{{index}}
        </li>
      </ul>
    </div>
    <!-- <script src="vue.js"></script> -->
    <script>
      new Vue({
        el: "#app",
        data: {
          users: [
            {
              id: 1,
              name: "张三",
            },
            {
              id: 2,
              name: "李四",
            },
            {
              id: 3,
              name: "老王",
            },
          ],
        },
      });
    </script>
  </body>
</html>
```

### v-model 双向数据绑定

v-model 只能在 input/textarea/selet 也就是表单元素

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双向数据绑定</title>
    <script src="./vue.js"></script>
  </head>

  <body>
    <div id="app">
      <input type="text" v-model="userName" />
    </div>
    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          userName: "zhangsan",
        },
      });
    </script>
  </body>
</html>
```

### v-on @监听事件

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="./vue.js"></script>
  </head>

  <body>
    <div id="app">
      <span>{{ name }}</span>
      <!-- 通过v-on来指定对应的事件，然后后面跟上对应的方法名，方法的定义在methods完成 -->
      <button v-on:click="changeName">更换姓名</button>
    </div>
    <script>
      var vm = new new Vue({
        el: "#app",
        data: {
          name: "zhangsan",
        },
        // 通过methods完成函数或方法的定义
        methods: {
          changeName() {
            // 在methods中要获取data中的属性，需要通过this来完成，this表示的是vue实例。
            this.name = "itcast";
          },
        },
      })();
    </script>
  </body>
</html>
```

还可以通过简写的形式。建议以后都使用简写的形式

```vue
<button @click="changeName">更换姓名</button>
```

带参数的形式如下：

```vue
<button @click="changeNameByArg('laowang')">带参数的情况</button>

<script>
var vm = new new Vue({
  el: "#app",
  data: {
    name: "zhangsan",
  },
  // 通过methods完成函数或方法的定义
  methods: {
    changeName() {
      // 在methods中要获取data中的属性，需要通过this来完成，this表示的是vue实例。
      this.name = "itcast";
    },
    changeNameByArg(userName) {
      this.name = userName;
    },
  },
})();
</script>
```

### :class Class 与 style 绑定

略

### v-if v-show 条件渲染

略

### 计算属性

计算属性出现的目的是解决模板中放入过多的逻辑会让模板过重且难以维护的问题.

计算属性是根据 data 中已有的属性，计算得到一个新的属性.

下面，我们可以通过一个案例来学习一下计算属性、

在一个文本框中输入第一个名字，第二个文本框中输入第二个名字，然后展示全部名称。
