---
title: "[Node] 文件系统"
sidebar_position: 4
---

-----

## fs模块

在 NodeJS 中，所有与文件操作都是通过 `fs` 核心模块来实现的，包括文件目录的创建、删除、查询以及文件的读取和写入，在 `fs` 模块中，所有的方法都分为同步和异步两种实现，具有 `sync` 后缀的方法为同步方法，不具有 `sync` 后缀的方法为异步方法，在了解文件操作的方法之前有一些关于系统和文件的前置知识，如文件的权限位 `mode` 、标识位 `flag` 、文件描述符 `fd` 等，所以在了解 `fs` 方法的之前会先将这几个概念明确。

### 权限位 mode

因为 `fs` 模块需要对文件进行操作，会涉及到操作权限的问题，所以需要先清楚文件权限是什么，都有哪些权限。

文件权限表：

| 权限分配 | 文件所有者 | 文件所属组 | 其他用户 |      |      |      |      |      |      |
| -------- | ---------- | ---------- | -------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 权限项   | 读         | 写         | 执行     | 读   | 写   | 执行 | 读   | 写   | 执行 |
| 字符表示 | r          | w          | x        | r    | w    | x    | r    | w    | x    |
| 数字表示 | 4          | 2          | 1        | 4    | 2    | 1    | 4    | 2    | 1    |

在上面表格中，我们可以看出系统中针对三种类型进行权限分配，即文件所有者（自己）、文件所属组（家人）和其他用户（陌生人），文件操作权限又分为三种，读、写和执行，数字表示为八进制数，具备权限的八进制数分别为 `4` 、 `2` 、 `1` ，不具备权限为 `0` 。

