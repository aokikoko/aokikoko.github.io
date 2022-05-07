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

## 5、什么是事件传播

在浏览器中，`JavaScript`和`HTML`之间的交互是通过事件实现的，常用的事件包括了鼠标点击的事件，鼠标移动事件等等。

当事件发生以后，会触发绑定在元素上的事件处理程序，执行相应的操作。

问题是当事件发生后，事件是怎样传播的呢？

事件发生后会在目标节点和根节点之间按照特定的顺序进行传播，路径经过的节点都会接收到事件。

这里的特定顺序是怎样的顺序呢？

第一种：事件传递的顺序是先触发最外层的元素，然后依次向内传播，这样的传递顺序我们称之为事件的捕获阶段。

第二种：事件传递的顺序是先触发最内层的元素，然后依次向外进行传播，这样的传递顺序我们称之为事件冒泡阶段。

当然，一个完整的事件传播包含了三个阶段

首先就是事件的捕获阶段

然后是事件的目标阶段，目标阶段指的就是事件已经到达目标元素。

最后是事件的冒泡阶段

以上就是关于事件传播的描述

## 6、什么是事件的捕获

关于事件捕获，在上一小节，我们已经介绍过：事件的传递是从最外层开始，依次向内传播，在捕获阶段，事件从`window`开始，一直到触发事件的元素。

```
window----> document----> html----> body ---->目标元素
```

如下代码所示：

```html
<body>
  <table border="1">
    <tbody>
      <tr>
        <td>单元格内容</td>
      </tr>
    </tbody>
  </table>
  <script>
    var table = document.querySelector("table");
    var tbody = document.querySelector("tbody");
    var tr = document.querySelector("tr");
    var td = document.querySelector("td");
    table.addEventListener(
      "click",
      function () {
        console.log("table");
      },
      true
    );
    tbody.addEventListener(
      "click",
      function () {
        console.log("tbody");
      },
      true
    );
    tr.addEventListener(
      "click",
      function () {
        console.log("tr");
      },
      true
    );
    td.addEventListener(
      "click",
      function () {
        console.log("td");
      },
      true
    );
  </script>
</body>
```

在上面的代码中，有一个表格，给表格中的每个元素通过`addEventListener`方法绑定了单击事件，同时该方法的第三个参数，设置为了`true`,这样就表明事件将在捕获阶段发生。

所以当我们单击`td`单元格的时候，事件的执行结果是：`table`,`tbody`,`tr`,`td`.也就是说事件从`table`开始，依次向下传播。这个传播的过程就是事件捕获。

## 7、什么是事件冒泡

关于事件的冒泡，在前面也已经提到过：事件传递的顺序是先触发最内层的元素，然后依次向外进行传播，这样的传递顺序我们称之为事件冒泡阶段。

如下代码所示：

```html
<body>
  <table border="1">
    <tbody>
      <tr>
        <td>单元格内容</td>
      </tr>
    </tbody>
  </table>
  <script>
    var table = document.querySelector("table");
    var tbody = document.querySelector("tbody");
    var tr = document.querySelector("tr");
    var td = document.querySelector("td");
    table.addEventListener("click", function () {
      console.log("table");
    });
    tbody.addEventListener("click", function () {
      console.log("tbody");
    });
    tr.addEventListener("click", function () {
      console.log("tr");
    });
    td.addEventListener("click", function () {
      console.log("td");
    });
  </script>
</body>
```

上面的代码，我们将`addEventListener`方法的第三个参数`true`去掉了，这时就有事件的捕获变成了事件的冒泡。默认值为(`false`).

但单击单元格的时候，执行的结果为：`td`,`tr`,`tbody`,`table`, 这个过程就是事件的冒泡。

## 8、阻止事件冒泡

现在，我们已经了解了事件冒泡的过程，但是在很多的情况下，我们需要阻止事件冒泡的发生。

例如：在上一小节的案例中，当我们单击了单元格后，不仅触发单元格元素的事件，同时也会触发其它元素的事件，而这里我们只希望触发单元格的事件。所以这里需要阻止事件的冒泡。

阻止事件的冒泡需要使用：`event.stopPropagation()`函数

如下案例：

```js
  <script>
      var table = document.querySelector("table");
      var tbody = document.querySelector("tbody");
      var tr = document.querySelector("tr");
      var td = document.querySelector("td");
      table.addEventListener("click", function () {
        console.log("table");
      });
      tbody.addEventListener("click", function () {
        console.log("tbody");
      });
      tr.addEventListener("click", function () {
        console.log("tr");
      });
      td.addEventListener("click", function (event) {
        //阻止了事件的冒泡操作
        event.stopPropagation();
        console.log("td");
      });
    </script>
```

