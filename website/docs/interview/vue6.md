---
slug: vue-res
title: "[面试题] Vue精讲-Vue响应式原理"
sidebar_position: 18
---

## 数据驱动

在实现整个`Vue`响应式代码之前，我们先来了解几个概念。

第一个：数据驱动

第二个：响应式的核心原理

第三个：发布订阅模式和观察这模式

我们先来看一下数据驱动的内容：

数据响应式，双向绑定，数据驱动（我们经常看到这几个词）

数据响应式：数据模型仅仅是普通的`JavaScript`对象，而当我们修改数据时，视图会进行更新，避免了频繁的`DOM`操作，提高开发效率，这与`Jquery`不一样，`Jquery`是频繁的操作`Dom`

双向绑定：

数据改变，视图改变，视图改变，数据也随之改变( 通过这句话，我们可以看到在双向绑定中是包含了数据响应式的内容)

​ 我们可以使用`v-model` 在表单元素上创建双向数据绑定

数据驱动是`Vue`最独特的特性之一

​ 开发过程中仅仅需要关注数据本身，不需要关心数据是如何渲染到视图中的。主流的`MVVM`框架都已经实现了数据响应式与双向绑定，所以可以将数据绑定到`DOM`上。

## 响应式的核心原理

关于`Vue2.x`的响应式原理在官方文档中也有介绍。

`https://cn.vuejs.org/v2/guide/reactivity.html`

在该文档中，我们注意如下一段内容：

:::tip
当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 降级 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。
:::

通过以上的文字，我们可以看到，在`Vue2.x`中响应式的实现是通过`Object.defineProperty`来完成的，注意该属性无法降级(shim)处理，所以`Vue`不支持`IE8`以及更低版本的浏览器的原因。

### `Object.defineProperty`基本使用

来看一下如何将属性通过 defineProperty 方法转换成响应式

```js
  <body>
    <div id="app"></div>
    <script>
      // 模拟data选项
      let data = {
        msg: "hello",
      };
      // 模拟vue实例
      let vm = {};

      // 相当于在这里做了数据劫持的操作, 当我们去访问或者说设置vm对象当中成员的时候, 我们要做一些干预性的操作,
      // msg可以想象成data对象中的一个属性
      Object.defineProperty(vm, "msg", {
        enumerate: true, // 可枚举
        configurable: true, // 可以做配置 比如删除操作
        // 最重要的还要加上get和set方法
        get() {
          console.log("get", data.msg);
          return data.msg;
        },
        set(newValue) {
          console.log("set", newValue);
          if (newValue === data.msg) {
            return;
          }
          data.msg = newValue;
          document.querySelector("#app").textContent = data.msg;
        },
      });
      vm.msg = "abc";
      console.log(vm.msg);
    </script>
  </body>
```

上面的代码, 实现了只要对 vm 中的 msg 属性值做操作的话, 比如读取或修改, 都会执行 defineProperty 里的内容

### `Object.defineProperty`基本使用(二)

上面仅仅是将一个属性, 转换成了 getter 和 setter 的形式, 如果一个对象中有多个属性需要转换, 可以通过循环遍历的形式

```js
  <body>
    <div id="app"></div>
    <script>
      // 模拟data选项
      let data = {
        msg: "hello",
        count: 10,
      };
      let vm = {};
      ProxyData(data);
      function ProxyData(data) {
        Object.keys(data).forEach((key) => {
          Object.defineProperty(vm, key, {
            enumerable: true,
            configurable: true,
            get() {
              console.log("get", key, data[key]);
              return data[key];
            },
            set(newValue) {
              console.log("set", key, newValue);
              if (newValue === data[key]) {
                return;
              }
              data[key] = newValue;
              document.querySelector("#app").textContent = data[key];
            },
          });
        });
      }
      vm.msg = "hello world";
      console.log(vm.msg);
    </script>
  </body>
```

## `Vue3`响应式原理

`Vue3`的响应式原理是通过`Proxy`来完成的。

`Proxy`直接监听对象，而非属性，所以将多个属性转换成`getter/setter`的时候，不需要使用循环。

`Proxy`是`ES6`课程中新增的，`IE11`不支持

`Proxy`实现响应式的基本代码如下(该代码的功能与上面所讲解的是一样的)：

