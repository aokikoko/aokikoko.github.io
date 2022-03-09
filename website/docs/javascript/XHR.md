---
title: "[JS] 网络请求与远程资源"
sidebar_position: 28
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第二十四章`

<!--truncate-->

# 网络请求与远程资源 

2005 年，Jesse James Garrett 撰写了一篇文章，“Ajax—A New Approach to Web Applications”。这篇文章中描绘了一个被他称作 Ajax（Asynchronous JavaScript+XML，即异步 JavaScript 加 XML）的技术。这个技术涉及发送服务器请求额外数据而不刷新页面，从而实现更好的用户体验。

把 Ajax 推到历史舞台上的关键技术是 XMLHttpRequest（XHR）对象。 XHR 出现之前，Ajax 风格的通信必须通过一些黑科技实现，主要是使用隐藏的窗格或内嵌窗格。XHR 为发送服务器请求和获取响应提供了合理的接口。这个接口可以实现异步从服务器获取额外数据，意味着用户点击不用页面刷新也可以获取数据。通过 XHR 对象获取数据后，可以使用 DOM 方法把数据插入网页。虽然 Ajax 这个名称中包含 XML，但实际上 Ajax 通信与数据格式无关。这个技术主要是可以实现在不刷新页面的情况下从服务器获取数据，格式并不一定是 XML。

## XMLHttpRequest 对象

IE5 是第一个引入 XHR 对象的浏览器。

所有现代浏览器都通过 XMLHttpRequest 构造函数原生支持 XHR 对象：

```js
let xhr = new XMLHttpRequest();
```

### 使用 XHR 

使用 XHR 对象首先要调用 open()方法，这个方法接收 3 个参数：请求类型（"get"、"post"等）、请求 URL，以及表示请求是否异步的布尔值。下面是一个例子：

```js
xhr.open("get", "example.php", false);
```

这行代码就可以向 example.php 发送一个同步的 GET 请求。

关于这行代码需要说明几点。

首先，这里的 URL 是相对于代码所在页面的，当然也可以使用绝对 URL。

其次，调用 open()不会实际发送请求，只是为发送请求做好准备。

:::caution 注意
只能访问同源 URL，也就是域名相同、端口相同、协议相同。如果请求的 URL 与
发送请求的页面在任何方面有所不同，则会抛出安全错误。
:::

要发送定义好的请求，必须像下面这样调用 send()方法：

```js
xhr.open("get", "example.txt", false);
xhr.send(null);
```

send()方法接收一个参数，是作为请求体发送的数据。如果不需要发送请求体，则必须传 null，因为这个参数在某些浏览器中是必需的。调用 send()之后，请求就会发送到服务器。

因为这个请求是`同步`的，所以 JavaScript 代码会等待服务器响应之后再继续执行。收到响应后，XHR对象的以下属性会被填充上数据。

- responseText：作为响应体返回的文本。
- responseXML：如果响应的内容类型是"text/xml"或"application/xml"，那就是包含响应数据的 XML DOM 文档。
- status：响应的 HTTP 状态。
- statusText：响应的 HTTP 状态描述。

收到响应后，第一步要检查 status 属性以确保响应成功返回。一般来说，HTTP 状态码为 2xx 表示成功。此时，responseText 或 responseXML（如果内容类型正确）属性中会有内容。如果 HTTP状态码是 304，则表示资源未修改过，是从浏览器缓存中直接拿取的。当然这也意味着响应有效。为确保收到正确的响应，应该检查这些状态，如下所示：

```js
xhr.open("get", "example.txt", false);
xhr.send(null);

