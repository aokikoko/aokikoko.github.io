---
slug: ord
title: "[面试题] Vue精讲-常见面试题"
sidebar_position: 22
---

## 1、computed 和 watch

- `computed`有缓存，如果数据`data`没有发生变化的话，则不会重新计算。
- `watch`如何实现深度的监听？
- `watch`监听引用类型，获取不到`oldValue`

下面看一下`watch`的伪代码

```js
export default {
  data() {
    return {
      name: "zhangsan",
      info: {
        city: "上海",
      },
    };
  },
  watch: {
    name(oldVal, val) {
      console.log(oldVal, val); //值类型，可以正常获取到值
    },
    info: {
      handler(oldVal, val) {
        console.log(oldVal, val); //引用类型，获取不到oldVal,因为指针相同，此时已经指向了新的val
      },
      deep: true, //深度监听
    },
  },
};
```

这里 还需要注意`watch` 的一个特点是，最初绑定的时候是不会执行的，要等到 `firstName` 改变时才执行监听计算。那我们想要一开始就让他最初绑定的时候就执行改怎么办呢？

```js
watch: {
  firstName: {
    handler(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    },
    // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
    immediate: true
  }
}
```

而`immediate:true`代表如果在 `wacth `里声明了 `firstName `之后，就会立即先去执行里面的`handler`方法，如果为 `false`就跟我们以前的效果一样，不会在绑定的时候就执行。

## 2、循环列表

- `key`的重要性，注意`key`不能乱写，例如不能使用`random`或者是`index`
- `v-for`和`v-if`不能一起使用！

```html
<ul>
  <li v-if="flag" v-for="item in lists" :key="item.id"></li>
</ul>
<script>
  export default {
    data() {
      return {
        flag: false,
        lists: [],
      };
    },
  };
</script>
```

`v-for`的优先级要高于`v-if`,这样的话就会先去执行循环，这样数组中的内容都循环完毕了，才会使用`v-if`进行判断。这样判断会被执行多次，而且是重复的判断。

## 3、自定义 v-model

`v-model`是`vue`实现数据双向绑定最好的一个指令, `v-model`本质上不过是语法糖(v-bind, v-on),它负责监听用户的输入事件以更新数据,当你修改页面的时候 `v-model `自动去更新数据层 (`model)`,当你修改数据的时候 v-model 自动去更新视图层 (`view`)

## 4、$nextTick

- `Vue`是异步渲染
- `data`改变之后，`DOM`不会立刻渲染
- `$nextTick`会在`DOM`渲染之后被触发，以获取最新的`DOM`节点。

```html
<template>
  <div id="app">
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {
        list: ["a", "b", "c"],
      };
    },
    methods: {
      addItem() {
        this.list.push(`${Date.now()}`);
        this.list.push(`${Date.now()}`);
        this.list.push(`${Date.now()}`);
        //获取dom元素
        const ulElem = this.$refs.ul1;
        console.log(ulElem.childNodes.length); // 3 不是6
        // 原因: list数组中的内容发生了变化, 'DOM'元素并不会立即更新, 这时在console.log这里获取的DOM元素的内容还是以前的内容. 因为在这个时间点整个dom元素并没有发生变化
        // 我们希望响应式数据变化之后立即获取最新dom元素的内容怎么办?
        // 要使用$nextTick
      },
    },
  };
</script>
```

如果我们点击了`按钮`以后，输出的子元素的个数是多上呢？这里是 3，可能你认为是`6`,因为在按钮所对应的处理函数中，我们向`list`数组中又添加了 3 项内容，这样`ul`中的子元素应该是 6(`list`是响应式的，数据发生变化后，重新渲染视图). 但是实际的输出结果为`3`.

原因是：当`data`中`list`数组中的内容发生了变化后，`DOM`元素并不会立即改变。这时获取到的`DOM`元素的内容还是以前的内容。

但是，这里我们希望当单击完按钮后，立即获取到最新的`DOM`元素内容，应该怎样处理呢？

修改`addItem`方法中的代码如下：

```js
  addItem(){
                this.list.push(`${Date.now()}`)
                 this.list.push(`${Date.now()}`)
                 this.list.push(`${Date.now()}`)
      			this.$nextTick(()=>{
                      //获取dom元素
                const ulElem=this.$refs.url1
                console.log(ulElem.childNodes.length)
                })

            }
```

把获取`DOM`元素的内容放到`$nextTick`方法对应的回调函数内部就可以了。

:::tip 总结
总结：第一：`Vue`是异步渲染，`$nextTick`是在`DOM`渲染完以后才执行的。

第二：页面渲染时会将`data`的修改做整合，也就是说多次`data`修改只会渲染一次，例如上面的案例中，我们对`list`数组做了三次的修改，但是最终只做了一次渲染。这样`$nextTick`也就只调用了一次。
:::

## 5、动态组件 :is

```js
:is="component-name"
```

什么时候用：需要根据数据，动态渲染的场景，即组件类型不确定。

在上图中，展示的是一个新闻的详情页面，在这个页面中，最开始展示了一个文本组件，然后下面紧跟着展示了一个图像组件，最后再展示文本组件。

但是，我们知道不同的详情页面可能展示的组件的顺序是不一样的，也就是说，另外一个详情页面，可能最开始展示的是图像组件，然后才是文本组件，所以到底先展示什么是不确定的，有具体的数据来决定。

下面看一下动态组件的基本使用

```html
<div>
  <!--动态组件-->
  <component :is="NextTickName" />
</div>
<script>
  import NextTick from "./NextTick";
  export default {
    components: {
      NextTick,
    },
    data() {
      return {
        name: "zhangsan",
        obj: {
          username: "zs",
          userpwd: "123",
        },
        NextTickName: "NextTick",
      };
    },
  };
</script>
```

现在，了解了动态组件的基本使用以后，下面我们通过一段伪代码，将上图的功能模拟一下。

```vue
<div>
    <!--动态组件-->
     <div v-for="item in newsData" :key="item.id">
         <component :is="item.type"></component>
    </div>
</div>
<script>
	import NextTick from './NextTick'
    export default{
        components:{
            NextTick
        },
        data(){
            return{
                name:'zhangsan',
                obj:{
                    username:'zs',
                    userpwd:'123'
                },
               newData:[
                   //type:表示对应的组件
                   {id:1,type:'text'}
                   {id:2,type:'text'}
               	   {id:3,type:'imgage'}
               ]
            }
        }
    }
</script>
```

## 6、异步加载组件

在开发的时候，我们经常会加载一些体积比较大的组件，例如：编辑器，`echarts`等，

而这些组件的加载非常消耗性能，为了提高性能，可以采用异步的方式来进行加载。

·`import( )`函数实现按需加载，异步加载大组件

下面看一下`import`函数的使用。

```html
<div>
  <!--异步组件-->
  <FormDemo v-if="showFormDemo" />
  <button @click="showFormDemo=true">show</button>
</div>
<script>
  //import FormDemo from './component/FormDemo' //同步加载组件
     export default {
         components:{
             //FormDemo
             FormDemo:()=>import('./component/FormDemo')
         }，
         data(){
             return {
                 showFormDemo:false
             }
         }
     }
</script>
```

通过上面的代码，我们可以看到最开始的时候是不会加载`FormDemo`这个组件的，当单击了`show`按钮的时候才会加载该组件，但是在加载该组件的时候是通过`import`方法来完成的，这就是异步加载组件，或者是按需加载，以前的加载方式是不管组件是否会用到都要进行加载，这其实就是同步的一种加载方式，这种方式会影响性能。
