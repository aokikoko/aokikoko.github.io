---
title: "[JS] 模块模式(ES6出现的模块化)"
sidebar_position: 21
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第26章`

<!--truncate-->

## 模块加载器终将没落

随着 ECMAScript 6 模块规范得到越来越广泛的支持，以上展示的模式最终会走向没落。尽管如此，为了了解为什么选择设计决策，了解 ES6 模块规范的由来仍是非常有用的。CommonJS 与 AMD 之间的冲突正是我们现在享用的 ECMAScript 6 模块规范诞生的温床。

### 使用 ES6 模块

ES6 最大的一个改进就是引入了模块规范。这个规范全方位简化了之前出现的模块加载器，原生浏览器支持意味着加载器及其他预处理都不再必要。从很多方面看，ES6 模块系统是集 AMD 和 CommonJS之大成者。

### 模块标签及定义

ECMAScript 6 模块是作为一整块 JavaScript 代码而存在的。带有 type="module"属性的`<script>`标签会告诉浏览器相关代码应该作为模块执行，而不是作为传统的脚本执行。模块可以嵌入在网页中，也可以作为外部文件引入：

```js
<script type="module">
 // 模块代码
</script>
<script type="module" src="path/to/myModule.js"></script> 
```

与传统脚本不同，所有模块都会像`<script defer>`加载的脚本一样按顺序执行。解析到`<script type="module">`标签后会立即下载模块文件，但执行会延迟到文档解析完成。无论对嵌入的模块代码，还是引入的外部模块文件，都是这样。`<script type="module">`在页面中出现的顺序就是它们执行的顺序。与`<script defer>`一样，修改模块标签的位置，无论是在`<head>`还是在`<body>`中，只会影响文件什么时候加载，而不会影响模块什么时候加载。
下面演示了嵌入模块代码的执行顺序：

```js
<!-- 第二个执行 -->
<script type="module"></script>
<!-- 第三个执行 -->
<script type="module"></script>
<!-- 第一个执行 -->
<script></script> 
```

另外，可以改为加载外部 JS 模块定义：

```js
<!-- 第二个执行 -->
<script type="module" src="module.js"></script>
<!-- 第三个执行 -->
<script type="module" src="module.js"></script>
<!-- 第一个执行 -->
<script><script> 
```

也可以给模块标签添加 `async` 属性。这样影响就是双重的：不仅模块执行顺序不再与`<script>`标签在页面中的顺序绑定，模块也不会等待文档完成解析才执行。不过，入口模块仍必须等待其依赖加载完成。

与`<script type="module">`标签关联的 ES6 模块被认为是模块图中的入口模块。一个页面上有多少个入口模块没有限制，重复加载同一个模块也没有限制。同一个模块无论在一个页面中被加载多少次，也不管它是如何加载的，实际上都只会加载一次，如下面的代码所示：

```js
<!-- moduleA 在这个页面上只会被加载一次 -->
<script type="module">
 import './moduleA.js'
<script>
<script type="module">
 import './moduleA.js'
