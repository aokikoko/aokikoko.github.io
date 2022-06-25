---
title: "[前端测试] 自动化测试"
sidebar_position: 4
---

## jest 和 moka 等测试框架原理简单解释

```js
// math.js文件
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

// 我们将测试这个文件写的是否正确
```

```js
// math.test.js文件

// var result = add(3, 7);
// var expected = 10;

// if (result !== 10) {
//   throw new Error(`3 + 7 应该等于 ${expected}, 但是结果却是 ${result}`);
// }

// var result = minus(3, 3);
// var expected = 0;

// if (result !== 0) {
//   throw new Error(`3 - 3 应该等于 ${expected}, 但是结果却是 ${result}`);
// }

function expect(result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期值和实际值不相等 预期${actual} 结果却是${result}`);
      }
    },
  };
}

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc} 通过测试`);
  } catch (e) {
    console.log(`${desc} 没有通过测试 ${e}`);
  }
}

test("测试加法 3+7", () => {
  expect(add(3, 7)).toBe(10);
});

test("测试减法 3-3", () => {
  expect(minus(3, 3)).toBe(0);
});

test("测试乘法 3*3", () => {
  expect(multi(3, 3)).toBe(9);
});
```

:::tip
expect 就是返回一个函数, 该函数对比实际值和预期值

test 函数通过 try catch 来检测是否通过测试
:::

## 使用 Jest 修改自动化测试样例

jest 在前端自动化测试中完成的是单元测试和集成测试

所谓单元测试就是测试一个模块, 集成测试理解成多个模块测试

所以 jest 必须要引入模块

```js
// math.js
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

try {
  // commonJs语法
  module.exports = {
    add,
    minus,
    multi,
  };
} catch (e) {}
```

```js
// math.test.js
const math = require("./math.js");
const { add, minus, multi } = math;

test("测试加法 3+7", () => {
  expect(add(3, 7)).toBe(10);
});

test("测试减法 3-3", () => {
  expect(minus(3, 3)).toBe(0);
});

test("测试乘法 3*3", () => {
  expect(multi(3, 3)).toBe(9);
});
```

## jest 与 babel 结合

首先安装 babel/core 核心库, 再安装 babel/preset-env, 在目录中创建 babelrc 文件

```js
{
  // 插件用哪些集合帮助代码转换
  "presets": [
    [
      "@babel/preset-env",
      {
        // 根据当前机器的node环境结合babel/preset-env对现在的代码做转换
        // 当代码中使用import语句的时候babel使用babel/preset-env帮助我们对
        // import 语句进行转换， 转换成commonjs的语法， 这样node和jest就可以运行了
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}

// 底层机制
// 当运行npm run jest的时候
// jest内部集成了插件，插件叫babel-jest， 它会检测当前环境是否安装了babel或babel/core
// 如果安装了babel/core， 它去拿babelrc里面的配置
// 取得配置后， 它会在运行测试之前， 结合babel先把代码转换一次，比如import变成require语法
// 运行转换过的测试代码
```

## jest 的匹配器

首先修改 package.json 文件自动监听文件变化

```js
// 修改package.json
  "scripts": {
    // 让jest监听所有测试文件的变化, 文件变化就自动重新测试所有测试用例
    "test": "jest --watchAll",
    "coverage": "jest --coverage"
  },
```

### toBe

### toEqual

```js
test("测试对象内容相等", () => {
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});
```

### 真假有关的匹配器

#### toBeNull

```js
test("测试是否null", () => {
  const a = null;
  expect(a).toBeNull();
});
```

#### toBeUndefined

```js
test("测试toBeUndefined", () => {
  const a = undefined;
  expect(a).toBeUndefined();
});
```

#### toBeDefined

```js
test("toBeDefined", () => {
  const a = 11;
  expect(a).toBeDefined();
});
```

#### toBeTruthy

```js
test("toBeTruthy", () => {
  const a = 0;
  expect(a).toBeTruthy(); // 不通过
});
```

#### toBeFalsy

```js
test("toBeFalsy", () => {
  const a = 0;
  expect(a).toBeFalsy(); // 通过
});
```

### 数字有关的匹配器

#### toBeGreaterThan

#### toBeLessThan

#### toBeGreaterThanOrEqual

#### toBeCloseTo

```js
test("toBeTruthy", () => {
  const a = 0.1;
  const b = 0.2;
  expect(a + b).toEqual(0.3);
});

// 如果用toEqual是不通过的, 因为浮点不准确0.333333..
// 所以可以用toBeCloseTo

test("toBeTruthy", () => {
  const a = 0.1;
  const b = 0.2;
  expect(a + b).toBeCloseTo(0.3);
});
```

