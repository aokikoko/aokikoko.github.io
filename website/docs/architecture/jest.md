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
