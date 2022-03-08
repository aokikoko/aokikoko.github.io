---
title: "[JS] JSON"
sidebar_position: 27
---

`摘记<Javascript高级程序设计> -- 马特 2020版 第二十三章`

<!--truncate-->

# JSON 

XML 曾经一度成为互联网上传输数据的事实标准。第一代 Web 服务很大程度上是以 XML 为基础的，以服务器间通信为主要特征。可是，XML 也并非没有批评者。有的人认为 XML过于冗余和啰唆。为解决这些问题，也出现了几种方案。不过 Web 已经朝着它的新方向进发了。

2006 年，Douglas Crockford 在国际互联网工程任务组（IETF，The Internet Engineering Task Force）制定了 JavaScript 对象简谱（JSON，JavaScript Object Notation）标准，即 RFC 4627。但实际上，JSON早在 2001 年就开始使用了。JSON 是 JavaScript 的严格子集，利用 JavaScript 中的几种模式来表示结构化数据。Crockford 将 JSON 作为替代 XML 的一个方案提出，因为 JSON 可以直接传给 eval()而不需要创建 DOM。

理解 JSON 最关键的一点是要把它当成一种数据格式，而不是编程语言。JSON 不属于 JavaScript，它们只是拥有相同的语法而已。JSON 也不是只能在 JavaScript 中使用，它是一种通用数据格式。很多语言都有解析和序列化 JSON 的内置能力。

## 语法

JSON 语法支持表示 3 种类型的值。

- 简单值：字符串、数值、布尔值和 null 可以在 JSON 中出现，就像在 JavaScript 中一样。特殊值 undefined 不可以。
- 对象：第一种复杂数据类型，对象表示有序键/值对。每个值可以是简单值，也可以是复杂类型。
- 数组：第二种复杂数据类型，数组表示可以通过数值索引访问的值的有序列表。数组的值可以是任意类型，包括简单值、对象，甚至其他数组。

JSON 没有变量、函数或对象实例的概念。JSON 的所有记号都只为表示结构化数据，虽然它借用了JavaScript 的语法，但是千万不要把它跟 JavaScript 语言混淆。

### 简单值

最简单的 JSON 可以是一个数值。例如，下面这个数值是有效的 JSON：

```json
5
```

这个 JSON 表示数值 5。类似地，下面这个字符串也是有效的 JSON：

```json
"Hello world!" 
```

JavaScript 字符串与 JSON 字符串的主要区别是，JSON 字符串必须使用双引号（单引号会导致语法错误）。

布尔值和 null 本身也是有效的 JSON 值。不过，实践中更多使用 JSON 表示比较复杂的数据结构，其中会包含简单值。

### 对象

对象使用与 JavaScript 对象字面量略为不同的方式表示。以下是 JavaScript 中的对象字面量：

```js
let person = {
 name: "Nicholas",
 age: 29
}; 
```

虽然这对 JavaScript 开发者来说是标准的对象字面量，但 JSON 中的对象必须使用双引号把属性名包围起来。下面的代码与前面的代码是一样的：

```js
let object = {
 "name": "Nicholas",
 "age" : 29
};
```

而用 JSON 表示相同的对象的语法是：

```json
{
 "name": "Nicholas",
 "age": 29
}
```

与JavaScript 对象字面量相比，JSON 主要有两处不同。

首先，没有变量声明（JSON 中没有变量）。

其次，最后没有分号（不需要，因为不是 JavaScript 语句）。同样，用引号将属性名包围起来才是有效的JSON。属性的值可以是简单值或复杂数据类型值，后者可以在对象中再嵌入对象，比如：

```json
{
 "name": "Nicholas",
 "age": 29,
 "school": {
 "name": "Merrimack College",
 "location": "North Andover, MA"
 }
}
```

这个例子在顶级对象中又嵌入了学校相关的信息。即使整个 JSON 对象中有两个属性都叫"name"，但它们属于两个不同的对象，因此是允许的。同一个对象中不允许出现两个相同的属性。

与 JavaScript 不同，JSON 中的对象属性名必须始终带双引号。手动编写 JSON 时漏掉这些双引号或使用单引号是常见错误。

### 数组

JSON 的第二种复杂数据类型是数组。数组在 JSON 中使用 JavaScript 的数组字面量形式表示。例如，以下是一个 JavaScript 数组：

```js
let values = [25, "hi", true];
```

在 JSON 中可以使用类似语法表示相同的数组：

```json
[25, "hi", true] 
```

同样，这里没有变量，也没有分号。数组和对象可以组合使用，以表示更加复杂的数据结构，比如：

```js
[
 {
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 "edition": 4,
 "year": 2017
 },
 {
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas"
 ],
 "edition": 3,
 "year": 2011
 },
 {
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas"
 ],
 "edition": 2,
 "year": 2009
 },
]
```

