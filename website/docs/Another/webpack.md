---
slug: webpack
title: "[小题目] webpack"
sidebar_position: 12
---

## 谈谈你对 Webpack 的看法

1. 是一个模块打包工具, 使用它管理项目的模块依赖, 并编译输出模块所需的静态文件, 让开发更高效
2. 对于不同类型的依赖, webpack 有对应的模块加载器, 而且分析不同模块间的依赖关系, 最后合并生成优化后的静态资源

## Webpack 的基本功能有哪些？

1. 代码转换: ts 编译成 js, less 编译成 css 等, babel 编译兼容性更好的
2. 文件优化: 压缩代码, 图片等
3. 代码分割合并: 提取多个页面的公共代码,
4. HMR 热更新
5. 代码校验

## Webpack 构建过程

1. 从 entry 里配置的 module 开始递归解析 entry 依赖的所有 module

2. 每找到一个 module，就会根据配置的 loader 去找对应的转换规则

3. 对 module 进行转换后，再解析出当前 module 依赖的 module

4. 这些模块会以 entry 为单位分组，一个 entry 和其所有依赖的 module 被分到一个组 Chunk

5. 最后 Webpack 会把所有 Chunk 转换成文件输出在整个流程中 Webpack 会在恰当的时机执行 plugin 里定义的逻辑

## loader

loader 本身是个函数, webpack 打包时通过入口文件找到依赖, 对依赖文件进行编译, 编译时要加载 loader 的配置, 如果发现要处理 js 文件, 就会用配置的 loader 的函数把要处理的文件作为参数传入到 loader 函数中, loader 进行处理返回

css-load
style-loader
less-loader
url-loader
eslint-loader

## plugin

在特定时期 plugin 插入到 webpack 的流水线中, 做一些事情. 在 webpack 编译编码时会触发一系列 tapable 钩子事件, 插件所做的, Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。就是找到相应的钩子, 往上面挂自己的任务, 也就是注册事件

1. webpack 加载 webpack.config.js 中所有配置, 此时就会 new TestPlugin(), 执行插件的 constructor
2. webpack 创建 compiler 对象
3. 遍历所有 plugins 中插件, 调用插件的 apply 方法
4. 执行剩下编译流程(触发各个 hooks 事件)

clean-webpack-plugin
webpack-bundle-plugin
mini-css-plugin
html-webpack-plugin

## Loader 和 Plugin 的区别？

1. Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

2. Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

3. Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。

4. Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

## 优化 Webpack 的构建速度

1. 使用高版本的 Webpack 和 Node.js

2. 压缩代码

- 1). 通过 uglifyjs-webpack-plugin 压缩 JS 代码

- 2). 通过 mini-css-extract-plugin 提取 chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。

3. 充分利用缓存提升二次构建速度：
  babel-loader 开启缓存
