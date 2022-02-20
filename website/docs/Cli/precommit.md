---
title: "[Cli] Git提交规范之代码提交"
sidebar_position: 4
---

`标准化大厂编程规范解决方案之 ESLint + Git Hooks(4)`

<!--truncate-->

## 通过 pre-commit 检测提交时代码规范 {#precommit}

之前通过[ESLint 与 Prettier 配合解决代码格式问题](https://phero.live/docs/Cli/gitcommit#%E4%BD%BF%E7%94%A8-husky--commitlint-%E6%A3%80%E6%9F%A5%E6%8F%90%E4%BA%A4%E6%8F%8F%E8%BF%B0%E6%98%AF%E5%90%A6%E7%AC%A6%E5%90%88%E8%A7%84%E8%8C%83%E8%A6%81%E6%B1%82), 了解了如何处理 **本地！代码格式问题。**

但是这样的一个格式处理问题，他只能够在本地进行处理，并且我们还需要 **手动在 `VSCode` 中配置自动保存** 才可以。那么这样就会存在一个问题，要是有人忘记配置这个东西了怎么办呢？他把代码写的乱七八糟的直接就提交了怎么办呢？

所以就需要有一种方式来规避这种风险。

那么想要完成这么一个操作就需要使用 `husky` 配合 `eslint` 才可以实现。

我们期望通过 **`husky` 监测 `pre-commit` 钩子，在该钩子下执行 `npx eslint --ext .js,.vue src`** 指令来检测`js文件和vue文件`：

1. 执行 `npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"` 添加 `commit` 时的 `hook` （`npx eslint --ext .js,.vue src` 会在执行到该 hook 时运行）

```js
npx husky add .husky/pre-commit 表示利用husky添加(add)上对应的钩子(.husky/pre-commit)
 "npx eslint --ext .js,.vue src" 表示在这个钩子内部去添加这句指令

// 连起来的意思是利用npx 执行 husky里的add指令,
// 通过add指令在.husky文件夹里添加上pre-commit这个文件
// 在pre-commit文件中指定上对应内容的指令"npx eslint --ext .js,.vue src"
// 在src目录下检测.js和.vue文件

// 在我们执行提交操作的时候在pre-commit这个hooks中, 就会通过这个指令进行代码校验
```

2. 该操作会生成对应文件 `pre-commit`：
   ![pre-commit](assets/image-20210906204043915.png)

3. 在设置-Editor:Format on Save 中取消勾选来关闭 `VSCode` 的自动保存操作

4. 修改一处代码，使其不符合 `ESLint` 校验规则

5. 执行 **提交操作** 会发现，抛出一系列的错误，代码无法提交

   ```
   PS F:\xxxxxxxxxxxxxxxxxxx\目录> git commit -m 'test'

   F:\xxxxxxxxxxxxxxxx\目录\src\views\Home.vue
     13:9  error  Strings must use singlequote  quotes

   ✖ 1 problem (1 error, 0 warnings)
     1 error and 0 warnings potentially fixable with the `--fix` option.

   husky - pre-commit hook exited with code 1 (error)
   ```

6. 想要提交代码，必须处理完成所有的错误信息

那么到这里位置，我们已经通过 `pre-commit` 检测到了代码的提交规范问题。

那么到这里就万事大吉了吗？

在这个世界上从来不缺的就是懒人，错误的代码格式可能会抛出很多的 `ESLint` 错误，让人看得头皮发麻。严重影响程序猿的幸福指数。

那么有没有办法，让程序猿在 0 配置的前提下，哪怕代码格式再乱，也可以 **”自动“** 帮助他修复对应的问题，并且完成提交呢？

你别说，还真有！也就是下面的通过 lint-staged 自动修复格式错误

## 通过 lint-staged 自动修复格式错误

在上面中我们通过 `pre-commit` 处理了 **检测代码的提交规范问题，当我们进行代码提交时，会检测所有的代码格式规范** 。

但是这样会存在两个问题：

1. 我们只修改了个别的文件，没有必要检测所有的文件代码格式
2. 它只能给我们提示出对应的错误，我们还需要手动的进行代码修改

那么这里就需要处理这两个问题

那么想要处理这两个问题，就需要使用另外一个插件 [lint-staged](https://github.com/okonet/lint-staged) ！

### lint-staged 作用

[lint-staged](https://github.com/okonet/lint-staged) 可以让你当前的代码检查 **只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送**

[lint-staged](https://github.com/okonet/lint-staged) 无需单独安装，我们生成项目时，`vue-cli` 已经帮助我们安装过了，所以我们直接使用就可以了

### 使用 lint-staged

1. 修改 `package.json` 配置

   ```json
   "lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
   },
   <!-- src下面的所有内容以.js或vue结尾的文件都需要通过lint-staged进行过滤 -->
   <!-- 过滤之后指令数组中的两个指令 -->
   ```

2. 如上配置，每次它只会在你本地 `commit` 之前，校验你提交的内容是否符合你本地配置的 `eslint`规则(这个见文档 [ESLint](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/eslint.html) )，校验会出现两种结果：

   1. 如果符合规则：则会提交成功。
   2. 如果不符合规则：它会自动执行 `eslint --fix` 尝试帮你自动修复，如果修复成功则会帮你把修复好的代码提交，如果失败，则会提示你错误，让你修好这个错误之后才能允许你提交代码。

3. 修改 `.husky/pre-commit` 文件

   ```js
   #!/bin/sh
   . "$(dirname "$0")/_/husky.sh"

   npx lint-staged

   ```

4. 再次执行提交代码

5. 发现 **暂存区中** 不符合 `ESlint` 的内容，被自动修复

## 总结

经过4节之后我们处理了 **编程格式规范的问题**，整个规范大体可以分为两大类：

1. 代码格式规范
2. `git` 提交规范

### **代码格式规范：**

对于 **代码格式规范** 而言，我们通过 `ESLint` + `Prettier` + `VSCode 配置` 配合进行了处理。

最终实现了达到了在保存代码时，自动规范化代码格式的目的。

:::tip
分别是  
标准化大厂编程规范解决方案之 ESLint + Git Hooks(1)  
标准化大厂编程规范解决方案之 ESLint + Git Hooks(2)
:::

### **`git` 提交规范：**

对于 **`git` 提交规范** 而言我们使用了 `husky` 来监测 `Git hooks` 钩子，并且通过以下插件完成了对应的配置：

1. [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
2. [commitizen](https://github.com/commitizen/cz-cli)：git 提交规范化工具
3. [commitlint](https://github.com/conventional-changelog/commitlint)：用于检查提交信息
4. `pre-commit`： `git hooks` 钩子
5. [lint-staged](https://github.com/okonet/lint-staged)：只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送

:::tip
分别是  
标准化大厂编程规范解决方案之 ESLint + Git Hooks(3)  
标准化大厂编程规范解决方案之 ESLint + Git Hooks(4)
:::



