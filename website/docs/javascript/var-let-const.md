---
title: "[JS] 变量声明风格及最佳实践原理"
sidebar_position: 2
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第二章 3-3 变量`

<!--truncate-->

ECMAScript 变量是松散类型的，意思是变量可以用于保存任何类型的数据。每个变量只不过是一个用于保存任意值的命名占位符。有 3 个关键字可以声明变量：var、const 和 let。其中，var 在ECMAScript 的所有版本中都可以使用，而 const 和 let 只能在ECMAScript 6 及更晚的版本中使用。

## `var关键字`

### var声明作用域

使用 var 操作符定义的变量会成为包含它的函数的局部变量。比如，使用 var
在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁：

```js title=局部变量
function test() {
 var message = "hi"; // 局部变量
}
test();
console.log(message); // 出错！
```

这里，message 变量是在函数内部使用 var 定义的。函数叫 test()，调用它会创建这个变量并给它赋值。调用之后变量随即被销毁，因此示例中的最后一行会导致错误。不过，在函数内定义变量时省略 var 操作符，可以创建一个`全局变量`：

```js title=全局变量
function test() {
 message = "hi"; // 全局变量
}
test();
console.log(message); // "hi" 
```
去掉之前的 var 操作符之后，message 就变成了全局变量。只要调用一次函数 test()，就会定义这个变量，并且可以在函数外部访问到。

:::caution
注意 虽然可以通过省略 var 操作符定义全局变量，但不推荐这么做。在局部作用域中定
义的全局变量很难维护，也会造成困惑。这是因为不能一下子断定省略 var 是不是有意而
为之。在严格模式下，如果像这样给未声明的变量赋值，则会导致抛出 ReferenceError。
:::

### var声明提升

使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域顶部：

```js
function foo() {
 console.log(age);
 var age = 26;
}
foo(); // undefined
```

之所以不会报错，是因为 ECMAScript 运行时把它看成等价于如下代码：

```js
function foo() {
 var age;
 console.log(age);
 age = 26;
}
foo(); // undefined 
```

---

## `let声明`

### 块作用域

let 跟 var 的作用差不多，但有着非常重要的区别。最明显的区别是，let 声明的范围是`块作用域`，而 var 声明的范围是`函数作用域`。

```js title=块作用域演示
if (true) {
 var name = 'Matt';
 console.log(name); // Matt
}
console.log(name); // Matt 

// ----------------------------------------

if (true) {
 let age = 26;
 console.log(age); // 26
}
console.log(age); // ReferenceError: age 没有定义
```

在这里，age 变量之所以不能在 if 块外部被引用，是因为它的作用域仅限于该块内部。`块作用域是函数作用域的子集`，因此适用于 var 的作用域限制同样也适用于 let。
let 也不允许同一个块作用域中出现冗余声明。这样会导致报错：

```js title=let重复声明报错
var name;
var name;
let age;
let age; // SyntaxError；标识符 age 已经声明过了
```

当然，JavaScript 引擎会记录用于变量声明的标识符及其所在的块作用域，因此嵌套使用相同的标识符不会报错，而这是因为同一个块中没有重复声明：

```js
var name = 'Nicholas';
console.log(name); // 'Nicholas'
if (true) {
 var name = 'Matt';
 console.log(name); // 'Matt'
}
let age = 30;
console.log(age); // 30
if (true) {
 let age = 26;
 console.log(age); // 26
} 
```

对声明冗余报错不会因混用 let 和 var 而受影响。这两个关键字声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在。

```js
var name;
let name; // SyntaxError
let age;
var age; // SyntaxError
```

### 暂时性死区

let 与 var 的另一个重要的区别，就是 `let 声明的变量不会在作用域中被提升`。

```js title=暂时性死区
// name 会被提升
console.log(name); // undefined
var name = 'Matt';
// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26; 
```

:::info temporal dead zone
在解析代码时，JavaScript 引擎也会注意出现在块后面的 let 声明，只不过在此之前不能以任何方式来引用未声明的变量。在 let 声明之前的执行瞬间被称为“暂时性死区”（temporal dead zone），在此阶段引用任何后面才声明的变量都会抛出 ReferenceError。
:::

### 全局声明

与 var 关键字不同，使用 `let 在全局作用域中声明的变量不会成为 window 对象的属性`（var 声明的变量则会）。

```js
var name = 'Matt';
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined
```
不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内存续。因此，为了避免 SyntaxError，必须确保页面不会重复声明同一个变量。

### for 循环中的 let 声明

在 let 出现之前，for 循环定义的迭代变量会渗透到循环体外部：
```js
for (var i = 0; i < 5; ++i) {
 // 循环逻辑
}
console.log(i); // 5 
```
改成使用 let 之后，这个问题就消失了，因为迭代变量的作用域仅限于 for 循环块内部：
```js
for (let i = 0; i < 5; ++i) {
 // 循环逻辑
}
console.log(i); // ReferenceError: i 没有定义
```
在使用 var 的时候，最常见的问题就是对迭代变量的奇特声明和修改：
```js
for (var i = 0; i < 5; ++i) {
 setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出 0、1、2、3、4
// 实际上会输出 5、5、5、5、5
```
之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。在之后执行超时逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。
而在使用 let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。
每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。

```js
for (let i = 0; i < 5; ++i) {
 setTimeout(() => console.log(i), 0)
}
// 会输出 0、1、2、3、4
```

:::tip
这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of循环。
:::

---

## `const 声明`

const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改 const 声明的变量会导致运行时错误。

```js title=const
const age = 26;
age = 36; // TypeError: 给常量赋值

// const 也不允许重复声明
const name = 'Matt';
const name = 'Nicholas'; // SyntaxError
// const 声明的作用域也是块
const name = 'Matt';
if (true) {
 const name = 'Nicholas';
}
console.log(name); // Matt 
```

:::info
const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。

const person = {};  
person.name = 'Matt'; // ok
:::

### 不能用 const 来声明迭代变量

JavaScript 引擎会为 for 循环中的 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变量很相似，但是不能用 const 来声明迭代变量（因为迭代变量会自增）：

```js
for (const i = 0; i < 10; ++i) {} // TypeError：给常量赋值
```

不过，如果你只想用 const 声明一个不会被修改的 for 循环变量，那也是可以的。也就是说，每次迭代只是创建一个新变量。这对 for-of 和 for-in 循环特别有意义：

```js
let i = 0;
for (const j = 7; i < 5; ++i) {
 console.log(j);
}
// 7, 7, 7, 7, 7
for (const key in {a: 1, b: 2}) {
 console.log(key);
}
// a, b
for (const value of [1,2,3,4,5]) {
 console.log(value);
}
// 1, 2, 3, 4, 5 
```

---

## `声明风格及最佳实践`

ECMAScript 6 增加 let 和 const 从客观上为这门语言更精确地声明作用域和语义提供了更好的支持。行为怪异的 var 所造成的各种问题，已经让 JavaScript 社区为之苦恼了很多年。随着这两个新关键字的出现，新的有助于提升代码质量的最佳实践也逐渐显现。

### 1. 不使用 var
有了 let 和 const，大多数开发者会发现自己不再需要 var 了。限制自己只使用 let 和 const有助于提升代码质量，因为变量有了明确的作用域、声明位置，以及不变的值。

### 2. const 优先，let 次之
使用 const 声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不合法的赋值操作。因此，很多开发者认为应该优先使用 const 来声明变量，只在提前知道未来会有修改时，再使用 let。这样可以让开发者更有信心地推断某些变量的值永远不会变，同时也能迅速发现因意外赋值导致的非预期行为。