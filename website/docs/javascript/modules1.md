---
title: "[JS] 模块模式(ES6之前)"
sidebar_position: 10
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第26章`

<!--truncate-->

## 理解模块模式

ECMAScript 6 模块规范出现之前, 虽然浏览器原生不支持模块的行为，但迫切需要这样的行为。ECMAScript 同样不支持模块，因此希望使用模块模式的库或代码库必须基于 JavaScript 的语法和词法特性“伪造”出类似模块的行为。

因为 JavaScript 是异步加载的解释型语言，所以得到广泛应用的各种模块实现也表现出不同的形态。这些不同的形态决定了不同的结果，但最终它们都实现了经典的模块模式。

### 模块标识符

模块标识符是所有模块系统通用的概念。模块系统本质上是键/值实体，其中每个模块都有个可用于引用它的标识符。这个标识符在模拟模块的系统中可能是字符串，在原生实现的模块系统中可能是模块文件的实际路径。

有的模块系统支持明确声明模块的标识，还有的模块系统会隐式地使用文件名作为模块标识符。不管怎样，完善的模块系统一定不会存在模块标识冲突的问题，且系统中的任何模块都应该能够无歧义地引用其他模块。

将模块标识符解析为实际模块的过程要根据模块系统对标识符的实现。原生浏览器模块标识符必须提供实际 JavaScript 文件的路径。除了文件路径，Node.js 还会搜索 node_modules 目录，用标识符去匹配包含 index.js 的目录。

### 入口

相互依赖的模块必须指定一个模块作为入口（entry point），这也是代码执行的起点。这是理所当然的，因为 JavaScript 是顺序执行的，并且是单线程的，所以代码必须有执行的起点。入口模块也可能依赖其他模块，其他模块同样可能有自己的依赖。于是模块化 JavaScript 应用程序的所有模块会构成依赖图。

![rely](assets/rely.JPG)

图中的箭头表示依赖方向：模块 A 依赖模块 B 和模块 C，模块 B 依赖模块 D 和模块 E，模块 C 依赖模块 E。因为模块必须在依赖加载完成后才能被加载，所以这个应用程序的入口模块 A 必须在应用程序的其他部分加载后才能执行。

在 JavaScript 中，“加载”的概念可以有多种实现方式。因为模块是作为包含将立即执行的 JavaScript代码的文件实现的，所以一种可能是按照依赖图的要求依次请求各个脚本。对于前面的应用程序来说，下面的脚本请求顺序能够满足依赖图的要求：

```js
<script src="moduleE.js"></script>
<script src="moduleD.js"></script>
<script src="moduleC.js"></script>
<script src="moduleB.js"></script>
<script src="moduleA.js"></script>
```

模块加载是“阻塞的”，这意味着前置操作必须完成才能执行后续操作。每个模块在自己的代码到达浏览器之后完成加载，此时其依赖已经加载并初始化。不过，这个策略存在一些性能和复杂性问题。为一个应用程序而按顺序加载五个 JavaScript 文件并不理想，并且手动管理正确的加载顺序也颇为棘手。

---

### 异步依赖

因为 JavaScript 可以异步执行，所以如果能按需加载就好了。换句话说，可以让 JavaScript 通知模块系统在必要时加载新模块，并在模块加载完成后提供回调。在代码层面，可以通过下面的伪代码来实现：

```js
// 在模块 A 里面
load('moduleB').then(function(moduleB) {
 moduleB.doStuff();
}); 
```

模块 A 的代码使用了 moduleB 标识符向模块系统请求加载模块 B，并以模块 B 作为参数调用回调。模块 B 可能已加载完成，也可能必须重新请求和初始化，但这里的代码并不关心。这些事情都交给了模块加载器去负责。

如果重写前面的应用程序，只使用动态模块加载，那么使用一个`<script>标签即可完成模块 A 的`加载。模块 A 会按需请求模块文件，而不会生成必需的依赖列表。这样有几个好处，其中之一就是性能，因为在页面加载时只需同步加载一个文件。这些脚本也可以分离出来，比如给`<script>标签应用 defer 或 async 属性，再加上能够识别异步`脚本何时加载和初始化的逻辑。

### 动态依赖

有些模块系统要求开发者在模块开始列出所有依赖，而有些模块系统则允许开发者在程序结构中动态添加依赖。动态添加的依赖有别于模块开头列出的常规依赖，这些依赖必须在模块执行前加载完毕。下面是动态依赖加载的例子：

```js
if (loadCondition) {
 require('./moduleA');
} 
```

在这个模块中，是否加载 moduleA 是运行时确定的。加载 moduleA 时可能是阻塞的，也可能导致执行，且只有模块加载后才会继续。无论怎样，模块内部的代码在 moduleA 加载前都不能执行，因为moduleA 的存在是后续模块行为正确的关键。动态依赖可以支持更复杂的依赖关系，但代价是增加了对模块进行静态分析的难度。

### 静态分析

模块中包含的发送到浏览器的 JavaScript 代码经常会被静态分析，分析工具会检查代码结构并在不实际执行代码的情况下推断其行为。对静态分析友好的模块系统可以让模块打包系统更容易将代码处理为较少的文件。它还将支持在智能编辑器里智能自动完成。

---

## 使用 ES6 之前的模块加载器

ES6 原生支持模块之前，使用模块的 JavaScript 代码本质上是希望使用默认没有的语言性。因此，必须按照符合某种规范的模块语法来编写代码，另外还需要单独的模块工具把这模块语法与JavaScript 运行时连接起来。这里的模块语法和连接方式有不同的表现形式，常需要在浏览器中额外加载库或者在构建时完成预处理。

### CommonJS

CommonJS 规范概述了同步声明依赖的模块定义。这个规范主要用于在服务器端实现模块化代码组织，但也可用于定义在浏览器中使用的模块依赖。`CommonJS 模块语法不能在浏览器中直接运行`。

:::tip
一般认为，Node.js的模块系统使用了CommonJS规范，实际上并不完全正确。Node.js使用了轻微修改版本的 CommonJS，因为 Node.js 主要在服务器环境下使用，所以不需要考虑网络延迟问题。
:::

CommonJS 模块定义需要使用 `require()`指定依赖，而使用 exports 对象定义自己的公共 API下面的代码展示了简单的模块定义：

```js
var moduleB = require('./moduleB');
module.exports = {
 stuff: moduleB.doStuff();
}; 
```

无论一个模块在 require()中被引用多少次，模块永远是单例。在下面的例子中，moduleA 只会被打印一次。这是因为无论请求多少次，moduleA 只会被加载一次。

```js
console.log('moduleA');
var a1 = require('./moduleA');
var a2 = require('./moduleA');
console.log(a1 === a2); // true
```

模块第一次加载后会被缓存，后续加载会取得缓存的模块（如下代码所示）。模块加载顺序由依赖图决定。

```js
console.log('moduleA');
require('./moduleA');
require('./moduleB'); // "moduleA"
require('./moduleA'); 
```

CommonJS 中，模块加载是模块系统执行的同步操作。因此 require()可以像下面这样以编程方式嵌入在模块中：

```js
console.log('moduleA');
if (loadCondition) {
 require('./moduleA');
}
```

这里，moduleA 只会在 loadCondition 求值为 true 时才会加载。这个加载是同步的，因此 if()块之前的任何代码都会在加载 moduleA 之前执行，而 if()块之后的任何代码都会在加载 moduleA 之后执行。因此，如果 moduleA 已经在前面某个地方加载过了，这个条 require()就意味着只暴露 moduleA 这个命名空间而已。

在上面的例子中，模块系统是 Node.js 实现的，因此./moduleB 是相对路径，指向与当前模块位于同一目录中的模块目标。Node.js 会使用 require()调用中的模块标识符字符串去解析模块引用。在Node.js 中可以使用绝对或相对路径，也可以使用安装在 node_modules 目录中依赖的模块标识符。我们并不关心这些细节，重要的是知道在不同的 CommonJS 实现中模块字符串引用的含义可能不同。不过，所有 CommonJS 风格的实现共同之处是模块不会指定自己的标识符，它们的标识符由其在模块文件层级中的位置决定。

CommonJS 依赖几个全局属性如 require 和 module.exports。如果想在浏览器中使用 CommonJS模块，就需要与其非原生的模块语法之间构筑“桥梁”。模块级代码与浏览器运行时之间也需要某种“屏障”，因为没有封装的 CommonJS 代码在浏览器中执行会创建全局变量。这显然与模块模式的初衷相悖。

常见的解决方案是提前把模块文件打包好，把全局属性转换为原生 JavaScript 结构，将模块代码封装在函数闭包中，最终只提供一个文件。为了以正确的顺序打包模块，需要事先生成全面的依赖图。

### AMD异步模块定义

CommonJS 以服务器端为目标环境，能够一次性把所有模块都加载到内存，而异步模块定义（AMD，Asynchronous Module Definition）的模块定义系统则以浏览器为目标执行环境，`这需要考虑网络延迟的问题。` 

AMD 的一般策略是让模块声明自己的依赖，而运行在浏览器中的模块系统会按需获取依赖，并在依赖加载完成后立即执行依赖它们的模块。

`AMD 模块实现的核心是用函数包装模块定义。`这样可以防止声明全局变量，并允许加载器库控制何时加载模块。包装函数也便于模块代码的移植，因为包装函数内部的所有模块代码使用的都是原生JavaScript 结构。包装模块的函数是全局 define 的参数，它是由 AMD 加载器库的实现定义的。

```js
// ID 为'moduleA'的模块定义。moduleA 依赖 moduleB，
// moduleB 会异步加载
define('moduleA', ['moduleB'], function(moduleB) {
 return {
 stuff: moduleB.doStuff();
 };
}); 
```

AMD 也支持 require 和 exports 对象，通过它们可以在 AMD 模块工厂函数内部定义 CommonJS风格的模块。这样可以像请求模块一样请求它们，但 AMD 加载器会将它们识别为原生 AMD 结构，而不是模块定义：

```js
define('moduleA', ['require', 'exports'], function(require, exports) {
 var moduleB = require('moduleB');
 exports.stuff = moduleB.doStuff();
});
// 动态依赖也是通过这种方式支持的：
define('moduleA', ['require'], function(require) {
 if (condition) {
 var moduleB = require('moduleB');
 }
}); 
```

### UMD通用模块定义

为了统一 CommonJS 和 AMD 生态系统，通用模块定义（UMD，Universal Module Definition）规范应运而生。UMD 可用于创建这两个系统都可以使用的模块代码。本质上，UMD 定义的模块会在启动时检测要使用哪个模块系统，然后进行适当配置，并把所有逻辑包装在一个立即调用的函数表达式（IIFE）. 虽然这种组合并不完美，但在很多场景下足以实现两个生态的共存。

下面是只包含一个依赖的 UMD 模块定义的示例（来源为 GitHub 上的 UMD 仓库）：

```js
(function (root, factory) {
 if (typeof define === 'function' && define.amd) {
 // AMD。注册为匿名模块
 define(['moduleB'], factory);
 } else if (typeof module === 'object' && module.exports) {
 // Node。不支持严格 CommonJS
 // 但可以在 Node 这样支持 module.exports 的
 // 类 CommonJS 环境下使用
 module.exports = factory(require(' moduleB '));
 } else {
 // 浏览器全局上下文（root 是 window）
 root.returnExports = factory(root. moduleB);
 }
}(this, function (moduleB) {
 // 以某种方式使用 moduleB
 // 将返回值作为模块的导出
 // 这个例子返回了一个对象
 // 但是模块也可以返回函数作为导出值
 return {};
})); 
```

此模式有支持严格 CommonJS 和浏览器全局上下文的变体。不应该期望手写这个包装函数，它应该由构建工具自动生成。开发者只需专注于模块的内由容，而不必关心这些样板代码。

---
