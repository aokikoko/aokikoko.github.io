---
title: "[JS] 错误处理与调试"
sidebar_position: 26
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第二十一章`

<!--truncate-->


# 错误处理与调试

JavaScript 一直以来被认为是最难调试的编程语言之一，因为它是动态的，且多年来没有适当的开发工具。错误经常会以令人迷惑的浏览器消息形式抛出，比如"object expected"。这样的消息没有上下文，因此很难理解。ECMAScript 第 3 版致力于改进这个方面，引入了 try/catch 和 throw 语句，以及一些错误类型，以帮助开发者在出错时正确地处理它们。几年后，JavaScript 调试器和排错工具开始在浏览器中出现。到了 2008 年，大多数浏览器支持一些 JavaScript 调试能力。

## 浏览器错误报告

所有主流桌面浏览器，包括 IE/Edge、Firefox、Safari、Chrome 和 Opera，都提供了向用户报告错误的机制。默认情况下，所有浏览器都会隐藏错误信息。一个原因是除了开发者之外这些信息对别人没什么用，另一个原因是网页在正常操作中报错的固有特性。

### 桌面控制台

常用浏览器的都经常用

### 移动控制台

移动浏览器不会直接在设备上提供控制台界面。不过，还是有一些途径可以在移动设备中检查错误。Chrome 移动版和 Safari 的 iOS 版内置了实用工具，支持将设备连接到宿主操作系统中相同的浏览器。然后，就可以在对应的桌面浏览器中查看错误了。此外也可以使用第三方工具直接在移动设备上调试。Firefox 常用的调试工具是 Firebug Lite，这需要通过 JavaScript 的书签小工具向当前页面中加入 Firebug 脚本才可以。脚本运行后，就可以直接在移动浏览器上打开调试界面。Firebug Lite 也有面向其他浏览器（如 Chrome）的版本。

---

## 错误处理

错误处理在编程中的重要性毋庸置疑。所有主流 Web 应用程序都需要定义完善的错误处理协议, 大多数优秀的应用程序有自己的错误处理策略，尽管主要逻辑是放在服务器端的。事实上，服务器端团队通常会花很多精力根据错误类型、频率和其他重要指标来定义规范的错误日志机制。最终实现通过简单的数据库查询或报告生成脚本就可以了解应用程序的运行状态。

错误处理在应用程序的浏览器端进展较慢，尽管其重要性一点也不低。

### try/catch 语句

ECMA-262 第 3 版新增了 try/catch 语句，作为在 JavaScript 中处理异常的一种方式。基本的语法如下所示，跟 Java 中的 try/catch 语句一样：

```js
try {
 // 可能出错的代码
} catch (error) {
 // 出错时要做什么
} 
```

任何可能出错的代码都应该放到 try 块中，而处理错误的代码则放在 catch 块中，如下所示：

```js
try {
 window.someNonexistentFunction();
} catch (error){
 console.log("An error happened!");
}
```

如果 try 块中有代码发生错误，代码会立即退出执行，并跳到 catch 块中。catch 块此时接收到一个对象，该对象包含发生错误的相关信息。错误对象中暴露的实际信息因浏览器而异，但至少包含保存错误消息的 message属性。

**1. finally 子句**

try/catch 语句中可选的 finally 子句始终运行。try 或catch 块无法阻止 finally 块执行，包括 return 语句。比如：

```js
function testFinally(){
 try {
 return 2;
 } catch (error){
 return 1;
 } finally {
 return 0;
 }
} 
```

这个函数在 try/catch 语句的各个部分都只放了一个 return 语句。看起来该函数应该返回 2，因为它在 try 块中，不会导致错误。但是，finally 块的存在导致 try 块中的 return 语句被忽略。因此，无论什么情况下调用该函数都会返回 0。

:::caution
只要代码中包含了 finally 子句，try 块或 catch 块中的 return 语句就会被忽略，理解这一点很重要。在使用 finally 时一定要仔细确认代码的行为。
:::

**2. 错误类型**

代码执行过程中会发生各种类型的错误。每种类型都会对应一个错误发生时抛出的错误对象。ECMA-262 定义了以下 8 种错误类型：

- Error
- InternalError
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

不同的错误类型可用于为异常提供更多信息，以便实现适当的错误处理逻辑。在 try/catch 语句的 catch 块中，可以使用 instanceof 操作符确定错误的类型，比如：

```js
try {
 someFunction();
} catch (error){
 if (error instanceof TypeError){
    // 处理类型错误
 } else if (error instanceof ReferenceError){
 // 处理引用错误
 } else {
 // 处理所有其他类型的错误
 }
} 
```

**3. try/catch 的用法**

try/catch 语句最好用在自己无法控制的错误上。例如，假设你的代码中使用了一个大型 JavaScript库的某个函数，而该函数可能会有意或由于出错而抛出错误。因为不能修改这个库的代码，所以为防止这个函数报告错误，就有必要通过 try/catch 语句把该函数调用包装起来，对可能的错误进行处理。

如果你明确知道自己的代码会发生某种错误，那么就不适合使用 try/catch 语句。例如，如果给函数传入字符串而不是数值时就会失败，就应该检查该函数的参数类型并采取相应的操作。这种情况下，没有必要使用 try/catch 语句。

### 抛出错误

与 try/catch 语句对应的一个机制是 throw 操作符，用于在任何时候抛出自定义错误。throw 操作符必须有一个值，但值的类型不限。下面这些代码都是有效的：

```js
throw 12345;
throw "Hello world!";
throw true;
throw { name: "JavaScript" };
```

使用 throw 操作符时，代码立即停止执行，除非 try/catch 语句捕获了抛出的值。

通过继承 Error也可以创建自定义的错误类型。创建自定义错误类型时，需要提供 name 属性和 message 属性，比如：

```js
class CustomError extends Error {
 constructor(message) {
 super(message);
 this.name = "CustomError";
 this.message = message;
 }
}
throw new CustomError("My message");
```

继承 Error 的自定义错误类型会被浏览器当成其他内置错误类型。自定义错误类型有助于在捕获错误时更准确地区分错误。

**1. 何时抛出错误**

抛出自定义错误是解释函数为什么失败的有效方式。在出现已知函数无法正确执行的情况时就应该抛出错误。换句话说，浏览器会在给定条件下执行该函数时抛出错误。例如，下面的函数会在参数不是数组时抛出错误：

```js
function process(values){
 values.sort();
 for (let value of values){
 if (value > 100){
 return value;
 }
 }
 return -1;
} 
```

如果给这个函数传入字符串，调用 sort()函数就会失败。每种浏览器对此都会给出一个模棱两可的错误消息，如下所示:

- IE：属性或方法不存在。
- Firefox：values.sort()不是函数。
- Safari：值 undefined（对表达式 values.sort 求值的结果）不是一个对象。
- Chrome：对象名没有方法'sort'。
- Opera：类型不匹配（通常是在需要对象时使用了非对象值）。

虽然 Firefox、Chrome 和 Safari 至少给出了导致错误的相关代码，但并没有哪个错误消息特别明确地指出发生了什么，或者怎么修复。对于上面的一个函数来说，通过这样的错误消息调试还是很容易的。但是，如果是一个复杂的 Web 应用程序，有几千行 JavaScript 代码，想要找到错误的原因就会很难。

这时候，使用适当的信息创建自定义错误可以有效提高代码的可维护性。比如下面的例子：

```js
function process(values){
 if (!(values instanceof Array)){
 throw new Error("process(): Argument must be an array.");
 }
 values.sort();

  for (let value of values){
 if (value > 100){
 return value;
 }
 }
 return -1;
} 
```

在这个重写后的函数中，如果 values 参数不是数组就会抛出错误。错误消息包含函数名以及对错误原因非常清晰的描述。即使在复杂的应用程序中出现这个错误，也可以很容易理解问题所在。

实际编写 JavaScript 代码时，应该仔细评估每个函数，以及可能导致它们失败的情形。良好的错误处理协议可以保证只会发生你自己抛出的错误。

**2. 抛出错误与 try/catch**

一个常见的问题是何时抛出错误，何时使用 try/catch 捕获错误。一般来说，错误要在应用程序架构的底层抛出，在这个层面上，人们对正在进行的流程知之甚少，因此无法真正地处理错误。如果你在编写一个可能用于很多应用程序的 JavaScript 库，或者一个会在应用程序的很多地方用到的实用函数，那么应该认真考虑抛出带有详细信息的错误。然后捕获和处理错误交给应用程序就行了。

至于抛出错误与捕获错误的区别，可以这样想：

应该只在确切知道接下来该做什么的时候捕获错误。捕获错误的目的是阻止浏览器以其默认方式响应；抛出错误的目的是为错误提供有关其发生原因的说明。

### error 事件

任何没有被 try/catch 语句处理的错误都会在 window 对象上触发 error 事件。该事件是浏览器早期支持的事件，为保持向后兼容，很多浏览器保持了其格式不变。在 onerror 事件处理程序中，任何浏览器都不会传入 event 对象。相反，会传入 3 个参数：错误消息、发生错误的 URL 和行号。大多数情况下，只有错误消息有用，因为 URL 就是当前文档的地址，而行号可能指嵌入 JavaScript 或外部文件中的代码。

图片也支持 error 事件。任何时候，如果图片 src 属性中的 URL 没有返回可识别的图片格式，就会触发 error 事件。这个事件遵循 DOM 格式，返回一个以图片为目标的 event 对象。下面是个例子：

```js
const image = new Image();
image.addEventListener("load", (event) => {
 console.log("Image loaded!");
});
image.addEventListener("error", (event) => {
 console.log("Image not loaded!");
});
image.src = "doesnotexist.gif"; // 不存在，资源会加载失败
```

在这个例子中，图片加载失败后会显示一个 alert 警告框。这里的关键在于，当 error 事件发生时，图片下载过程已结束，不会再恢复。

## 错误处理策略

过去，Web 应用程序的错误处理策略基本上是在服务器上落地。错误处理策略涉及很多错误和错误处理考量，包括日志记录和监控系统。这些主要是为了分析模式，以期找到问题的根源并了解有多少用户会受错误影响。

在 Web 应用程序的 JavaScipt 层面落地错误处理策略同样重要。因为任何 JavaScript 错误都可能导致网页无法使用，所以理解这些错误会在什么情况下发生以及为什么会发生非常重要。绝大多数 Web 应用程序的用户不懂技术，在碰到页面出问题时通常会迷惑。为解决问题，他们可能会尝试刷新页面，也可能会直接放弃。作为开发者，应该非常清楚自己的代码在什么情况下会失败，以及失败会导致什么结果。另外，还要有一个系统跟踪这些问题。

### 识别错误

错误处理非常重要的部分是首先识别错误可能会在代码中的什么地方发生。因为 JavaScript 是松散类型的，不会验证函数参数，所以很多错误只有在代码真正运行起来时才会出现。通常，需要注意 3 类错误：

- 类型转换错误
- 数据类型错误
- 通信错误

上面这几种错误会在特定情况下，在没有对值进行充分检测时发生。

**1. 静态代码分析器**

不得不说的是，通过在代码构建流程中添加静态代码分析或代码检查器（linter），可以预先发现非常多的错误。常用的静态分析工具是ESlint、JSLint、Google Closure 和 TypeScript

**2. 类型转换错误**

`类型转换错误`的主要原因是使用了会自动改变某个值的数据类型的操作符或语言构造。使用等于（==）或不等于（!=）操作符，以及在 if、for 或 while 等流控制语句中使用非布尔值，经常会导致类型转换错误。

相等和不相等操作符会自动把执行比较的两个不同类型的值转换为相同类型。在非动态语言中，符号之间是直接比较的，因此很多开发者在 JavaScript 中也会以相同方式来错误地比较值。大多数情况下，最好使用严格相等（===）和严格不相等（!==）操作符来避免类型转换。

类型转换错误也会发生在流控制语句中。比如，if 语句会自动把条件表达式转换为布尔值，然后再决定下一步的走向。在实践中，if 语句是问题比较多的。来看下面的例子：

```js
function concat(str1, str2, str3) {
 let result = str1 + str2;
 if (str3) { // 不要！
 result += str3;
 }
 return result;
}
```

这个函数的用意是把两个或三个字符串拼接起来并返回结果。第三个字符串是可选的，因此必须检测它是否存在。如第 3 章所说，命名变量如果没有被赋值就会自动被赋予 undefined 值。而在默认转换中，undefined 会被转换为布尔值 false。因此这个函数的用意是在提供了第三个参数的情况下，才会在拼接时带上它。问题在于并非只有undefined会转换为false，字符串也不是唯一可转换为true的值。假如第三个参数是数值 0，if 条件判断就会失败，而数值 1 则会导致满足条件。

在流控制语句中使用非布尔值作为条件是很常见的错误来源。为避免这类错误，需要始终坚持使用布尔值作为条件。这通常可以借助某种比较来实现。例如，可以把前面的函数改写为如下形式：

```js
function concat(str1, str2, str3){
 let result = str1 + str2;
 if (typeof str3 === "string") { // 恰当的比较
 result += str3;
 }
 return result;
} 
```

在这个重写的版本中，if 语句的条件会基于比较操作返回布尔值。这个函数相对更安全，受错误值影响的可能性也更小。

**3. 数据类型错误**

因为 JavaScript 是松散类型的，所以变量和函数参数都不能保证会使用正确的数据类型。开发者需要自己检查数据类型，确保不会发生错误。数据类型错误常发生在将意外值传给函数的时候。

在前面的例子中，代码检查了第三个参数的数据类型，以确保它是字符串，但根本没有检查另外两个参数。如果函数必须返回一个字符串，那么只传入两个数值，忽略第三个参数就会破坏约定。下面的函数也存在类似问题：

```js
// 不安全的函数，任何非字符串值都会导致错误
function getQueryString(url) {
 const pos = url.indexOf("?");
 if (pos > -1){
 return url.substring(pos +1);
 }
 return "";
}
```

这个函数的用途是返回给定 URL 的查询字符串。为此，它先用 indexOf()在字符串中寻找问号，如果找到则使用 substring()方法返回问号后面的所有内容。这两个方法都是只有字符串才有的，因此传入其他类型的值就会导致错误。下面的简单类型检查可以保证函数少出错：

```js
function getQueryString(url) {
 if (typeof url === "string") { // 通过类型检查保证安全
 let pos = url.indexOf("?");
 if (pos > -1) {
 return url.substring(pos +1);
 }
 }
 return "";
} 
```

在这个重写的版本中，第一步检查了传入的值确实是字符串。这样可以保证函数永远不会因为非字符串值而出错。

因为存在类型转换，所以应该避免在流控制语句中使用非布尔值作为条件。另外这也是可能导致类型错误的一个做法。来看下面的函数：

```js
// 不安全的函数，非数组值可能导致错误
function reverseSort(values) {
 if (values) { // 不要！
 values.sort();
 values.reverse();
 }
}
```

reverseSort()函数可以使用数组的 sort()和 reverse()方法，将数组反向排序。由于 if 语句中的控制条件，任何非数组值都会被转换为 true，从而导致错误。另一个常见的错误是将参数与 null比较，比如：

```js
// 还是不安全的函数，非数组值可能导致错误
function reverseSort(values) {
 if (values != null){ // 不要！
 values.sort();
 values.reverse();
 }
}
```

用参数值与 null 比较只会保证不是两个值：null 和 undefined（对于使用相等和不相等操作符而言是等价的）。与 null 比较不足以保证适当的值，因此不要使用这种方式。出于同样的原因，也不推荐与 undefined 比较。

另一个错误的做法是在检测特性时只检查使用的特性。下面是一个例子：

```js
// 仍是不安全的函数，非数组值可能导致错误
function reverseSort(values) {
 if (typeof values.sort === "function") { // 不要！
 values.sort();
 values.reverse();
 }
} 
```

在这个例子中，代码检查了参数上是否存在 sort()方法。假如传入的参数确实有一个 sort()方法，但参数本身不是数组，那么在执行 reverse()时也会报告错误。如果知道预期的确切类型，那么最好使用 instanceof 来确定值的正确类型，如下所示：

```js
// 安全，非数组值被忽略
function reverseSort(values) {
 if (values instanceof Array) { // 修复
 values.sort();
 values.reverse();
 }
} 
```

最后一个 reverseSort()是安全的，它测试了 values 参数是不是 Array 的实例。这样，函数可以保证忽略非数组参数。

一般来说，原始类型的值应该使用 typeof 检测，而对象值应该使用 instanceof 检测。根据函数的用法，不一定要检查每个参数的数据类型，但对外的任何 API 都应该做类型检查以保证正确执行。

**4. 通信错误**

随着 Ajax 编程的出现，Web 应用程序在运行期间动态加载数据和功能成为常见的情形。JavaScript和服务器之间的通信也会出现错误。

第一种错误是 URL 格式或发送数据的格式不正确。

通常，在把数据发送到服务器之前没有用encodeURIComponent()编码，会导致这种错误。例如，下面的 URL 格式就不正确：

```js
http://www.yourdomain.com/?redir=http://www.someotherdomain.com?a=b&c=d
```

这个 URL 可以通过用 encodeURIComponent()编码"redir="后面的内容来修复，得到的结果如下所示：

```js
http://www.example.com/?redir=http%3A%2F%2Fwww.someotherdomain.com%3Fa%3Db%26c%3Dd
```

对于查询字符串，应该都要通过 encodeURIComponent()编码。为此，可以专门定义一个处理查询字符串的函数，比如：

```js
function addQueryStringArg(url, name, value) {
 if (url.indexOf("?") == -1){
 url += "?";
 } else {
 url += "&";
 }
 url += '${encodeURIComponent(name)=${encodeURIComponent(value)}';
 return url;
} 
```

这个函数接收三个参数：要添加查询字符串的 URL、参数名和参数值。如果 URL 不包含问号，则要给它加上一个；否则就要使用和号（&），以便拼接更多参数和值，因为这意味着前面已有其他查询参数了。查询字符串的名和值在被编码之后会被添加到 URL 中。可以像下面这样使用这个函数：

```js
const url = "http://www.somedomain.com";
const newUrl = addQueryStringArg(url, "redir",
 "http://www.someotherdomain.com?a=b&c=d");
