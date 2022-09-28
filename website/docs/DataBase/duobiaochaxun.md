---
title: "[Mysql基础] 多表查询"
sidebar_position: 25
---

多表查询顾名思义就是从多张表中一次性的查询出我们想要的数据。

准备数据

```sql
DROP TABLE IF EXISTS emp;
DROP TABLE IF EXISTS dept;
-- 创建部门表
CREATE TABLE dept(
did INT PRIMARY KEY AUTO_INCREMENT,
dname VARCHAR(20)
);

-- 创建员工表
CREATE TABLE emp (
id INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(10),
gender CHAR(1), -- 性别
salary DOUBLE, -- 工资
join_date DATE, -- 入职日期
dep_id INT,
FOREIGN KEY (dep_id) REFERENCES dept(did) -- 外键，关联部门表(部门表的主键)
);
```