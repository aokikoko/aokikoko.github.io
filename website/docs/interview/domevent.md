---
slug: domevent
title: "[面试题] JS-DOM与事件"
sidebar_position: 11
---

## 1、选择器

`getElementById()`:通过`id`来查找对应的元素。

`getElementsByClassName()`:通过类名来查找对应的元素，返回的是一个`HTMLCollection`对象。

`getElementsByName()`:通过元素的`name`属性查找对应的元素，返回的是`NodeList`对象，它是一个类似于数组的结构。

`getElementsByTagName()`: 通过标签的名称来查找对应的元素，返回的是`HTMLCollection`对象。

`querySelector`：该选择器返回的是在基准元素下，选择器匹配到的元素集合中的第一个元素。该选择器的参数接收的是一个`css`选择

```html
<body>
  <div>
    <h4>标题内容</h4>
    <span>span标签内容</span>
    <p>
      段落内容
      <span>段落中的第一个span标签</span><br />
      <span>段落中的第二个span标签</span>
    </p>
  </div>
</body>
<script>
  console.log(document.querySelector("p span").innerHTML); // 获取p标签中第一个span标签中的内容，所以输出结果为:段落中的第一个span标签
  console.log(document.querySelector("h4,span").innerHTML); //获取第一个h4或者是span元素的内容：所以输出结果为：标题内容
  var ele = document.querySelector("p");
  console.log(ele.querySelector("div span").innerHTML); //段落中的第一个span标签。
  // 首先先找到`p`元素，然后看一下p元素下面有没有div,我们发现没有，但是依然能够匹配到span元素。
  //原因是：在匹配的过程中会优先找出最外层div元素下的span元素的集合，然后在判断span元素是否属于p元素的子元素，最后返回
  //第一个匹配到的span元素的值。
</script>
```

下面，把`HTML`文档的结构修改成如下的形式：

```html
<div>
  <h4>标题内容</h4>
  <span>span标签内容</span>
  <!--这里增加了一个p标签-->
  <p>第一个段落</p>
  <p>
    段落内容
    <span>段落中的第一个span标签</span><br />
    <span>段落中的第二个span标签</span>
  </p>
</div>
```

执行如下代码会出现异常：

```js
var ele = document.querySelector("p");
console.log(ele.querySelector("div span").innerHTML); //Cannot read property 'innerHTML' of null
```

原因：会找到第一个`p`元素,然后看一下`p`标签中是否有`div`,发现没有，但是会找出最外层`div`下的所有`span`元素的集合，看一下`span`元素是否属于`p`元素，而第一个`p`元素中没有`span`元素，所以抛出异常。

`querySelectorAll()`选择器：

`querySelectorAll`选择器与`querySelector`选择器的区别是：`querySelectAll`选择器会获取到基准元素下匹配到所有子元素的集合。返回的是一个`NodeList`集合。

```html
<div>
  <h4>标题内容</h4>
  <span>span标签内容</span>
  <p>
    段落内容
    <span>段落中的第一个span标签</span><br />
    <span>段落中的第二个span标签</span>
  </p>
</div>
<script>
  console.log(document.querySelectorAll("span")); //返回所有的span标签。
</script>
```

下面，再来看一段代码：

```html
<div id="container">
  <div class="bar"></div>
  <div class="foo">
    <div class="inner"></div>
  </div>
</div>
<script>
  // 获取container下的所有div元素。
  var div1 = document.querySelectorAll("#container div");
  console.log(div1); // NodeList(3) [div.bar, div.foo, div.inner]
</script>
```

## 2、HTMLCollection 对象与 NodeList 对象区别

在介绍前面的选择器的时候，它们返回的值有些是`HTMLCollection`对象，有些是`NodeList`对象，它们有什么区别？

`HTMLCollection`对象具有`1ength`属性，返回集合的长度，可以通过`item()`和`namedItem()`函数来访问特定的元素。

`item()`函数：通过序号索引值来获取特定的某个节点，超过索引则返回`null`.

```html
<div id="container">
  <div class="bar"></div>
  <div class="foo">
    <div class="inner"></div>
  </div>
</div>
<script>
  var main = document.getElementById("container").children;
  console.log(main); //HTMLCollection
  console.log(main.item(0)); //输出:<div class="bar"></div>
  console.log(main.item(1)); // 输出:foo元素
</script>
```

