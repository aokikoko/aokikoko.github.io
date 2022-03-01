---
title: "[JS] URL 编码方法"
sidebar_position: 7
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第五章 5-4`

<!--truncate-->

## ecnodeURI( ) 与 encodeURIComponent( )

Global 对象是 ECMAScript 中最特别的对象，因为代码不会显式地访问它。ECMA-262 规定 Global对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成 Global 对象的属性 。比如: `isNaN()、isFinite()、parseInt()和 parseFloat()`实际上都是 Global 对象的方法。除了这些，Global 对象上还有另外一些方法。

encodeURI()和 encodeURIComponent()方法用于编码统一资源标识符（URI），以便传给浏览器。有效的 URI 不能包含某些字符，比如空格。使用 URI 编码方法来编码 URI 可以让浏览器能够理解它们，同时又以特殊的 UTF-8 编码替换掉所有无效字符。

ecnodeURI()方法用于对整个 URI 进行编码，比如"www.wrox.com/illegal value.js"。而encodeURIComponent()方法用于编码 URI 中单独的组件，比如前面 URL 中的"illegal value.js"。

### 两者主要区别

encodeURI()不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、井号

encodeURIComponent()会编码它发现的所有非标准字符。

来看下面的例子：

```js
let uri = "http://www.wrox.com/illegal value.js#start";

console.log(encodeURI(uri)); 
// "http://www.wrox.com/illegal%20value.js#start" 

console.log(encodeURIComponent(uri)); 
// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"

// 这里使用 encodeURI()编码后，除空格被替换为%20 之外，没有任何变化。
// 而 encodeURIComponent()方法将所有非字母字符都替换成了相应的编码形式。

```

:::tip 使用频率
一般来说，使用 encodeURIComponent()应该比使用 encodeURI()的频率更高，
这是因为编码查询字符串参数比编码基准 URI 的次数更多。
:::

---

## decodeURI( ) 与 decodeURIComponent( )

decodeURI()只对使用 encodeURI()编码过的字符解码。
例如，%20 会被替换为空格，但%23 不会被替换为井号（#），因为井号不是由 encodeURI()替换的。

decodeURIComponent()解码所有被 encodeURIComponent()编码的字符，基本上就是解码所有特殊值。

来看下面的例子：

```js
let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
// http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start
console.log(decodeURI(uri));

// http:// www.wrox.com/illegal value.js#start
console.log(decodeURIComponent(uri)); 

// 这里，uri 变量中包含一个使用 encodeURIComponent()编码过的字符串。

// 首先输出的是使用decodeURI()解码的结果，可以看到只用空格替换了%20。

// 然后是使用 decodeURIComponent()解码的结果，其中替换了所有特殊字符，
// 并输出了没有包含任何转义的字符串。（这个字符串不是有效的 URL。）
```
