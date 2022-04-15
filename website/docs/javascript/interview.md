---
title: "[JS] interview"
sidebar_position: 166
---

## 1. 谈谈对作用域链的理解

![lian](assets/lian.JPG)

简单版:

内部函数可以访问到外部函数声明的变量, 外部函数又可以访问到全局的, 一层层的关系就是作用域链

正常版:

js 全局有全局可执行上下文, 每个函数调用时, 有着函数的可执行上下文, 当函数执行时会进入到 js 的调用栈, 每个可执行的上下文都会包含对于上一层可执行上下文的一个引用, 或者说叫词法作用域的引用. 说白了可以访问自己的变量, 也可以访问外部的变量, 这个外部上下文也有着对于再外部的上下文词法作用域的引用, 形成了作用于链

## 2. 谈谈对闭包的理解

- 对闭包的基本概念的理解
- 对闭包的作用的了解

### 什么是闭包?

- MDN 的官方解释:

  - 闭包是函数和声明该函数的词法环境的组合.

- 更通俗一点的解释:
  - 闭包 = 函数 + 该函数内可访问的所有函数外的变量
  - 或者说
  - 内部函数, 访问了外部函数的变量, 就可以形成闭包

### 闭包的基本形式

```js
// 闭包的基本形式
function fn() {
  let num = 1;
  function inner() {
    num = num + 1;
    console.log(num);
  }
}
let result = fn();
result(); //2
```

### 闭包的作用

常见应用: `实现数据私有`

例 1: 计数器

```js
let count = 0; // count是全局变量, 容易被随意修改

function fn() {
  count++;
  console.log("函数被调用了" + count + "次");
}
fn();

// 但我们希望有些数据是私有的, 不让外部随意的访问

function fn() {
  let count = 0;
}
fn();
console.log(count); //报错Uncaught ReferenceError: count is not defined, 因为fn函数一执行完, 函数里的就释放掉了
// 使用闭包
function fn() {
  let count = 0;

  function inner() {
    count++;
    console.log("函数被调用了" + count + "次");
  }
  return inner;
}
let result = fn();
result();
result();
result();
```

:::tip
注意: 外部函数中, 一般需要 return 引用, 内存才不会被释放
:::

例 2: 计数器

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
// 6 6 6 6 6

// 如果把var 换成let 可以解决问题, 输出1,2,3,4,5, 但是没有let的话,
// 早期, 闭包还用于解决for循环中, 定时打印内容的问题

for (var i = 1; i <= 5; i++) {
  (function (num) {
    // 形参也可以理解为函数中局部变量
    setTimeout(() => {
      console.log(num);
    }, num * 1000);
  })(i);
}
```

## 3. js 中数据类型的隐式转换规则

在 if 语句、逻辑语句、数学运算逻辑、== 等情况下都可能出现隐式类型转换。

下表展示了一系列原始值，通过隐式转换成数字、字符串、布尔类型后所得到的值：

![20210306104516852](assets/20210306104516852.JPG)

坑: 判断时, 尽量不要用 `==` , 要用 `===` ( 两个等号判断, 如果类型不同, 默认会进行隐式类型转换再比较)

## 4. 谈谈对原型链的理解

要讲清楚这个问题，主要着重这几个方面：

- 什么是原型对象
- 构造函数, 原型对象, 实例的三角关系图
- 原型链如何形成

```js
// 构造函数
function Person() {
  this.name = name;
  this.age = age;

  this.sayHi = function () {
    console.log("hello");
  };
}

let p1 = new Person("zs", 18);
let p2 = new Person("ls", 20);
console.log(p1.sayHi === p2.sayHi); //false

