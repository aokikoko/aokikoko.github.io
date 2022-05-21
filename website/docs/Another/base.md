---
slug: base
title: "[小题目] 基础题"
sidebar_position: 2
---

## 请说明 Ajax Fetch Axios 三者的区别

三者都用于网络请求, 但是不同维度

Ajax (Asyncchronous Javascript and XML)是个技术统称

Fetch, 一个具体的 API

Axios, 第三方库

### 面试题: 用 XMLHttpRequest 实现 Ajax

![xmlhttprequest](assets/xmlhttprequest.JPG)

### Fetch

浏览器原生 API, 用于网络请求

和 XMLHttpRequest 一个级别, 或者说是 XMLHttpRequest 的升级版

Fetch 语法更简洁, 易用, 支持 Promise

```js
function ajax2(url) {
  return fetch(url).then((res) => res.json());
}
```

### Axios

底层可以用 XMLHttpRequest 或者 fetch 去实现

## 防抖和节流

### 防抖

防抖: "你先抖动着, 啥时候停了, 再执行下一步"

例如: 一个搜索框, 等输入停止之后, 再触发搜索

```js
// 搜索 <input id="input1" />

function debounce(fn, delay = 200) {
  let timer = 0;

  return function () {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments); // 透传 this 和参数
      timer = 0;
    }, delay);
  };
}

const input1 = document.getElementById("input1");
input1.addEventListener(
  "keyup",
  debounce(() => {
    console.log("发起搜索", input1.value);
  }, 300)
);
```

### 节流

```js
// 可拖拽
// <div id="div1" draggable="true" style="width: 100px; height: 50px; background-color: #ccc" padding: 10px></div>

function throttle(fn, delay = 100) {
  let timer = 0;

  return function () {
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, arguments); // 透传 this 和参数
      timer = 0;
    }, delay);
  };
}

const div1 = document.getElementById("div1");
div1.addEventListener(
  "drag",
  throttle((e) => {
    console.log(e.offsetX, e.offsetY);
  }, 200)
);
```

### 两者有什么区别

:::tip
防抖: 限制执行次数, 多次密集的触发只执行一次. 搜索框, 防抖关注结果.

节流: 限制执行频率, 有节奏的执行. 拖拽事件 , 节流关注过程, 让变得有节奏
:::

## px 百分比 em rem vw/vh 有什么区别

### px 和 %

px 是基本单位, 也是绝对单位 (其他的都是相对单位), px的长度是固定的

% 是相对于父元素的宽度比例 