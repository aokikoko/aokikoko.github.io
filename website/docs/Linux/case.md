---
title: "[Linux] 公司企业架构LNMP(单点服务器部署)"
sidebar_position: 28
---

## 1、业务背景

:::tip 业务背景

> 年份：2008-2010
>
> 发布产品类型：互联网动态站点 社区论坛 商城 社交类站点
>
> ⽤户数量： 100-500
>
> **PV** ： 1000-3000（24 小时访问次数总和 8 小时） 页面访问数量 点击量
>
> **QPS**： 5-10（每秒访问查询次数） 并发量 吞吐量 TPS RPS
>
> **DAU**： 10-50（每日活跃用户数） 日活数 根据用户登录等方式
>
> **QPS 两种方法：**
>
> **① 计算 pv/时间 = qps**
>
> **② 压测 使用 ab 等并发测试软件 在规定时间发送一定的请求数量**
:::

## 2、企业架构分布式集群解决方案

> **集群：多台服务器在一起作同样的事 。**
>
> **分布式 ：多台服务器在一起作不同的事 。**
>
> ​ 小饭店原来只有一个厨师，切菜洗菜备料炒菜全干。后来客人多了，厨房一个厨师忙不过来，又请了个厨师，两个厨师都能炒一样的菜，这两个厨师的关系是集群。为了让厨师专心炒菜，把菜做到极致，又请了个配菜师负责切菜，备菜，备料，厨师和配菜师的关系是分布式，一个配菜师也忙不过来了，又请了个配菜师，两个配菜师关系是集群

最终的架构图示

实现负载均衡 LB、高可用 HA、数据库主从复制 M-S、读写分离 R-W、缓存中间件[memcached、Redis] nosql[mongodb]·······

![架构](assets/1.png)

## 3、常见的软件架构

> **①C/S client/server**
>
> **②B/S browser/server**
>
> ​ 不管是 C 还是 B，都是属于客户端属于前端。那么运维人员主要负责和管理的是 server 端，也统称为服务器端。为了能够提供快速的提供服务端使用，互联网中有多种解决方案和架构，其中以下两种架构有着广泛的使用基础。
>
> **1> LAMP Linux+Apache+MySQL+PHP**  
> **2> LNMP Linux+Nginx+MySQL+PHP**
>
> lnmpa nginx+mysql+php+apache
>
> lnmt nginx+mysql+tomcat（jdk）
>
> nginx+mysql+（python+nodejs|ruby)

在企业中搭建实际业务环境时，一般依赖文件（小文件）使用 yum 安装解决，生产业务环境需要使用源码编译的方式进行安装。

---

## 安装 MySQL

### 1.1、相关参数介绍

**编译参数的说明**

| -DCMAKE_INSTALL_PREFIX          | 安装到的软件目录                  |
| ------------------------------- | --------------------------------- |
| -DMYSQL_DATADIR                 | 数据文件存储的路径                |
| -DSYSCONFDIR                    | 配置文件路径 (my.cnf)             |
| -DENABLED_LOCAL_INFILE=1        | 使用 localmysql 客户端的配置      |
| -DWITH_PARTITION_STORAGE_ENGINE | 使 mysql 支持分表                 |
| -DEXTRA_CHARSETS                | 安装支持的字符集                  |
| -DDEFAULT_CHARSET               | 默认字符集使用 这里配置为 utf8mb4 |
| -DDEFAULT_COLLATION             | 连接字符集                        |
| -DWITH_SSL                      | 开启 mysql 的 ssl 使用            |

**初始化参数说明**

| --basedir | 安装到的软件目录 |
| --------- | ---------------- |
| --datadir | 数据文件存储路径 |
| --user    | mysql 使用的用户 |

### 1.2、脚本实现安装及其初始化

```shell
#!/bin/bash
#源码编译安装MySQL
mysql_install() {
	#1、创建用户
`id mysql` &>/dev/null
[ $? -ne 0 ] && useradd -s /sbin/nologin -M mysql
#2、解决依赖
yum install -y cmake
yum install -y ncurses-devel
#3、编译安装
cd /root/soft
tar zxvf mysql-5.6.33.tar.gz
cd mysql-5.6.33
cmake \
-DCMAKE_INSTALL_PREFIX=/usr/local/mysql \
-DMYSQL_DATADIR=/usr/local/mysql/data \
-DSYSCONFDIR=/etc \
-DENABLED_LOCAL_INFILE=1 \
-DWITH_PARTITION_STORAGE_ENGINE=1 \
-DEXTRA_CHARSETS=all \
-DDEFAULT_CHARSET=utf8mb4 \
-DDEFAULT_COLLATION=utf8mb4_general_ci\
-DWITH_SSL=bundled
make && make install
#配置文件
rm -rf /etc/my.cnf
cp /usr/local/mysql/support-files/my-default.cnf /etc/my.cnf
#授权并初始化数据库
chown -R mysql:mysql /usr/local/mysql
/usr/local/mysql/scripts/mysql_install_db --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --user=mysql
#配置服务、自启动和环境变量
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
service mysqld start
chkconfig --add mysqld
echo 'PATH=/usr/local/mysql/bin:$PATH' >> /etc/profile
#删除匿名用户
#设置root域名的密码
rpm -qa|grep expect
if [ $? -ne 0 ];then
   yum -y install expect
fi
#导入环境变量PATH
export PATH=/usr/local/mysql/bin:$PATH
#初始化root密码 删除匿名用户
echo '#!/usr/bin/expect
set timeout 60
spawn mysql_secure_installation
expect {
"enter for none" { send "\r"; exp_continue}
"Y/n" { send "Y\r" ; exp_continue}
"password" { send "123456\r"; exp_continue}
"Cleaning up" { send "\r"}
}
interact ' > mysql_secure_installation.exp
chmod +x mysql_secure_installation.exp
./mysql_secure_installation.exp
}
#脚本开始时间
start_time=`date +%s`
#执行的脚本代码
mysql_install
#脚本结束时间
end_time=`date +%s`
#脚本执行花费时间
const_time=$((end_time-start_time))
echo 'Take time is: '$const_time's'
```

