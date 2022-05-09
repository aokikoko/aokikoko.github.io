---
slug: es6
title: "[面试题] JS-ES6"
sidebar_position: 13
---

## let const var 区别

todo...

## 为什么需要块级作用域

在 ES5 中只有全局和局部作用域(函数作用域), 存在一些问题.

1. 存在内层变量可能覆盖外层变量的问题

2. 在循环中用来记数的变量会变成全局变量.

## 块级作用域

示例 1:

```js
function test() {
  let num = 5;
  if (true) {
    let num = 10;
  }
  console.log(num); // 5
}

test();
```

示例 2:

```js
if (true) {
  let b = 20;
  console.log(b); //20
  if (true) {
    let c = 30;
  }
  console.log(c); // Uncaught ReferenceError报错
}
```

这样的好处就是立即执行函数不需要了

```js
(function () {
  var temp = "hello";
  console.log(temp);
})();

// 相当于
{
  let temp = "hello";
  console.log(temp);
}
```

## let 注意事项

1. 不存在变量提示

必须先声明

```js
console.log(num); //Cannot access 'num' before initialization
let num = 2;
```

2. 暂时性死区

```js
var num = 123;
if (num) {
  num = 666;
  let num; //Cannot access 'num' before initialization
}
```

:::tip
为何会出错?

上面代码存在全局变量 num, 但是块级作用域中, 又使用 let 关键字声明了一个局部 num 变量, 导致在 if {} 中的 num, 是绑定在该块级作用域中, 所以在声明变量之前却使用了 num 就报错. 因为 let 必须先声明再使用.

所以在块级作用域中, 只要存在 let, 它声明的变量就绑定在块级作用域中, 不会受外部环境的影响, 所以在 ES6 中规定, 如果在区域中存在 let, let 所声明的变量从一开始就生成了一个封闭作用域, 只要在声明前使用该变量就报错.

所以所谓的暂时性死区, 就是在代码块中使用 let 声明变量前, 该变量是不可用的
:::

3. 不允许重复声明

```js
function test() {
  var num = 12;
  var num = 20;
  console.log(num); //20
}

function test() {
  let num = 12;
  let num = 20;
  console.log(num); // has already been declared
}

function test(num) {
  let num = 20;
  console.log(num); // has already been declared
}

test(20);
```

## const 注意事项

```js
let num = 20;
num = 30;

console.log(num)  // 30

--------------------
const Pi = 3.14;
Pi = 3.15;
console.log(Pi)  // Assignment to constant variable.

--------------------
const Pi ;
Pi = 3.14;
console.log(Pi) //报错
```

## 解构赋值

数组和对象解构

## 解构赋值好处

1. 交换变量的值

```js
let num1 = 3;
let num2 = 6;
[num1, num2] = [num2, num1];
```

2. 函数可以返回多个值

```js
function test() {
  return [1, 2, 3];
}

let [a, b, c] = test();
```

3. 函数返回一个对象

```js
function test() {
  return {
    num1: 3,
    num2: 6,
  };
}

let { num1, num2 } = test();
```

## 扩展运算符

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [].concat(arr1, arr2);
console.log(arr3);

--------------------------
可以这么写
let arr3 = [...arr1, ...arr2]
```

### 扩展运算符的应用场景

1. 代替数组中的 apply 方法

```js
let arr= [1,2,3]
let max = arr[0]
for (let index = 0; index < arr.length; index++) {
  if (arr[index] > max) {
    max = arr[index];
  }
}

--------------------

上面可以简写

console.log(Math.max.apply(null, arr))

还可以再简写

console.log(Math.max.(...arr))
```

2. 方便参数传递

```js
function test(num1, num2) {
  return num1 + num2;
}

let arr = [1, 2, 3];
console.log(test(...arr));
```

## 箭头函数

普通函数:

```js
let f = function (x, y) {
  return x + y;
};
console.log(f(3, 6));
```

箭头函数:

```js
let f = (x, y) => {
  return x + y;
};
console.log(f(3, 6));
```

## 箭头函数的注意点及 this 指向

1. 直接返回对象的写法

```js
let f = (id, name) => ({
  id: id,
  userName: name
})

console.log(f(1, 'zs'))

---

等于下面这种写法
let f = (id, name) => {
  return {
    id: id,
    userName: name
  }
}

console.log(f(1, 'zs'))
```

2. 箭头函数中 this 的问题

```js
let person = {
  userName: "ls",
  getUserName() {
    console.log(this.userName);  //此时this指的是person对象
  },
};
person.getUserName()  // ls

-----

let person = {
  userName: "ls",
  getUserName() {
    setTimeout(function () {
      console.log(this.userName);  // 因为setTimeout中this指向window而不是person对象, 所以输出undefined , 如何解决, 可以看下面写法使用that = this
    }, 1000)
  },
};
person.getUserName()  //undefined

