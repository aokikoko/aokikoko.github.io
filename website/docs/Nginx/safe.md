---
title: "[Nginx] 安全"
sidebar_position: 9
---

## 1、反向代理

实现隐藏真实服务的操作，起到一定安全作用

## 2、隐藏版本号

Nginx 对外提供服务，为了避免被针对某个版本的漏洞进行攻击。经常做法是隐藏掉软件的版本信息。提供一定的安全性。

```nginx
#将以下配置加入到http段配置中
server_tokens off
```

## 3、Https 和 CA

```shell
   server {
        listen       443 ssl;
        #绑定好域名
        server_name  web1.heimadevops.top;
        #指定证书相关位置
        ssl_certificate      /usr/local/nginx/conf/1_web1.heimadevops.top_bundle.crt;
        ssl_certificate_key  /usr/local/nginx/conf/2_web1.heimadevops.top.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }
#http跳转到https
server {
    listen 80；
    server_name web1.heimadevops.top;
    rewrite / https://web1.heimadevops.top permanent;
}
```

客户端注意解析域名
