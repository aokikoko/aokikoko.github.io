---
slug: js1
title: "[面试题] JS-基本数据类型"
sidebar_position: 7
---

## 1、基本数据类型

### 1.1 Undefined 类型

`Undefined`类型只有一个唯一的字面值`undefined`,表示的含义是一个变量不存在。

问题：哪些场景中会出现`undefined`?

第一：使用只声明而未初始化的变量时，会返回`undefined`

```js
var a;
console.log(a); //undefined
```

第二：获取一个对象的某个不存在的属性时，会返回`undefined`

```js
var obj = {
  userName: "zhangsan",
};
console.log(obj.age); //undefined
```

第三：函数没有明确的返回值，却对函数的调用结果进行打印

```js
function fn() {}
console.log(fn()); //undefined
```

第四：函数定义的时候，使用了多个形参，但是在调用的时候传递的参数的数量少于形参数量，那么没有匹配上的参数就为`undefined`

```js
function fn(p1, p2, p3) {
  console.log(p3); //undefined
}
fn(1, 2);
```

### 1.2 Null 类型

​ `Null`类型只有一个唯一的字面值`null`,表示一个空指针的对象，这也是在使用`typeof`运行符检测`null`值时会返回`object`的原因。

问题：哪些场景中会出现`null`？

第一：`JavaScript`在获取`DOM`元素时，如果没有获取到指定的元素对象，就会返回`null`

```js
document.querySelector("#id"); //null
```

第二：一般情况下，如果声明的变量是为了以后保存某个值，则应该在声明时就将其赋值为`null`

```js
var obj = null;
function foo() {
  return {
    userName: "zhangsan",
  };
}
obj = foo();
```

第三：在使用正则表达式进行匹配的时候，如果没有匹配的结果，就会返回`null`

```js
"test".match(/a/); // null
```

### 1.3 Undefined 与 null 比较

`Undefined`和`Null`虽然是两种不同的基本数据类型，但是在某些情况也存在相同之处，下面看一下它们两者相同点和不同点。

**（1）相同点**

第一：`Undefined`和`Null`两种数据类型都只有一个字面值，分别是`undefined`和`null`.

第二：`Undefined`和`Null`类型在转换为`Boolean`类型的值时，都会转换为`false`.

第三：在需要将两者转换成对象的时候，都会抛出一个`TypeError`的异常。

```js
var a;
var b = null;
cosnole.log(a.name); //Cannot read property 'name' of undefined
cosnole.log(b.name); //Cannot read property 'name' of undefined
```

第四：`Undefined`类型派生自`Null`类型，所以在非严格相等的比较下，两者是相等的。如下面代码所示：

```js
null == undefined; //true
```

**(2)不同点**

第一：`null`是`JavaScript`的`关键字`，而`undefined`是`JavaScript`的一个`全局变量`，也就是挂载在`window`对象上的一个变量，并不是关键字。

第二：在使用`typeof`运算符进行检测时，`Undefined`类型的值会返回`undefined`.而`Null`类型的值返回为`object`

```js
typeof undefined; //undefined
typeof null; //object
```

第三：在进行`数值类型的转换`时，`undefined`会转换为`NaN`,无法参与计算，而`null`会转换为`0`,可以参与计算。

```js
undefined + 0; // NaN
null + 0; // 0
```

第四：在需要进行`字符串类型的转换`时，`null`会转换成字符串`null`,而`undefined`会转换字符串`undefined`.

```js
undefined + " abc"; //"undefined abc"
null + " abc"; //"null abc"
```

第五：建议：无论在什么情况下都没有必要将一个变量显示的赋值为`undefined`。如果需要定义某个变量来保存将来要使用的对象，应该将其初始化为`null`.

### 1.4 Boolean 类型

`Boolean`类型(布尔类型)的字面量只有两个，分别是`true`和`false`,它们是区分大小写的。