在单元格的事件处理函数中，通过`event.stopPropagation()`方法阻止了事件的冒泡。

与`stopPropagation()`函数相对的还有一个`stopImmediatePropagation`函数，它们两者之间有什么区别呢？

`stopPropagation()`：函数会阻止事件冒泡，其它事件处理程序仍然可以调用

`stopImmediatePropagation`函数不仅可以阻止事件冒泡，也会阻止其它事件处理程序的调用。

如下代码所示：

```html
<body>
  <table border="1">
    <tbody>
      <tr>
        <td>单元格内容</td>
      </tr>
    </tbody>
  </table>
  <script>
    var table = document.querySelector("table");
    var tbody = document.querySelector("tbody");
    var tr = document.querySelector("tr");
    var td = document.querySelector("td");
    table.addEventListener("click", function () {
      console.log("table");
    });
    tbody.addEventListener("click", function () {
      console.log("tbody");
    });
    tr.addEventListener("click", function () {
      console.log("tr");
    });
    //单元格第一个单击事件
    td.addEventListener("click", function (event) {
      console.log("td1");
    });
    //单元格第二个单击事件
    td.addEventListener("click", function (event) {
      //阻止了事件的冒泡操作
      // event.stopImmediatePropagation();
      event.stopPropagation();
      console.log("td2");
    });
    //   单元格第三个单击事件
    td.addEventListener("click", function (event) {
      console.log("td3");
    });
  </script>
</body>
```

在上面的代码中，给单元格添加了三个单击的事件，同时第二个单击事件使用了`stopPropagation`方法来阻止冒泡行为。

执行结果如下：`td1`,`td2`,`td3`

通过执行结果，可以看到单元格的三个单击事件全部触发，并且阻止了冒泡的行为。

如果使用`stopImmediatePropagation`方法，执行结果为：`td1`,`td2`

通过执行的结果可以看到，阻止了冒泡的行为，但是没有触发单元格的第三个单击的事件，也就是说会阻止其它事件的执行。

## 9、事件冒泡与事件捕获问题

下面我们来看一段代码：

```html
<body>
  <table border="1">
    <tbody>
      <tr>
        <td>单元格内容</td>
      </tr>
    </tbody>
  </table>
  <script>
    var table = document.querySelector("table");
    var tbody = document.querySelector("tbody");
    var tr = document.querySelector("tr");
    var td = document.querySelector("td");
    //事件捕获
    table.addEventListener(
      "click",
      function () {
        console.log("table");
      },
      true
    );
    //事件冒泡
    tbody.addEventListener("click", function () {
      console.log("tbody");
    });
    //事件捕获
    tr.addEventListener(
      "click",
      function () {
        console.log("tr");
      },
      true
    );
    //事件冒泡
    td.addEventListener("click", function (event) {
      console.log("td");
    });
  </script>
</body>
```

在上面的代码中，既有事件捕获又有事件冒泡，那么执行的结果是怎样的呢？

当单击`td`单元格后

执行结果：`table`,`tr`,`td`,`tbody`

分析：前面我们讲解过，事件传播的循序是：先事件捕获阶段，然后事件的目标阶段，最后是事件冒泡阶段

所以说，在一个程序中有事件的捕获阶段，又有事件的冒泡阶段，会优先执行捕获阶段的事件。

所以上面代码整个执行的流程：

先执行`table`这个捕获阶段，输出`table`这个字符串

下面执行`tbody`，但是`tbody`绑定的是冒泡类的事件，所以不执行，跳过。

下面是`tr`,而`tr`是捕获类型的事件，所以会执行，输出字符串`tr`

下面是`td`,由于我们单击的是`td`元素，所以该元素就是事件目标元素，则会执行，输出`td`字符串。

当单击了`td`元素以后，就开始进入了事件冒泡阶段。这时会冒泡到`tr`元素，但是`tr`元素绑定的是捕获阶段的事件，所以不执行，直接跳过，下面继续冒泡到了`tbody`元素，该元素绑定的是冒泡类型的事件，所以执行，输出字符串`tbody`.

下面继续冒泡，执行到`table`元素，该原生是捕获类型的事件，所以直接跳过，没有输出。

## 10、Event 对象使用

在`JavaScrip`中，每触发一个事件，就会产生一个`Event`对象，在该对象中包含了所有与事件相关的内容，包括事件的元素，事件类型等。