----

let person = {
  userName: "ls",
  getUserName() {
    let that = this
    setTimeout(function () {
      console.log(that.userName);
    }, 1000)
  },
};
person.getUserName()  //ls

---- 使用箭头函数方式解决

let person = {
  userName: "ls",
  getUserName() {
    setTimeout(() => {
      console.log(this.userName);  // 箭头函数中没有this, 但是箭头函数中使用了this, 实际上使用的是外层代码块中的this, 箭头函数不会创建自己的this, 只会从自己的作用域链的上一层去继承this, 所以这里箭头函数所在的作用域链就是settimeout这个函数, settimeout的上一层是person
    }, 1000)
  },
};
person.getUserName()  //ls
```

继续理解箭头函数的 this

```js
let person = {
  userName: 'zs',
  getUserName = () => {
    console.log(this)  //window

    console.log(this.userName)
  }
}

person.getUserName() // undefined  因为在getUserName这个箭头函数中使用this, 如果在箭头函数中使用this, 实际上使用的是外层代码块中的this, 箭头函数中this所在的作用域链是person, 那person的上一层是window

----
let person = {
  userName: 'zs',
  getUserName ()  {
    return () => {
      console.log(this.userName)  // zs  箭头函数不会创建自己的this, 它只会从自己作用域链的上一层去继承this

      // 这个箭头函数的作用域链是在getUsername函数的作用域内, 那么getUsername的上一层是person对象, 所以this代表person对象
    }
  }
}
person.getUserName()()

---

由于箭头函数没有this, 所以不能使用call , apply, bind函数改变this指向

let adder = {
  base: 1,
  add: function (a) {
    let f = v => v + this.base;
    let b = {
      base: 3
    }
    return f.call(b, a)
  }
}
console.log(adder.add(1))  // 2
```

## 箭头函数不适合的场景

1. 不能作为构造函数, 也就是不能使用 new 操作符创建实例

构造函数就是通过 new 操作符生成对象实例的, 而生成对象实例的过程就是通过构造函数给实例去绑定 this 的一个过程, 而箭头函数没有 this, 因此不能使用箭头函数作为构造函数.

```js
let Person = (name) => {
  this.userName = name;
};

let p = new Person("lisi"); // Person is not a constructor
```

2. 箭头函数没有 prototype 属性

```js
let Person = (name) => {
  this.userName = name;
};
console.log(Person.prototype); //undefined
// 箭头函数没有自己的this, 不存在自己的作用域, 因此箭头函数没有prototype属性
```

3. 箭头函数不适合作为原型函数

```js
function Person(name) {
  this.userName = name;
}
Person.prototype.sayHello = () => {
  console.log(this); // window
  console.log(this.userName);
};
let p = new Person("lisi");

p.sayHello(); // undefined
```

## Object.assign 浅拷贝

```js
// 将obj1和obj2的属性都给obj3

let obj1 = {
  name: "zs",
};
let obj2 = {
  age: 18,
};
let obj3 = {};

for (let key in obj1) {
  obj3[key] = obj1[key];
}
for (let key in obj2) {
  obj3[key] = obj2[key];
}
console.log(obj3);
```

这种方式比较繁琐, 使用 Object.assign

```js
let target = {
  a: 1,
  b: 2,
}

let source = {
  c: 3,
  d: 4,
}

let source1 = {
  e: 5,
  f: 6,
}


Object.assign(target, source, source1 ...)  // 把target之后的所有对象都拷贝给目标对象target
console.log(target)
```

:::tip
注意 Object.assign 是浅拷贝
:::

```js
let obj1 = {
  name: "zs",
  address: {
    city: "北京",
  },
};

let obj2 = {};

Object.assign(obj2, obj1);
obj2.address.city = "shanghai";
```

## Object.assign 的注意事项

1. 如果目标对象与源对象有同名属性, 那么后面的属性会覆盖前面的属性

```js
let target = {
  a: 1,
  b: 2,
};

let source = {
  b: 3,
  d: 4,
};

Object.assign(target, source);
console.log(target); // { a: 1, b: 3, d: 4 }
```

2. 不可枚举的属性不会被复制

```js
let obj = {};

Object.defineProperty(obj, "b", {
  enumerable: false,
  value: "hello",
});

let obj1 = {
  a: "world",
};

Object.assign(obj1, obj);
console.log(obj1); // { a: 'world' }  b属性是不可枚举的, 所以没有被复制
```

## Symbol

js 中可以创建对象, 并且在对象中可以指定属性

```js
let obj = {
  num: 10,
};
```

但是属性名可能造成冲突

比如用了别人提供好的对象, 但是又想为这个对象中添加新的属性或方法, 新添加的属性或方法名可能与原有属性或方法名字冲突

如何保证名字是唯一的, 就可以防止冲突问题, 这就是 Symbol 的目的之一

Symbol 这个类型可以通过 Symbol 函数去生成 , 他的值是独一无二的, 可以保证属性名唯一性

```js
let s = Symbol();
let s1 = Symbol();

