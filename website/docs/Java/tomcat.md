---
slug: tomcat
title: "[Java] Tomcat"
sidebar_position: 5
---

## Tomcat 服务器

是一个轻量级服务器, 开源免费

:::tip 轻量和重量级
重量级是实现了全部 JavaEE 规范, 而轻量级的 tomcat 实现了 jsp/servlet 规范

重量级的有: weblogic, websphereAS, JBOSSAS
:::

## Tomcat 介绍

1. Tomcat 目录结构

![mulu](assets/mulu.jpg)

2. 启动

bin 目录下
startup.bat windows 下启动执行文件
startup.sh linux 下启动执行文件

3. 停止

shutdown.bat windows 下关闭执行文件
shutdown.sh linux 下关闭执行文件

3. 启动问题

启动窗口一闪而过: 没有配置 jdk 环境变量
java.net.BindException: 端口 8080 被占用

4. 部署自己的项目

- 在 webapps 目录下创建自己的文件夹
- 将资源放至该目录里
- 启动 tomcat, 输入正确路径

5. 解决控制台乱码问题

- conf文件夹下/logging.properties 编辑 java.util.logging.ConsoleHandler.encoding = gbk