当给某个元素绑定了事件处理程序后，就可以获取到`Event`对象，但是在不同的浏览器下，`Event`对象的实现还是有一定的差异的。

关于获取`Event`对象的方式有两种：

第一种：在事件的处理程序中，可以通过参数来获取`Event`对象。

第二种：在事件的处理程序中，可以通过`window.event`属性获取`Event`对象。

具体的示例代码如下：

```js
 <body>
    <button id="btn">单击</button>

    <script>
      var btn = document.getElementById("btn");
      btn.addEventListener("click", function (event) {
        //通过参数获取Event对象
        console.log("event=", event);
        //通过window.event的方式来获取Event对象
        var windEvent = window.event;
        console.log("windEvent=", windEvent);
        //判断两种方式是否相等
        console.log(event === windEvent);
      });
    </script>
  </body>
```

在谷歌浏览器中，测试上面的代码，可以发现两种获取`Event`对象的方式是相等的。

但是注意，在其它的浏览中进行测试可能会出现不相等的情况，也就是有的浏览器会出现不支持`window.event`这种方式来获取`Event`对象，这里可以自行进行测试。

为了能够在获取事件对象的时候，支持不同的浏览器，我们可以做兼容性的处理。

```js
 <body>
    <button id="btn">单击</button>

    <script>
      var eventFn = {
        event: function (e) {
          return e || window.event;
        },
      };

      var btn = document.getElementById("btn");
      btn.addEventListener("click", function (event) {
        //通过参数获取Event对象
        console.log("event=", eventFn.event(event));
        //通过window.event的方式来获取Event对象
        var windEvent = eventFn.event(window.event);
        console.log("windEvent=", windEvent);
        //判断两种方式是否相等
        console.log(event === windEvent);
      });
    </script>
```

在上面的代码中定义了`eventFn`对象，在该对象中有一个属性`event`,在该属性中，判断返回`Eevent`对象的方式。

在对应的事件处理函数中，可以调用`eventFn`对象中的`event`方法来获取`Event`对象。

**获取事件的目标元素**

在事件的处理程序中，我们可能需要获取 事件的目标元素。

在`IE`浏览器中，可以使用`event`对象中的`srcElement`属性来获取事件的目标元素，在非`IE`浏览器中可以通过`event`对象的`target`属性来获取事件的目标元素，当然在有的非`IE`浏览器下也支持`event`对象中的`srcElement`属性，目的是为了保持与`ie`保持一致，但是要注意的是并不是所有的非`IE`浏览器都支持`srcElement`属性。

```js
<script>
     var eventFn = {
        event: function (e) {
          return e || window.event;
        },
      };

      var btn = document.getElementById("btn");
      btn.addEventListener("click", function (event) {
        var event = eventFn.event(event);
        console.log("target=", event.target);
        console.log("srcElement=", event.srcElement);
      });
 </script>
```

在谷歌浏览器中进行测试，都可以获取`target`属性和`srcElement`属性的值。

关于其它浏览器的情况，可以自行测试。

当然为了能够兼容其它的浏览器，可以做一下兼容的处理。

```js
var eventFn = {
  event: function (e) {
    return e || window.event;
  },
  target: function (e) {
    return e.target || e.srcElement;
  },
};

var btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
  var event = eventFn.event(event);
  console.log("target=", eventFn.target(event));
  console.log("srcElement=", eventFn.target(event));
});
```

这里在`eventFn`对象中封装了一个`target`属性。

**阻止默认行为**

```html
<a href="https://www.baidu.com" id="a1">链接</a>
<script>
  var a1 = document.getElementById("a1");
  a1.addEventListener("click", function (event) {
    event.preventDefault(); //阻止默认行为
    alert("你点击了链接");
  });
</script>
```

关于`Event`对象中的其他内容，可以参考文档。

## 12、介绍一下事件委托

事件冒泡的一个应用就是事件代理，也叫做事件委托

事件委托：利用事件冒泡的特性，将本应该注册在子元素上的处理事件注册在父元素上。

例如：

```html
<div id="div1">
  <a href="#">a1</a>
  <a href="#">a2</a>
  <a href="#">a3</a>
  <button>增加按钮</button>
</div>
```

在上面的代码中有很多的`a`标签，如果给每个`a`标签添加单击事件比较麻烦，同时采用这种方式添加事件还会导致占用内存比较多，你可以想象一下，如果`a`标签比较多的话，是不是会占用更多的内存。

那应该怎样解决这个问题呢？

