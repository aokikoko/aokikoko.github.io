---
slug: function
title: "[面试题] JS-函数"
sidebar_position: 9
---

## 1、函数定义有哪几种实现方式

在使用函数前，先需要对函数进行定义。关于函数的定义总体上可以分为三类。

第一类是函数声明。

第二类是函数表达式

第三类是通过`Function`构造函数来完成函数的定义。

首先来看一下**函数的声明**。

函数声明是直接通过`function`关键字接一个函数名，同时可以接收参数。

```js
function sum(num1, num2) {
  return num1 + num2;
}
```

**函数表达式**

函数表达式的形式类似于普通变量的初始化，只不过这个变量初始化的值是一个函数。如下代码所示：

```js
var sum = function (num1, num2) {
  return num1 + num2;
};
```

这个函数表达式没有名称，属于匿名函数表达式。

**`Function( )`构造函数**

使用`new`操作符，调用`Function( )`构造函数，传入参数，也可以定义一个函数。

```js
var sum = new Function("num1", "num2", "return a+b ");
```

其中的参数，除了最后一个参数是要执行的函数体，其它的参数都是函数的形参。

## 2、Function( )构造函数定义函数的问题

但是，我们在实际的应用中很少使用`Function( )`构造函数来实现对函数的定义。

原因是：

第一：`Function( )` 构造函数每次执行时，都会解析函数体，并创建一个新的函数对象，所以当在一个循环或者是一个频繁执行的函数中去使用`Function( )`构造函数的时候，相对来说性能是比较低的。

第二：通过`Function( )` 构造函数创建的函数，并不遵循典型的作用域。

如下代码所示：

```js
var a = "12";
function fun() {
  var a = "11";
  return new Function("return a");
}
console.log(fun()());
```

## 3、函数表达式的应用场景

关于函数表达式非常典型的应用就是实现了块级作用域

```js
var person = (function () {
  var _name = "";
  return {
    getName: function () {
      return _name;
    },
    setName: function (userName) {
      _name = userName;
    },
  };
})();
person.setName("zhangsan");
console.log(person.getName());
```

## 4、函数声明与函数表达式有什么区别

函数声明与函数表达式虽然是两种定义函数的方式，但是两者之间还是有区别的。

第一点就是：函数名称

```js
// 函数声明，函数名称sum是必须的
function sum(num1, num2) {
  return num1 + num2;
}
// 没有函数名称的匿名函数表达式
var sum = function (num1, num2) {
  return num1 + num2;
};
```

第二点就是关于：函数提升

```js
console.log(add(1, 2)); // 3
console.log(sum(3, 6)); // Uncaught TypeError: sum is not a function
// 函数声明
function add(num1, num2) {
  return num1 + num2;
}
// 函数表达式
var sum = function (num1, num2) {
  return num1 + num2;
};
```

## 5、函数常见的调用模式有哪些

**函数调用模式**

```js
function add(num1, num2) {
  return num1 + num2;
}
// 函数表达式
var sum = function (num1, num2) {
  return num1 + num2;
};

console.log(add(1, 2));
console.log(sum(3, 6));
```

**方法调用模式**

```js
var obj = {
  userName: "zhangsan",
  getUserName: function () {
    return this.userName;
  },
};
console.log(obj.getUserName());
```

```js
var obj = {
  userName: "zhangsan",
  getUserName: function () {
    return this.userName;
  },
};
// console.log(obj.getUserName());
console.log(obj["getUserName"]());
```

```js
var obj = {
  userName: "zhangsan",
  getUserName: function () {
    return this.userName;
  },
  setUserName: function (name) {
    this.userName = name;
    return this;
  },
};
console.log(obj.setUserName("lisi").getUserName()); // lisi
```

**构造器(构造函数)调用模式**

```js
//定义构造函数
function Person(name) {
  this.userName = name; //定义属性
}
// 在原型上定义函数
Person.prototype.getUserName = function () {
  return this.userName;
};
// 通过new来创建实例
var p = new Person("zhangsan");
// 调用原型上的方法
console.log(p.getUserName());
```

```js
function sum(num1, num2) {
  return num1 + num2;
}
//定义一个对象
var obj = {};
//通过call()和apply( )函数调用sum( )函数
console.log(sum.call(obj, 2, 6));
console.log(sum.apply(obj, [3, 6]));
```

**匿名函数调用模式**

所谓的匿名函数，就是没有函数名称的函数。匿名函数的调用有两种方式，一种是通过函数表达式定义函数，并赋值给变量，通过变量进行调用。如下所示：

```js
//通过函数表达式定义匿名函数，并赋值给变量sum
var sum =funciton (num1,num2){
    return num1 + num2
}
// 通过sum来进行调用
sum(2,6)
```

另外一种是使用小括号`()`将匿名函数括起来，然后在后面使用小括号`( )`,传递对应的参数从而完成对应的调用。

```js
(function (num1, num2) {
  console.log(num1 + num2);
})(2, 6);
```