`Boolean`类型使用最多的场景就是用于`if`语句的判断。在`JavaScript`中，`if`语句可以接受任何类型的表达式，即`if(a)`语句中的`a`,可以是`Boolean`,`Number`,`String`,`Object`，`Null`,`Undefined`等类型。

如果`a`不是`Boolean`类型的值，那么`JavaScript`解析器会自动调用`Boolean( )`函数对`a`进行类型的转换，返回最终符合`if`语句判断的`true`或者是`false`值。

不同类型与`Boolean`类型的值的转换是`Boolean`类型的重点。

第一：`String`类型转换为`Boolean`类型

空字符都会转换成`false`,而任何非空字符串都会转换为`true`

第二：`Number`类型转换为`Boolean`类型

`0`和`NaN`都会转换为`false`.而除了`0`和`NaN`以外都会转换`true`.

第三：`Object`类型转换`Boolean`类型

如果`object`为`null`时，会转换为`false`,如果`object`不为`null`，则都会转换成`true`.

```js
var obj = {};
Boolean(obj); //true

var obj = null;
Boolean(obj); //false
```

第四：`Function`类型转换`Boolean`类型

任何`Function`类型都会转换为`true`

```js
var fn = function () {};
Boolean(fn); //true
```

第五：`Null`类型转换为`Boolean`类型，我们知道`Null`类型只有一个`null`值，会转换为`false`.

第六：`Undefined`类型转换`Boolean`类型，我们知道`Undefined`类型只有一个`undefined`值，会转换为`false`.

### 1.5 Number 类型

Todo

### 1.6 String 类型

在`JavaScript`中的`String`类型可以通过双引号表示，也可以通过单引号表示，并且这两种方式是完全等效的。

#### 1.6.1 String 类型定义

在`JavaScript`中有 3 种方式来创建字符串，分别是字符串字面量，直接调用`String( )`函数，还有就是通过`new String( )`构造函数的方式。

**字面量**

字符串字面量就是直接通过单引号或者是双引号定义字符串的方式。

注意：单引号和双引号是等价的。

```js
var str = "hello";
var str2 = "JavaScript";
```

**直接调用`String( )`函数**

直接调用`String( )`函数，会将传入的任何类型的值转换成字符串类型。在转换的时候，需要遵循如下的规则：

第一：如果是`Number`类型的值，则直接转换成对应的字符串。

```js
String(123); // '123'
String(123.56); // "123.56"
```

第二：如果是`Boolean`类型的值，则直接转换成字符串的`"true"`或者是`"false"`

```js
String(true); // "true"
String(false); // "false"
```

第三：如果值为`null`,直接转换成字符串的`"null"`

```js
String(null); // "null"
```

第四：如果值为`undefined`,则转换成字符串的`undefined`

```js
String(undefined); //"undefined"
```

**new String( )构造函数**

这种方式是使用`new`运算符来创建一个`String`的实例。转换的规则和`String( )`函数是一样的，最后返回的是一个`String`类型的对象实例。

```js
new String(678); //返回的对象中有length属性，并且可以通过下标获取对应的值。
```

**三种创建方式的区别**

使用字符串字面量方式和直接调用`String( )`函数的方式得到的字符串都是基本字符串，而通过`new String( )`方式生成的字符串是字符串对象。

基本字符串在比较的时候，只需要比较字符串的值即可，而在比较字符串对象时，比较的是对象所在的地址。

```js
var str = "hello";
var str2 = String("hello");
str === str2; //true

var str3 = new String("hello");
var str4 = new String("hello");
str3 === str4; //false
```

对于`str`与`str2`都是基本字符串，只是比较字符串的值就可以了，所以两者是相等的。

而对于`str3`与`str4`都是通过`String`类型的实例，所以在比较的时候需要判断变量是否指向了同一个对象，也就是内存地址是否相同，很明显，`str3`与`str4`都是在内存中新生成的地址，彼此各不相同。

**函数调用**

在`String`对象的原型链有一系列的函数，例如`indexOf( )`,`substring()`等等。

通过`String`对象的实例可以调用这些函数做字符串的处理。

