---
title: "[Nginx] 企业级常见配置"
sidebar_position: 2
---

## 1、server 配置

### 1.1、server 虚拟主机配置

在实际生产业务环境中，一台 web 服务器，需要使用多个网站部署。搭建 vhost 虚拟机主机实现不同域名，解析绑定到不同的目录。

**核心语法**

```nginx
#基于http的web服务
server{
    #监听端口
    listen 80
    #配置虚拟机
    server_name shop.lnmp.com
    root html/tp5shop;
    location / {
        index index.php index.html index.htm
    }
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

> **一般 server 虚拟主机配置有三类：**
>
> **① 基于域名，将域名配置到 server_name 上**
>
> **② 基于 IP，将 IP 配置到 server_name 上**
>
> **③ 基于端口，将端口配置到 listen**

==案例一：基于域名的虚拟机配置==

**① 建立网站访问目录**

```shell
shell > cd /usr/local/nginx/html
shell > mkdir tp5shop
shell > cd tp5shop
#创建测试文件
shell > echo "shop.lnmp.com" >> index.html
shell > echo "shop site by php" >> index.php
```

**② 解析域名并绑定**

当前客户端是通过 windows 的浏览器，需要在 win 下的 hosts 文件(C:\Windows\System32\drivers\etc\hosts)进行解析域名

nginx 配置文件绑定域名

```nginx
server {
      #监听端口
      listen 80;
      #绑定域名
      server_name shop.lnmp.com;
      #网站目录
      root html/tp5shop;
      #默认访问页面
      index index.html;
      #这段一定不要忘了配置，需要解析php使用到
      location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
 }
```

**③ 浏览器访问查看效果**

==案例二：配置基于端口的虚拟主机==

还是使用上面创建好的 tp5shop 目录

修改 listen 配置进行测试

==案例三：配置基于 IP 的虚拟主机==

**① 添加 IP**

```shell
#临时绑定IP
shell > ifconfig eth0:1 192.168.17.220
#查看IP是否绑定成功
shell > ip a
```

**②nginx 配置文件添加**

```nginx
server {
    listen 80;
    server_name 192.168.17.220;
    root html/ip;
}
```

**③ 建立一个 IP 测试目录**

```shell
shell > cd /usr/local/nginx/html
shell > mkdir ip
shell > echo "ip site" >> index.html
```