if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
 alert(xhr.responseText);
} else {
 alert("Request was unsuccessful: " + xhr.status);
} 
```

以上代码可能显示服务器返回的内容，也可能显示错误消息，取决于 HTTP 响应的状态码。为确定下一步该执行什么操作，最好检查 status 而不是 statusText 属性，因为后者已经被证明在跨浏览器的情况下不可靠。无论是什么响应内容类型，responseText 属性始终会保存响应体，而 responseXML则对于非 XML 数据是 null。

虽然可以像前面的例子一样发送同步请求，但多数情况下最好使用异步请求，这样可以不阻塞JavaScript 代码继续执行。XHR 对象有一个 readyState 属性，表示当前处在请求/响应过程的哪个阶段。这个属性有如下可能的值。

- 0：未初始化（Uninitialized）。尚未调用 open()方法。
- 1：已打开（Open）。已调用 open()方法，尚未调用 send()方法。
- 2：已发送（Sent）。已调用 send()方法，尚未收到响应。
- 3：接收中（Receiving）。已经收到部分响应。
- 4：完成（Complete）。已经收到所有响应，可以使用了。

每次 readyState 从一个值变成另一个值，都会触发 readystatechange 事件。可以借此机会检查 readyState 的值。一般来说，我们唯一关心的 readyState 值是 4，表示数据已就绪。为保证跨浏览器兼容，onreadystatechange 事件处理程序应该在调用 open()之前赋值。来看下面的例子：

```js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
 if (xhr.readyState == 4) {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
 alert(xhr.responseText);
 } else {
 alert("Request was unsuccessful: " + xhr.status);
 }
 }
};
xhr.open("get", "example.txt", true);
xhr.send(null); 
```

以上代码使用 DOM Level 0 风格为 XHR 对象添加了事件处理程序，因为并不是所有浏览器都支持DOM Level 2 风格。与其他事件处理程序不同，onreadystatechange 事件处理程序不会收到 event对象。在事件处理程序中，必须使用 XHR 对象本身来确定接下来该做什么。

:::tip
由于 onreadystatechange 事件处理程序的作用域问题，这个例子在 onreadystatechange 事件处理程序中使用了 xhr 对象而不是 this 对象。使用 this 可能导致
功能失败或导致错误，取决于用户使用的是什么浏览器。因此还是使用保存 XHR 对象的变量更保险一些。
:::

在收到响应之前如果想取消异步请求，可以调用 abort()方法：

```js
xhr.abort();
```

调用这个方法后，XHR 对象会停止触发事件，并阻止访问这个对象上任何与响应相关的属性。中断请求后，应该取消对 XHR 对象的引用。由于内存问题，不推荐重用 XHR 对象。

### HTTP 头部

XHR 对象会通过一些方法暴露与请求和响应相关的头部字段。默认情况下，XHR 请求会发送以下头部字段。

- Accept：浏览器可以处理的内容类型。
- Accept-Charset：浏览器可以显示的字符集。
- Accept-Encoding：浏览器可以处理的压缩编码类型。
- Accept-Language：浏览器使用的语言。
- Connection：浏览器与服务器的连接类型。
- Cookie：页面中设置的 Cookie。
- Host：发送请求的页面所在的域。
- Referer：发送请求的页面的 URI。注意，这个字段在 HTTP 规范中就拼错了，所以考虑到兼容性也必须将错就错。（正确的拼写应该是 Referrer。）
- User-Agent：浏览器的用户代理字符串。

虽然不同浏览器发送的确切头部字段可能各不相同，但这些通常都是会发送的。如果需要发送额外的请求头部，可以使用 setRequestHeader()方法。这个方法接收两个参数：头部字段的名称和值。为保证请求头部被发送，必须在 open()之后、send()之前调用 setRequestHeader()，如下面的例子所示：

```js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
 if (xhr.readyState == 4) {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  alert(xhr.responseText);
 } else {
  alert("Request was unsuccessful: " + xhr.status);
 }
 }
};
xhr.open("get", "example.php", true);
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.send(null); 
```

服务器通过读取自定义头部可以确定适当的操作。自定义头部一定要区别于浏览器正常发送的头部，否则可能影响服务器正常响应。有些浏览器允许重写默认头部，有些浏览器则不允许。

可以使用 getResponseHeader()方法从 XHR 对象获取响应头部，只要传入要获取头部的名称即可。如果想取得所有响应头部，可以使用 getAllResponseHeaders()方法，这个方法会返回包含所有响应头部的字符串。下面是调用这两个方法的例子：

```js
let myHeader = xhr.getResponseHeader("MyHeader");
let allHeaders xhr.getAllResponseHeaders();
```

服务器可以使用头部向浏览器传递额外的结构化数据。getAllResponseHeaders()方法通常返回类似如下的字符串：

```json
Date: Sun, 14 Nov 2004 18:04:03 GMT
Server: Apache/1.3.29 (Unix)
Vary: Accept
X-Powered-By: PHP/4.3.8
Connection: close
Content-Type: text/html; charset=iso-8859-1
```

通过解析以上头部字段的输出，就可以知道服务器发送的所有头部，而不需要单独去检查了。

### GET 请求

最常用的请求方法是 GET 请求，用于向服务器查询某些信息。必要时，需要在 GET 请求的 URL后面添加查询字符串参数。对 XHR 而言，查询字符串必须正确编码后添加到 URL 后面，然后再传给open()方法。

发送 GET 请求最常见的一个错误是查询字符串格式不对。查询字符串中的每个名和值都必须使用encodeURIComponent()编码，所有名/值对必须以和号（&）分隔，如下面的例子所示：

```js
xhr.open("get", "example.php?name1=value1&name2=value2", true);
```

可以使用以下函数将查询字符串参数添加到现有的 URL 末尾：

```js
function addURLParam(url, name, value) {
 url += (url.indexOf("?") == -1 ? "?" : "&");
 url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
 return url;
}
```

这里定义了一个 addURLParam()函数，它接收 3 个参数：
- 要添加查询字符串的 URL、
- 查询参数
- 参数值

首先，这个函数会检查 URL 中是否已经包含问号（以确定是否已经存在其他参数）。如果没有，则加上一个问号；否则就加上一个和号。然后，分别对参数名和参数值进行编码，并添加到 URL 末尾。最后一步是返回更新后的 URL。

可以使用这个函数构建请求 URL，如下面的例子所示：

```js
let url = "example.php";
// 添加参数
url = addURLParam(url, "name", "Nicholas");
url = addURLParam(url, "book", "Professional JavaScript");
// 初始化请求
xhr.open("get", url, false);
```

这里使用 addURLParam()函数可以保证通过 XHR 发送请求的 URL 格式正确。

---

### POST 请求

第二个最常用的请求是 POST 请求，用于向服务器发送应该保存的数据。每个 POST 请求都应该在请求体中携带提交的数据，而 GET 请求则不然。POST 请求的请求体可以包含非常多的数据，而且数据可以是任意格式。要初始化 POST 请求，open()方法的第一个参数要传"post"，比如：

```js
xhr.open("post", "example.php", true); 
```

发送的数据可以传入任意字符串或XML

默认情况下，对服务器而言，POST 请求与提交表单是不一样的。服务器逻辑需要读取原始 POST数据才能取得浏览器发送的数据。不过，可以使用 XHR 模拟表单提交。为此，第一步需要把 ContentType 头部设置为"application/x-www-formurlencoded"，这是提交表单时使用的内容类型。

第二步是创建对应格式的字符串。POST 数据此时使用与查询字符串相同的格式。如果网页中确实有一个表单需要序列化并通过 XHR 发送到服务器，则可以使用serialize()函数来创建相应的字符串，如下所示：

```js
function submitData() {
 let xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function() {
 if (xhr.readyState == 4) {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
 alert(xhr.responseText);
 } else {
 alert("Request was unsuccessful: " + xhr.status);
 }
 }
 };
 xhr.open("post", "postexample.php", true);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 let form = document.getElementById("user-info");
 xhr.send(serialize(form));
} 
```

在这个函数中，来自 ID 为"user-info"的表单中的数据被序列化之后发送给了服务器。PHP 文件postexample.php 随后可以通过$_POST 取得 POST 的数据。比如:

```php
<?php
 header("Content-Type: text/plain");
 echo <<<EOF
