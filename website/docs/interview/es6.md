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

### Vue3 的响应式原理是通过 Proxy 来完成的

在文本框中输入内容会在 p 标签中展示

```js
1. 先找到文本框还有p标签
2. 文本框中添加keyUp事件, 把获取的数据交给对象中的属性, 再把该属性取出来交给p标签
<input type="text" id="txtInput" />
<p id="txtP"></p>
<script>
  let input = document.getElementById('txtInput');
  let p = document.getElementById('txtP');
  let obj = {
    text: ''
  }
  let newObj = new Proxy(obj, {
    set: function(target, key, value) {
      if (target.hasOwnProperty(key)) {
        p.innerHTML = value
        input.value = value;
      }
    }
  })
  input.addEventListener('keyup', function(e) {
    newObj.text = e.target.value
  })
</script>
```

### Proxy 应用场景三: 实现私有属性

```js
传统定义私有属性的方式;
const userInfo = {
  _id: 123,
  getAllUsers: function () {
    console.log("获取所有用户的信息");
  },
  getUserById: function (userId) {
    console.log("根据用户的编号, 查询指定的信息" + userId);
  },
  saveUser: function (userId) {
    console.log("保存用户信息");
  },
};
```

```js
使用Proxy

const proxy = new Proxy(userInfo, {
  get: function (target, prop) {
    if (prop[0] === '_') {
      return undefined;
    }
    return target[prop];
  },
  set: function (target, prop, value) {
    if (prop[0] !== '_') {
      target[prop] value;
    }
  }
})
```

## Set

Set 结构与数组非常类似, 是类数组, 并不是真数组, 但是 Set 结构成员的值必须是唯一的, 也就是没有重复值

```js
// 添加值
let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(3);

console.log(s); // Set(3) { 1, 2, 3 }
console.log(s.size); // 3

// 删除值
console.log(s.delete(3);)  // true
s.clear()

// 查询
console.log(s.has(3);)  //false
```

如何转换成数组

```js
let array = Array.from(s);
```

### 利用 set 数组去重

```js
let arr = [1, 1, 2, 3, 4, 5, 6];

let s = new Set(arr);
console.log(Array.from(s));
```

## Generator

也称为生成器函数, 或者叫迭代器函数. 可以通过 for of 来遍历 generator 函数, 而且 generator 函数提供了异步编程的解决方案.

生成器函数和普通函数不一样, 普通函数一旦调用就会执行, 而 generator 函数在中间可以暂停

```js
// 创建generator函数
function* go() {}

// 如何划分generator的执行阶段
function* go() {
  console.log(1);
  let a = yield "a";
  console.log(2);
  let b = yield a;
  console.log(3);
  return b;
}
// 调用generator函数
let it = go();
let result1 = it.next();
console.log(result1); // 1
// { value: 'a', done: false }
let result2 = it.next("b的值");
console.log(result2); // 2
// { value: 'b的值', done: false }
let result3 = it.next();

console.log(result3); // 3
// { value: undefined, done: true }
```

### generator 面试题

```js
function* test(num) {
  let x = 3 * (yield num + 1);
  let y = yield x / 3;
  return x + y + num;
}

let n = test(6);
console.log(n.next());
console.log(n.next());
console.log(n.next());

// 第一个console里输出{done: false, value: 7}, 因为执行next后, 碰到yield暂停, 并且把结果 6 + 1 返回
// 第二次调用next函数时, 接着yield往下走, 但是第二次调用时, 并没有传递任何参数, 所以对应的 let y = yield x / 3 中的 x 是undefined, 所以输出NaN
// 第三次 NaN同理
```

### generator 的问题

todo...

### generator 的 this

```js
function* Person() {
  yield (this.name = "zs");
  yield (this.age = 18);
}
let person = new Person();
console.log(person); // 报错 Person不是一个构造函数
```

如何解决问题?

```js
function* Person() {
  yield (this.name = "zs");
  yield (this.age = 18);
}
let person = {};
let obj = Person.bind(person)();
console.log(obj.next()); // {value: 'zs', done: false}
```

### generator 的应用场景

场景一: 图片切换

```js
// 普通写法
<input type="button" value="切换图片" id="btn" />
<img src="images/b.jpg" id="mv"/>
<script>
let button = document.getElementById('btn');
let mm = document.getElementById('mv');
let flag = 0;
button.onclick = function() {
  if (flag === 0) {
    mm.src = 'images/a.jpg';
    flag = 1
  } else {
    mm.src = 'images/b.jpg'
    flag = 0
  }
};
</script>
```

```js
// generator写法
```

## Promise

Promise 就是一个对象, 而 Promise 对象代表一个异步任务, 也就是需要长时间执行的任务. 也就是说通过 promise 对象可以将异步操作使用同步操作的方式表达出来, 避免了层层嵌套的回调函数的问题, 也就是回调地狱的问题

