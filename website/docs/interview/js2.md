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

### 1.2 原型对象理解

#### 函数对象的 prototype 属性

我们创建的每一个函数都有一个 `prototype` 属性，这个属性是一个指针，指向一个对象。这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法，简单来说，该函数实例化的所有对象的`__proto__`的属性指向这个对象，它是该函数所有实例化对象的原型。

```js
function Person() {}

// 为原型对象添加方法
Person.prototype.sayName = function () {
  alert(this.name);
};
```

下面我们来看一下它们之间的关系。

![prototype](assets/prototype.png)

**简易图**

<!-- ![easyprototype](assets\easyprototype.jpg) -->

#### constructor 属性

当函数创建，`prototype `属性指向一个原型对象时，在默认情况下，这个原型对象将会获得一个 constructor 属性，这个属性是一个指针，指向 `prototype` 所在的函数对象。

拿前面的一个例子来说 `Person.prototype.constructor` 就指向 `Person `函数对象。

```js
console.log(Person.prototype.constructor == Person);
```

下面我们来更新一下它们之间的关系图。

<!-- ![constructor1](assets\constructor.png) -->

**简易图**

<!-- ![constructor2](assets\constructor.jpg) -->

#### 对象的 `__proto__ `属性

当我们调用构造函数创建一个新实例后，在这个实例的内部将包含一个指针，指向构造函数的原型对象.

根据前面的 `Person` 构造函数我们新建一个实例

```js
var student = new Person();

console.log(student.__proto__ === Person.prototype); // true
```

从上面我们可以看出，这个连接是存在与实例与构造函数的原型对象之间的，而不是存在于实例和构造函数之间的。

下面我们来看一下现在这几个对象之间的关系

<!-- ![proto](assets/proto.png) -->

`isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上。

```js
console.log(Person.prototype.isPrototypeOf(student)); // true
```

**简易图**

<!-- ![](assets\proto.jpg) -->

### 1.3 原型属性

#### 属性访问

每当代码读取对象的某个属性时，首先会在对象本身搜索这个属性，如果找到该属性就返回该属性的值，如果没有找到，则继续搜索该对象对应的原型对象，以此类推下去。

因为这样的搜索过程，因此我们如果在实例中添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性，因为在实例中搜索到该属性后就不会再向后搜索了。

#### 属性判断

既然一个属性既可能是实例本身的，也有可能是其原型对象的，那么我们该如何来判断呢？

在属性确认存在的情况下，我们可以使用 `hasOwnProperty() `方法来判断一个属性是存在与实例中，还是存在于原型中

```js
function Person() {}

Person.prototype.name = "laker";

var student = new Person();

console.log(student.name); // laker
console.log(student.hasOwnProperty("name")); // false

student.name = "xiaoming";
console.log(student.name); //xiaoming 屏蔽了原型对象中的 name 属性
console.log(student.hasOwnProperty("name")); // true
```

```js
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && name in object;
}
```

#### 所有属性获取

```js
function Person() {
  this.name = "KXY";
}
Person.prototype = {
  job: "student",
};

var kxy = new Person();
Object.defineProperty(kxy, "sex", {
  value: "female",
  enumerable: false,
});

console.log(Object.keys(kxy)); //["name"] //无法获取不可枚举的属性与原型链上继承的属性
console.log(Object.getOwnPropertyNames(kxy)); //["name", "sex"]
//for...in能获取原型链上继承的属性，无法获取不可枚举的属性
for (var pro in kxy) {
  console.log("kxy." + pro + " = " + kxy[pro]); // kxy.name = KXY
  //kxy.job = student
}
```

**怎样判断属性是否为实例属性并且是否可枚举**

如果想判断指定名称的属性是否为实例属性并且是否可枚举的，可以使用`propertyIsEnumerable`

```js
function Student(userName) {
  this.userName = userName;
}
Student.prototype.sayHello = function () {
  console.log("hello" + this.userName);
};
var stu = new Student();
console.log(stu.propertyIsEnumerable("userName")); //true:userName为自身定义的实例属性
console.log(stu.propertyIsEnumerable("age")); // false:age属性不存在，返回false
console.log(stu.propertyIsEnumerable("sayHello")); // false :sayHello属于原型上的函数
//将userName属性设置为不可枚举
Object.defineProperty(stu, "userName", {
  enumerable: false,
});
console.log(stu.propertyIsEnumerable("userName")); // false: userName设置了不可枚举
```

### 1.4 `Object.create( )`方法

#### 基本使用

该函数的主要作用是创建并返回一个指定原型和指定属性的新对象，语法格式如下：

```js
Object.create(prototype, propertyDescriptor);
```

`prototype`属性为对象的原型（必须），可以为`null`,如果为`null`，则对象的原型为`undefined`.

`propertyDescriptor`表示的是属性描述符（可选），具体的格式如下：

```js
propertyName:{
    value:'',  // 用来设置属性的值
    writable:true, // 用来设置属性是否可写入, 默认为false, 表示只读
    enumerable:true, // 用来设置属性是否可枚举, 默认为false, 不可枚举
    configurable:true // 设置属性是否可配置, 例如是否可以修改属性的特性以及是否可以删除属性, 默认值为false
}
```

基本实现：

```js
 <script type="text/javascript">
      const person = {
        userName: "zhangsan",
        sayHello: function () {
          console.log("hello " + this.userName);
        },
      };
      const stu = Object.create(person);  // 这样操作后student原型就是person  student.__proto__ === person
      stu.userName = "lisi";
      stu.sayHello(); //hello lisi  覆盖了person中的userName属性原有的值
    </script>