`namedItem()`函数：该函数用来返回一个节点，首先通过`id`属性去匹配，然后如果没有匹配到则使用`name`属性匹配，如果还没有匹配到则返回`null`. 当出现重复的`id`或者`name`属性时，只返回匹配到的第一个值。

```html
<form id="form1">
  <input type="text" id="userName" />
  <input type="password" id="password" name="userPwd" />
</form>
<script>
  var form1 = document.getElementById("form1").children;
  console.log(form1.namedItem("userPwd")); //   <input type="password" id="password" name="userPwd" />
</script>
```

`NodeList`对象也具有`length`属性，返回集合的长度，同样也有`item`函数，也是通过索引定位子元素的位置。但是`NodeList`对象没有`namedItem`方法。

`HTMLCollection`对象与`NodeList`对象都是类似数组的结构，如果想调用数组中的方法，需要通过`call()`函数或者是`apply()`函数，转换为真正的数组后，可以使用数组中的函数。

同时，当我们对`DOM`树新增或者是删除一个节点的时候，都会立即的放映在`HTMLCollection`对象与`NodeList`对象中。

```html
  <form id="form1">
      <input type="text" id="userName" />
      <input type="password" id="password" name="userPwd" />
    </form>
<script>
 //获取HTMLCollection集合
    var form1Children = document.getElementById("form1").children;
    // 获取form元素
    var form1 = document.getElementById("form1");
    console.log(form1Children.length); // 2 HTMLCollection中有两个子元素
    var input = document.createElement("input"); //创建input元素
    form1.appendChild(input); // 把创建的input元素添加到form元素中
    console.log(form1Children.length); // 3 可以看到HTMLCollection立即受到了影响
```

最后，总结一下`HTMLCollection`对象与`NodeList`对象的相同点与不同点

相同点：

第一：都是类似数组的结构，有`length`属性，可以通过`call()`函数或者是`apply()`函数转换成数组，使用数组中的函数。

第二：都用`item`函数，通过索引值获取相应的元素。

第三：都是实时的，当在`DOM`树上添加元素或者是删除元素，都会立即反应到`HTMLCollection`对象和`NodeList`对象上。

不同点：

第一：`HTMLCollection`对象中，有`namedItem()`函数，而`NodeList`对象中没有.

第二：`NodeList`对象中存储的是元素节点的集合，包括元素，以及节点，例如`text`文本节点，而`HTMLCollection`对象中只包含了元素的集合。

```html
<form id="form1">
  用户名<input type="text" id="userName" /> <br />
  用户密码<input type="password" id="password" name="userPwd" />
</form>
<script>
  //获取HTMLCollection集合
  var form1Children = document.getElementById("form1").children;
  console.log(form1Children);
  //获取NodeList对象
  var formNodes = document.getElementById("form1").childNodes;
  console.log(formNodes);
</script>
```

通过查看浏览器控制台输出的结果，可以看出`HTMLCollection`对象与`NodeList`对象的区别。

## 3、常见的 DOM 操作有哪些？

**添加节点**

```html
<form id="form1">
  用户名<input type="text" id="userName" /> <br />
  用户密码<input type="password" id="password" name="userPwd" />
</form>
<script>
  var form1 = document.getElementById("form1");
  //创建一个input元素
  var newInput = document.createElement("input");
  //创建属性
  var newAttr = document.createAttribute("type");
  newAttr.value = "password";
  //将属性绑定到元素上
  newInput.setAttributeNode(newAttr);

  //创建一个文本节点
  var newTextNode = document.createTextNode("用户密码");
  form1.appendChild(newTextNode); //添加文本节点
  form1.appendChild(newInput);
</script>
```

**删除节点**

```html
<form id="form1">
  用户名<input type="text" id="userName" /> <br />
  用户密码<input type="password" id="password" name="userPwd" />
</form>
<script>
  var form1 = document.getElementById("form1");
  var nodeChilds = form1.childNodes;
  console.log(nodeChilds);
  form1.removeChild(nodeChilds[0]);
  form1.removeChild(nodeChilds[0]);
</script>
```

在上面的代码中，我们想将表单中的`用户名`这一项内容删除掉。

首先获取`form`表单，然后在获取对应的子元素。

通过执行`removeChild`方法删除第一个元素，而第一个元素是`用户名`这个文本字符串，

下面还要删除文本框，所以再次调用了`removeChild`函数，注意由于前面已经删除了`用户名`这个文本元素了，所以文本框成为了第一个元素，所以这里写到索引值也是 0.