可以通过事件委托的机制。也就是将事件绑定到父元素上，然后通过事件冒泡的原理，来解决这个问题。

如下代码所示：

```js
 <script>
      const div1 = document.getElementById("div1");
      div1.addEventListener("click", function (e) {
        var target = e.target;
        if (target.nodeName.toLowerCase() === "a") {
          console.log(target.innerHTML);
        }
      });
    </script>
```

在上面的代码中，我们通过事件委托的方式解决了对应的问题，当然，这里你可能问，在`div`标签下的`a`标签所做的操作都是一样的，那么能不能针对不同的元素所做的操作如果不一样，事件委托能否处理呢？

答案是可以处理的。

下面我们把上面的程序改造一下：

```html
<body>
  <div id="div1">
    <a href="#" id="a1">a1</a>
    <a href="#" id="a2">a2</a>
    <a href="#" id="a3">a3</a>
    <button>增加按钮</button>
  </div>
  <script>
    const div1 = document.getElementById("div1");
    div1.addEventListener("click", function (e) {
      var target = e.target;
      switch (target.id) {
        case "a1":
          console.log("针对a1进行操作");
          break;
        case "a2":
          console.log("针对a2进行操作");
          break;
        case "a3":
          console.log("针对a3进行操作");
          break;
      }
    });
  </script>
</body>
```

在上面的代码中，给每个`a`标签，添加了`id`属性，通过`switch`结构进行判断，然后执行不同的操作。

下面，我们再来看一个关于事件委托的应用问题：

在一个`ul`标签中，包含了`5`个`li`，需要单击每个`li`标签，输出标签中的内容。同时在页面中添加一个按钮，单击按钮创建一个新的`li`元素，单击新创建的`li`元素也可以输出对应的内容。

我们想到的实现方式如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>a1</li>
      <li>a2</li>
      <li>a3</li>
      <li>a4</li>
      <li>a5</li>
    </ul>
    <button id="btn">添加</button>
    <script>
      //通过querySelectorAll方法获取所有的li元素
      //通过for循环遍历的方式，给每个li添加单击事件
      var children = document.querySelectorAll("li");
      for (var i = 0; i < children.length; i++) {
        children[i].addEventListener("click", function () {
          console.log(this.innerHTML);
        });
      }
      //获取按钮
      var btn = document.querySelector("#btn");
      //获取ul标签
      var ul = document.querySelector("ul");
      //给按钮添加单击事件
      btn.addEventListener("click", function () {
        //创建li
        var newLi = document.createElement("li");
        //创建文本节点
        var newText = document.createTextNode("a6");
        //将文本添加到新创建的li标签上
        newLi.appendChild(newText);
        //把创建的li添加到ul上
        ul.appendChild(newLi);
      });
    </script>
  </body>
</html>
```

执行上面的代码：打击`a1--a5`都可以获取内容，单击按钮也可以添加一个新的`li`元素，但是问题是单击新创建的`li`元素，并没有输出元素中的内容。

原因是：我们通过`querySelectorAll`方法获取所有`li`元素，但是通过这个方法不能实时对增加的事件进行绑定。也就是说无法完成对新元素事件的绑定。

解决办法：先创建新元素，然后在进行事件的绑定。

```js
 <script>
      function bindEvent() {
        var children = document.querySelectorAll("li");
        for (var i = 0; i < children.length; i++) {
          children[i].addEventListener("click", function () {
            console.log(this.innerHTML);
          });
        }
      }
      var btn = document.querySelector("#btn");
      var ul = document.querySelector("ul");
      btn.addEventListener("click", function () {
        //创建li
        var newLi = document.createElement("li");
        var newText = document.createTextNode("a6");
        newLi.appendChild(newText);
        //把创建的li添加到ul上
        ul.appendChild(newLi);
        //重新添加事件处理程序
        bindEvent();
      });
    </script>
```

在上面的代码中，我们创建了一个`bindEvent`函数，把对`li`元素添加事件的操作封装到了该方法中。

然后在按钮对应的事件处理函数中，先完成新元素的创建，然后在调用`bindEvent`方法，完成对`li`元素事件的绑定操作。

虽然以上完成了我们的需求，但是还有一个问题需要解决，就是我们前面所讲的：由于给每个`li`元素都添加了单击事件，导致占用内存比较多，性能比较低，所以可以使用事件委托的方式来改造上面的程序。

改造后的程序如下所示：

```js
<script>

      var ul = document.querySelector("ul");
      //   var parent = document.querySelector("ul");
      ul.addEventListener("click", function (e) {
        var target = e.target;
        if (target.nodeName.toLowerCase() === "li") {
          console.log(target.innerHTML);
        }
      });

      var btn = document.querySelector("#btn");

      btn.addEventListener("click", function () {
        //创建li
        var newLi = document.createElement("li");
        var newText = document.createTextNode("a6");
        newLi.appendChild(newText);
        //把创建的li添加到ul上
        ul.appendChild(newLi);
        //重新添加事件处理程序
        // bindEvent();
      });
    </script>
