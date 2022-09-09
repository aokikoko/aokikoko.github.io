---
title: "[Mysql] sql语句"
sidebar_position: 3
---

## 1、SQL 语句的分类

- DDL(Data Definition Languages)语句:

  ==数据定义语言==,这些语句定义了不同的数据段、数据库、表、列、索引等数据库对象的定义。常用的语句关键字主要包括 **create、drop、alter、rename、truncate**。

- DML(Data Manipulation Language)语句:

  ==数据操纵语句==,用于添加、删除、更新和查询数据库记录,并检查数据完整性,常用的语句关键字主要包括 **insert、delete、update**等。

- DCL(Data Control Language)语句:

  ==数据控制语句==,用于控制不同数据段直接的许可和访问级别的语句。这些语句定义了数据库、表、字段、用户的访问权限和安全级别。主要的语句关键字包括 **grant、revoke** 等。

- DQL(Data Query Language)语句:

  ==数据查询语句==，用于从一个或多个表中检索信息。主要的语句关键字包括 **select**

## 2、SQL 语句的基本操作

### ☆ MySQL 的基本结构

一个 MySQL DBMS 可以同时存放多个数据库，理论上一个项目就对应一个数据库。如博客项目 blog 数据库、商城项目 shop 数据库、微信项目 wechat 数据库。

一个数据库中还可以同时包含多个数据表，而数据表才是真正用于存放数据的位置。（类似我们 Office 软件中的 Excel 表格），理论上一个功能就对应一个数据表。如博客系统中的用户管理功能，就需要一个 user 数据表、博客中的文章就需要一个 article 数据表、博客中的评论就需要一个 message 数据表。

一个数据表又可以拆分为多个字段，每个字段就是一个属性。

一个数据表除了字段以外，还有很多行，每一行都是一条完整的数据（记录）。

### ☆ 数据库的基本操作

### ① 创建数据库

基本语法：

```powershell
mysql> create database 数据库名称;
```

:::tip 特别注意
特别注意：在 MySQL 中，当一条 SQL 语句编写完毕后，一定要使用分号;进行结尾，否则系统认为这条语句还没有结束。
:::

### 案例：创建数据库的相关案例

```powershell
创建db1库
create database db1;

创建db1库并指定默认字符集
create database db1 default charset gbk;

如果存在不报错(if not exists)
create database if not exists db1 default character set utf8;
说明：不能创建相同名字的数据库！
```

:::tip 扩展
扩展：编码格式，常见的 gbk（中国的编码格式）与 utf8（国际通用编码格式）

早期是 latin1 仅支持 256 个字符 （abcd、1234、传统字符）

国内汉字无法通过 256 个字符进行描述，所以国内开发了自己的编码格式 gb2312，升级 gbk

中国台湾业开发了一套自己的编码格式 big5

很多项目并不仅仅只在本地使用，也可能支持多国语言，标准化组织开发了一套通用编码 utf8，后来 5.6 版本以后又进行了升级 utf8mb4
:::

### ② 查询已创建数据库

基本语法：

显示所有数据库

```powershell
mysql> show databases;
```

显示某个数据库的数据结构

```powershell
mysql> show create database db_itheima;
```

### ③ 修改数据库信息

在 MySQL5 以后的版本中，MySQL 不支持更改数据库的名称。我们所谓的修改数据库主要修改的是数据库的编码格式。

基本语法：

```powershell
mysql> alter database 数据库名称 default charset=新编码格式;
```

案例：把 db_itheima 数据库的编码格式更改为 gbk

```powershell
mysql> alter database db_itheima default charset=gbk;
```

### ④ 删除数据库

基本语法：

```powershell
mysql> drop database 数据库名称;
```

案例：删除 db_itheima 数据库

```powershell
mysql> drop database db_itheima;
```

## TODO