```js
// 在进行异步处理的时候, 如果成功了就使用resolve函数来进行处理, 如果失败了就使用reject函数来进行处理
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random();
    if (num > 0.3) {
      resolve("成功"); // resolve()函数的参数就是成功的返回值, 所以'成功'这个字符串就会被返回
    } else {
      reject("失败");
    }
  }, 3000);
});

// 不管成功或者失败, 我们如何去获取值, 就用到then方法来处理异步操作返回的结果. then函数的参数有两个函数, 分别处理成功和失败
promise.then(
  function (value) {
    console.log(value);
  },
  function (errReason) {
    console.log(errReason);
  }
);
```

### Promise 封装 ajax 操作

```js
let getJson = function (url) {
  let p = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = handler;
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();
    function handler() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      }
    }
  });
  return p;
};
getJson("http://127.0.0.1:5500").then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log("出错了");
  }
);

// 调用getJson就拿到了promise对象, promise对象中通过xml发送异步请求, 如果成功就resolve, 结果交给then里第一个回调函数
```

### Promise 常见误区

每个 then 方法都是为上一个 then 方法返回的 promise 对象添加状态明确后的回调

### Promise 对象异常处理

```js
// 写法1
getJson("错误的url")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
// 等价于
getJson("错误的url")
  .then(function (value) {
    console.log(value);
  })
  .then(undefined, function (err) {
    console.log(err);
  });
```

### Promise 并行处理

```js
getJson('url')
getJson('url')
getJson('url')
...
```

上面是不合理的写法, 应该是用 all 方法

```js
Promise.all([promise1, promise2]).then(
  function (data) {
    console.log("data", data); // 存了promise1 和 2的结果, 都成功才是成功, 有一个失败就是失败
  }, // 拿到结果的顺序也和请求顺序一致
  function (err) {
    console.log(err);
  }
);
```

希望一个请求但是不影响其他请求结果

```js
Promise.all([
  getJson("地址1"),
  getJson("地址2"),
  getJson("错误地址").catch(() => {}), // 这个catch返回一个成功的promise, 还会走后面的then
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Promise.race

数组内有一个人任务完成就结束了

### Promise 中的静态方法

1. Promise.resolve()

```js
// 作用: 将一个值快速转换成对应的一个promise对象, 返回一个成功的promise对象
Promise.resolve("abc"); // resolve方法会将abc字符串转换成promise对象

