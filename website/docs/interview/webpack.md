---
slug: webpack
title: "[面试题] 工程化"
sidebar_position: 5
---

## 1. Babel 的原理是什么？

Babel 的主要工作是对代码进行转译。(解决兼容, 解析执行一部分代码)

```jsx
let a = 1 + 1    =>  var a = 2
```

转译分为三阶段：

- 解析（Parse），将代码解析⽣成抽象语法树 AST，也就是词法分析与语法分析的过程

- 转换（Transform），对语法树进⾏变换方面的⼀系列操作。通过 babel-traverse，进⾏遍历并作添加、更新、删除等操作

- ⽣成（Generate），通过 babel-generator 将变换后的 AST 转换为 JS 代码

转译流程示意图：

![image-20210221114506275](assets/image-20210221114506275.png)

## 2. 如何编写一个 Babel 插件？(了解)

Babel 插件的主要工作阶段是在 Babel 将代码解析成抽象语法树 AST 之后，

插件们对抽象语法树 AST 进行各种操作后，再由 Babel 输出最终的代码。

要编写一个 Babel 插件模块，则需要为模块代码导出一个函数，且该函数返回一个对象，对象内应包含有 `visitor` 属性：

```js
module.exports = function (babel) {
  return {
    visitor: {},
  };
};
```

`visitor` 是针对各类 抽象语法树节点作处理的地⽅。

