---
title: "[Mysql] mysql概述"
sidebar_position: 2
---

## 1、关系型数据库与非关系型数据库

RDBMS（relational database management system），既关系型数据库管理系统。

简单来说，关系型数据库，是指采用了`二维表格`来组织数据的数据库。

![image-20200824093353050](assets/image-20200824093353050.png)

:::tip
扩展：数据库在行业内一般会有两种情况，关系型数据库与非关系型数据库。非关系型数据库并不是通过二维表格来维护数据的，而是通过key/value键值对来维护数据的。
:::

## 2、常见的关系型数据库

`oracle、mysql`、DB2（IBM）、Sybase、`SQL server`（Microsoft微软）、IBM Informix

关系型数据库的**最大特点就是==事务的一致性==**：所以也在对事物一致性的维护中有很大的开销.

## 3、事务概述

### ㈠ 什么是事务？

1）事务由一条或者多条sql语句组成；

2）在事务中的操作，这些sql语句要么都成功执行，要么都不执行，这就是一个事务。 

==举例说明：==

1.     登陆ATM机，输入密码； 
2.     连接数据库，验证密码； 
3.     验证成功，获得用户信息，比如存款余额等； 
4.     用户输入需要转账的金额，按下确认键；
5.     ==从后台数据库中减掉用户账户上的对应金额（update语句）；== 
6.     ==从后台数据库中给对方账户增加相应的金额（update语句）；== 
7.     确认，退卡，走人；

### ㈡ 事务特点(ACID）

- 原子性(Atomicity)：

  事务中的全部操作在数据库中是不可分割的，要么==全部完成==，要么==均不执行==。

- 一致性(Consistency)：

  指事务必须使数据库从一个一致性状态变换到另一个一致性状态，也就是说一个事务执行之前和执行之后都必须处于一致性状态，不能破坏关系数据的完整性以及业务逻辑上的一致性。

- 隔离性(Isolation)：

  一个事务的执行不受其他事务的干扰，事务执行的中间结果对其他事务必须是透明的。隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。 

- 持久性(Durability)：

  持久性是指一个事务一旦被提交了，那么对数据库中的数据的改变就是永久性的，即便是在数据库系统遇到故障的情况下也不会丢失提交事务的操作。 

### ㈢ 应用场景

对数据的一致性要求较高;典型的`银行及支付系统类`；

## 3、MySQL数据库介绍

- MySQL是一种关系型数据库管理系统
- 由瑞典MySQL AB 公司开发，目前属于Oracle旗下
- MySQL是C/S架构

### MySQL数据库版本

- **社区版：MySQL Community Edition  (GPL) **
  1. 可以看做是企业版的“广泛体验版（小白鼠版）”，未经各个专有系统平台的压力测试和性能测试
  2. 基于GPL协议发布，可以随意下载使用 
  3. 没有任何官方技术支持服务 

- **企业版：MySQL Enterprise Edition(commercial) **
  1. 提供了比较全面的高级功能、管理工具及技术支持 
  2. 安全性、稳定性、可扩展性比较好

- **集群版：MySQL Cluster CGE(commercial) **

## 4、MySQL数据库安装

### (1) windows系统上安装

略

### (2) centos7.6上安装

#### centos环境准备

① 设置主机名称

```powershell
# hostnamectl set-hostname centos7.itcast.cn
# su
```

② 更改IP获取方式为静态设置以及绑定主机名+IP到/etc/hosts

```powershell
# vi /etc/sysconfig/network-scripts/ifcfg-ens33
TYPE="Ethernet"
BOOTPROTO="none"
IPADDR=10.1.1.10
NETMASK=255.255.255.0
GATEWAY=10.1.1.2
DNS1=8.8.8.8
DNS2=119.29.29.29
NAME="ens33"
DEVICE="ens33"
ONBOOT="yes"

# vi /etc/hosts
10.1.1.10 centos7.itcast.cn

# systemctl restart network
如果是多网卡形式，建议使用ifdown与ifup
# ifdown ens33
# ifup ens33

# ip a
```

③ 关闭防火墙与SELinux

```powershell
# systemctl stop firewalld
# systemctl disable firewalld

# setenforce 0
# vim /etc/selinux/config
SELINUX=disabled
```

④ 配置公网YUM源（可以考虑腾讯）

```powershell
# yum install wget -y
# mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.tencent.com/repo/centos7_base.repo

# yum clean all
# yum makecache
```

⑤ 安装扩展软件（bash-completion自动补全、vim编辑器、net-tools网络工具包以及ntpdate时间同步工具）

```powershell
# yum install bash-completion vim net-tools ntpdate -y
```

⑥ ntpdate时间同步 

```powershell
# ntpdate 120.25.108.11
```

## 5、MySQL的安装的几种方式

### 二进制软件包安装

① yum安装或rpm安装（略）

② glibc版本安装（相当于Windows中的绿色软件）
  
  命名：==mysql-5.7.31-linux-glibc2.12-x86_64.tar.gz== 

  依赖[^glibc]库，可以安装在通用的Linux系统下

### 源码包编译安装

命名：mysql-5.7.31.tar.gz，通用的Linux下都可以编译安装。

## 6、MySQL的安装的区别

| 安装方式 | 优点                             | 缺点                                      |
| -------- | -------------------------------- | ----------------------------------------- |
| rpm      | 安装卸载简单                     | 可定制性差                                |
| glibc    | 可定制性相比rpm包灵活些          | 安装相比rpm包复杂些，需要手动初始化数据库 |
| 源码安装 | 可定制性最强，根据需求和功能定制 | 安装麻烦，需要手动初始化数据库            |

> 在企业中，数据库的安装很少使用rpm方式，大部分都是基于源码安装以及glibc安装！

## 7、区分数据库与数据库实例

### ㈠ 什么是MySQL数据库？

**数据库（database）：** 操作系统或存储上的==数据文件的集合==。mysql数据库中，数据库文件可以是* .frm、*.MYD、*.MYI、*.ibd等结尾的文件， 不同存储引擎文件类型不同。

### ㈡ 什么是MySQL数据库实例？

**数据库实例（instance）：** 由==后台进程或者线程==以及一个==共享内存区==组成。共享内存可以被运行的后台线程所共享。 数据库实例才是真正操作数据库的。

注意：MySQL的后台守护程序==mysqld==是单进程多线程的工作模式。

### ㈢ 数据库和数据库实例之间的关系是什么？

通常情况下，数据库实例和数据库是一一对应的关系，也就是==一个数据库实例对应一个数据库==； 但是，在集群环境中存在==多个数据库实例共同使用一个数据库==。oracle RAC

---

## 8、MySQL的GLIBC版本安装

略

## 9、MySQL源码编译安装

略