console.log(newUrl);
```

使用这个函数而不是手动构建 URL 可以保证编码合适，以避免相关错误发生。

在服务器响应非预期值时也会发生通信错误。在动态加载脚本或样式时，请求的资源有可能不可用。有些浏览器在没有返回预期资源时会静默失败，而其他浏览器则会报告错误。不过，在动态加载资源的情况下出错，是不太好做错误处理的。有时候，使用 Ajax 通信可能会提供关于错误条件的更多信息。

### 区分重大与非重大错误

任何错误处理策略中一个非常重要的方面就是确定某个错误是否为重大错误。具有以下一个或多个特性的错误属于非重大错误

- 不会影响用户的主要任务；
- 只会影响页面中某个部分；
- 可以恢复；
- 重复操作可能成功。

本质上，不需要担心非重大错误。例如，Gmail 有一个功能，可以让用户在其界面上发送环聊（Hangouts）消息。如果在某个条件下，环聊功能不工作了，就不能算重大错误，因为这不是应用程序的主要功能。Gmail 主要用于阅读和撰写电子邮件，只要用户可以做到这一点，就没有理由中断用户体验。对于非重大错误，无须明确给用户发送消息。可以将受影响的页面区域替换成一条消息，表示该功能暂时不能使用，但不需要中断用户体验。

代码中则不要区分什么是或什么不是重大错误。非重大错误和重大错误的区别主要体现在对用户的影响上。好的代码设计意味着应用程序某个部分的错误不会影响其他部分，实际上根本不应该相关。例如，在个性化的主页上，比如 Gmail，可能包含多个相互独立的功能模块。如果每个模块都通过 JavaScript调用来初始化，那就可能会在代码中看到以下逻辑：

```js
for (let mod of mods){
 mod.init(); // 可能的重大错误
}
```

表面上看，这段代码没什么问题，就是依次调用每个模块的 init()方法。问题在于，这里只要有一个模块的 init()方法出错，数组中其后的所有模块都不会被初始化。如果错误发生在第一个模块上，页面上就没有模块会被初始化了。逻辑上，这样写代码是不合适的，因为每个模块相互独立，各自功能没有相关性。由此可能导致重大错误的原因是代码的结构。好在可以简单地重写以上代码，让每个模块的错误变成非重大错误：

```js
for (let mod of mods){
 try {
 mod.init();
 } catch (ex){
 // 在这里处理错误
 }
}
```

通过在 for 循环中加入 try/catch 语句，模块初始化过程中的任何错误都不会影响其他模块初始化。如果代码中有错误发生，则可以单独处理，并不会影响用户体验。

### 把错误记录到服务器中

Web 应用程序开发中的一个常见做法是建立中心化的错误日志存储和跟踪系统。数据库和服务器错误正常写到日志中并按照常用 API 加以分类。对复杂的 Web 应用程序而言，最好也把 JavaScript 错误发送回服务器记录下来。这样做可以把错误记录到与服务器相同的系统，只要把它们归类到前端错误即可。使用相同的系统可以进行相同的分析，而不用考虑错误来源。

要建立 JavaScript 错误日志系统，首先需要在服务器上有页面或入口可以处理错误数据。该页面只要从查询字符串中取得错误数据，然后把它们保存到错误日志中即可。比如，该页面可以使用如下代码：

```js
function logError(sev, msg) {
 let img = new Image(),
 encodedSev = encodeURIComponent(sev),
 encodedMsg = encodeURIComponent(msg);
 img.src = 'log.php?sev=${encodedSev}&msg=${encodedMsg}';
}
```

logError()函数接收两个参数：严重程度和错误消息。严重程度可以是数值或字符串，具体取决于使用的日志系统。这里使用 Image 对象发送请求主要是从灵活性方面考虑的。

## 调试技术

### 理解控制台运行时

浏览器控制台是个读取-求值-打印-循环（REPL，read-eval-print-loop），与页面的 JavaScript 运行时并发。这个运行时就像浏览器对新出现在 DOM 中的`<script>`标签求值一样。在控制台中执行的命令可以像页面级 JavaScript 一样访问全局和各种 API。控制台中可以执行任意数量的代码，与它可能会阻塞的任何页面级代码一样。修改、对象和回调都会保留在 DOM 和运行时中。

JavaScript 运行时会限制不同窗口可以访问哪些内容，因而在所有主流浏览器中都可以选择在哪个窗口中执行 JavaScript 控制台输入。你所执行的代码不会有特权提升，仍会受跨源限制和其他浏览器施加的控制规则约束。

控制台运行时也会集成开发者工具，提供常规 JavaScript 开发中所没有的上下文调试工具。其中一个非常有用的工具是最后点击选择器，所有主流浏览器都会提供。在开发者工具的 Element（元素）标签页内，单击 DOM 树中一个节点，就可以在 Console（控制台）标签页中使用$0 引用该节点的 JavaScript实例。

### 使用 JavaScript 调试器

在所有主流浏览器中都可以使用的还有 JavaScript 调试器。ECMAScript 5.1 规范定义了 debugger关键字，用于调用可能存在的调试功能。如果没有相关的功能，这条语句会被简单地跳过。可以像下面这样使用 debugger 关键字：

```js
function pauseExecution(){
 console.log("Will print before breakpoint");
 debugger;
 console.log("Will not print until breakpoint continues");
}
```

在运行时碰到这个关键字时，所有主流浏览器都会打开开发者工具面板，并在指定位置显示断点。
