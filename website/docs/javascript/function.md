---
title: "[JS] 函 数"
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第十章`

<!--truncate-->

## 函数定义

函数是ECMAScript中最有意思的部分之一，这主要是因为`函数实际上是对象`。每个函数都是Function类型的实例，而 Function 也有属性和方法，跟其他引用类型一样。因为函数是对象，所以函数名就是指向函数对象的指针，而且不一定与函数本身紧密绑定。

## 函数的四种定义方式

### 函数声明方式

```js
function sum (num1, num2) {
 return num1 + num2;
}
```

### 函数表达式方式

```js
let sum = function(num1, num2) {
 return num1 + num2;
};
```

### 箭头函数方式

```js
let sum = (num1, num2) => {
 return num1 + num2;
}; 
```

### 使用Function 构造函数

```js
let sum = new Function("num1", "num2", "return num1 + num2"); // 不推荐
```

不推荐使用这种语法来定义函数，因为这段代码会被解释两次：

第一次是将它当作常规ECMAScript 代码，第二次是解释传给构造函数的字符串。这显然会影响性能。不过，把函数想象为对象，把函数名想象为指针是很重要的。而上面这种语法很好地诠释了这些概念。

---

## 箭头函数

很大程度上，箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的。

箭头函数虽然语法简洁，但也有很多场合不适用。箭头函数不能使用 `arguments`、`super` 和`new.target`，也不能用作构造函数。此外，箭头函数也没有 `prototype` 属性。

## 函数名

函数名就是指向函数的指针, 这意味着一个函数可以有多个名称，如下所示：

```js
function sum(num1, num2) {
 return num1 + num2;
}
console.log(sum(10, 10)); // 20
let anotherSum = sum;
console.log(anotherSum(10, 10)); // 20
sum = null;
console.log(anotherSum(10, 10)); // 20

