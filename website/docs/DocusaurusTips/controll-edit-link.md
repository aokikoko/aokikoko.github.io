---
title: '[Doc] 隐藏“Edit this page”链接'
---

<br />
<br />

## 全局禁用

如果需要所有文档都隐藏该链接,
需要在docusaurus.config.js文件进行配置,
```jsx
presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // 设置为undefined全局禁用编辑链接
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
```

## 部分页面禁用

文档的头部增加字段custom_edit_url: null

```md"
---
title: 'hello world'
custom_edit_url: null
---

文章内容..

```