为了更容易理解，我们可以随便在一个目录中打开 `Git` ，使用 [Linux](http://www.codercto.com/category/linux.html) 命令 `ls -al` 来查目录中文件和文件夹的权限位，如果对 `Git` 和 `Linux` 命令不熟悉，可以看 [Git 命令总结，从零到熟悉（全）](https://link.juejin.im/?target=https%3A%2F%2Fwww.pandashen.com%2F2017%2F12%2F14%2F20171214024101%2F) 。

### 标识位flag

NodeJS 中，标识位代表着对文件的操作方式，如可读、可写、即可读又可写等等，在下面用一张表来表示文件操作的标识位和其对应的含义。

| 符号 | 含义                                                     |
| ---- | -------------------------------------------------------- |
| r    | 读取文件，如果文件不存在则抛出异常。                     |
| r+   | 读取并写入文件，如果文件不存在则抛出异常。               |
| rs   | 读取并写入文件，指示操作系统绕开本地文件系统缓存。       |
| w    | 写入文件，文件不存在会被创建，存在则清空后写入。         |
| wx   | 写入文件，排它方式打开。                                 |
| w+   | 读取并写入文件，文件不存在则创建文件，存在则清空后写入。 |
| wx+  | 和 `w+` 类似，排他方式打开。                             |
| a    | 追加写入，文件不存在则创建文件。                         |
| ax   | 与 `a` 类似，排他方式打开。                              |
| a+   | 读取并追加写入，不存在则创建。                           |
| ax+  | 与 `a+` 类似，排他方式打开。                             |

上面表格就是这些标识位的具体字符和含义，但是 `flag` 是不经常使用的，不容易被记住，所以在下面总结了一个加速记忆的方法。

- r：读取
- w：写入
- s：同步
- +：增加相反操作
- x：排他方式

`r+` 和 `w+` 的区别，当文件不存在时， `r+` 不会创建文件，而会抛出异常，但 `w+` 会创建文件；如果文件存在， `r+` 不会自动清空文件，但 `w+` 会自动把已有文件的内容清空。

### 文件描述符

操作系统会为每个打开的文件分配一个名为文件描述符的数值标识，文件操作使用这些文件描述符来识别与追踪每个特定的文件，Window 系统使用了一个不同但概念类似的机制来追踪资源，为方便用户，NodeJS 抽象了不同操作系统间的差异，为所有打开的文件分配了数值的文件描述符。

在 NodeJS 中，每操作一个文件，文件描述符是递增的，文件描述符一般从 `3` 开始，因为前面有 `0` 、 `1` 、 `2` 三个比较特殊的描述符，分别代表 `process.stdin` （标准输入）、 `process.stdout` （标准输出）和 `process.stderr` （错误输出）。



### (1) 同步读取方法 readFileSync

`readFileSync` 有两个参数：

- 第一个参数为读取文件的路径或文件描述符；
- 第二个参数为 `options` ，默认值为 `null` ，其中有 `encoding` （编码，默认为 `null` ）和 `flag` （标识位，默认为 `r` ），也可直接传入 `encoding` ；
- 返回值为文件的内容，如果没有 `encoding` ，返回的文件内容为 Buffer，如果有按照传入的编码解析。

若现在有一个文件名为 `1.txt` ，内容为 “Hello”，现在使用 `readFileSync` 读取。

同步读取 readFileSync

```js
const fs = require("fs");

let buf = fs.readFileSync("1.txt");
let data = fs.readFileSync("1.txt", "utf8");

console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(data); // Hello复制代码
```

### (2) 异步读取方法 readFile

异步读取方法 `readFile` 与 `readFileSync` 的前两个参数相同，最后一个参数为回调函数，函数内有两个参数 `err` （错误）和 `data` （数据），该方法没有返回值，回调函数在读取文件成功后执行。

依然读取 `1.txt` 文件：

异步读取 readFile

```js
const fs = require("fs");

fs.readFile("1.txt", "utf8", (err, data) => {
    console.log(err); // null
    console.log(data); // Hello
});复制代码
```

### (3) 同步写入方法 writeFileSync

`writeFileSync` 有三个参数：

- 第一个参数为写入文件的路径或文件描述符；
- 第二个参数为写入的数据，类型为 String 或 Buffer；
- 第三个参数为 `options` ，默认值为 `null` ，其中有 `encoding` （编码，默认为 `utf8` ）、 `flag` （标识位，默认为 `w` ）和 `mode` （权限位，默认为 `0o666` ），也可直接传入 `encoding` 。

若现在有一个文件名为 `2.txt` ，内容为 “12345”，现在使用 `writeFileSync` 写入。

同步写入 writeFileSync

```js
const fs = require("fs");

fs.writeFileSync("2.txt", "Hello world");
let data = fs.readFileSync("2.txt", "utf8");

console.log(data); // Hello world复制代码
```

### (4) 异步写入方法 writeFile

异步写入方法 `writeFile` 与 `writeFileSync` 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 `err` （错误），回调函数在文件写入数据成功后执行。

异步写入 writeFile

```js
const fs = require("fs");

fs.writeFile("2.txt", "Hello world", err => {
    if (!err) {
        fs.readFile("2.txt", "utf8", (err, data) => {
            console.log(data); // Hello world
        });
    }
});复制代码
```

### (5) 同步追加写入方法 appendFileSync

`appendFileSync` 有三个参数：

- 第一个参数为写入文件的路径或文件描述符；
- 第二个参数为写入的数据，类型为 String 或 Buffer；
- 第三个参数为 `options` ，默认值为 `null` ，其中有 `encoding` （编码，默认为 `utf8` ）、 `flag` （标识位，默认为 `a` ）和 `mode` （权限位，默认为 `0o666` ），也可直接传入 `encoding` 。

若现在有一个文件名为 `3.txt` ，内容为 “Hello”，现在使用 `appendFileSync` 追加写入 “ world”。

同步追加 appendFileSync

```js
const fs = require("fs");

fs.appendFileSync("3.txt", " world");
let data = fs.readFileSync("3.txt", "utf8");

console.log(data); // Hello world复制代码
```

### (6) 异步追加写入方法 appendFile

异步追加写入方法 `appendFile` 与 `appendFileSync` 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 `err` （错误），回调函数在文件追加写入数据成功后执行。

异步追加 appendFile

```js
const fs = require("fs");

fs.appendFile("3.txt", " world", err => {
    if (!err) {
        fs.readFile("3.txt", "utf8", (err, data) => {
            console.log(data); // Hello world
        });
    }
});复制代码
```

### (7) 同步拷贝写入方法 copyFileSync

同步拷贝写入方法 `copyFileSync` 有两个参数，第一个参数为被拷贝的源文件路径，第二个参数为拷贝到的目标文件路径，如果目标文件不存在，则会创建并拷贝。

现在将上面 `3.txt` 的内容拷贝到 `4.txt` 中：

同步拷贝 copyFileSync

```js
const fs = require("fs");

fs.copyFileSync("3.txt", "4.txt");
let data = fs.readFileSync("4.txt", "utf8");

console.log(data); // Hello world复制代码
```

### (8) 异步拷贝写入方法 copyFile

异步拷贝写入方法 `copyFile` 和 `copyFileSync` 前两个参数相同，最后一个参数为回调函数，在拷贝完成后执行。

异步拷贝 copyFile

```js
const fs = require("fs");

fs.copyFile("3.txt", "4.txt", () => {
    fs.readFile("4.txt", "utf8", (err, data) => {
        console.log(data); // Hello world
    });
});复制代码
```

## fs模块高级方法

### 1、打开文件 open

`open` 方法有四个参数：

- path：文件的路径；
- flag：标识位；
- mode：权限位，默认 `0o666` ；
- callback：回调函数，有两个参数 `err` （错误）和 `fd` （文件描述符），打开文件后执行。

异步打开文件

```js
const fs = require("fs");

fs.open("4.txt", "r", (err, fd) => {
    console.log(fd);
    fs.open("5.txt", "r", (err, fd) => {
        console.log(fd);
    });
});

// 3
// 4复制代码
```

### 2、关闭文件 close

`close` 方法有两个参数，第一个参数为关闭文件的文件描述符 `fd` ，第二参数为回调函数，回调函数有一个参数 `err` （错误），关闭文件后执行。

异步关闭文件

```js
const fs = require("fs");

fs.open("4.txt", "r", (err, fd) => {
    fs.close(fd, err => {
        console.log("关闭成功");
    });
});

// 关闭成功复制代码
```

### 3、读取文件 read

`read` 方法与 `readFile` 不同，一般针对于文件太大，无法一次性读取全部内容到缓存中或文件大小未知的情况，都是多次读取到 Buffer 中。

想了解 Buffer 可以看 [NodeJS —— Buffer 解读](https://link.juejin.im/?target=https%3A%2F%2Fwww.pandashen.com%2F2018%2F06%2F29%2F20180629115313%2F) 。

`read` 方法中有六个参数：

- fd：文件描述符，需要先使用 `open` 打开；
- buffer：要将内容读取到的 Buffer；
- offset：整数，向 Buffer 写入的初始位置；
- length：整数，读取文件的长度；
- position：整数，读取文件初始位置；
- callback：回调函数，有三个参数 `err` （错误）， `bytesRead` （实际读取的字节数）， `buffer` （被写入的缓存区对象），读取执行完成后执行。

下面读取一个 `6.txt` 文件，内容为 “你好”。

异步读取文件

```js
const fs = require("fs");
let buf = Buffer.alloc(6);

// 打开文件
fs.open("6.txt", "r", (err, fd) => {
    // 读取文件
    fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
        console.log(bytesRead);
        console.log(buffer);

        // 继续读取
        fs.read(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
            console.log(bytesRead);
            console.log(buffer);
            console.log(buffer.toString());
        });
    });
});

// 3
// <Buffer e4 bd a0 00 00 00>

// 3
// <Buffer e4 bd a0 e5 a5 bd>
// 你好复制代码
```

### 4、fs.createReadStream

这个api的作用是打开一个可读的文件流并且返回一个fs.ReadStream对象

```js
const fs=require('fs');
const path=require('path');
let readStream=fs.createReadStream('./test/b.js',{encoding:'utf8'});
//console.log(readStream);
 
//读取文件发生错误事件
readStream.on('error', (err) => {
    console.log('发生异常:', err);
});
//已打开要读取的文件事件
readStream.on('open', (fd) => {
    console.log('文件已打开:', fd);
});
//文件已经就位，可用于读取事件
readStream.on('ready', () => {
    console.log('文件已准备好..');
});
 
//文件读取中事件·····
readStream.on('data', (chunk) => {
    console.log('读取文件数据:', chunk);
});
 
//文件读取完成事件
readStream.on('end', () => {
    console.log('读取已完成..');
});
 
//文件已关闭事件
readStream.on('close', () => {
    console.log('文件已关闭！');
});
```