Promise.resolve("abc").then(function (value) {
  console.log(value); // abc
});
// 等价于
new Promise(function (resolve, reject) {
  resolve("abc");
});
```

2. Promise.reject()

```js
// 创建一个失败的promise对象
Promise.reject(new Error("abc")).catch(function (err) {
  console.log(err);
});
```

### Promise 执行顺序问题

如果在 promise 中没有任何异步操作, 他的回调函数也会进入到回调队列当中进行相应的排队, 也就是说等到所有的同步代码执行完才会执行 promise 对象中的回调函数, 看如下代码

```js
console.log("start");
Promise.resolve().then(() => {
  console.log("promise");
});
// resolve 方法返回的是一个成功的promise对象, 但是在promise对象当中没有任何的异步任务
console.log("end");
```

改造一下

```js
console.log("start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve()
  .then(() => {
    console.log("promise");
  })
  .then(() => {
    console.log("promise2");
  })
  .then(() => {
    console.log("promise3");
  });
console.log("end");

// 输出
// start
// end
// promise
// promise2
// promise3
// setTimeout
```

为何输出这个顺序? 宏任务和微任务

settimeout 是宏任务, 先进入队列进行排队, promise 的回调作为微任务执行, 会在本轮调用后自动执行, 也就是说微任务在当前任务结束后立即执行, 而不是排到末尾

### 模拟 Promise

1. 基本结构

```js
function MyPromise(task) {
  let that = this;
  that.status = "Pending";
  function resolve() {}
  function reject() {}
  task(resolve, reject);
}
let myPromise = new MyPromise(function (resolve, reject) {});
```

2. 异常处理

当我们创建 promise 对象的时候, 执行了传递进的回调函数, 在执行中可能会出现异常, 所以加上 try catch, 如果出现异常就调用 reject 方法, 在 reject 方法中修改状态. 又定义了 then 方法在原型上, 这样创建出来的 promise 都可以调用. 出现异常的话是调用 then 方法的第二个参数

```js
function MyPromise(task) {
  let that = this;
  that.status = "Pending";
  function resolve() {}
  function reject() {
    if (that.status == "Pending") {
      that.status = "Rejected";
      // 状态修改完成后, 调用的是then 方法中处理失败的回调函数
    }
  }
  try {
    task(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {};
let myPromise = new MyPromise(function (resolve, reject) {});
```

3. then 方法处理

then 方法是可以多次执行调用的, 可以用多个回调函数来处理, 需要用到一个数组来处理正确的回调和错误回调

```js
function MyPromise(task) {
  let that = this;
  that.status = "Pending";
  // 这个属性来存储promise的结果
  that.value = undefined;
  that.onResolvedCallbacks = [];
  that.onRejectedCallbacks = [];
  function resolve(value) {
    if (that.status === "Pending") {
      that.status = "Resolved";
      that.value = value;
      that.onResolvedCallbacks.forEach((item) => item(that.value));
    }
  }
  function reject(reason) {
    if (that.status == "Pending") {
      that.status = "Rejected";
      // 状态修改完成后, 调用的是then 方法中处理失败的回调函数
      that.value = reason;
      that.onRejectedCallbacks.forEach((item) => item(that.value));
    }
  }
  try {
    task(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let that = this;
  that.onResolvedCallbacks.push(onFulfilled);
  that.onRejectedCallbacks.push(onRejected);
};
let myPromise = new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random();
    if (num > 0.3) {
      resolve("成功了");
    } else {
      reject("失败了");
    }
  }, 3000);
});
myPromise.then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
);
```

4. 完善操作

```js
function MyPromise(task) {
  let that = this;
  that.status = "Pending";
  // 这个属性来存储promise的结果
  that.value = undefined;
  that.onResolvedCallbacks = [];
  that.onRejectedCallbacks = [];
  function resolve(value) {
    if (that.status === "Pending") {
      that.status = "Resolved";
      that.value = value;
      that.onResolvedCallbacks.forEach((item) => item(that.value));
    }
  }
  function reject(reason) {
    if (that.status == "Pending") {
      that.status = "Rejected";
      // 状态修改完成后, 调用的是then 方法中处理失败的回调函数
      that.value = reason;
      that.onRejectedCallbacks.forEach((item) => item(that.value));
    }
  }
  try {
    task(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let that = this;
  if (that.status == "Resolved") {
    onFulfilled(that.value);
  }
  if (that.status === "Rejected") {
    onRejected(that.value);
  }
  that.onResolvedCallbacks.push(onFulfilled);
  that.onRejectedCallbacks.push(onRejected);
};
let myPromise = new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random();
    if (num > 0.3) {
      resolve("成功了");
    } else {
      reject("失败了");
    }
  }, 3000);
});
myPromise.then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
);
```

## 常见异步编程方式

1. 回调函数

js 语言对异步编程的实现, 就是回调函数. 所谓回调函数, 就是把任务的第二段单独写在一个函数里面, 等到重新执行这个任务的时候, 就直接调用这个函数. 她的名字 callback, 翻译"重新调用"

```js
fs.readFile("/etc/passwd", function (err, data) {
  if (err) throw err;
  console.log(data);
});
```

上面这段代码是读取大文件的操作, 肯定是需要异步, 读取文件时会执行两个阶段, 第一个阶段任务会向操作系统发出请求, 要读取某个文件, 然后程序执行一项任务, 等到操作系统返回这个文件, 程序就会执行第二个任务, 也就是对文件进行处理

2. Promise 对象

回调函数本身没问题, 只是嵌套过多会产生回调地狱, 举例代码

```js
fs.readFile("/fileA", function (err, data) {
  fs.readFile("/fileB", function (err, data) {
    //...
  });
});
```

Promise 对象就是解决这个问题, 举例代码

```js
readFile(fileA)
  .then(function (data) {
    console.log(data.toString());
  })
  .then(function () {
    return readFile(fileB);
  })
  .then(function (data) {
    console.log(data.toString());
  })
  .catch(function (err) {
    console.log(err);
  });
```

3. Generator 函数

Generator 函数, 就是封装一个异步任务, 或者说是异步任务的容器, 异步操作需要暂停的地方, 都用到 yield 语句, 下面案例是前面用 generator 函数封装的 ajax 的异步操作

```js
function* main() {
  let result = yield request("http://xxx.com/api");
  let resp = JSON.parse(result);
  console.log(resp.value);
}

function request(url) {
  makeAjaxCall(url, function (response) {
    it.next(response);
  });
}

let it = main();
it.next();
```

4. async 函数

下面讲

## async 函数

是 promise 和 generator 函数的语法糖

```js
async function test() {
  let result = await Math.random();
  console.log(result);
}
```

async 函数返回一个 promise 对象

```js
async function test() {
  let result = await Math.random();
  // console.log(result)
  return result;
}

test().then(function (data) {
  console.log(data);
});
```

```js
function sleep(second) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let num = Math.random();
      if (num > 0.8) {
        resolve("成功了");
      } else {
        reject("失败了");
      }
    }, second);
  });
}
async function awaitDemo() {
  let result = await sleep(3000);
  return result;
}
awaitDemo()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
console.log('执行其他的代码')
```
