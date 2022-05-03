---
slug: obj
title: "[面试题] JS-对象常见问题"
sidebar_position: 10
---

## 1、对象的属性

给对象添加属性非常的简单如下所示：

```js
var person = {
  userName: "zhangsan",
};
```

如果想修改属性的特性，可以通过`Object.defineProperty()`来完成。

```js
var person = {
  userName: "zhangsan",
};
Object.defineProperty(person, "userName", {
  writable: false,
});
person.userName = "lisi"; //无法完成值的修改
console.log(person.userName); //zhangsan
```

我们可以给`Object.defineProperty`添加`getter()`函数和`setter( )`函数，这两个函数可以实现对象的私有属性，私有属性不对外公布，如果想要对私有属性进行读取和写入，可以通过`getter()`函数和`setter( )`函数。

```js
var person = {
  _age: 20, // _age表示私有属性
};
Object.defineProperty(person, "age", {
  get: function () {
    return this._age;
  },
  //在给私有属性赋值的时候，完成对应的校验功能
  set: function (value) {
    if (value >= 18) {
      this._age = value;
      console.log("可以浏览该网站");
    } else {
      console.log("不可以浏览该网站");
    }
  },
});
console.log(person.age); //20
person.age = 12;
console.log(person.age); //20
person.age = 30;
console.log(person.age); // 30
```

关于`Object.defineProperty`更详细的内容，可以参考`vue`响应式原理的课程。