### 字符串相关的匹配器

#### toMatch 是否包含

### 数组相关的匹配器

#### toContain 数组里是否包含

### 异常情况匹配器

#### toThrow

```js
const throwNewError = () => {
  throw new Error("A");
};

// 我们希望throwNewError函数能够抛出异常A, 就用如下方式测试
test("toThrow", () => {
  expect(throwNewError).toThrow("A");
});
```

## jest 命令行

```css
Watch Usage
 › Press f to run only failed tests.  // 只对没通过的用例跑一遍
 › Press o to only run tests related to changed files.  // 只测试更改的文件
 › Press p to filter by a filename regex pattern.   // 测试根据正则匹配的文件名
 › Press t to filter by a test name regex pattern.  // 测试根据正则匹配的名的用例
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

## 异步代码测试

### 第一种: 回调类型异步函数的测试方式

```js
import axios from "axios";

export const fetchData = (fn) => {
  // fetchData接收一个函数，当请求如下地址成功后，获取到response，
  // 这个response就是服务器返回的内容， 就调用fn， 并把response传入到fn中
  axios.get("http://www.dell-lee.com/react/api/demo.json").then((response) => {
    fn(response.data);
  });
};

// 那么我们如何测试这个fetchData函数写的对不对？
// 使用fetchData.test.js
// 该文件中引入要测试的函数,也就是fetchData函数
// 然后

test("fetchData 返回结果为 {success: true}", () => {
  fetchData((data) => {
    expect(data).toEqual({ success: true });
  });
});
```

但是实际上 test 中的回调函数并没有执行, 所以需要借助 done 函数

```js
test("fetchData 返回结果为 {success: true}", (done) => {
  fetchData((data) => {
    expect(data).toEqual({ success: true });
  });
  done();
});
```

### 第二种 直接返回 promise 的形式

有时 fetchData 这种函数不接收回调, 就是单纯的 promise. 代码如下

```js
export const fetchData = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};
```

上面代码具体失败成功怎么做我不管, 只帮你发请求, 请求结束之后自己处理成功和失败的请求

```js
// fetchData()执行后返回的是个promise, 对promise使用then方法
test("fetchData 返回结果为 {success: true}", () => {
  return fetchData().then((response) => {
    expect(response.data).toEqual({ success: true });
  });
});
```

测试 404

```js
test("fetchData 返回结果为 404", () => {
  expect.assertions(1);
  return fetchData().catch((e) => {
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});
```

### 第三种

```js
test("fetchData 返回结果为 {success: true}", () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
```

```js
test("fetchData 返回结果为 404", () => {
  return expect(fetchData()).rejects.toThrow();
});
```

### 第四种 await async

```js
test("fetchData 返回结果为 {success: true}", async () => {
  await expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
```

### 第五种 最清晰的写法

```js
test("fetchData 返回结果为 {success: true}", async () => {
  const response = await fetchData();
  expect(response.data).toEqual({ success: true });
});
```

```js
test("fetchData 返回结果为 404", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e.toString()).toEqual("Error: Request failed with status code 404");
  }
});
```

## Jest 的钩子函数

jest 的钩子函数就是在 jest 执行过程中某一些具体时刻自动被 jest 调用的函数

### 测试类

```js
import Counter from "./Counter";
// 不能直接使用类的方法, 要通过实例使用类的方法
const counter = new Counter();

test("测试addOne方法", () => {
  counter.addOne();
  expect(counter.number).toBe(1);
});

test("测试minusOne方法", () => {
  counter.minusOne();
  expect(counter.number).toBe(0);
});
```

上面的写法, 加法和减法都对一个实例产生了作用, 所以不利于测试

所以如果在测试前对一些内容进行初始化的时候, jest 提供了一些钩子函数

比如现在两个测试函数都需要 counter 实例, 改造代码如下

```js
import Counter from "./Counter";
let counter = null;

beforeAll(() => {
  console.log("beforeAll");
  counter = new Counter();
});

test("测试addOne方法", () => {
  console.log("测试addOne方法");

  counter.addOne();
  expect(counter.number).toBe(1);
});

test("测试minusOne方法", () => {
  console.log("测试minusOne方法");

  counter.minusOne();
  expect(counter.number).toBe(0);
});
```

### beforeAll

### afterAll

### beforeEach

### afterEach

### 钩子函数的作用域

## Jest 的 Mock

### jest.fn()

这是一个 mock 函数

### toBeCalled()

检测是否被执行过