但是，我们发现了一个问题，就是采用字面量方式定义的字符串也能够直接调用原型链上的这些函数。

```js
"hello".indexOf("o"); //4
```

这是为什么呢？

实际上基本字符串本身是没有字符串对象上的这些函数的，而在基本字符串调用字符串对象才有的函数时，`JavaScript`会自动将基本字符串转换为字符串对象，形成一种包装的类型，这样基本字符串就可以正常调用字符串对象的方法了。

## 1.6.2 字符串常见算法

我们来看一下常见的`String`类型中的算法，这些在面试的时候也是经常被问到的。

### **字符串逆序输出**

字符串逆序输出就是将一个字符串以相反的顺序进行输出。

例如`abcdef`输出的结果是`fedcba`

第一种算法

这里我们是借助与数组的`reverse()`函数来实现。

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("abcdef"));
```

第二种算法：

```js
var arr = Array.from("abcdef"); //转换成数组,这里比第一种方式简单
console.log(arr.reverse().join(""));
```

第三种算法：

这里可以通过字符串本身提供的`chartAt`函数来完成。

```js
function reverseString2(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}
console.log(reverseString2("abcdef"));
```

### **统计字符串中出现次数最多的字符及出现的次数**

假如有一个字符串`javascriptjavaabc`,其中出现最多的字符是`a`,出现了 5 次。

**算法 1**

思想：通过`key-value`形式的对象存储字符串以及字符串出现的次数，然后逐个判断出现次数最大的值，同时获取对应的字符。

```js
<script>
      function getMaxCount(str) {
        var json = {}; //表示key-value结构的对象
        //遍历str的每一个字符得到key-value形式的对象
        for (var i = 0; i < str.length; i++) {
          //判断json对象中是否有当前从str字符串中取出来的某个字符。
          if (!json[str.charAt(i)]) {
            //如果不存在，把当前字符作为key添加到json对象中，值为1
            json[str.charAt(i)] = 1;
          } else {
            //如果存在，则让value值加1
            json[str.charAt(i)]++;
          }
        }
        //存储出现次数最多的字符
        var maxCountChar = "";
        //存储出现最多的次数
        var maxCount = 0;
        //遍历json对象，找出出现次数最大的值
        for (var key in json) {
          if (json[key] > maxCount) {
            maxCount = json[key];
            maxCountChar = key;
          }
        }
        return (
          "出现最多的字符是" + maxCountChar + ",共出现了" + maxCount + "次"
        );
      }
      var str = "javascriptjavaabc";
      console.log(getMaxCount(str));
    </script>
