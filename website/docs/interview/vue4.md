---
slug: vue4
title: "[面试题] Vue精讲(中)"
sidebar_position: 16
---

## Vue 组件化的理解

**定义**：组件是可复用的`Vue`实例，准确讲它是`VueComponent`的实例，继承自`Vue`

**优点**：组件化可以增加代码的复用性，可维护性和可测试性。

**使用场景**：什么时候使用组件？以下分类可以作为参数

第一：通用组件：实现最基本的功能，具有通用性，复用性。例如按钮组件，输入框组件，布局组件等。(`Element UI`组件库就是属于这种通用的组件)

第二：业务组件，用于完成具体的业务，具有一定的复用性。例如登录组件，轮播图组件。

第三：页面组件，组织应用各部分独立内容，需要时在不同页面组件间切换，例如：商品列表页，详情页组件。

**组件的本质**

`vue`中的组件经历如下过程 组件配置 =>` VueComponent`实例 => `render() `=> `Virtual DOM`=> `DOM`
所以组件的本质是产生虚拟`DOM`

## 常用 API 说明

### Vue.set

向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且会触发视图更新。

使用方法：`Vue.set(target,propertyName,value)`

下面通过一个案例来演示一下,这个案例是在以前所做的用户列表的案例上进行修改的，

这里需求是给每个用户动态的添加身高。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>列表渲染</title>
    <style>
      .actived {
        background-color: #dddddd;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <p v-if="users.length===0">没有任何用户数据</p>
      <ul v-else>
        <li
          v-for="(item,index) in users"
          :key="item.id"
          :style="{backgroundColor:selectItem===item?'#dddddd':'transparent'}"
          @mousemove="selectItem=item"
        >
          编号：{{item.id}} 姓名:{{item.name}}---身高:{{item.height}}
        </li>
      </ul>
      <p>总人数：{{totalCount}}</p>
    </div>
    <script src="vue.js"></script>
    <script>
      new Vue({
        el: "#app",
        data: {
          selectItem: "",
          num: 100,
          totalCount: 0,
          users: [],
        },
        //组件实例已创建时
        async created() {
          const users = await this.getUserList();
          this.users = users;
          //批量更新用户身高
          this.batchUpdate();
        },
        methods: {
          //批量更新身高，动态的给users中添加身高属性
          batchUpdate() {
            this.users.forEach((c) => {
              c.height = 0;
            });
          },

          getTotal: function () {
            console.log("methods");
            return this.users.length + "个";
          },
          getUserList: function () {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([
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
                ]);
              }, 2000);
            });
          },
        },
        watch: {
          users: {
            immediate: true, //立即执行
            handler(newValue, oldValue) {
              this.totalCount = newValue.length + "个人";
            },
          },
        },
      });
    </script>
  </body>
</html>
```

在上面的代码中，我首先把列表中，展示的内容做了一个修改，这里不在显示索引值，而是展示身高。

```
   编号：{{item.id}} 姓名:{{item.name}}---身高:{{item.height}}
```

但是我们知道在`users`中是没有`height`这个属性的，所以下面可以动态添加这个属性。

所以在`create`方法中，调用了`batchUpdate`方法，来动态更新。

```js
    //组件实例已创建时
        async created() {
          const users = await this.getUserList();
          this.users = users;
          //批量更新用户身高
          this.batchUpdate();
        },
```

在`methods`中，添加了`batchUpdate`方法。

```js
  //批量更新身高，动态的给users中添加身高属性
          batchUpdate() {
            this.users.forEach((c) => {
              c.height = 0;
            });
          },

```

在上面的代码中，对`users`进行遍历，每遍历一次，取出一个对象后，动态添加一个属性`height`,并且初始值为 0.

这样刷新浏览器，可以看到对应的效果。

下面，我们在做一个功能，就是用户在一个文本框中，输入一个身高值，单击按钮，统一把所有用户的身高进行更新。

首先在`data`中添加一个属性`height`,该属性会与文本框进行绑定。

```js
 data: {
          selectItem: "",
          num: 100,
          totalCount: 0,
          users: [],
          height: 0,
        },
```

下面创建文本框，以及更新按钮

```html
<p>
  <input type="text" v-model.number="height" />
  <button @click="batchUpdate">批量更新用户身高</button>