```

在上面的代码中，我们通过`querySelector`方法获取`ul`这个父元素，然后给该元素添加单击事件，在对应的事件处理程序中，判断获取到的元素是否为`li`，如果是打印`li`元素中的内容。

由于这里我们没有在使用`querySelectorAll`函数，所以这里我们也没有必要在封装到一个函数中了。

关于按钮的单击事件的处理，没有任何的变化。

以上我们就是通过事件委托的方式，给父元素添加了事件，对应的子元素都具有了相应的事件，这样的处理方式性能更高。

关于事件委托，在这里我们就介绍完了，通过前面的讲解，希望对事件委托有一个比较深刻的理解。

在`JavaScript`中还有一些其它的比较常用的事件，例如：

```js
焦点相关的事件:focus,blur等事件
鼠标相关的事件:mouseover,mouseout等事件
键盘相关的事件：keydown,keyup,keypress等
其它事件...
```

关于这些事件，可以查看相应的文档，了解对应的基本使用。

## 13、介绍一下浏览器的重排与重绘

在前面的课程中，我们也提到过对`DOM`的操作是比较消耗性能的，这是因为它会带来浏览器的重绘与重排。

在讲解什么是重排与重绘之前,先来说一下浏览器渲染`HTML`的过程。

浏览器渲染`HTML`的过程大体上可以分为 4 步

第一：`HTML`代码被`HTML`解析器解析成对应的`DOM`树，`CSS`代码被`CSS`解析器解析成对应的样式规则集。

第二：`DOM`树与`CSS`解析完成后，附加在一起形成一个渲染树

第三：节点信息的计算，即根据渲染树计算出每个节点的几何信息（宽，高等信息）

第四：渲染绘制，根据计算完成的节点信息绘制整个页面。

而我们所要讲解的重排与重绘就发生在第三步和第四步中。

**什么是重排**

当对一个`DOM`节点信息进行修改的时候，需要对该`DOM`结构进行重新的计算。并且该`DOM`结构的修改会决定周边`DOM`结构的更改范围，主要分为全局范围和局部范围。

全局范围就是从页面的根节点`html`标签开始，对整个渲染树进行重新计算，例如：我们修改窗口的尺寸或者修改了根元素的字体大小的时，都会导致对整个渲染树进行重新计算。

局部范围只会对渲染树的某部分进行重新计算。例如要改变页面中某个`div`的宽度，只需要重新计算渲染树中与该`div`相关的内容就可以了。

而重排的过程发生在`DOM`节点信息修改的时候，重排实际是根据渲染树中每个渲染对象的信息，计算出各自渲染对象的几何信息，例如`DOM`元素的位置，尺寸，大小等。然后将其放在页面中的正确的位置上。

综上所述，我们明白了重排其实就是一种改变页面布局的操作。那么常见的引起重排的操作有哪些呢？

（1）页面首次渲染

在页面首次渲染的时候，`HTML`页面中的各个元素位置，尺寸，大小等信息都是未知的，需要通过与`css`样式规则集才能够确定出各个元素的几何信息。这个过程中会产生很多元素集合信息的计算，所以会产生重排。

(2)浏览器窗口大小的改变

页面渲染完成后，就会得到一个固定的渲染树。如果此时对浏览器窗口进行缩放或者是拉伸操作，渲染树中从根元素`html`标签开始的所有元素，都会重新计算其几何信息，从而产生重排的操作。

(3)元素位置改变和尺寸的改变

(4)元素内容改变,例如，文本内容被另外一个不同尺寸的图片替换。

(5)添加或者删除可见的 DOM 元素

(6)获取某些特定的属性

当我们对`javascript`某些操作属性的修改也会导致重排的操作，而频繁的重排操作会对浏览器引擎产生很大的消耗。所以浏览器不会对`js`的每个操作都进行一次重排，而是维护一个会引起重排操作的队列，等到队列中的操作达到了一定的数量或者是到了一定的时间间隔的时候，浏览器才会去刷新一次队列，进行真正的重排操作。

虽然浏览器有这样的优化，但是我们写的一些代码还会导致浏览器提取刷新队列，例如以下的操作。

```js
offsetLeft, offsetWidth, offsetHeight, offsetTop;
scrollTop, scrollLeft, scrollWidth, scrollHeight;
clientTop, clientLeft, clientWidth, clientHeight;
widht, height;
```

当我们进行以上属性操作的时候，浏览器为了返回最精确的信息，需要刷新队列，因为队列中的某些操作会影响到这些属性值的获取。

以上就是浏览器重排的介绍

**浏览器重绘**

浏览器的重绘指的就是改变元素在页面中的展示样式，而不会引起元素在文档中位置的改变。例如：改变元素的颜色，背景色，透明度等。

常见的引起重绘的操作如下：

```js
color:颜色
border-style:边框样式
visibility: 元素是否可见
background:背景样式，包括背景颜色，背景图片等
text-decoration:文本下划线，上划线等
border-radius:边框圆角
box-shadow:元素的阴影
```

以上就是浏览器的重绘的介绍。

通过对浏览器重排与重绘的介绍，相信大家已经有所了解了，那么它们两者之间有什么关系呢？

简单的说，重排一定会引起重绘，而重绘却不一定会引起重排的操作。

因为当元素在重排的过程中，元素的位置等几何信息会重新计算，并会引起元素的重新渲染，这样就会产生重绘的操作，而在重绘的时候，只是改变了元素的展示的样式，而不会引起元素在文档中位置的改变，所以一般不会引起重排的操作。

**性能优化**

浏览器的重排与重绘是比较消耗性能的，所以我们应该尽量减少重排与重绘的操作，这也是优化网页性能的一种方式。

常见的方法如下：

第一：将样式属性值的修改合并为一次。

例如，我们需要修改一个元素的样式，可以通过如下的代码实现：

```js
var mainDiv = document.getElementById("div1");
mainDiv.style.width = "200px";
mainDiv.style.height = "100px";
mainDiv.style.background = "#ccc";
```

但是问题是，在上面的操作中多次修改了`style`属性，会引发多次的重排与重绘操作。

所以为了解决这个问题，可以将这些样式合并在一个`class`类中。

```css
  <style>
      .changeStyle {
        width: 200px;
        height: 100px;
        background: "#ccc";
      }
    </style>
