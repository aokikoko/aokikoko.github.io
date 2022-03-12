---
title: "[Linux] Linux自有服务-systemctl"
sidebar_position: 3
---

# Linux 自有服务与软件包管理

服务是一些特定的进程，自有服务就是系统开机后就自动运行的一些进程，一旦客户发出请求，这些进程就自动为他们提供服务，windows 系统中，把这些自动运行的进程，称为"服务"

举例：当我们使用 SSH 客户端软件连接 linux 的时候，我们的服务器为什么会对连接做出响应？是因为 SSH 服务开机就自动运行了。

所谓自有服务，简单来说，可以理解为 Linux 系统开机自动运行的服务（程序）。

## systemctl 管理系统服务

### 1、systemctl 概述

CentOS7 版本：

systemctl 命令 = system 系统 + control 控制（服务管理+开启启动项管理）

```powershell
# systemctl start|stop|restart network
```

### 2、显示系统服务

基本语法：

```powershell
# systemctl [选项]
选项说明：
list-units --type service --all：列出所有服务（包含启动的和没启动的）
list-units --type service：列出所有启动的服务
```

案例：列出 Linux 系统中所有的服务（包含启动的和没启动的）

```powershell
# systemctl list-units --type service --all
```

案例：只列出已经启动的 Linux 系统服务

```powershell
# systemctl list-units --type service
```

案例：把 systemctl 显示系统服务与管道命令相结合，筛选我们想要的服务信息

```powershell
# systemctl list-units --type service | grep sshd
```

### 3、Linux 系统服务管理

### ☆ status 查看状态

查看系统服务的状态

```powershell
# systemctl status 系统服务的名称
```

案例：查询系统中网络服务的状态信息

```powershell
# systemctl status network
```

### ☆ stop 停止服务

```powershell
# systemctl stop 系统服务的名称
```

案例：使用 systemctl 命令停止 network 网络服务

```powershell
# systemctl stop network
```

### ☆ start 启动服务

```powershell
# systemctl start 系统服务的名称
```

案例：使用 systemctl 命令启动 network 网络服务

```powershell
# systemctl start network
```

### ☆ restart 重启服务

```powershell
# systemctl restart 系统服务的名称
等价于
# systemctl stop 系统服务的名称
# systemctl start 系统服务的名称
```

案例：使用 systemctl 命令重启 crond 计划任务的服务信息

```powershell
# systemctl restart crond
```

### ☆ reload 热重载技术

```powershell
# systemctl reload 系统服务名称
```

reload：重新加载指定服务的配置文件（并非所有服务都支持 reload，通常使用 restart)

> 有些服务，如 Nginx，更改了配置文件，但是不能重启 Nginx 服务，只是想立即让我们配置文件的更改生效，则就可以使用热重载了。

案例：使用热重载技术重新加载 crond 服务

```powershell
# systemctl reload crond
```

### 4、服务持久化（开机自启与开机不自启）

所谓服务持久化，就是服务在开机的时候，是否自动启动。

### ☆ 开机自启

```powershell
# systemctl enable 系统服务的名称
```

案例：把 network 网络服务设置为开机自启动

```powershell
# systemctl enable network
network.service is not a native service, redirecting to /sbin/chkconfig.
Executing /sbin/chkconfig network on

以上提示代表network.service不是一个本地的系统服务，所以想设置开机自启需要使用/sbin/chkconfig进行操作
# /sbin/chkconfig network on
```

案例：把 crond 计划任务的服务信息添加到开机自启动中

```powershell
# systemctl enable crond
```

### ☆ 开机不自启

```powershell
# systemctl disable 系统服务的名称
```

案例：把 crond 计划任务的服务信息从开机自启动中移除

```powershell
# systemctl disable crond
```

## systemctl 参数总结

| 参数                            | 含义                                                                     |
| ------------------------------- | ------------------------------------------------------------------------ |
| list-units --type service --all | 列出所有服务                                                             |
| list-units --type service       | 列出所有启动的服务                                                       |
| start                           | 启动指定服务                                                             |
| stop                            | 停止指定服务                                                             |
| status                          | 检查指定服务的运行状况                                                   |
| restart                         | 重启指定服务                                                             |
| reload                          | 重新加载指定服务的配置文件（并非所有服务都支持 reload，通常使用 restart) |
| enable                          | 指定服务开机自动启动                                                     |
| disable                         | 取消服务开机自动启动                                                     |