</p>
```

在这里我们需要在文本框中输入的值为数字类型，所以添加了一个`number`的后缀。现在，文本框与`height`属性绑定在一起了。下面单击按钮后，还是去执行`batchUpdate`方法。

```js
 //批量更新身高，动态的给users中添加身高属性
          batchUpdate() {
            this.users.forEach((c) => {
              c.height = this.height;
            });
          },
```

这里我们可以看到，我们是用文本框中输入的值，更新了`users`数组中的`height`属性的值。

但是，当我们在浏览器中，单击按钮进行更新的时候，发现不起作用。

因为，现在动态所添加的`height`属性并不是响应式的。

但是，当把鼠标移动到列表项的时候，数据发生了变化，就是因为这时触发了我们给列表所添加的`mousemove`

这个事件，导致页面重新刷新，这时发现数据发生变化了。

那么我们应该怎样解决这个问题呢？

这就需要，在`batchUpdate`方法中，使用`Vue.set()`方法

```js
  batchUpdate() {
            this.users.forEach((c) => {
              //   c.height = this.height;
              Vue.set(c, "height", this.height);
            });
          },
```

修改的代码含义就是通过`Vue.set`方法，给`users`数组中每个对象，设置一个`height`属性，这时该属性就变成了响应式的，同时把 `data`中的`height`属性的值赋值给`height`.

完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>列表渲染</title>
    <style>
      .actived {
        background-color: #dddddd;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <!-- 批量更新身高 -->
      <p>
        <input type="text" v-model.number="height" />
        <button @click="batchUpdate">批量更新用户身高</button>
      </p>
      <p v-if="users.length===0">没有任何用户数据</p>
      <ul v-else>
        <li
          v-for="(item,index) in users"
          :key="item.id"
          :style="{backgroundColor:selectItem===item?'#dddddd':'transparent'}"
          @mousemove="selectItem=item"
        >
          编号：{{item.id}} 姓名:{{item.name}}---身高:{{item.height}}
        </li>
      </ul>
      <p>总人数：{{totalCount}}</p>
    </div>
    <script src="vue.js"></script>
    <script>
      new Vue({
        el: "#app",
        data: {
          selectItem: "",
          num: 100,
          totalCount: 0,
          users: [],
          height: 0,
        },
        //组件实例已创建时
        async created() {
          const users = await this.getUserList();
          this.users = users;
          //批量更新用户身高
          this.batchUpdate();
        },
        methods: {
          //批量更新身高，动态的给users中添加身高属性
          batchUpdate() {
            this.users.forEach((c) => {
              //   c.height = this.height;
              //   Vue.set(c, "height", this.height);
              this.$set(c, "height", this.height);
            });
          },

          getTotal: function () {
            console.log("methods");
            return this.users.length + "个";
          },
          getUserList: function () {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([
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
                ]);
              }, 2000);
            });
          },
        },
        watch: {
          users: {
            immediate: true, //立即执行
            handler(newValue, oldValue) {
              this.totalCount = newValue.length + "个人";
            },
          },
        },
      });
    </script>
  </body>
</html>
```

### 16.2 `Vue.delete`

删除对象的属性，如果对象是响应式的，确保删除能触发更新视图。

使用方式：`Vue.delete(target,propertyName)`

如果使用`delete obj['property']` 是不能更新页面的。

以上两个方法`Vue.set()`和`Vue.delete()`等同于以下两个实例方法。

```
vm.$set()
vm.$delete()
```

`vm` 表示的是`Vue`的实例。

所以我们在`batchUpdate`中也可以采用如下的方式，来批量更新用户的身高数据。

```js
 batchUpdate() {
            this.users.forEach((c) => {
              //   c.height = this.height;
              //   Vue.set(c, "height", this.height);
              this.$set(c, "height", this.height);
            });
          },
```

### `vm.$on`与`vm.$emit`

略

### v-model 的等价写法

以下的写法

```html
<user-add @add-user="addUser" v-model="userInfo"></user-add>
```

等价以下的写法

```html
<user-add v-bind:value="userInfo" v-on:input="userInfo = $event"></user-add>
```

也就是说`v-model`就是`v-bind`与`v-on`的语法糖。

在这里我们将`userInfo`的值给了`value`属性，而`value`属性传递到了`user-add`组件中，所以在`user-add`组件中要通过`props`来接收`value`属性的值。