我们可以通过 [AST Explorer 工具](https://astexplorer.net/) 来查看 Babel 具体生成的 AST 节点。

**示例**

我们来编写一个插件，其功能是能自动将源码中的数字字面量数学运算进行预计算处理，简化代码。例如：

```js
// 原来的代码
const result = 1 + 2;

// 处理后的代码
const result = 3; // 这样优化以后，在实际运行时可以减少一次加法操作
```

我们可以先通过 AST Explorer 来获取 JSON 格式的 AST 结构：

```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "name": "result"
          },
          "init": {
            "type": "BinaryExpression",
            "start": 15,
            "end": 20,
            "left": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "value": 2,
              "raw": "2"
            }
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```

从以上 AST 结构可以知道，`1 + 2` 是一个 `BinaryExpression` (二进制表达式)类型的节点，

那么在我们编写的插件代码中的 `visitor` 里就可以这样进行处理：

1 装包

```txt
yarn add babel-types babel-core
```

2 新建 `index.js`, 贴入下面到的代码

```js
const t = require("babel-types");

const visitor = {
  BinaryExpression(path) {
    const node = path.node;

    let result;

    // 判断表达式两边，是否都是数字
    if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
      // 根据不同的操作符作运算
      switch (node.operator) {
        case "+":
          result = node.left.value + node.right.value;
          break;
        case "-":
          result = node.left.value - node.right.value;
          break;
        case "*":
          result = node.left.value * node.right.value;
          break;
        case "/":
          result = node.left.value / node.right.value;
          break;
        default:
          break;
      }
    }

    // 如果上⾯的运算有结果的话
    if (result !== undefined) {
      // 把表达式节点替换成number字⾯量
      path.replaceWith(t.numericLiteral(result));
    }
  },
};

module.exports = function (babel) {
  return {
    visitor,
  };
};
```

这个插件的基本功能就完成了，新建 test.js 来运行试试：

```js
const babel = require("babel-core");

const result = babel.transform("const result = 1 + 2", {
  plugins: [require("./index")],
});

console.log(result.code); // 结果：const result = 3
```

转换结果符合预期。

不过这个插件还不能完全正确的工作，在转换如 `const result = 1 + 2 + 3 + 4 + 5;` 这样的代码时，

结果为 `const result = 3 + 3 + 4 + 5;`，也就是只转换了代码中的第一段表达式计算。

如果用 AST Explorer 查看 AST 结构的话，会发现原来这个运算由层层嵌套的 `BinaryExpression` 组成：

> BinaryExpression( BinaryExpression( BinaryExpression( BinaryExpression(1 + 2) + 3 ) + 4 ) + 5 )

因此我们得改造一下之前的代码逻辑，进行遍历操作：

```js
// 如果上⾯的运算有结果的话
if (result !== undefined) {
  // 把表达式节点替换成number字⾯量
  path.replaceWith(t.numericLiteral(result));

  // 向上遍历⽗级节点
  let parentPath = path.parentPath;
  parentPath && visitor.BinaryExpression.call(this, parentPath);
}
```

这样就能正确工作了。

[参考文档：Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#builders)

## 3. 你们公司的 Git 工作流是什么样的？

每个公司采用的 Git 工作流都可能会有差别，有的比较规范，有的比较随意。

在这里介绍一个名为 GitFlow 的 git 标准化操作流程。

在 GitFlow 标准下，我们的 git 仓库需要包含以下几个关键分支：

- master：主分支

- develop：主开发分⽀。包含确定即将发布的代码

- feature：新功能分⽀。⼀个新功能对应⼀个分⽀

- release：发布分⽀。发布时⽤的分⽀，⼀般测试阶段发现的 bug 在这个分⽀进⾏修复

- hotfix：热补丁分支。用于修改在线上版本中发现的严重紧急 bug

**GitFlow 的主要优点**

- 支持并⾏开发

因为每个新功能都会建⽴⼀个新的 feature 分⽀，从⽽和其他已经完成的功能隔离开，

且当只有在新功能完成开发的情况下，其对应的 feature 分⽀才会被合并到主开发分⽀（develop 分支）。

另外，如果你正在开发某个功能的同时⼜有⼀个新功能需要开始开发，那么你只需把当前 feature 的代码提交后，

切回 develop 分支, 新建另外⼀个 feature 分⽀即可开发新功能了。

你也可以随时切回之前的其他 feature 分⽀继续完成该功能的开发。

- 协作开发

因为每个 feature 分⽀上改动的代码都只对该 feature 对应的功能生效，

所以不同 feature 分支上的代码在开发时不会互相影响，大家可以相安无事的开发自己负责的功能。

同时我们可以根据分支的名称，很容易知道每个⼈都在做什么功能。

- ⽀持紧急修复

hotfix 分⽀是从某个已经发布的仓库版本基础上创建出来，用于紧急修复 Bug。

该紧急修复只影响这个已经发布的仓库版本，⽽不会影响你正在开发的其他新 feature 。

**注意点**

1. feature 分⽀都是从 develop 分⽀上创建的，开发完成后再合并到 develop 分⽀上，等待发布

2. 当需要发布时，我们要从 develop 分⽀上创建⼀个 release 分⽀，然后该 release 分⽀会发布到测试环境进⾏测试。

   如果发现问题的话，就会直接在该分⽀上进⾏修复。

   所有问题修复之前，会不停重复 `发布` > `测试` > `修复` > `重新发布` > `重新测试` 流程。

   发布结束，该 release 分⽀会被合并到 develop 以及 master 分⽀，从⽽保证不会有代码丢失

3. master 分⽀只跟踪已经发布的代码，合并到 master 上的 commit 只能来⾃ release 分⽀和 hotfix 分⽀

4. hotfix 分⽀的作⽤是紧急修复⼀些 Bug，它们都是从 master 分⽀上的某个版本建⽴，

   修复结束后再被合并到 develop 和 master 分⽀上

![image-20210309110119416](assets/image-20210309110119416.png)
![image-20210309112949579](assets/image-20210309112949579.png)

## 4. Git 的 rebase 和 merge 的区别是什么？

`git rebase` 和 `git merge` 两个命令都⽤于从⼀个分⽀获取内容并合并到当前分⽀。

以一个 `feature/todo` 分⽀合并到 `master`主分⽀为例，我们来看一下分别⽤ `rebase` 和 `merge` 会有什么不同。

**使用 Merge**

![image-20210309112949579](assets/image-20210309112949579.png)

`merge` 会⾃动创建⼀个新的 `commit`， 如果合并时遇到冲突的话，只需要修改后重新 `commit`。

- 优点：能记录真实的 `commit` 情况，包括每个分⽀的详情

- 缺点：由于每次 `merge` 会⾃动产⽣⼀个 `merge commit`，

  因此在使⽤⼀些可视化的 git 工具时会看到这些自动产生的 `commit`，

  这些 `commit` 对于程序员来说没有什么特别的意义，多了反而会影响阅读

**使用 Rebase**

![image-20210309112949579](assets/image-20210222133524146.png)

`rebase` 会合并之前的 `commit` 历史。

- 优点：可以得到更简洁的提交历史，去掉了 `merge commit`

- 缺点：因为合并而产生的代码问题，就不容易定位，因为会重写提交历史信息

**建议**

- 当需要保留详细的合并信息，建议使⽤ `git merge`, 尤其是要合并到 master 上

- 当发现⾃⼰修改某个功能时提交比较频繁，并觉得过多的合并记录信息对自己来说没有必要，那么可尝试使用 `git rebase`

## 5. Git 的 reset 回退 和 revert 撤销

在利用 git 实现多人合作程序开发的过程中，我们有时会出现 **错误提交** 的情况，

此时我们希望能撤销提交操作, 或者想要回退到某个版本

reset => 回退到某个版本 `git reset --hard 版本号`

revert => 撤销某个版本内容的内容修改 `git revert -n 版本号`

博客参考: https://blog.csdn.net/yxlshk/article/details/79944535

如果 git reset 后, 版本回退了, 无法直接 push 到远程仓库(因为远程仓库版本更加新) => git push -f 覆盖推送即可

效果: 将远程仓库的版本, 也进行了回退
