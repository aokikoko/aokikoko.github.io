---
title: "[TS] 变量声明"
sidebar_position: 2
---

-----

## 回顾var声明

```js
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;
```
典型闭包场景  
g函数访问了外部定义的a, 导致f执行完毕, a仍然没释放  
被g引用了, 所以在执行g函数时, a的值是外部的10

### var的作用域规则
```js
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'


//为何是undefined
//因为var 存在提前变量声明
//上面代码类同于下面
function f(shouldInitialize: boolean) {
    var x
    if (shouldInitialize) {
        x = 10;
    }

    return x;
}
```


-----