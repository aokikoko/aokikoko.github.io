---
title: "[JS] 期约与异步函数"
sidebar_position: 9
---

----------------------------------------------------------------

## `同步与异步`

`同步行为`对应内存中顺序执行的处理器指令。每条指令都会严格按照它们出现的顺序来执行，而每条指令执行后也能立即获得存储在系统本地（如寄存器或系统内存）的信息。这样的执行流程容易分析程序在执行到代码任意位置时的状态（比如变量的值）。

相对地，`异步行为`类似于系统中断，即当前进程外部的实体可以触发代码执行。异步操作经常是必要的，因为强制进程等待一个长时间的操作通常是不可行的（同步操作则必须要等）。如果代码要访问一些高延迟的资源，比如向远程服务器发送请求并等待响应，那么就会出现长时间的等待。

### 以往的异步编程模式

异步行为是 JavaScript 的基础，但以前的实现不理想。在早期的 JavaScript 中，只支持定义回调函数来表明异步操作完成。串联多个异步操作是一个常见的问题，通常需要深度嵌套的回调函数（俗称“回调地狱”）来解决。
#### 回调地狱
多层回调函数的相互嵌套, 就形成了回调地狱

```javascript
setTimeout(() => { // 第1层回调函数
  console.log('延时1秒后输出')

  setTimeout(() => {
    console.log('延时2秒后输出')

    setTimeout(() => {
      console.log('延时3秒后输出')
    }, 3000)
  }, 2000)
}, 1000)
```

## Promise 期约

期约是对尚不存在结果的一个替身。

期约（promise）这个名字最早是由 Daniel Friedman和 David Wise在他们于 1976 年发表的论文“The Impact of Applicative Programming on Multiprocessing”中提出来的。但直到十几年以后，Barbara Liskov 和 Liuba Shrira 在 1988 年发表了论文“Promises: Linguistic Support forEfficient Asynchronous Procedure Calls in Distributed Systems”，这个概念才真正确立下来。同一时期的计算机科学家还使用了“终局”（eventual）、“期许”（future）、“延迟”（delay）和“迟付”（deferred）等术语指代同样的概念。所有这些概念描述的都是一种异步程序执行的机制。

### 期约基础

ECMAScript 6 新增的引用类型 Promise，可以通过 new 操作符来实例化。创建新期约时需要传入执行器（executor）函数作为参数（后面马上会介绍），下面的例子使用了一个空函数对象来应付一下解释器：

```js
let p = new Promise(() => {});
setTimeout(console.log, 0, p); // Promise <pending>
```

之所以说是应付解释器，是因为如果不提供执行器函数，就会抛出 SyntaxError。

**1. 期约状态机**  

在把一个期约实例传给 console.log()时，控制台输出（可能因浏览器不同而略有差异）表明该实例处于待定（pending）状态。如前所述，期约是一个有状态的对象，可能处于如下 3 种状态之一：

- 待定（pending）
- 兑现（fulfilled，有时候也称为“解决”，resolved）
- 拒绝（rejected）

`待定（pending）`是期约的最初始状态。在待定状态下，期约可以落定（settled）为代表成功的`兑现（fulfilled）`状态，或者代表失败的`拒绝（rejected）`状态。无论落定为哪种状态都是`不可逆`的。只要从待定转换为兑现或拒绝，期约的状态就不再改变。而且，也不能保证期约必然会脱离待定状态。

重要的是，期约的状态是私有的，不能直接通过 JavaScript 检测到。这主要是为了避免根据读取到的期约状态，以同步方式处理期约对象。另外，期约的状态也不能被外部 JavaScript 代码修改。这与不能读取该状态的原因是一样的：期约故意将异步行为封装起来，从而隔离外部的同步代码。

**2. 解决值、拒绝理由及期约用例**  

期约主要有两大用途。首先是抽象地表示一个异步操作。期约的状态代表期约是否完成。  

“待定”表示尚未开始或者正在执行中。

“兑现”表示已经成功完成

“拒绝”则表示没有成功完成。

某些情况下，这个状态机就是期约可以提供的最有用的信息。知道一段异步代码已经完成，对于其他代码而言已经足够了。比如，假设期约要向服务器发送一个 HTTP 请求。。请求返回200~299 范围内的状态码就足以让期约的状态变为“兑现”。类似地，如果请求返回的状态码不在 200~299 这个范围内，那么就会把期约状态切换为“拒绝”。

**3. 通过执行函数控制期约状态**  

由于期约的状态是私有的，所以只能在内部进行操作。内部操作在期约的执行器函数中完成。执行器函数主要有两项职责：初始化期约的异步行为和控制状态的最终转换。其中，控制期约状态的转换是通过调用它的两个函数参数实现的。这两个函数参数通常都命名为 resolve()和 reject()。调用resolve()会把状态切换为兑现，调用 reject()会把状态切换为拒绝。另外，调用 reject()也会抛出错误（后面会讨论这个错误）。

