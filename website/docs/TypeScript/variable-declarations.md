---
title: "[TS] 变量声明"
sidebar_position: 2
---

-----

## 回顾var声明

```js
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;
```
典型闭包场景  
g函数访问了外部定义的a, 导致f执行完毕, a仍然没释放  
被g引用了, 所以在执行g函数时, a的值是外部的10

### var的作用域规则
```js
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'


//为何是undefined
//因为var 存在提前变量声明
//上面代码类同于下面
function f(shouldInitialize: boolean) {
    var x
    if (shouldInitialize) {
        x = 10;
    }

    return x;
}
```
更多解释见[TypeScript 中文手册](https://typescript.bootcss.com/variable-declarations.html)

-----

## let

### 块作用域

#### 1. 特点一
```javascript
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'   内部可以访问外部
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here   外部访问不了内部
    return b;
}

// try catch 同样适用
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e);
```

#### 2. 特点二
拥有块级作用域的变量的另一个特点是，它们<font color="red">不能在被声明之前读或写</font>。  
虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于<font color="red">暂时性死区</font>。 
```javascript
let a = 1
a++

// 上面这样操作是ok的

// 但是
a++
let a = 1
// 这样在声明之前去读写是不可以的
// 这个特点叫做暂时性死区
// 虽然块内定义了a, 但是在它声明之前都是暂时性死区, 不能对他访问, 只能在声明后访问
```

<font color="red">注意一点</font>，我们仍然可以在一个拥有块作用域变量被声明前获取它。  
只是我们不能在变量声明前去调用那个函数。 如果生成代码目标为ES2015，现代的运行时会抛出一个错误；然而，现今TypeScript是不会报错的。.

```javascript
function foo() {
    // okay to capture 'a'
    return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let a;

// 上面这个代码编译不报错, 看一下编译后的结果
function foo() {
    return a;
}
foo();
var a;

// 但是在编译时传入ES2015参数
tsc 文件名 --target es2015
// 则编译结果是:
function foo() {
    return a;
}
foo();
let a;

// 这样执行的话, 则报错, 改成如下就ok了
function foo() {
    return a;
}
let a;
foo();

```
关于暂时性死区的更多信息，查看这里[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)

#### 2. 特点三
不可重复声明
```js
// 使用var声明时，它不在乎你声明多少次；你只会得到1个。
function f(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}

// let声明就不会这么宽松了
let x = 10;
let x = 20; // 错误，不能在1个作用域里多次声明`x`

function f(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
```
并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
比如:
```javascript
function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns 0
f(true, 0);  // returns 100
```
块级作用域变量的获取:

var直观地讲，每次进入一个作用域时，它创建了一个变量的环境。  
就算作用域内代码已经执行完毕，这个环境与其捕获的变量依然存在。
比如回头看:
```javascript
for (var i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}
// 输出10次10, 如何解决, 可以使用立即执行函数
// 立即执行函数作用就是为了创建一个新的变量环境
// 使用let 定义 i, let出现在循环体, 跟var是不同的行为, 
// 不仅在循环体内引入新的变量环境, 而且针对每次迭代都创建新的作用域, 效果等同于立即执行函数做的事情
```

--------------------------------
## const
与let类似
不同的是赋值后不能再赋值, 相当于let增强版
```javascript
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error 
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// all "okay" 对属性做修改是ok的
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// 因为修改属性, 并不是修改引用.
// 仅仅是引用的值发生变化
// 而像上面报错情况, 是重新赋值, 相当于指向新的引用, 所以引用发生变化不允许

```
--------------------------------
## 解构

### 数组解构
```javascript
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// 上面写法等同于
first = input[0];
second = input[1];

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
```

### 对象解构
```javascript
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

// 属性重命名
let { a: newName1, b: newName2 } = o;
// 这里的语法开始变得混乱。 你可以将 a: newName1 读做 “a 作为 newName1“。 方向是从左到右，好像你写成了以下样子：
let newName1 = o.a;
let newName2 = o.b;

// 默认值
// 默认值可以让你在属性为 undefined 时使用缺省值：
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
// 现在，即使 b 为 undefined ， keepWholeObject 函数的变量 wholeObject 的属性 a 和 b 都会有值。

// 函数声明

```

--------------------------------
## 展开
展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。 
### 数组展开
```typescript
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
```
这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了first和second的一份浅拷贝。 它们不会影响原始数组。

### 对象展开
```typescript
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

// 这样原对象的food被替换值为rich

// 所以一定要注意顺序
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };
```