在`user-add`组件的文本中，输入内容后触发`@input` 事件，对应的会调用`onInput`方法，在该方法中，执行了

```js
this.$emit("input", e.target.value);
```

发送了`input`事件，并且传递了用户在文本框中输入的值。

那很明显，这时会触发下面代码中的`input`事件，将传递过来的值给`userInfo`属性。

```html
<user-add v-bind:value="userInfo" v-on:input="userInfo = $event"></user-add>
```

以上就是`v-model`的原理，这也是面试经常会被问到的问题。

### vm.$once与vm.$off

关于这两个方法，大家只需要了解一下就可以了。

`vm.$once`
监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。

```js
vm.$on("test", function (msg) {
  console.log(msg);
});
```

`vm.$off`

移除自定义事件监听器。

- 如果没有提供参数，则移除所有的事件监听器；

- 如果只提供了事件，则移除该事件所有的监听器；

- 如果同时提供了事件与回调，则只移除这个回调的监听器

```
vm.$off() // 移除所有的事件监听器
vm.$off('test') // 移除该事件所有的监听器
vm.$off('test', callback) // 只移除这个回调的监听器

```

### refs 与 vm.$refs

略

## 过滤器

过滤器在日常生活中也是比较常见的，例如自来水的过滤等。

在`Vue`中，过滤器的作用就是格式化数据，也就是对数据的过滤处理，比如将字符串格式化为首字母大写

或者将日期格式化为指定的格式等。

下面先看一下自定义过滤器的语法

```js
Vue.filter("过滤器名称", function (value) {
  //value参数表示要处理的数据
  //过滤器业务逻辑，最终将处理后的数据进行返回
});
```

定义好以后可以使用。使用的方式如下：

```js
<div>{{msg|upper}}</div>
<div>{{msg|upper|lower}}</div>
```

## 自定义指令

略

## 渲染函数

`Vue`推荐在绝大数情况下使用模板来创建你的`HTML`。然后在一些场景中，你真的需要`JavaScript`的完全编程的能力，也就是使用`javaScript来创建HTML`，这时你可以用渲染函数，它比模板更接近编译器。

这里我们先来做一个基本的了解，为后期的深入学习打好一个基础。

下面先看一下`render`函数的基本结构。

```js
render:function(createElement){
    //createElement函数返回的结果为VNode. VNode就是虚拟dom，用js对象来模拟真实的DOM.
    retrun createElement(
      tag, //标签名称
       data,// 传递数据
       children //子节点数组
    )

}
```

下面我们在用户管理这个案例中，使用`render`函数来创建一个组件。

具体的代码如下：

```js
// heading组件
//<heading :level="1">{{title}}</heading> //这时要创建的组件
// <h2 title=""></h2> //这时上面的组件最终渲染的结果
Vue.component("heading", {
  props: {
    level: {
      type: String,
      required: true,
    },
  },
  render(h) {
    //h 就是createElement函数
    return h(
      "h" + this.level, //参数1，表示要创建的元素
      this.$slots.default //参数3，子节点VNode数组。（这里没有使用参数2，{{tile}}就是一个子元素）
    );
  },
});
```

接下来就可以使用`heading`组件了。

```html
<!-- 使用render函数创建的头部组件 -->
<heading level="1"> {{title}} </heading>
```

当然，这里需要在`data`中定义`title`属性。

```js
data: {
          num: 100,
          totalCount: 0,
          users: [],
          height: 0,
          userInfo: "abc",
          title: "用户管理",
          // isShow: false,
          // showWarn: false, // 控制警告窗口的显示与隐藏
        },
```