<script>
<script type="module" src="./moduleA.js"></script>
<script type="module" src="./moduleA.js"></script>
```

嵌入的模块定义代码不能使用 import 加载到其他模块。只有通过外部文件加载的模块才可以使用import 加载。因此，嵌入模块只适合作为入口模块。

### 模块加载

ECMAScript 6 模块的独特之处在于，既可以通过浏览器原生加载，也可以与第三方加载器和构建工具一起加载。有些浏览器还没有原生支持 ES6 模块，因此可能还需要第三方工具。事实上，很多时候使用第三方工具可能会更方便

这个过程与 AMD 风格的模块加载非常相似。模块文件按需加载，且后续模块的请求会因为每个依赖模块的网络延迟而同步延迟。即，如果 moduleA 依赖 moduleB，moduleB 依赖 moduleC。浏览器在对 moduleB 的请求完成之前并不知道要请求 moduleC。这种加载方式效率很高，也不需要外部工具，但加载大型应用程序的深度依赖图可能要花费很长时间。

### 模块行为

ECMAScript 6 模块借用了 CommonJS 和 AMD 的很多优秀特性。下面简单列举一些。
- 模块代码只在加载后执行。
- 模块只能加载一次。
- 模块是单例。
- 模块可以定义公共接口，其他模块可以基于这个公共接口观察和交互。
- 模块可以请求加载其他模块。
- 支持循环依赖。

ES6 模块系统也增加了一些新行为。
- ES6 模块默认在严格模式下执行。
- ES6 模块不共享全局命名空间。
- 模块顶级 this 的值是 undefined（常规脚本中是 window）。
- 模块中的 var 声明不会添加到 window 对象。
- ES6 模块是异步加载和执行的。

浏览器运行时在知道应该把某个文件当成模块时，会有条件地按照上述 ECMAScript 6 模块行为来施加限制。与`<script type="module">`关联或者通过 `import` 语句加载的 JavaScript 文件会被认定为模块。

---

## 模块导出与导入

### 模块导出

ES6 模块的公共导出系统与 CommonJS 非常相似。控制模块的哪些部分对外部可见的是 export 关键字。

### 模块导入

模块可以通过使用 import 关键字使用其他模块导出的值。与 export 类似，import 必须出现在模块的顶级

```js
// 允许
import ...
// 不允许
if (condition) {
 import ...
} 
```

`import` 语句被提升到模块顶部。因此，与 export 关键字类似，import 语句与使用导入值的语句的相对位置并不重要。不过，还是推荐把导入语句放在模块顶部。

```js
// 允许
import { foo } from './fooModule.js';
console.log(foo); // 'foo'
// 允许，但应该避免
console.log(foo); // 'foo'
import { foo } from './fooModule.js'; 
```

模块标识符可以是相对于当前模块的相对路径，也可以是指向模块文件的绝对路径。它必须是纯字符串，不能是动态计算的结果。例如，不能是拼接的字符串。

:::tip
`<Javascript高级程序设计>2020版`写作时，有一个动态导入模块的提案处在第三阶段（stage 3），参见 GitHub 上 tc39/proposals 页面。
:::

---

## 向后兼容

ECMAScript 模块的兼容是个渐进的过程，能够同时兼容支持和不支持的浏览器对早期采用者是有价值的。对于想要尽可能在浏览器中原生使用 ECMAScript 6 模块的用户，可以提供两个版本的代码：基于模块的版本与基于脚本的版本。如果嫌麻烦，可以使用第三方模块系统（如 SystemJS）或在构建时将 ES6 模块进行转译，这都是不错的方案。

### 第一种方案

第一种方案涉及在服务器上检查浏览器的用户代理，与支持模块的浏览器名单进行匹配，然后基于匹配结果决定提供哪个版本的 JavaScript 文件。这个方法不太可靠，而且比较麻烦，不推荐。

### 第二种方案

更好、更优雅的方案是利用脚本的 type 属性和 nomodule 属性。
浏览器在遇到`<script>`标签上无法识别的 type 属性时会拒绝执行其内容。对于不支持模块的浏览器，这意味着`<script type="module">`不会被执行。因此，可以在`<script type="module">`标签旁边添加一个回退`<script>`标签：

```js
// 不支持模块的浏览器不会执行这里的代码
<script type="module" src="module.js"></script>
// 不支持模块的浏览器会执行这里的代码
<script src="script.js"></script>
```

当然，这样一来支持模块的浏览器就有麻烦了。此时，前面的代码会执行两次，显然这不是我们想要的结果。为了避免这种情况，原生支持 ECMAScript 6 模块的浏览器也会识别 nomodule 属性。此属性通知支持 ES6 模块的浏览器不执行脚本。不支持模块的浏览器无法识别该属性，从而忽略这个属性的存在。因此，下面代码会生成一个设置，在这个设置中，支持模块和不支持模块的浏览器都只会执行一段脚本：

```js
// 支持模块的浏览器会执行这段脚本
// 不支持模块的浏览器不会执行这段脚本
<script type="module" src="module.js"></script>
// 支持模块的浏览器不会执行这段脚本
// 不支持模块的浏览器会执行这段脚本
<script nomodule src="script.js"></script>
```

## 小结

模块模式是管理复杂性的永恒工具。开发者可以通过它创建逻辑彼此独立的代码段，在这些代码段之间声明依赖，并将它们连接在一起。此外，这种模式也是经证明能够优雅扩展到任意复杂度且跨平台的方案。

多年以来，CommonJS 和 AMD 这两个分别针对服务器端环境和受延迟限制的客户端环境的模块系统长期分裂。两个系统都获得了爆炸性增强，但为它们编写的代码则在很多方面不一致，经常也会带有冗余的样板代码。而且，这两个系统都没有在浏览器中实现。缺乏兼容导致出现了相关工具，从而让在浏览器中实现模块模式成为可能。

ECMAScript 6 规范重新定义了浏览器模块，集之前两个系统之长于一身，并通过更简单的声明性语法暴露出来。浏览器对原生模块的支持越来越好，但也提供了稳健的工具以实现从不支持到支持 ES6模块的过渡。