---

## 安装 Nginx

### Nginx介绍

**常见用法：**

:::tip nginx常见作用
> **1) web服务器软件 httpd http协议**
>
> 同类的web服务器软件：apache nginx(俄罗斯) IIS(微软 fastcgi) lighttpd(德国)
>
> **2)代理服务器   反向代理**  
>
> 3)邮箱代理服务器  IMAP POP3 SMTP
>
> **4)负载均衡功能  LB  loadblance**
:::

**Nginx架构的特点：**

:::tip Nginx架构的特点：
> ①**高可靠**：稳定性  master进程 管理调度请求分发到哪一个worker=> worker进程 响应请求   一master多worker
>
> ②**热部署** ：（1）平滑升级  （2）可以快速重载配置
>
> ③**高并发**：可以同时响应更多的请求  事件 epoll模型   几万
>
> ④**响应快**：尤其在处理静态文件上，响应速度很快  sendfile
>
> ⑤**低消耗**：cpu和内存   1w个请求  内存2-3MB
>
> ⑥**分布式支持** ：反向代理  七层负载均衡
:::

### 2.2、安装

常见安装方式：

①yum安装配置，需使用Nginx官方源或者EPEL源

**②源码编译**

>
> ==依赖解决==
>
> ```shell
> shell > yum -y install pcre-devel zlib-devel openssl-devel
> ```


**安装步骤及其脚本**

```shell
#!/bin/bash
#编译安装Nginx
nginx_install(){
#创建软件运行用户
`id www` &>>/dev/null
if [ $? -ne 0 ];then
   useradd -s/sbin/nologin -M www
fi
#安装依赖
yum -y install pcre-devel zlib-devel openssl-devel
#编译安装
cd /root/soft
tar xvf nginx-1.14.2.tar.gz
cd nginx-1.14.2
./configure --prefix=/usr/local/nginx --user=www --group=www --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module && make && make install
}
#脚本开始时间
start_time=`date +%s`
#执行的脚本代码
nginx_install
#脚本结束时间
end_time=`date +%s`
#脚本执行花费时间
const_time=$((end_time-start_time))
echo 'Take time is: '$const_time's'
```

编译参数说明

| 参数                           | 作用                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| --prefix                       | 编译安装到的软件目录                                         |
| --user                         | worker进程运行用户                                           |
| --group                        | worker进程运行用户组                                         |
| --with-http_ssl_module         | 支持https  需要==**pcel-devel**==依赖                        |
| --with-http_stub_status_module | 基本状态信息显示       查看请求数、连接数等                  |
| --with-http_realip_module      | 定义客户端地址和端口为header头信息     常用于反向代理后的真实IP获取 |


### 2.3、目录介绍

查看安装目录/usr/local/nginx

|目录|作用 |
| ---- | ------------ |
| conf | 配置文件 |
| html | 网站默认目录 |
| logs | 日志 |
| sbin | 可执行文件  [软件的启动 停止 重启等] |

###2.4、软件操作参数

**查看nginx的二进制可执行文件的相关参数**

```shell
shell > cd /usr/local/nginx/sbin
shell > ./nginx -h
```

**执行后显示**

```shell
nginx version: nginx/1.14.2
Usage: nginx [-?hvVtTq] [-s signal] [-c filename] [-p prefix] [-g directives]

Options:
#查看帮助
  -?,-h         : this help
#查看版本并退出
  -v            : show version and exit
#查看版本和配置选项并退出
  -V            : show version and configure options then exit
#检测配置文件语法并退出
  -t            : test configuration and exit
#检测配置文件语法打印它并退出
  -T            : test configuration, dump it and exit
#在配置测试期间禁止显示非错误信息
  -q            : suppress non-error messages during configuration testing
#发送信号给主进程  stop强制退出  quit优雅的退出  reopen重开日志   reload重载配置
  -s signal     : send signal to a master process: stop, quit, reopen, reload
#设置nginx目录  $prefix路径
  -p prefix     : set prefix path (default: /usr/local/nginx/)
#指定启动使用的配置文件
  -c filename   : set configuration file (default: conf/nginx.conf)
#在配置文件之外设置全局指令
  -g directives : set global directives out of configuration file
```

> 一般主要使用：
>
> **-s**参数控制管理nginx服务
>
> **-V**参数查看nginx开启的模块和编译参数
>
> **-t**参数检测配置文件是否有错误