```js
  <body>
    <div id="app"></div>
    <script>
      let data = {
        msg: "hello",
        count: 0,
      };
      // 为data对象创建代理对象-vm, 以后都是通过代理对象vm来操作data中的msg和count
      // Proxy的第二个参数是个对象, 第二个参数中要设置getter和setter
      // get方法第一个参数target表示所要代理的对象, 在这里就是data
      // 第二个参数key表示所代理对象中的属性
      let vm = new Proxy(data, {
        get(target, key) {
          console.log("get key:", key, target[key]);
          return target[key];
        },
        set(target, key, newValue) {
          console.log("set key:", key, newValue);
          if (target[key] === newValue) {
            return;
          }
          target[key] = newValue;
          document.querySelector("#app").textContent = target[key];
        },
      });
      vm.msg = "哈哈";
      console.log(vm.msg);
    </script>
  </body>
```

通过以上的代码我们发现使用`Proxy`的代码是给对象中所有属性添加`getter/setter`,而不需要通过循环的方式来实现，所以代码更加的简洁。

## 发布订阅模式

发布订阅模式：订阅者，发布者，信号中心

:::tip
我们假定，存在一个“信号中心”，某个任务执行完成，就向信号中心"发布"(publish)一个信号，其它任务可以向信号中心“订阅”(subscribe)这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"(publish-subscribe pattern)
:::

家长向学生所在的班级订阅了获取学生考试成绩的事件，当老师公布学生的成绩后，就会自动通知学生的家长。

在整个案例中，学生所在的班级为信号中心，老师为发布者，家长为订阅者

`Vue` 的自定义事件就是基于发布订阅模式来实现的。

下面通过`Vue`中兄弟组件通信过程，来理解发布订阅模式

```js
// eventBus.js
// 事件中心
let eventHub=new Vue()
//ComponentA.vue
addTodo:function(){
    //发布消息(事件)
    eventHub.$emit('add-todo',{text:this.newTodoText})
    this.newTodoText=''
}
//ComponentB.vue
//订阅者
created:function(){
    //订阅消息(事件)
    eventHub.$on('add-todo',this.addTodo)
}
```

通过以上代码，我们可以理解发布订阅模式中的核心概念。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>发布订阅模式</title>
  </head>
  <body>
    <script>
      class EventEmitter {
        constructor() {
          // {'click':[fn1,fn2],'change':[fn]}
          // 存储事件与处理函数的对应关系
          this.subs = {};
        }
        //注册事件
        //第一个参数为事件名称
        // 第二个参数为处理函数
        // 将对应的处理函数添加到subs对象中
        $on(eventType, fn) {
          //判断对应的eventType是否有相应的处理函数，如果有，直接添加到数组中，如果没有返回一个空数组。
          if (!this.subs[eventType]) {
            this.subs[eventType] = [];
          }
          this.subs[eventType].push(fn);
        }
        //触发事件
        $emit(eventType) {
          if (this.subs[eventType]) {
            this.subs[eventType].forEach((handler) => {
              handler();
            });
          }
        }
      }
      //测试代码
      let em = new EventEmitter();
      em.$on("click", () => {
        console.log("click1");
      });
      em.$on("click", () => {
        console.log("click2");
      });
      em.$emit("click");
    </script>
  </body>
</html>
```

## 观察者模式

`Vue`的响应式机制使用了观察者模式，所以我们首先要先了解一下观察者模式

### 观察者模式和发布订阅模式的区别

观察者模式与发布订阅模式的区别是，观察者模式中没有事件中心，只有发布者与订阅者，并且发布者需要知道订阅者的存在。

观察者(订阅者)---`Watcher`

​ `update():` 当事件发生时，具体要做的事情。

目标(发布者)--`Dep`

​ `subs` 数组：存储所有的观察者

​ `addSub()` 添加观察者，将其保存到`subs`数组中

`notify()`： 当事件发生后，调用所有观察者的`update()` 方法。

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>观察者模式</title>
  </head>
  <body>
    <script>
      //发布者
      class Dep {
        constructor() {
          //记录所有的订阅者
          this.subs = [];
        }
        //添加订阅者
        addSub(sub) {
          //订阅者中必须有update方法
          if (sub && sub.update) {
            this.subs.push(sub);
          }
        }
        //发布通知
        notify() {
          //遍历subs数组，调用每个订阅者中的update方法
          this.subs.forEach((sub) => {
            sub.update();
          });
        }
      }
      // 订阅者--观察者
      class Watcher {
        //必须有一update方法,当事件发生后，具体要做的事情
        update() {
          console.log("update something");
        }
      }
      //测试
      let dep = new Dep();
      let watcher = new Watcher();
      dep.addSub(watcher);
      dep.notify();
    </script>
  </body>
</html>

```

下面我们看一下观察者模式与发布订阅模式的区别。

观察者模式：是由具体目标调度的，比如当事件触发，`Dep`就会去调用观察者的方法，所以观察者模式的订阅者与发布者之间是存在依赖的。

发布订阅模式：由统一调度中心调用，因此发布者和订阅者不需要知道对方的存在。