```

通过以上的代码，可以看到`stu`对象的原型是`person`.也就是`stu.__proto__===person`

下面再来看一个案例：

```js
var obj = Object.create(null, {
  userName: {
    value: "wangwu",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 23,
  },
});
console.log(obj.userName);
console.log(obj.age);
obj.age = 26;
console.log(obj.age);
for (var o in obj) {
  console.log(o);
}
delete obj.userName;
console.log(obj.userName);
delete obj.age;
console.log(obj.age);
```

#### 实现原理

通过如下的伪代码来查看对应的实现原理

```js
Object.create = function (proto, propertiesObject) {
  //省略了其它判断操作
  function F() {}
  F.prototype = proto;
  if (propertiesObject) {
    Object.defineProperties(F, propertiesObject);
  }
  return new F();
};
```

通过以上的代码，我们可以得出如下的结论：

```js
var f = new F();
f.__proto__ === F.prototype;
```

下面我们可以通过一个例子来验证一下：

```js
var obj = { x: 12, y: 13 };
var test = Object.create(obj);
console.log(test);
console.log(test.x);
console.log(test.__proto__.x);
```

**最后，这里演示一下`Object.defineProperties`方法的基本使用**

该方法的主要作用就是添加或修改对象的属性。

如下代码所示：

```js
var person = {};

Object.defineProperties(person, {
  userName: {
    value: "张三",
    enumerable: true,
  },
  age: {
    value: 12,
    enumerable: true,
  },
});
for (var p in person) {
  console.log(p);
}
person.age = 20;
console.log(person.age);
```

#### 应用场景

对于`Object.create`方法很重要的一个应用场景是用来实现继承

```js
function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}
Person.prototype.getInfo = function () {
  console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
};
var a = new Person("jojo", "femal");
var b = Object.create(Person.prototype);
console.log(a.name);
console.log(b.name);
console.log(b.getInfo);
```

下面看一下怎样实现完整的继承操作。

```js
function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}
Person.prototype.getInfo = function () {
  console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
};
function Student(name, sex, age) {
  Person.call(this, name, sex);
  this.age = age;
}
Student.prototype = Object.create(Person.prototype);
var s = new Student("coco", "femal", 25);
s.getInfo();
```

下面，我们简单的分析一下，上面的代码。

对象`s`的`__proto__`指向的是`s`的构造函数`Student`的`prototype`

```js
s.__proto__ === Student.prototype;
```

那么`Student.prototype`的`__proto__`指向什么呢？

```js
Student.prototype.__proto__ === Person.prototype;
```

```js
s.__proto__.__proto__ === Person.prototype;
```

而我们知道对象`s`是有`Student` 创建的，所以其构造函数为`Student`,所以我们在修改了原型以后，这里应该重新修正构造函数。

```js
function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}
Person.prototype.getInfo = function () {
  console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
};
function Student(name, sex, age) {
  Person.call(this, name, sex);
  this.age = age;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s = new Student("coco", "femal", 25);
s.getInfo();
```

### 1.5 `Object.create( )`与`new Object()`的区别

### 1.6 模拟`new`操作符的实现

在前面我们介绍了`new`操作符所做的三件事情，下面我们来模拟实现一下。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function New() {
  var obj = {};
  var res = Person.apply(obj, arguments);
  return typeof res === "object" ? res : obj;
}
console.log(New("zhangsan", 19));
```
