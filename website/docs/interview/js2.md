---
slug: js2
title: "[面试题] JS-引用类型"
sidebar_position: 8
---

## 回顾值类型和引用类型区别

引用类型有`Object`,`Function`,`Array`,`Date`，`Math`等。

引用类型与基本数据类型的区别:

(1)引用数据类型的实例需要通过`new`关键字创建。

(2)将引用数据类型赋值给变量，实际上赋值的是内存地址

(3)引用数据类型的比较是对内存地址的比较，而基本数据类型的比较是对值的比较。

由于引用数据类型的实例都是通过`new`关键字来创建的，所以我们先来探讨有关`new`操作相关的问题。

### 1.1 new 操作符的作用

`new`操作符在执行过程中会改变`this`的指向，所以下面我们先来看一下`this`的用法。

```js
   <script>
      function Person(userName, age) {
        this.userName = userName;
        this.age = age;
      }
      console.log(new Person("zhangsan", 20));
    </script>
```

执行上面的代码，发现输出的是一个`Person`对象，包含了`userName`和`age`的数据。

但是，问题是，在构造函数`Person`中，我们没有添加`return`,为什么会有返回值呢？

其实就是`this`这个关键字起作用。

```js
  <script>
      function Person(userName, age) {
        console.log(this);//输出的是Person{ }对象
        this.userName = userName;
        this.age = age;
      }
      new Person("zhangsan", 20);
    </script>
```

执行上面的代码，我们可以看到`this` 这里就是一个`Person`的空对象，后面的两行代码就相当于给`Person`对象添加了`userName`和`age`这两个属性。

下面我们把代码修改成如下的形式：

```js
 <script>
      function Person(userName, age) {
        var Person = {};
        Person.userName = userName;
        Person.age = age;
      }
      console.log(new Person("zhangsan", 20));
    </script>
```

以上打印的结果中，输出的是`Person{}`，并没有包含`userName`和`age`,原因是什么呢？

因为在 构造函数中如果没有添加`return`,则默认返回的是`return this`.

修改后的代码如下：

```js
  <script>
      function Person(userName, age) {
        var Person = {};
        Person.userName = userName;
        Person.age = age;
        return Person;
      }
      console.log(new Person("zhangsan", 20));
    </script>
```

对`this`有了一个简单的了解以后，下面重点看如下代码

```js
var person = new Person("zhangsan", 20);
```

从上面的代码中，主要的作用就是创建一个`Person`对象，然后赋值给了`person`这个变量，该变量中包含了`Person`对象中的属性和函数。

其实，在`new`操作符做了如下 3 件事情。

```js
var person = {};
person.__proto__ = Person.prototype;
Person.call(person);
```