console.log(typeof s); // symbol
console.log(s); // symbol()
console.log(s1); // symbol()
```

```js
let s = Symbol("s"); // symbol(s)
let s1 = Symbol("s1"); // symbol(s1)
```

```js
let s = Symbol("s"); // symbol(s)
let s1 = Symbol("s1"); // symbol(s1)
console.log(s === s1); // false
```

### Symbol 应用场景

如何使用 Symbol 作为属性名

方式一:

```js
let obj = {};
let mySymbol = Symbol();
obj[mySymbol] = "hello";
console.log(obj[mySymbol]); // hello
```

方式二:

```js
let mySymbol = Symbol();
let obj = {
  [mySymbol]: "hello",
};

console.log(obj[mySymbol]); // hello
```

如何防止冲突

```js
let obj = {
  name: "zs",
  age: 18,
};

function test1(obj) {
  obj.id = 21;
}
function test2(obj) {
  obj.id = 22;
}
test1(obj);
test2(obj);
console.log(obj); //{ name: 'zs', age: 18, id: 22 }
// 此时属性名相同的值被覆盖了
```

```js
// 使用Symbol来解决

let obj = {
  name: "zs",
  age: 18,
};
let mySymbol = Symbol("b1");
function test1(obj) {
  obj[mySymbol] = 21;
}
let mySymbol2 = Symbol("b2");
function test2(obj) {
  obj[mySymbol2] = 22;
}
test1(obj);
test2(obj);
console.log(obj); // { name: 'zs', age: 18, [Symbol(b1)]: 21, [Symbol(b2)]: 22 }
```

## Proxy

可以理解为在我们所访问的对象前加了一个拦截层, 当我们去访问某个对象的时候必须先通过这个拦截层

```js
let proxy = new Proxy(target, handler); // target表示要拦截的目标对象, handler表示要拦截的行为和规则, 也是对象
```

```js
// get(); // 来拦截属性读取的操作, 比如当对对象当中某个属性进行访问的时候, 执行这个get方法

let Student = {
  username: "zs",
};
console.log(Student.username); // 'zs'
console.log(Student.userage); // undefined
```

但我们不希望看到 undefined, 希望的是当我们访问 Student 中的 userage 属性的时候, 如果不存在就抛出提示, 就需要用到拦截器

```js
let proxy = new Proxy(Student, {
  get: function (target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new Error("访问的属性" + property + "不存在");
    }
  },
});
console.log(proxy.username);
console.log(proxy.userage);
```

注意我们这里操作的是 proxy 对象

```js
let proxy = new Proxy(Student, {
  get: function (target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new Error("访问的属性" + property + "不存在");
    }
  },
  set: function (obj, prop, value) {
    console.log(obj);
    console.log(prop);
    console.log(value);
    if (prop === "userage") {
      if (!Number.isInteger(value)) {
        throw new Error("年龄必须是整数");
      }
      if (value > 60) {
        throw new Error("年龄超出范围");
      }
    }
  },
});
proxy.userage = 80;
console.log(proxy.userage);
```

### Proxy 应用场景一: 数据校验

```js
  class Person {
    constructor () {
      this.name = '';
      this.age = 19;
      return validator(this, personValidators)
    }
  }
  const personValidators = {
    name(val) {
      return typeof val === 'string''
    },
    age(val) {
      return typeof val === 'number' && val > 18;
    }
  }
  function validator(target, validator) {
    // 需要返回proxy对象, 而Person构造函数返回的是validator函数, 所以通过Person创建出来的对象
    // 也就是Person类创建出来的对象后续在使用的时候使用的都是proxy对象

    return new Proxy(target, {  // 这里实际就是this, 也就是Person
      _validator: validator,
      set(target, key, value) {
        if (target.hasOwnProperty(key)) {
          let v = this._validator[key]
          if (v(value)) {
            return Reflect.set(target, key, value);
          } else {
            throw new Error(`不能给${key}属性设置${value}`)
          }
        } else {
          throw new Error(`${key}属性不存在`)
        }
      }
    })
  }
  let person = new Person();
  person.name = 'zhangsan';
  person.age = 18
```

### Vue3的响应式原理是通过Proxy来完成的

在文本框中输入内容会在p标签中展示

```js
1. 先找到文本框还有p标签
2. 文本框中添加keyUp事件, 把获取的数据交给对象中的属性, 再把该属性取出来交给p标签
<input type="text" id="txtInput" />
<p id="txtP"></p>
<script>
  let input = document.getElementById('txtInput');
  let p = document.getElementById('txtP');

  input.addEventListener
</script>
```