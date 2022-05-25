---
slug: css
title: "[面试题] CSS"
sidebar_position: 99
---

## 居中的方法

### 水平居中

行内元素 text-align: center

块级元素 margin: 0 auto

多个块级元素  display: inline-block; text-align: center

用flex , 给父元素加display: flex; justify-content: center

### 垂直居中

行内元素 行高等于line-height

多个块级元素 display: flex; justify-content: center; flex-direction: column

用定位 top left 50% ; transform: translateY(-50%)

## Flex

flex-direction ：设置主轴的方向
justify-content ：设置主轴上的子元素排列方式
flex-wrap ：设置子元素是否换行
align-content ：设置侧轴上的子元素排列方式（多行）
align-items ：设置侧轴上的子元素排列方式（单行）
flex-flow ：复合属性，相当于同时设置了flex-direction和flex-wrap