```
以上代码定义了一个名为 sum()的函数，用于求两个数之和。然后又声明了一个变量 anotherSum，并将它的值设置为等于 sum。注意，使用不带括号的函数名会访问函数指针，而不会执行函数。此时，anotherSum 和 sum 都指向同一个函数。调用 anotherSum()也可以返回结果。把 sum 设置为 null之后，就切断了它与函数之间的关联。而 anotherSum()还是可以照常调用，没有问题。

## 理解参数

ECMAScript 函数的参数在内部表现为一个数组。函数被调用时总会接收一个数组，但函数并不关心这个数组中包含什么。在下面的例子中，sayHi()函数的第一个参数叫 name：

```js
function sayHi(name, message) {
 console.log("Hello " + name + ", " + message);
}
```

可以通过 `arguments[0]`取得相同的参数值。因此，把函数重写成不声明参数也可以：

```js
function sayHi() {
 console.log("Hello " + arguments[0] + ", " + arguments[1]);
} 
```

### 箭头函数中的参数

如果函数是使用箭头语法定义的，那么传给函数的参数将不能使用 arguments 关键字访问，而只能通过定义的命名参数访问。

```js
function foo() {
 console.log(arguments[0]);
}
foo(5); // 5
let bar = () => {
 console.log(arguments[0]);
};
bar(5); // ReferenceError: arguments is not defined
```

虽然箭头函数中没有 arguments 对象，但可以在包装函数中把它提供给箭头函数：

```js
function foo() {
 let bar = () => {
 console.log(arguments[0]); // 5
 };
 bar();
}
foo(5); 
```

### 默认参数作用域与暂时性死区

因为在求值默认参数时可以定义对象，也可以动态调用函数，所以函数参数肯定是在某个作用域中求值的。

给多个参数定义默认值实际上跟使用 let 关键字顺序声明变量一样。来看下面的例子：

```js
function makeKing(name = 'Henry', numerals = 'VIII') {
 return `King ${name} ${numerals}`;
}
console.log(makeKing()); // King Henry VIII
```

这里的默认参数会按照定义它们的顺序依次被初始化。可以依照如下示例想象一下这个过程：

```js
function makeKing() {
 let name = 'Henry';
 let numerals = 'VIII';
 return `King ${name} ${numerals}`;
} 
```

参数初始化顺序遵循“暂时性死区”规则, 暂略


## 函数声明与函数表达式

事实上，JavaScript 引擎在加载数据时对函数声明和函数表达式区分得很清楚

JavaScript 引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中生成函数定义。而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。来看下面的例子：

```js
// 没问题
console.log(sum(10, 10));
function sum(num1, num2) {
 return num1 + num2;
} 
```

以上代码可以正常运行，因为函数声明会在任何代码执行之前先被读取并添加到执行上下文。这个过程叫作函数声明提升（function declaration hoisting）。在执行代码时，JavaScript 引擎会先执行一遍扫描，把发现的函数声明提升到源代码树的顶部。因此即使函数定义出现在调用它们的代码之后，引擎也会把函数声明提升到顶部。如果把前面代码中的函数声明改为等价的函数表达式，那么执行的时候就会出错：

```js
// 会出错
console.log(sum(10, 10));
let sum = function(num1, num2) {
 return num1 + num2;
}; 
```

上面的代码之所以会出错，是因为这个函数定义包含在一个变量初始化语句中，而不是函数声明中。这意味着代码如果没有执行到加粗的那一行，那么执行上下文中就没有函数的定义，所以上面的代码会出错。这并不是因为使用 let 而导致的，使用 var 关键字也会碰到同样的问题：

```js
console.log(sum(10, 10));
var sum = function(num1, num2) {
 return num1 + num2;
}; 
```

除了函数什么时候真正有定义这个区别之外，这两种语法是等价的。

## 函数内部

在 ECMAScript 5 中，函数内部存在两个特殊的对象：arguments 和 this。ECMAScript 6 又新增 new.target 属性。

### arguments

arguments 对象它是一个类数组对象，包含调用函数时传入的所有参数。这个对象只有以 function 关键字定义函数（相对于使用箭头语法创建函数）时才会有。虽然主要用于包含函数参数，但 arguments 对象其实还有一个 callee 属性，是一个指向 arguments 对象所在函数的指针。来看下面这个经典的阶乘函数：

```js
function factorial(num) {
 if (num <= 1) {
 return 1;
 } else {
 return num * factorial(num - 1);
 }
} 
```

阶乘函数一般定义成递归调用的，就像上面这个例子一样。只要给函数一个名称，而且这个名称不会变，这样定义就没有问题。但是，这个函数要正确执行就必须保证函数名是 factorial，从而导致了紧密耦合。使用 arguments.callee 就可以让函数逻辑与函数名解耦：

```js
function factorial(num) {
 if (num <= 1) {
 return 1;
 } else {
 return num * arguments.callee(num - 1);
 }
} 
```

这个重写之后的 factorial()函数已经用 arguments.callee 代替了之前硬编码的 factorial。这意味着无论函数叫什么名称，都可以引用正确的函数。考虑下面的情况：

```js
let trueFactorial = factorial;
factorial = function() {
 return 0;
};
console.log(trueFactorial(5)); // 120
console.log(factorial(5)); // 0
```

这里，trueFactorial 变量被赋值为 factorial，实际上把同一个函数的指针又保存到了另一个位置。然后，factorial 函数又被重写为一个返回 0 的函数。如果像 factorial()最初的版本那样不使用 arguments.callee，那么像上面这样调用 trueFactorial()就会返回 0。不过，通过将函数与名称解耦，trueFactorial()就可以正确计算阶乘，而 factorial()则只能返回 0。

### this

一个特殊的对象是 this，它在标准函数和箭头函数中有不同的行为。

在标准函数中，this 引用的是把函数当成方法调用的上下文对象，这时候通常称其为 this 值（在网页的全局上下文中调用函数时，this 指向 windows）。来看下面的例子：