**删除文本框的`id`属性**

```html
<form id="form1">
  用户名<input type="text" id="userName" /> <br />
  用户密码<input type="password" id="password" name="userPwd" />
</form>
<script>
  var input = document.querySelector("#userName");
  input.removeAttribute("id");
</script>
```

**修改节点**

**修改元素节点**

修改元素的节点的操作，一般是直接用新的节点替换旧的节点。关于节点的替换可以使用，`replaceChild`函数来实现，该函数的调用是通过父元素来调用的，例如：把`div1`中的内容替换掉，这里就需要通过`container.replaceChild`方法来完成，`replaceChild`方法需要两个参数，第一个参数表示的是新元素，第二个参数表示的是旧元素。

```html
<div id="container">
  <div id="div1">hello</div>
</div>
<script>
  var container = document.getElementById("container"); //获取父元素container
  var div1 = document.getElementById("div1"); //获取子元素
  var newDiv = document.createElement("div"); // 创建一个新的div元素
  var newText = document.createTextNode("nihao"); //创建一个文本内容
  newDiv.appendChild(newText); //把创建的文本内容添加到新的div中
  container.replaceChild(newDiv, div1); //用新的div替换旧的div,完成节点的修改操作。
</script>
```

**修改属性节点**

修改属性的节点，我们可以通过`setAttribute()`函数来完成，如果想获取属性节点可以通过`getAttribute()`函数来完成。

```html
<div id="container">
  <div id="div1" style="color: red">hello</div>
</div>
<script>
  var div1 = document.getElementById("div1");
  div1.setAttribute("style", "color:blue"); //设置style属性
  console.log(div1.getAttribute("style")); // 获取style属性的值
</script>
```

修改属性节点除了通过`setAttribute()`方法完成以外，还可以通过属性名直接进行修改

```html
<div id="container">
  <div id="div1" style="color: red">hello</div>
</div>
<script>
  var div1 = document.getElementById("div1");
  div1.style.color = "blue";
</script>
```

但是通过这种方式进行修改，还需要注意一个问题：直接修改的属性名与元素节点中的属性名不一定是一致的。例如`class`这个属性，在`javascript`中是关键字，不能直接作为属性使用，这时需要通过`className`来完成。

```html
<div id="container">
  <div id="div1" style="color: red">hello</div>
  <div id="div2" class="foo">前端学习</div>
</div>
<script>
  var div2 = document.getElementById("div2");
  div2.className = "bar"; //注意这里使用的是className
</script>
```

通过查看浏览器控制台，可以看到对应的样式发生了修改。

**修改文本节点**

文本节点的修改，可以通过`innerHTML`属性来完成。

```html
 <div id="container">
      <div id="div1" style="color: red">hello</div>
      <div id="div2" class="foo">前端学习</div>
    </div>
<script>
	  var div2 = document.getElementById("div2");
      div2.innerHTML = "Vue 学习";
</script?>
```

## 4、DOM 性能问题

`Dom`操作非常消耗性能，应该尽量避免频繁的操作`DOM`.

导致浏览器重绘，重新渲染，比较消耗`cpu`资源，比较消耗性能。

提升性能的方案：

第一：对`DOM`查询操作进行缓存

第二：将频繁操作修改为一次性操作

首先看第一种情况：

这里需要对页面中所有`p`标签内文字调整大小(单击按钮完成)

```js
//不缓存的结果
for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
  //每次循环，都会计算lenght,频繁进行DOM查询
}
```

```js
const pList = document.getElementsByTagName("p");
const length = pList.length;
for (let i = 0; i < length; i++) {
  //缓存length,只进行一次DOM查询
}
```

下面看一下第二种情况：

需求：页面中有一个`ul`列表，需要单击按钮一次性插入 10 个或者 100 个`li`?

传统的做法：

```html
<ul id="list"></ul>
```

```js
const listNode = document.getElementById("list");
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = `item${i}`;
  list.appendChild(li);
}
```

执行上面的代码，可以实现对应的需求，但是问题是上面的操作是频繁操作`dom`，性能比较低。

```js
const listNode = document.getElementById("list");
//创建一个文档片段，文档片段存在于内存中，并不在DOM树中，所以此时还没有插入到DOM中
//也就是先将dom插入到临时区域中
const frag = document.createDocumentFragment();
//执行插入

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = `item${i}`;
  frag.appendChild(li);
}
//都完成后，再插入到DOM树中
listNode.appendChild(frag);
```