完整代码如下（24、`render函数.html`）：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>列表渲染</title>
    <style>
      .actived {
        background-color: #dddddd;
      }
      .message-box {
        padding: 10px 20px;
      }
      .success {
        background-color: #4fc;
        border: 1px solid #42b;
      }
      .warning {
        background-color: red;
        border: 1px solid #42b;
      }
      .message-box-close {
        float: right;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <!-- 弹窗组件 -->
      <message ref="msgSuccess" class="success">
        <!-- titile的插槽 -->
        <template v-slot:title>
          <h2>恭喜</h2>
        </template>
        <!-- 默认插槽 -->
        <template> 添加用户成功 </template>
      </message>

      <!-- 警告 -->
      <message ref="msgWaring" class="warning">
        <!-- titile的插槽 -->
        <template v-slot:title>
          <h2>警告</h2>
        </template>
        <!-- 默认插槽 -->
        <template> 请输入用户名 </template>
      </message>

      <!-- 使用render函数创建的头部组件 -->
      <heading level="1"> {{title}} </heading>
      <!-- 清空提示栏 -->
      <div class="toolbar">
        <button @click="$bus.$emit('message-close')">清空提示栏</button>
      </div>
      <!-- 批量更新身高 -->
      <p>
        <input type="text" v-model.number="height" />
        <button @click="batchUpdate">批量更新用户身高</button>
      </p>
      <!-- 新增用户 -->
      <user-add @add-user="addUser" v-model="userInfo"></user-add>
      <!-- 用户列表组件 -->
      <user-list :users="users"></user-list>

      <p>总人数：{{totalCount}}</p>
    </div>
    <script src="vue.js"></script>
    <script>
      //创建事件总线
      Vue.prototype.$bus = new Vue();

      // heading组件
      //<heading :level="1">{{title}}</heading> //这时要创建的组件
      // <h2 title=""></h2> //这时上面的组件最终渲染的结果
      Vue.component("heading", {
        props: {
          level: {
            type: String,
            required: true,
          },
        },
        render(h) {
          return h(
            "h" + this.level, //参数1，表示要创建的元素
            this.$slots.default //参数3，子节点VNode数组。（这里没有使用参数2，{{tile}}就是一个子元素）
          );
        },
      });

      //创建弹出的组件
      Vue.component("message", {
        //show表示的含义，控制弹出窗口的显示与隐藏。
        //slot:表示占坑。也就是窗口中的内容，是通过外部组件传递过来的。
        // props: ["show"],
        data() {
          return {
            show: false,
          };
        },

        template: `<div class='message-box' v-if="show">
               <!--具名插槽-->
               <slot name="title">默认标题</slot>
              <slot></slot>
              <span class="message-box-close" @click='toggle'>关闭</span>
            </div>`,
        mounted() {
          //给总线绑定`message-close`事件
          //也就是监听是否有`message-close`事件被触发。
          this.$bus.$on("message-close", () => {
            // this.$emit("close", false);
            //当警告窗口和提示信息的窗口，展示出来了才关闭。
            if (this.show) {
              this.toggle();
            }
          });
        },
        methods: {
          toggle() {
            this.show = !this.show;
          },
        },
      });

      //新增用户组件
      Vue.component("user-add", {
        // data() {
        //   return {
        //     userInfo: "",
        //   };
        // },
        props: ["value"],
        template: `
              <div>
               <p>
                  <input type="text" :value="value" @input="onInput" v-on:keydown.enter="addUser" ref="inp" />
               </p>
               <button @click="addUser">新增用户</button>
                </div>
              `,

        methods: {
          addUser() {
            //将输入的用户数据通知给父组件，来完成新增用户操作.
            // this.$emit("add-user", this.userInfo);
            this.$emit("add-user");
            // this.userInfo = "";
          },
          onInput(e) {
            this.$emit("input", e.target.value);
          },
        },
        mounted() {
          this.$refs.inp.focus();
        },
      });

      // 用户列表
      Vue.component("user-list", {
        data() {
          return {
            selectItem: "",
          };
        },
        props: {
          users: {
            type: Array,
            default: [],
          },
        },
        template: `
          <div>
                  <p v-if="users.length===0">没有任何用户数据</p>
              <ul v-else>
                  <li
                  v-for="(item,index) in users"
                  :key="item.id"
                  :style="{backgroundColor:selectItem===item?'#dddddd':'transparent'}"
                  @mousemove="selectItem=item"
                  >
                  编号：{{item.id}} 姓名:{{item.name}}---身高:{{item.height}}
                  </li>
              </ul>
        </div>
          `,
      });
      new Vue({
        el: "#app",
        data: {
          num: 100,
          totalCount: 0,
          users: [],
          height: 0,
          userInfo: "abc",
          title: "用户管理",
          // isShow: false,
          // showWarn: false, // 控制警告窗口的显示与隐藏
        },

        //组件实例已创建时
        async created() {
          const users = await this.getUserList();
          this.users = users;
          //批量更新用户身高
          this.batchUpdate();
        },
        methods: {
          //关闭窗口
          closeWindow(data) {
            this.isShow = data;
            this.showWarn = data;
          },
          //添加用户的信息
          addUser() {
            if (this.userInfo) {
              if (this.users.length > 0) {
                this.users.push({
                  id: this.users[this.users.length - 1].id + 1,
                  name: this.userInfo,
                });
                this.userInfo = "";
                //完成用户添加后，给出相应的提示信息
                // this.isShow = true;
                this.$refs.msgSuccess.toggle();
              }
            } else {
              // 显示错误警告信息
              // this.showWarn = true;
              this.$refs.msgWaring.toggle();
            }
          },

          //批量更新身高，动态的给users中添加身高属性
          batchUpdate() {
            this.users.forEach((c) => {
              //   c.height = this.height;
              //   Vue.set(c, "height", this.height);
              this.$set(c, "height", this.height);
            });
          },

          getTotal: function () {
            console.log("methods");
            return this.users.length + "个";
          },
          getUserList: function () {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([
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
                ]);
              }, 2000);
            });
          },
        },
        watch: {
          users: {
            immediate: true, //立即执行
            handler(newValue, oldValue) {
              this.totalCount = newValue.length + "个人";
            },
          },
        },
      });
    </script>
  </body>