```

然后通过通过`javascript`直接修改元素的样式

```js
document.getElementById("div1").className = "changeStyle";
```

这样我们可以在最后一步完成样式的修改，从而只引起一次的重排与重绘的操作。

第二：

将需要多次重排的元素，`position`属性设为`absolute`或`fixed`，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。

第三：在对多节点操作的时候，可以现在内测中完成，然后在添加到文档中。

如下代码所示：

```js
function createTable(list) {
  var table = $("#table");
  var rowHtml = "";
  list.forEach(function (item) {
    rowHtml += "<tr>";
    rowHtml += "<td>" + item.userName + "</td>";
    rowHtml += "<td>" + item.userPwd + "</td>";
    rowHtml += "</tr>";
    table.append(rowHtml);
    rowHtml = "";
  });
}
```

当调用`createTable`方法的时候，会从`list`集合中取出一条数据，然后放在`tr`标签中，紧跟着添加到表格中，这样就会导致每添加一行数据，都会引发一次浏览器的重排和重绘的操作，如果数据很多，则会对渲染造成很大的影响。

修改后的代码

```js
function createTabel(list) {
  var table = $("#table");
  var rowHtml = "";
  list.forEach(function (item) {
    rowHtml += "<tr>";
    rowHtml += "<td>" + item.userName + "</td>";
    rowHtml += "<td>" + item.userPwd + "</td>";
    rowHtml += "</tr>";
  });
  //将数据一次性追加到表格中，完成一次渲染
  table.append(rowHtml);
}
```

通过上面的改造以后，只会引起一次浏览器的重绘与重排的操作，从而带来很大的新能提升。

第四：由于`display`属性为`none`的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发两次重排。

第五：　尽量减少`table`布局,随便修改一个单元格的高度或宽度都会让整个表格进行重排，性能非常差。

第六：在对多个同级元素做事件绑定的时候，推荐使用事件委托机制来处理。

第七：文档片段`DocumentFragment`的使用，关于这块内容，在前面的课程中已经使用过。

使用批量插入元素，例如：向页面的`ul`元素中添加`100`个`li`元素，

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

以上就是关于浏览器重绘与重排的内容。