```js
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); // Promise <resolved>
let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2); // Promise <rejected>
// Uncaught error (in promise) 
```

此例中，并没有什么异步操作，因为在初始化期约时，执行器函数已经改变了每个期约的状态。这里的关键在于，执行器函数是同步执行的。这是因为执行器函数是期约的初始化程序。通过下面的例子可以看出上面代码的执行顺序：

```js
new Promise(() => setTimeout(console.log, 0, 'executor'));
setTimeout(console.log, 0, 'promise initialized');
// executor
// promise initialized
```

添加 setTimeout 可以推迟切换状态：

```js
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));
// 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
setTimeout(console.log, 0, p); // Promise <pending> 
```

无论 resolve()和 reject()中的哪个被调用，状态转换都不可撤销了。于是继续修改状态会静默失败，如下所示：

```js
let p = new Promise((resolve, reject) => {
 resolve();
 reject(); // 没有效果
});
setTimeout(console.log, 0, p); // Promise <resolved>
```

添加 setTimeout 可以推迟切换状态：

```js
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));
// 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
setTimeout(console.log, 0, p); // Promise <pending> 
```

无论 resolve()和 reject()中的哪个被调用，状态转换都不可撤销了。于是继续修改状态会静默失败，如下所示：

```js
let p = new Promise((resolve, reject) => {
 resolve();
 reject(); // 没有效果
});
setTimeout(console.log, 0, p); // Promise <resolved>
```

为避免期约卡在待定状态，可以添加一个定时退出功能。比如，可以通过 setTimeout 设置一个10 秒钟后无论如何都会拒绝期约的回调：

```js
let p = new Promise((resolve, reject) => {
 setTimeout(reject, 10000); // 10 秒后调用 reject()
 // 执行函数的逻辑
});
setTimeout(console.log, 0, p); // Promise <pending>
setTimeout(console.log, 11000, p); // 11 秒后再检查状态
// (After 10 seconds) Uncaught error
// (After 11 seconds) Promise <rejected>
```

因为期约的状态只能改变一次，所以这里的超时拒绝逻辑中可以放心地设置让期约处于待定状态的最长时间。如果执行器中的代码在超时之前已经解决或拒绝，那么超时回调再尝试拒绝也会静默失败。

**4. Promise.resolve()**  

期约并非一开始就必须处于待定状态，然后通过执行器函数才能转换为落定状态。调用Promise.resolve()静态方法，可以实例化一个解决的期约。下面两个期约实例实际上是一样的：

```js
let p1 = new Promise((resolve, reject) => resolve());
let p2 = Promise.resolve();
```

这个解决的期约的值对应着传给 Promise.resolve()的第一个参数。使用这个静态方法，实际上可以把任何值都转换为一个期约：

```js
setTimeout(console.log, 0, Promise.resolve());
// Promise <resolved>: undefined
setTimeout(console.log, 0, Promise.resolve(3));
// Promise <resolved>: 3 

// 多余的参数会忽略
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
// Promise <resolved>: 4 
```

对这个静态方法而言，如果传入的参数本身是一个期约，那它的行为就类似于一个空包装。因此，Promise.resolve()可以说是一个幂等方法，如下所示：

```js
let p = Promise.resolve(7);
setTimeout(console.log, 0, p === Promise.resolve(p));
// true
setTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p)));
// true 
```

这个幂等性会保留传入期约的状态：

```js
let p = new Promise(() => {});
setTimeout(console.log, 0, p); // Promise <pending>
setTimeout(console.log, 0, Promise.resolve(p)); // Promise <pending>
setTimeout(console.log, 0, p === Promise.resolve(p)); // true
```

注意，这个静态方法能够包装任何非期约值，包括错误对象，并将其转换为解决的期约。因此，也可能导致不符合预期的行为：

```js
let p = Promise.resolve(new Error('foo'));
setTimeout(console.log, 0, p);
// Promise <resolved>: Error: foo
```

**5. Promise.reject()**  

与 Promise.resolve()类似，Promise.reject()会实例化一个拒绝的期约并抛出一个异步错误`（这个错误不能通过 try/catch 捕获，而只能通过拒绝处理程序捕获）。` 可以对比上面resolve代码:

```js
let p1 = new Promise((resolve, reject) => reject());
let p2 = Promise.reject();

let p = Promise.reject(3);
setTimeout(console.log, 0, p); // Promise <rejected>: 3

p.then(null, (e) => setTimeout(console.log, 0, e)); // 3 
```

关键在于，Promise.reject()并没有照搬 Promise.resolve()的幂等逻辑。如果给它传一个期约对象，则这个期约会成为它返回的拒绝期约的理由：

```js
setTimeout(console.log, 0, Promise.reject(Promise.resolve()));
// Promise <rejected>: Promise <resolved>
```