</html>
```

**虚拟 DOM**

`Vue`通过建立一个虚拟 DOM 来追踪自己要如何改变真实`DOM`.

**`createElement`参数**

前面说过，`createElement`函数有三个参数。

```js
createElement(
  //{string |Object|Function}
    //第一个参数，可以是字符串，也可以是对象或者是函数
    ‘div’
    ,
    // 第二个参数是对象，表示的是一个与模板中属性对应的数据对象。该参数可选
    {

    },
    //第三个参数是一个数组,表示的是子节点数组
    [

    ]
)


```

下面，给`heading`组件添加第一个属性。

```html
<!-- 使用render函数创建的头部组件 -->
<heading level="1" :title="title"> {{title}} </heading>
```

在上面的代码中，我们给`heading`组件动态添加了一个`title`属性。而我们知道`heading`组件，最终渲染成的是`h1`的元素，最终效果为：`<h1 title='aaa'>`的形式。

```js
// heading组件
//<heading :level="1">{{title}}</heading> //这时要创建的组件
// <h2 title=""></h2> //这时上面的组件最终渲染的结果
Vue.component("heading", {
  props: {
    level: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
  },
  render(h) {
    return h(
      "h" + this.level, //参数1，表示要创建的元素
      { attrs: { title: this.title } }, //参数2
      this.$slots.default //参数3，子节点VNode数组。（这里没有使用参数2，{{tile}}就是一个子元素）
    );
  },
});
```

在上面的代码中，我们在`render`函数中给`h`函数添加了第二个参数，给最终生成的元素添加了`attrs`属性。

## 混入

混入(`mixin`)提供了一种非常灵活的方式，来分发`Vue`组件中的可复用功能，一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项被“混合”进入该组件本身的选项。

```js
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log("hello world");
    },
  },
};
Vue.component("comp", {
  mixins: [myMixin],
});
```

“混入”可以提高组件的复用功能，例如：上面所写的`hello`这个方法，不仅在一个组件中使用，还会

在其它组件中使用.那么，我们的处理方式就是，可以将`hello` 这个方法单独定义在一个地方，如果某个组件想要使用，可以直接将该方法注入到组件中。

## 插件

前面我们讲解的混入，组件封装等都可以提高组件的复用功能。

但是这种方式不适合分发，也就是不适合将这些内容上传到`github`上，`npm`上。而这种情况最适合通过`插件`来实现。

插件通常用来为`Vue`添加全局功能。插件的功能范围一般有下面几种：

- 添加全局方法或者属性。例如：'element'
- 添加全局资源
- 通过全局混入来添加一些组件选项。例如`vue-router`
- 添加`vue实例`方法，通过把它们添加到`Vue.prototype`上实现
- 一个库，提供自己的`API`，同时提供上面提到的一个或多个功能，例如`vue-router`

**插件声明**

`Vue.js `的插件应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象：

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

https://www.cnblogs.com/luozhihao/p/7414419.html
