---
title: '[Doc] 更改文档中代码块主题风格'
---

<br />
<br />

## 默认样式

白天模式默认是灰色背景, 高亮效果不明显
主题为lightCodeTheme

```js
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
```

## 更改为深蓝背景

更改为深蓝背景, 也就是我的文章中的主题样式, 修改docusaurus.config.js文件
```js title="docusaurus.config.js"
  prism: {
    theme: require('prism-react-renderer/themes/dracula'),
    //theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
```