前面这个数组包含了很多表示书的对象。每个对象都包含一些键，其中一个是"authors"，对应的值也是一个数组。对象和数组通常会作为 JSON 数组的顶级结构（尽管不是必需的），以便创建大型复杂数据结构

-------------------

## 解析与序列化

JSON 的迅速流行并不仅仅因为其语法与 JavaScript 类似，很大程度上还因为 JSON 可以直接被解析成可用的 JavaScript 对象。与解析为 DOM 文档的 XML 相比，这个优势非常明显。为此，JavaScript 开发者可以非常方便地使用 JSON 数据。比如，前面例子中的 JSON 包含很多图书，通过如下代码就可以获取第三本书的书名：

```js
books[2].title
```

当然，以上代码假设把前面的数据结构保存在了变量 books 中。相比之下，遍历 DOM 结构就显得麻烦多了：

```js
doc.getElementsByTagName("book")[2].getAttribute("title");
```

### JSON 对象

JSON 对象有两个方法：stringify()和 parse()。在简单的情况下，这两个方法分别可以将JavaScript 序列化为 JSON 字符串，以及将 JSON 解析为原生 JavaScript 值。例如：

```js
let book = {
 title: "Professional JavaScript",
 authors: [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 edition: 4,
 year: 2017
};
let jsonText = JSON.stringify(book); 
```

这个例子使用 JSON.stringify()把一个 JavaScript 对象序列化为一个 JSON 字符串，保存在变量jsonText 中。默认情况下，JSON.stringify()会输出不包含空格或缩进的 JSON 字符串，因此jsonText 的值是这样的：

```json
{"title":"Professional JavaScript","authors":["Nicholas C. Zakas","Matt Frisbie"], "edition":4,"year":2017} 
```

在序列化 JavaScript 对象时，所有函数和原型成员都会有意地在结果中省略。此外，值为 undefined的任何属性也会被跳过。最终得到的就是所有实例属性均为有效 JSON 数据类型的表示。

JSON 字符串可以直接传给 JSON.parse()，然后得到相应的 JavaScript 值。比如，可以使用以下代码创建与 book 对象类似的新对象：

```js
let bookCopy = JSON.parse(jsonText); 
```

注意，book 和 bookCopy 是两个完全不同的对象，没有任何关系。但是它们拥有相同的属性和值。如果给 JSON.parse()传入的 JSON 字符串无效，则会导致抛出错误。

### 序列化选项

实际上，JSON.stringify()方法除了要序列化的对象，还可以接收两个参数。这两个参数可以用于指定其他序列化 JavaScript 对象的方式。

第一个参数是过滤器，可以是数组或函数；

第二个参数是用于缩进结果 JSON 字符串的选项。单独或组合使用这些参数可以更好地控制 JSON 序列化。

**1. 过滤结果**

如果第二个参数是一个数组，那么 JSON.stringify()返回的结果只会包含该数组中列出的对象属性。比如下面的例子：

```js
let book = {
 title: "Professional JavaScript",
 authors: [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 edition: 4,
 year: 2017
};
let jsonText = JSON.stringify(book, ["title", "edition"]);

//{"title":"Professional JavaScript","edition":4}
```

如果第二个参数是一个函数，则行为又有不同。提供的函数接收两个参数：属性名（key）和属性值（value）。可以根据这个 key 决定要对相应属性执行什么操作。这个 key 始终是字符串，只是在值不属于某个键/值对时会是空字符串。

为了改变对象的序列化，返回的值就是相应 key 应该包含的结果。注意，返回 undefined 会导致属性被忽略。下面看一个例子：

```js
let book = {
 title: "Professional JavaScript",
 authors: [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 edition: 4,
  year: 2017
};
let jsonText = JSON.stringify(book, (key, value) => {
 switch(key) {
 case "authors":
 return value.join(",")
 case "year":
 return 5000;
 case "edition":
 return undefined;
 default:
 return value;
 }
});
```

**2. 字符串缩进**

JSON.stringify()方法的第三个参数控制缩进和空格。在这个参数是数值时，表示每一级缩进的空格数。例如，每级缩进 4 个空格，可以这样：

```js
let book = {
 title: "Professional JavaScript",
 authors: [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 edition: 4,
 year: 2017
};
let jsonText = JSON.stringify(book, null, 4);
```

这样得到的 jsonText 格式如下：

```json
{
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas",
 "Matt Frisbie"
 ],
 "edition": 4,
 "year": 2017
} 
```

注意，除了缩进，JSON.stringify()方法还为方便阅读插入了换行符。这个行为对于所有有效的缩进参数都会发生。（只缩进不换行也没什么用。）最大缩进值为 10，大于 10 的值会自动设置为 10。

如果缩进参数是一个字符串而非数值，那么 JSON 字符串中就会使用这个字符串而不是空格来缩进。使用字符串，也可以将缩进字符设置为 Tab 或任意字符，如两个连字符：
