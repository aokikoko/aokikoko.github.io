---
title: "[Linux] 系统服务之DNS服务 - DNS域名管理系统与LAMP编译安装"
sidebar_position: 11
---

## 1、DNS两种解析

正向解析：把域名解析为对应的IP地址

反向解析：把IP地址解析为对应的域名

## 2、DNS的反向解析

目标：把10.1.1.13这个IP地址通过DNS服务器指向www.itcast.cluster域名

第一步：开启网络的访问权限控制


```powershell
# vim /etc/named.conf
12 options {
13         listen-on port 53 { 127.0.0.1;any; };
14         listen-on-v6 port 53 { ::1; };
15         directory       "/var/named";
16         dump-file       "/var/named/data/cache_dump.db";
17         statistics-file "/var/named/data/named_stats.txt";
18         memstatistics-file "/var/named/data/named_mem_stats.txt";
19         recursing-file  "/var/named/data/named.recursing";
20         secroots-file   "/var/named/data/named.secroots";
21         allow-query     { localhost;any;};
```

第二步：在zones文件中定义zone文件

```powershell
# vim /etc/named.rfc1912.zones
49 zone "1.1.10.in-addr.arpa" IN {
50         type master;
51         file "10.1.1.zone";
52         allow-update { none; };
53 };
```

第三步：cd /var/named进入到DNS zone配置文件目录，复制named.loopback文件

```powershell
# cd /var/named
# cp -p named.loopback 10.1.1.zone
```

第四步：编辑10.1.1.zone文件，把IP地址=>10.1.1.13指向www.itcast.cluster域名

```powershell
$TTL 1D
@       IN SOA  @ rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
        NS      @
        A       127.0.0.1
        AAAA    ::1
        PTR     localhost.
#增加一条反向解析，把10.1.1.13 => PTR => www.itcast.cluster
13      PTR     www.itcast.cluster
```

第五步：检查与客户端测试

DNS服务器：

```powershell
# named-checkconf /etc/named.conf
# named-checkconf /etc/named.rfc1912.zones

# cd /var/named
# named-checkzone 10.1.1.zone 10.1.1.zone

# systemctl restart named
```

客户端检测：

```powershell
# echo 'nameserver 10.1.1.12' > /etc/resolv.conf
# nslookup 10.1.1.13
www.itcast.cluster.1.1.10.in-addr.arpa.
```


## 3、VMware与CentOS7网络的小bug

DNS的临时配置方式 => echo  'nameserver 10.1.1.12' > /etc/resolv.conf

> 注：当VMware关闭或者挂起时，临时设置的DNS会被重置



CentOS7版本中，有的时候，在网络配置时，明明设置了静态IP，但是无论重启网络、重启网卡，其设置的IP地址都没有生效。

```powershell
# ifconfig ens33

# ip a
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:68:d8:bb brd ff:ff:ff:ff:ff:ff
    inet 10.1.1.29/24 brd 10.1.1.255 scope global noprefixroute dynamic ens33
       valid_lft 1656sec preferred_lft 1656sec
    inet 10.1.1.11/24 brd 10.1.1.255 scope global secondary ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fe68:d8bb/64 scope link 
       valid_lft forever preferred_lft forever
```

> 出现以上问题的主要原因在于图形化界面中的NetworkManager服务没有关闭！

解决方案：

```powershell
# systemctl stop NetworkManager
# systemctl disable NetworkManager
```

## 4、多域DNS服务器搭建

需求：搭建一个DNS服务器，可以同时解析test.net和heima.cc域

| 编号 | 域名         | IP地址    |
| ---- | ------------ | --------- |
| 1    | www.test.net | 10.1.1.13 |
| 2    | bbs.heima.cc | 10.1.1.13 |

第一步：更改named.conf文件，设置网络访问权限

```powershell
# vim /etc/named.rfc1912.zones
49 zone "1.1.10.in-addr.arpa" IN {
50         type master;
51         file "10.1.1.zone";
52         allow-update { none; };
53 };
```

第二步：更改named.rfc1912.zones，添加test以及heima域

```powershell
# vim /etc/named.rfc1912.zones
...
zone "test.net" IN {
        type master;
        file "test.net.zone";
        allow-update { none; };
};

zone "heima.cc" IN {
        type master;
        file "heima.cc.zone";
        allow-update { none; };
};
```

第三步：进入/var/named目录，复制named.localhost

```powershell
# cd /var/named
# cp -p named.localhost test.net.zone
# cp -p named.localhost heima.cc.zone
```

第四步：编辑test.net.zone与heima.cc.zone文件

```powershell
# vim test.net.zone
...
www 	A	 10.1.1.13

# vim heima.cc.zone
...
bbs		A	 10.1.1.13
```

第五步：检测配置文件，然后启动named服务（重启）

```powershell
# named-checkconf /etc/named.conf
# named-checkconf /etc/named.rfc1912.zones

# cd /var/named
# named-checkzone test.net.zone test.net.zone
# named-checkzone heima.cc.zone heima.cc.zone

# systemctl restart named
```


## 5、ntp服务器搭建

基础班ntp回顾：

```powershell
# ntpdate cn.ntp.org.cn
```

虽然以上方式，可以实现对时间的校对！但是由于需要连接外网，其同步需要消耗一定的时间，那有没有更好的解决办法呢？

第一步：准备一台NTP时间服务器

| 编号 | 主机名称      | IP地址     | 备注信息          |
| ---- | ------------- | ---------- | ----------------- |
| 1    | ntp.itcast.cn | 10.1.1.100 | NTP内网时间服务器 |

> 扩展：在原有基础上，记住要关闭NetworkManager服务

第二步：安装ntp服务软件

```powershell
# yum install ntp -y
```

第三步：更改配置文件，开启ntp服务

```powershell
# vim /etc/ntp.conf
13 restrict 127.0.0.1
14 restrict ::1
# 手工添加10.1.1.0网段，范围10.1.1.1 ~ 10.1.1.254
15 restrict 10.1.1.0 mask 255.255.255.0
```

第四步：启动ntpd服务

```powershell
# ntpdate cn.ntp.org.cn
# systemctl restart ntpd
```

到此NTP时间服务器配置完毕，以后所有的计算机都可以直接使用ntpdate同步此NTP服务器

DNS-MASTER、DNS-SLAVE

```powershell
# ntpdate 10.1.1.100
```

> 10.1.1.100是内网NTP时间服务器的IP地址

> 除此以外，我们还可以使用计划任务，定期进行时间的同步(针对所有的客户端)

```powershell
# crontab -e
*/2 * * * * /usr/sbin/ntpdate 10.1.1.100 &>/dev/null
```