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