// 对比下图
```

![yuanxinglian](assets/yuanxinglian.JPG)

**原型对象**

在 JavaScript 中，除去一部分内建函数，绝大多数的函数都会包含有一个叫做 `prototype` 的属性，指向原型对象，

基于构造函数创建出来的实例, 都可以共享访问原型对象的属性。

例如我们的 `hasOwnProperty`, `toString` ⽅法等其实是 Obejct 原型对象的方法，它可以被任何对象当做⾃⼰的⽅法来使⽤。

`hasOwnProperty` 用于判断, 某个属性, 是不是自己的 (还是原型链上的)

来看一段代码：

```js
let person = {
  name: "Tom",
  age: 18,
  job: "student",
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("hasOwnProperty")); // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true
```

可以看到，`hasOwnProperty` 并不是 `person` 对象的属性，但是 `person` 却能调用它。

那么 `person` 对象是如何找到 Object 原型中的 `hasOwnProperty` 的呢？这就要靠原型链的能力了。

需求: 简单绘制原型三角关系图!

**原型链**

在 JavaScript 中，每个对象中都有一个 `__proto__` 属性，这个属性指向了当前对象的构造函数的原型。

对象可以通过自身的 `__proto__`属性与它的构造函数的原型对象连接起来，

而因为它的原型对象也有 `__proto__`，因此这样就串联形成一个链式结构，也就是我们称为的原型链。

![9526](assets/image-20210218212449526.jpg)

## 5. 谈谈继承的理解

**为什么要学习继承 ?**

写的构造函数, 定义了一个类型 (人类), 万一项目非常大, 又有了细化的多个类型 (老师, 工人, 学生)

学习继承, 可以让多个构造函数之间建立关联, 便于管理和复用

**什么是继承 ?**

继承: 从别人那里, 继承东西过来 (财产, 房产)

代码层面的继承: 继承一些属性和方法

### 继承 - 原型继承

原型继承: 通过改造原型链, 利用原型链的语法, 实现继承方法!

分析需求:

​ 人类, 属性: name, age

​ 学生, 属性: name, age, className

​ 工人, 属性: name, age, companyName

无论学生, 还是工人, => 都是人类, 所以人类原型上有的方法, 他们都应该要有

```js
// 1. 定义Person构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log("人类会说话");
};

// 2. 定义Student构造函数
function Student(name, age, className) {
  this.name = name;
  this.age = age;
  this.className = className;
}
// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = new Person();
Student.prototype.study = function () {
  console.log("学生在学习");
};

let stu = new Student("张三", 18, "80期");
stu.say();
console.log(stu);
```

![20210306111112493](assets/image-20210306111112493.png)

### 继承 - 组合继承

组合继承有时候也叫伪经典继承，指的是将原型链 和 借用构造函数 call 技术组合到一块，

从而发挥二者之长的一种继承模式，其背后的思路: **是使用原型链实现对原型属性和方法的继承 (主要是方法)，**

**而通过借用构造函数来实现对实例属性构造的继承**。这样既通过在原型上定义方法实现了函数复用，又能保证每个实例都有它的自己的属性。

```js
// 1. 定义Person构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log("人类会说话");
};

// 2. 定义Student构造函数
function Student(name, age, className) {
  Person.call(this, name, age); // 实现构造属性的继承
  this.className = className;
}

// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = new Person();
Student.prototype.study = function () {
  console.log("学生在学习");
};

let stu = new Student("张三", 18, "80期");
stu.say();
console.log(stu);

// 方法通过 原型继承
// 属性通过 父构造函数的.call(this, name, age)
```

### 继承 - 寄生组合继承

student 实例上有 name age, 而原型 `__proto__`上不需要再有这些属性, 所以利用 Object.create 改装下

Object.create(参数对象),

1. Object.create 会创建一个新对象,
2. 并且这个新对象的`__proto__` 会指向传入的参数对象

```js
// 1. 定义Person构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log("人类会说话");
};

// 2. 定义Student构造函数
function Student(name, age, className) {
  Person.call(this, name, age);
  this.className = className;
}

// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log("学生在学习");
};

let stu = new Student("张三", 18, "80期");
stu.say();
console.log(stu);

// 总结:
// Object.create() 以参数的对象, 作为新建对象的__proto__属性的值, 返回新建的对象
```

![image-20210306114638139](assets/image-20210306114638139.png)

### es6 - class 实现继承 extends

```jsx
// 继承关键字 => extends
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  jump() {
    console.log("会跳");
  }
}

class Teacher extends Person {
  constructor(name, age, lesson) {
    super(name, age); // extends 中, 必须调用 super(), 会触发执行父类的构造函数
    this.lesson = lesson;
    console.log("构造函数执行了");
  }
  sayHello() {
    console.log("会打招呼");
  }
}

let teacher1 = new Teacher("zs", 18, "体育");
console.log(teacher1);
```

## 判断是否是数组

```js
console.log(typeof []); //object
```

### 方法一：使用 `toString` 方法

调用的是 Object.prototype.toString 方法

```js
function isArray(arg) {
  return Object.prototype.toString.call(arg) === "[object Array]";
}

let arr = [1, 2, 3];
isArray(arr); // true
```

### 方法二：使用 ES6 新增的 `Array.isArray` 方法

Array 构造函数身上的静态方法 isArray

```js
let arr = [1, 2, 3];
Array.isArray(arr); // true
```

## 谈谈对 this 的理解

```js
// 函数中的this, 要看如何调用的
function fn() {
  console.log(this);
}
let obj = {
  name: 'zs';
}
obj.fn = fn

obj.fn() // 指向obj
```