Name: {$_POST['user-name']}
Email: {$_POST['user-email']}
EOF;
?> 
```

假如没有发送 Content-Type 头部，PHP 的全局$_POST 变量中就不会包含数据，而需要通过$HTTP_RAW_POST_DATA 来获取。

:::caution 注意
POST 请求相比 GET 请求要占用更多资源。从性能方面说，发送相同数量的数据，
GET 请求比 POST 请求要快两倍。
:::

### XMLHttpRequest Level 2 

XHR 对象作为事实标准的迅速流行，也促使 W3C 为规范这一行为而制定了正式标准。XMLHttpRequest Level 1 只是把已经存在的 XHR 对象的实现细节明确了一下。XMLHttpRequest Level 2又进一步发展了 XHR 对象。

**1. FormData 类型**

现代 Web 应用程序中经常需要对表单数据进行序列化，因此 XMLHttpRequest Level 2 新增了FormData 类型。FormData 类型便于表单序列化，也便于创建与表单类似格式的数据然后通过 XHR发送。下面的代码创建了一个 FormData 对象，并填充了一些数据：

```js
let data = new FormData();
data.append("name", "Nicholas"); 
```

append()方法接收两个参数：键和值，相当于表单字段名称和该字段的值。可以像这样添加任意多个键/值对数据。此外，通过直接给 FormData 构造函数传入一个表单元素，也可以将表单中的数据作为键/值对填充进去：

```js
let data = new FormData(document.forms[0]);
```

有了 FormData 实例，可以像下面这样直接传给 XHR 对象的 send()方法：

```js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
 if (xhr.readyState == 4) {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
 alert(xhr.responseText);
 } else {
 alert("Request was unsuccessful: " + xhr.status);
 }
 }
};
xhr.open("post", "postexample.php", true);
let form = document.getElementById("user-info");
xhr.send(new FormData(form)); 
```

使用 FormData 的另一个方便之处是不再需要给 XHR 对象显式设置任何请求头部了。XHR 对象能够识别作为 FormData 实例传入的数据类型并自动配置相应的头部。

**2. 超时**

IE8 给 XHR 对象增加了一个 timeout 属性，用于表示发送请求后等待多少毫秒，如果响应不成功就中断请求。之后所有浏览器都在自己的 XHR 实现中增加了这个属性。在给 timeout 属性设置了一个时间且在该时间过后没有收到响应时，XHR 对象就会触发 timeout 事件，调用 ontimeout 事件处理程序。这个特性后来也被添加到了 XMLHttpRequest Level 2 规范。下面看一个例子：

```js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
 if (xhr.readyState == 4) {
 try {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
 alert(xhr.responseText);
 } else {
 alert("Request was unsuccessful: " + xhr.status);
 }
 } catch (ex) {
 // 假设由 ontimeout 处理
 }
 }
};
xhr.open("get", "timeout.php", true);
xhr.timeout = 1000; // 设置 1 秒超时
xhr.ontimeout = function() {
 alert("Request did not return in a second.");
};
xhr.send(null);
```

这个例子演示了使用 timeout 设置超时。给 timeout 设置 1000 毫秒意味着，如果请求没有在 1秒钟内返回则会中断。此时则会触发 ontimeout 事件处理程序，readyState 仍然会变成 4，因此也会调用 onreadystatechange 事件处理程序。不过，如果在超时之后访问 status 属性则会发生错误。为做好防护，可以把检查 status 属性的代码封装在 try/catch 语句中。

**3. overrideMimeType()方法**

略

---

## 进度事件

Progress Events 是 W3C 的工作草案，定义了客户端服务器端通信。这些事件最初只针对 XHR，现在也推广到了其他类似的 API。有以下 6 个进度相关的事件。

- loadstart：在接收到响应的第一个字节时触发。
- progress：在接收响应期间反复触发。
- error：在请求出错时触发。
- abort：在调用 abort()终止连接时触发。
- load：在成功接收完响应时触发。
- loadend：在通信完成时，且在 error、abort 或 load 之后触发。

每次请求都会首先触发 loadstart 事件，之后是一个或多个 progress 事件，接着是 error、abort或 load 中的一个，最后以 loadend 事件结束。这些事件大部分都很好理解，但其中有两个需要说明一下。

### load 事件

Firefox 最初在实现 XHR 的时候，曾致力于简化交互模式。最终，增加了一个 load 事件用于替代readystatechange 事件。load 事件在响应接收完成后立即触发，这样就不用检查 readyState 属性了。onload 事件处理程序会收到一个 event 对象，其 target 属性设置为 XHR 实例，在这个实例上可以访问所有 XHR 对象属性和方法。不过，并不是所有浏览器都实现了这个事件的 event 对象。考虑到跨浏览器兼容，还是需要像下面这样使用 XHR 对象变量：

```js
let xhr = new XMLHttpRequest();
xhr.onload = function() {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
 alert(xhr.responseText);
 } else {
 alert("Request was unsuccessful: " + xhr.status);
 }
};
xhr.open("get", "altevents.php", true);
xhr.send(null);
```

只要是从服务器收到响应，无论状态码是什么，都会触发 load 事件。这意味着还需要检查 status属性才能确定数据是否有效。Firefox、Opera、Chrome 和 Safari 都支持 load 事件。

### progress 事件

Mozilla 在 XHR 对象上另一个创新是 progress 事件，在浏览器接收数据期间，这个事件会反复触发。每次触发时，onprogress 事件处理程序都会收到 event 对象，其 target 属性是 XHR 对象，且包含 3 个额外属性：lengthComputable、position 和 totalSize。其中，lengthComputable 是一个布尔值，表示进度信息是否可用；position 是接收到的字节数；totalSize 是响应的 ContentLength 头部定义的总字节数。有了这些信息，就可以给用户提供进度条了。以下代码演示了如何向用户展示进度：

```js
let xhr = new XMLHttpRequest();
xhr.onload = function(event) {
 if ((xhr.status >= 200 && xhr.status < 300) ||
 xhr.status == 304) {
 alert(xhr.responseText);
 } else {
 alert("Request was unsuccessful: " + xhr.status);
 }
};
xhr.onprogress = function(event) {
 let divStatus = document.getElementById("status");
 if (event.lengthComputable) {
 divStatus.innerHTML = "Received " + event.position + " of " +
 event.totalSize +
" bytes";
 }
};
xhr.open("get", "altevents.php", true);
xhr.send(null);
```

为了保证正确执行，必须在调用 open()之前添加 onprogress 事件处理程序。在前面的例子中，每次触发 progress 事件都会更新 HTML 元素中的信息。假设响应有 Content-Length 头部，就可以利用这些信息计算出已经收到响应的百分比。

-------------------

## 跨源资源共享

通过 XHR 进行 Ajax 通信的一个主要限制是跨源安全策略。默认情况下，XHR 只能访问与发起请求的页面在同一个域内的资源。这个安全限制可以防止某些恶意行为。不过，浏览器也需要支持合法跨源访问的能力。

跨源资源共享（CORS，Cross-Origin Resource Sharing）定义了浏览器与服务器如何实现跨源通信。CORS 背后的基本思路就是使用自定义的 HTTP 头部允许浏览器和服务器相互了解，以确实请求或响应应该成功还是失败。

对于简单的请求，比如 GET 或 POST 请求，没有自定义头部，而且请求体是 text/plain 类型，这样的请求在发送时会有一个额外的头部叫 Origin。Origin 头部包含发送请求的页面的源（协议、域名和端口），以便服务器确定是否为其提供响应。下面是 Origin 头部的一个示例：

```
Origin: http://www.nczonline.net
```

如果服务器决定响应请求，那么应该发送 Access-Control-Allow-Origin 头部，包含相同的源；或者如果资源是公开的，那么就包含"*"。比如：

```
Access-Control-Allow-Origin: http://www.nczonline.net
```

如果没有这个头部，或者有但源不匹配，则表明不会响应浏览器请求。否则，服务器就会处理这个请求。注意，无论请求还是响应都不会包含 cookie 信息。

现代浏览器通过 XMLHttpRequest 对象原生支持 CORS。在尝试访问不同源的资源时，这个行为会被自动触发。要向不同域的源发送请求，可以使用标准 XHR对象并给 open()方法传入一个绝对 URL，比如：

```js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
 if (xhr.readyState == 4) {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
 alert(xhr.responseText);
 } else {
 alert("Request was unsuccessful: " + xhr.status);
 }
 }
};
xhr.open("get", "http://www.somewhere-else.com/page/", true);
xhr.send(null);
```

跨域 XHR 对象允许访问 status 和 statusText 属性，也允许同步请求。出于安全考虑，跨域 XHR对象也施加了一些额外限制。

- 不能使用 setRequestHeader()设置自定义头部。
- 不能发送和接收 cookie。
- getAllResponseHeaders()方法始终返回空字符串。

因为无论同域还是跨域请求都使用同一个接口，所以最好在访问本地资源时使用相对 URL，在访问远程资源时使用绝对 URL。这样可以更明确地区分使用场景，同时避免出现访问本地资源时出现头部或cookie 信息访问受限的问题。

### 预检请求

CORS 通过一种叫预检请求（preflighted request）的服务器验证机制，允许使用自定义头部、除 GET和 POST 之外的方法，以及不同请求体内容类型。在要发送涉及上述某种高级选项的请求时，会先向服务器发送一个“预检”请求。这个请求使用 OPTIONS 方法发送并包含以下头部。

- Origin：与简单请求相同。
- Access-Control-Request-Method：请求希望使用的方法。
- Access-Control-Request-Headers：（可选）要使用的逗号分隔的自定义头部列表。

下面是一个假设的 POST 请求，包含自定义的 NCZ 头部：

```
Origin: http://www.nczonline.net
Access-Control-Request-Method: POST
Access-Control-Request-Headers: NCZ
```

在这个请求发送后，服务器可以确定是否允许这种类型的请求。服务器会通过在响应中发送如下头部与浏览器沟通这些信息。
- Access-Control-Allow-Origin：与简单请求相同。
- Access-Control-Allow-Methods：允许的方法（逗号分隔的列表）。
- Access-Control-Allow-Headers：服务器允许的头部（逗号分隔的列表）。
- Access-Control-Max-Age：缓存预检请求的秒数。

例如：

```
Access-Control-Allow-Origin: http://www.nczonline.net
Access-Control-Allow-Methods: POST, GET
Access-Control-Allow-Headers: NCZ
Access-Control-Max-Age: 1728000
```

预检请求返回后，结果会按响应指定的时间缓存一段时间。换句话说，只有第一次发送这种类型的请求时才会多发送一次额外的 HTTP 请求。

### 凭据请求

默认情况下，跨源请求不提供凭据（cookie、HTTP 认证和客户端 SSL 证书）。可以通过将withCredentials 属性设置为 true 来表明请求会发送凭据。如果服务器允许带凭据的请求，那么可以在响应中包含如下 HTTP 头部：

```
Access-Control-Allow-Credentials: true
```

如果发送了凭据请求而服务器返回的响应中没有这个头部，则浏览器不会把响应交给 JavaScript（responseText 是空字符串，status 是 0，onerror()被调用）。注意，服务器也可以在预检请求的响应中发送这个 HTTP 头部，以表明这个源允许发送凭据请求。

------------------

## 替代性跨源技术

CORS 出现之前，实现跨源 Ajax 通信是有点麻烦的。开发者需要依赖能够执行跨源请求的 DOM 特性，在不使用 XHR 对象情况下发送某种类型的请求。虽然 CORS 目前已经得到广泛支持，但这些技术仍然没有过时，因为它们不需要修改服务器。

### 图片探测

图片探测是利用`<img>`标签实现跨域通信的最早的一种技术。任何页面都可以跨域加载图片而不必担心限制，因此这也是在线广告跟踪的主要方式。可以动态创建图片，然后通过它们的 onload 和onerror 事件处理程序得知何时收到响应。

这种动态创建图片的技术经常用于图片探测（image pings）。图片探测是与服务器之间简单、跨域、单向的通信。数据通过查询字符串发送，响应可以随意设置，不过一般是位图图片或值为 204 的状态码。浏览器通过图片探测拿不到任何数据，但可以通过监听 onload 和 onerror 事件知道什么时候能接收到响应。下面看一个例子：

```js
let img = new Image();
img.onload = img.onerror = function() {
 alert("Done!");
};
img.src = "http://www.example.com/test?name=Nicholas";
```

这个例子创建了一个新的 Image 实例，然后为它的 onload 和 onerror 事件处理程序添加了同一个函数。这样可以确保请求完成时无论什么响应都会收到通知。设置完 src 属性之后请求就开始了，这个例子向服务器发送了一个 name 值。

图片探测频繁用于跟踪用户在页面上的点击操作或动态显示广告。当然，图片探测的缺点是只能发送 GET 请求和无法获取服务器响应的内容。这也是只能利用图片探测实现浏览器与服务器单向通信的原因。

### JSONP

JSONP 是“JSON with padding”的简写，是在 Web 服务上流行的一种 JSON 变体。JSONP 看起来跟 JSON 一样，只是会被包在一个函数调用里，比如：

```js
callback({ "name": "Nicholas" }); 
```

JSONP 格式包含两个部分：回调和数据。回调是在页面接收到响应之后应该调用的函数，通常回调函数的名称是通过请求来动态指定的。而数据就是作为参数传给回调函数的 JSON 数据。下面是一个典型的 JSONP 请求：

```js
http://freegeoip.net/json/?callback=handleResponse
```

这个 JSONP 请求的 URL 是一个地理位置服务。JSONP 服务通常支持以查询字符串形式指定回调函数的名称。比如这个例子就把回调函数的名字指定为 handleResponse()。

JSONP 调用是通过动态创建`<script>`元素并为 src 属性指定跨域 URL 实现的。此时的`<script>`与`<img>`元素类似，能够不受限制地从其他域加载资源。因为 JSONP 是有效的 JavaScript，所以 JSONP响应在被加载完成之后会立即执行。比如下面这个例子：

```js
function handleResponse(response) {
 console.log(`
 You're at IP address ${response.ip}, which is in
 ${response.city}, ${response.region_name}`);
}
let script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);
```

JSONP 由于其简单易用，在开发者中非常流行。相比于图片探测，使用 JSONP 可以直接访问响应，实现浏览器与服务器的双向通信。不过 JSONP 也有一些缺点。

首先，JSONP 是从不同的域拉取可执行代码。如果这个域并不可信，则可能在响应中加入恶意内容。此时除了完全删除 JSONP 没有其他办法。在使用不受控的 Web 服务时，一定要保证是可以信任的。

第二个缺点是不好确定 JSONP 请求是否失败。虽然 HTML5 规定了`<script>`元素的 onerror 事件处理程序，但还没有被任何浏览器实现。为此，开发者经常使用计时器来决定是否放弃等待响应。这种方式并不准确，毕竟不同用户的网络连接速度和带宽是不一样的。

---

## Fetch API

Fetch API 能够执行 XMLHttpRequest 对象的所有任务，但更容易使用，接口也更现代化，能够在Web 工作线程等现代 Web 工具中使用。XMLHttpRequest 可以选择异步，而 Fetch API 则必须是异步。

Fetch API 是 WHATWG 的一个“活标准”（living standard），用规范原文说，就是“Fetch 标准定义请求、响应，以及绑定二者的流程：获取（fetch）”。

Fetch API 本身是使用 JavaScript 请求资源的优秀工具，同时这个 API 也能够应用在服务线程（service worker）中，提供拦截、重定向和修改通过 fetch()生成的请求接口。

### 基本用法

fetch()方法是暴露在全局作用域中的，包括主页面执行线程、模块和工作线程。调用这个方法，浏览器就会向给定 URL 发送请求。

**1. 分派请求**

fetch()只有一个必需的参数 input。多数情况下，这个参数是要获取资源的 URL。这个方法返回一个期约：

```js
let r = fetch('/bar');
console.log(r); // Promise <pending> 
```

URL 的格式（相对路径、绝对路径等）的解释与 XHR 对象一样

请求完成、资源可用时，期约会解决为一个 Response 对象。这个对象是 API 的封装，可以通过它取得相应资源。获取资源要使用这个对象的属性和方法，掌握响应的情况并将负载转换为有用的形式，如下所示：

```js
fetch('bar.txt')
 .then((response) => {
 console.log(response);
 });
// Response { type: "basic", url: ... }

```

**2. 读取响应**

读取响应内容的最简单方式是取得纯文本格式的内容，这要用到 text()方法。这个方法返回一个期约，会解决为取得资源的完整内容：

```js
fetch('bar.txt')
 .then((response) => {
 response.text().then((data) => {
 console.log(data);
 });
 });
// bar.txt 的内容
```

内容的结构通常是打平的：

```js
fetch('bar.txt')
 .then((response) => response.text())
 .then((data) => console.log(data));
// bar.txt 的内容
```

**3. 处理状态码和请求失败**

Fetch API 支持通过 Response 的 status（状态码）和 statusText（状态文本）属性检查响应状态。成功获取响应的请求通常会产生值为 200 的状态码，如下所示：

```js
fetch('/bar')
 .then((response) => {
 console.log(response.status); // 200
 console.log(response.statusText); // OK
 });
```