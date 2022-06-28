---
title: "[前端测试] Jest深入"
sidebar_position: 5
---

## 通过测试类理解单元测试和集成测试

假设有个 util.js 文件里面是一个工具类, 该类里有很多复杂的方法

```js
// util.js文件
class Util {
  init() {}

  a() {}

  b() {}
}

export default Util;
```

如何对这个类的方法进行测试, 就创建一个测试文件比如 util.test.js 文件

```js
// util.test.js文件
import Util from "./util";

const util = null;

beforeAll(() => {
  util = new Util();
});

test("测试 util 类的a方法", () => {
  expect(util.a(1, 2)).toBe("xxxx");
});
```

这个文件里引入 Util 类, 创建一个实例, 对实例方法执行, 看看结果. 就是这样测试

但是类中方法非常复杂, 为了节约性能, 我们可以模拟类

```js
jest.mock("路径");
// 他会把类的构造函数和里面的方法都自动替换成jest.fn(), 转化成类似如下代码

const Util = jest.fn();
Util.a = jest.fn();
Util.b = jest.fn();
```

## Jest 中对 DOM 节点操作的测试

我们创建一个 demo.js 文件, 这个文件有一个函数, 每次调用都使用 jquery 创建一个 div 标签插入到 body 中, 导出这个函数

```js
// demo.js文件
import $ from "jquery";

const addDivToBody = () => {
  $("body").append("<div />");
};

export default addDivToBody;
```

编写测试文件 demo.test.js 文件

```js
// demo.test.js 文件
import addDivToBody from "./demo";
import $ from "jquery";

test("测试 addDivToBody", () => {
  addDivToBody();
  addDivToBody();

  console.log($("body").find("div").length); // 2
});
```

使用 api 测试

```js
import addDivToBody from "./demo";
import $ from "jquery";

test("测试 addDivToBody", () => {
  addDivToBody();
  addDivToBody();
  expect($("body").find("div").length).toBe(2);
});
```

因为 jest 运行环境是 node 环境, node 环境没有 dom 这种东西. 但是为什么 jest 能够对 dom 进行操作? 因为 jest 在 node 环境中自己模拟了一套 dom 的 api. 也称作jsdom