```

**算法 2**

思路：这里主要是对字符串进行排序，然后通过`lastIndexOf()`函数获取索引值后，判断索引值的大小以获取出现的最大次数。

```js
function getMaxCount(str) {
  //定义两个变量,分别表示出现最大次数和对应的字符。
  var maxCount = 0,
    maxCountChar = "";
  //处理成数组，调用sort()函数排序，再处理成字符串
  str = str.split("").sort().join("");
  for (var i = 0, j = str.length; i < j; i++) {
    var char = str[i];
    //计算每个字符出现的次数
    var charCount = str.lastIndexOf(char) - i + 1;
    //与次数最大值进行比较
    if (charCount > maxCount) {
      //更新maxCount与maxCountChar的值
      maxCount = charCount;
      maxCountChar = char;
    }
    //变更索引为字符出现的最后位置
    i = str.lastIndexOf(char);
  }
  return "出现最多的字符是" + maxCountChar + ",出现次数为" + maxCount;
}
console.log(getMaxCount("caa"));
```

### **去除字符串中重复的字符**

假如存在一个字符串`"javascriptjavaabc"`,其中存有重复的字符，现在需要将这些重复的字符去掉，只保留一个。

```js
function removeStringChar(str) {
  //结果数组
  var result = [];
  //key-value形式的对象
  var json = {};
  for (var i = 0; i < str.length; i++) {
    //当前处理的字符
    var char = str[i];
    //判断是否在对象中
    if (!json[char]) {
      //将value值设置为true
      json[char] = true;
      //添加到结果数组中
      result.push(char);
    }
  }
  return result.join("");
}
var str = "javascriptjavaabc";
console.log(removeStringChar(str));
```

**算法 2**

这里可以使用`ES6`中的`Set`数据结构，可以结构具有自动去重的特性，可以直接将数组元素去重。

下面先来看一下`Set`的基本使用方式

```js
const set = new Set([1, 2, 3, 4, 4]);
//console.log(set)  // Set(4) {1, 2, 3, 4}
[...set]; // [1, 2, 3, 4] 通过扩展运算符将set中的内容转换成数组，同时可以看到已经去重。
```

基本思路：

（1）将字符串处理成数组，然后作为参数传递给`Set`的构造函数，通过`new`运算符生成一个`Set`实例。

(2) 将`Set`通过扩展运算符(...)转换成数组的形式，最终转换成字符串获得需要的结果。

```js
function removeStringChar(str) {
  let set = new Set(str.split(""));
  return [...set].join("");
}
var str = "javascriptjavaabc";
console.log(removeStringChar(str));
```

### **判断一个字符串是否为回文字符串**

回文字符串指的是一个字符串正序和倒序是相同的，例如字符串`abcdcba`是一个回文字符串，而字符串`abcedba`就不是一个回文字符串。

需要注意的是，这里不区分字符的大小写，即`a`和`A`在判断的时候是相等的。

**算法 1**

主要思想是将字符串按从前往后顺序的字符与按从后往前顺序的字符逐个进行比较，如果遇到不一样的值则直接返回`false`,否则返回`true`.

```js
function isEequStr(str) {
  //空字符串则直接返回true
  if (!str.length) {
    return true;
  }
  //统一转换成小写，同时再将其转换成数组
  str = str.toLowerCase().split("");
  var start = 0,
    end = str.length - 1;
  //通过while循环，判断正序和倒序的字母
  while (start < end) {
    // 如果相等则更改比较的索引
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
var str = "abcdcba";
```

**算法 2**

思想：将字符串进行逆序的处理，然后与原来的字符串进行比较，如果相等则表示是回文字符串，否则不是回文字符串。

```js
function isEequStr(str) {
  //字符串统一转换成小写的形式
  str = str.toLowerCase();
  //将字符串转换成数组
  var arr = str.split("");
  //将数组逆序并转换成字符串
  var reverseStr = arr.reverse().join("");
  return str === reverseStr;
}
console.log(isEequStr("abccba"));
```

## 2、双等与三等运算符

### **双等于运算符隐式转换**

相比于三等于运算符，双等于运算符在进行相等比较的时候，要复杂一点。因为它不区分数据类型，而且会做隐式类型的转换。

双等于在进行比较的时候要注意的点：

如果比较的值类型不相同，则会按照下面的规则进行转换后再进行比较

(1) 如果比较的一方是`null`或者是`undefined`,只有在另一方是`null`或者是`undefined`的情况下才返回`true`,否则返回`false`

```js
null == undefined; //true
null == 1; //false
undefined == 2; //false
```

（2）如果比较的是字符串和数值类型数据，则会将字符串转换为数值后再进行比较，如果转换后的数值是相等的则返回`true`,否则返回`false`.

```js
1 == "1"; //true
"222" == 222; //true
```

（3）如果比较的时候，有一方的类型是`boolean`类型，会将`boolean`类型进行转换，`true`转换为 1,`false`转换 0，然后在进行比较。

```js
"1" == true;
"2" == true; //false
"0" == false; //true
```

### 三等于运算符

(1)如果比较的值类型不相同，则直接返回`false`

```js
1 === "1"; //false
true === "true"; //false
```

这里还需要注意的一点就是，基本数据类型存在包装类型，在没有使用`new`操作符时，简单类型的比较实际上就是值的比较，而使用了`new`操作符以后，实际得到的是引用类型的值，在判断时会因为类型不同而直接返回`false`

```js
1 === Number(1); //true
1 === new Number(1); //false
"hello" === String("hello"); //true
"hello" === new String("hello"); //false
```

(2) 如果比较的值都是数值类型，则直接比较值的大小，相等则返回`true`,否则返回`false`,需要注意的是，如果参与比较的值中有任何一方为`NaN`,则返回`false`

```js
26 === 26; //true
34 === NaN; //false
```

（3）如果比较的值是字符串类型，则判断每个字符是否相等，如果全部相等，返回`true`,否则返回`false`

```js
"abc" === "abc"; //true
"abc" === "abd"; //false
```

（4）关于`null`与`undefined`比较

```js
null === null; //true
undefined === undefined; //true
undefined === null; //false
```

(5)如果比较的值都是引用类型，则比较的是引用类型的地址，当两个引用指向同一个地址时，则返回`true`,否则返回`false`

```js
var a = [];
var b = a;
var c = [];
console.log(a === b); //true
console.log(a === c); //false

new String("hello") === new String("hello"); //false 两个不同对象，地址不相同
//创建构造函数
```

```js
function Person(userName) {
  this.userName = userName;
}
var p1 = new Person("wangwu");
var p2 = new Person("wangwu");
console.log(p1 === p2); //false  两个不同对象，地址不相同
```

### 2.2 typeof 运算符

`typeof`运算符用于返回对应的数据类型，

基本的使用方式

```
typeof operator
typeof (operator)
```

`operator`表示要返回类型的操作数，可以是引用类型，也可以是基本数据类型。

括号有时候是必须的，如果不加上括号将会因为优先级的问题，而得不到我们想要的结果。

下面我们看一下`typeof`的使用场景

（1）处理`Undefined`类型

我们知道`Undefined`类型的值只有一个`undefined`,`typeof`运算符在处理如下情况的时候，返回的结果都是`undefined`

```
处理undefined本身
未声明的变量
已经声明但是没有初始化的变量
```

```js
typeof undefined; //"undefined"
typeof abc; //"undefined" ,未声明的变量abc，通过typeof返回的是undefined

var sum;
typeof sum; //undefined  已经声明但是没有初始化的变量
```

(2)处理`Boolean`类型的值

`Boolean`类型的值有两个，分别是`true`和`false`,`typeof`运算符在处理这两个值的时候返回都是`boolean`

```js
var b = true;
typeof b; //"boolean"
```

(3) 处理`Number`类型的值

对于`Number`类型的数，`typeof`运算符在处理时会返回`number`

```js
typeof 666; //number
typeof 66.66; //number
```

（4）处理`String`类型的值

字符串类型，`typeof`返回的是`string`,包括空字符串。

```js
typeof "aaa"; //string
typeof ""; //string
```

(5)处理`Function`类型的值

函数的定义，包括函数的声明，`typeof`返回的值`function`

```js
function fun() {}
typeof fun; // "function"

var fun2 = function () {};
typeof fun2; // "function"
```

关于通过`class`关键字定义的类，通过`typoef`计算返回的值也是`function`

```js
class Obj {}
typeof Obj; // "function"
```

`class`是在`ES6`中新增的一个关键字，原理依旧是原型继承，也就是说本质上仍然是一个`Function`

(6) 处理`Object`类型的值

对象字面量的形式，返回的是`object`

```js
var obj = { userName: "zhangsan" };
typeof obj; //"object"
```

数组，通过`typeof`计算返回的值是`object`

```js
var arr = [1, 2, 3];
typeof arr; // "object"

var arr2 = new Array();
typeof arr2; //"object"
```

(7) `typeof`运算符对`null`的处理

`typeof`运算符对`null`的处理，返回的是`object`

```js
typeof null; //object
```

注意：在前面我们提到过，在使用`typeof`的时候，括号有时候是必须的，如果不加上括号会因为优先级问题，得不到我们想要的结果。

例如如下代码所示：

```js
var num = 123;
typeof (num + "hello"); // string
typeof num + " hello"; //"number hello"
```

通过上面的代码，我们知道`typeof`运算符的优先级要高于字符串的拼接运算符`(+)`,但是优先级低于小括号，所以在未使用括号时，会优先处理`typeof num`, 返回的是`number`,然后与`hello`字符串进行拼接，得到的最终的结果就是`number hello`

下面，我们再来看一段代码

```js
typeof 6 / 2; // NaN
```

在上面的代码中，会先执行`typeof 6` 得到的结果为`number`,然后除以 2，一个字符串除以 2，得到的结果为`NaN`

```js
typeof (6 / 2); //"number"
```

这里会先计算括号中的内容，然后在通过`typeof`进行计算。

## 3、常用的判空方法

在`JavaScript`中判断一个变量是否为空，我们往往会想到对变量取反，然后判断是否为`true`

```js
if (!x) {
}
```

这是一个非常简单的判断变量是否为空的方法，但是其实涉及到的场景却很多，这里我们就分情况来看一下。

### **（1）判断变量为空对象**

**判断变量为`null`或者为`undefined`**

判断一个变量是否为空时，可以直接将变量与`null`或者是`undefined`进行比较，需要注意的是双等号和三等好直接的区别。

```js
if(obj==null) //可以判断null或者是undefined的情况
if(obj===undefined) //只能判断undefined的情况
```

**判断变量为空对象`{ }`**

判断一个变量是否为空对象时，可以通过`for...in`语句遍历变量的属性，然后调用`hasOwnProperty( )`函数，判断是否有自身存在的属性，如果存在就不是空对象，如果不存在自身的属性（不包括继承的属性），那么变量为空对象。

```js
function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

var obj = {
  username: "zhangsan",
};
console.log(isEmpty(obj)); // false,表明obj这个对象是有自己的属性，所以不是空对象
```

```js
var obj = {};
console.log(isEmpty(obj)); //true,这里将obj对象的属性去掉了，返回的值为true,表明没有自己的属性，表示空对象
```

```js
//这里通过构造函数的形式创建对象，并且指定了age属性
function Person() {
  this.age = 20;
}

var p = new Person();
console.log(isEmpty(p)); //false
```

下面看一下另外一种情况

```js
function Person() {}
Person.prototype.userName = "zhangsan";
var p = new Person();
console.log(isEmpty(p)); //true
```

在上面的代码中，变量`p`是通过`new`操作符得到的`Person`对象的实例，所以`p`会继承`Person`原型链上的`userName`属性，但是因为不是自身的属性，所以会被判断为空，所以返回`true`.

### **(2) 判断变量为空数组**

判断变量是否为空数组时，首先要判断变量是否为数组，然后通过数组的`length`属性确定。(**`instanceof` 用于判断一个变量是否某个对象的实例**)

```js
var arr = new Array();
arr instanceof Array && arr.length === 0;
```

以上两个条件都满足时，变量就是一个空数组。

### **(3) 判断变量为空字符串**

判断变量是否为空字符串时，可以直接将其与空字符串进行比较，或者调用`trim()`函数去掉前后的空格以后，在去判断字符串的长度。

```js
str == "" || str.trim().length == 0;
```

当满足以上两个条件中的任意一个时，变量就是一个空字符串。

### **（4）判断变量为 0 或者`NaN`**

当一个变量为`Number`类型时，判断变量是否为 0 或者`NaN`,因为`NaN`与任何值比较都是`false`,所以这里我们通过取非来完成判断。

```js
!(Number(num) && num) == true;
```

当上述代码返回的结果为`true`，表明变量为 0 或者是`NaN`

（5）

在最开始的时候，我们提到的

在`JavaScript`中判断一个变量是否为空，我们往往会想到对变量取反，然后判断是否为`true`

```js
if (!x) {
}
```

这种方式会包含多种情况，下面我们总结一下：

```js
变量为null
变量为undefined
变量为空字符串''
变量为数字0
变量为NaN
```
