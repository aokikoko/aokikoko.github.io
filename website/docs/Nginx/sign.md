---
title: "[Nginx] 信号参数及配置文件介绍"
sidebar_position: 1
---

## 1、信号参数

Kill  命令 传输信号给进程  Nginx的主进程

:::tip 信号参数
> TERM, INT（快速退出，当前的请求不执行完成就退出） -s stop
>
> **QUIT** （优雅退出，执行完当前的请求后退出）  -s quit
>
> **HUP** （重新加载配置文件，用新的配置文件启动新worker进程，并优雅的关闭旧的worker进程） -s reload
>
> USR1 （重新打开日志文件）  -s reopen
>
> **USR2** （平滑的升级nginx二进制文件  拉起一个新的主进程  旧主进程不停止）
>
> **WINCH** （优雅的关闭worker进程）
:::

以上几个信息命令都是发送给master主进程的

语法：

```shell
Kill 选项参数  pid
##关闭nginx
##快速关闭
kill -INT pid
##优雅关闭
kill -QUIT pid
```

## 2、重新安装

①停止掉服务，删除编译的安装的软件包和源码包

②重新解压编译安装即可

注意：如果有需要，请备份配置文件和网站目录里的资源文件

## 3、平滑升级

升级软件版本之后，需要启动新的版本，启动不了，端口已经被占用

如果直接把旧版本的服务停止掉，会影响线上业务的使用

> 最佳解决办法：
>
> ①旧的不先停掉
>
> ②新的又可以起来
>
> ③旧的和新的同时提供服务，旧的请求完成之后，就停掉旧进程
>
> -USR2  平滑启动一个进程（平滑升级）
>
> -WINCH  优雅的关闭子进程
>
> -QUIT   优雅关闭主进程

**①编译安装新版本**

```shell
shell > tar xvf nginx-1.16.0.tar.gz
shell > cd nginx-1.16.0
shell > ./configure  --prefix=/usr/local/nginx --user=www --group=www --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module
shell > make && make install
```

升级新版本，需要把软件的安装路径，指定到旧版本上。

> 以上操作完成之后，会把原来的旧版本备份为nginx.old
>

**②新旧版本同时运行**

```shell
shell > kill -USR2 主进程号
```

**③停止掉旧进程**

查看旧的主进程号，并使用kill -WINCH 优雅的关闭的子进程,再关闭旧的主进程

```shell
shell > kill -WINCH 旧的主进程号
shell > kill -QUIT 旧的主进程号
```

在nginx中，默认提供了平滑升级的操作，只需要执行以下命令

```shell
#注意先configure  在nginx源码包执行
shell > make install && make upgrade
```


## 4、配置文件介绍

**查看nignx目录下的配置文件**

/usr/local/nginx/nginx.conf

```shell
#nginx子进程启动用户
#user  nobody;
#子进程数量  一般调整为cpu核数或者倍数
worker_processes  1;
#错误日志定义
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#进程pid 存储文件
#pid        logs/nginx.pid;

#事件
events {
    #每个子进程的连接数         nginx当前并发量  worker_processes * worker_connections
    worker_connections  1024;
}

#http协议段
http {
    #引入  文件扩展名和与文件类型映射表
    include       mime.types;
    #默认文件类型   
    default_type  application/octet-stream;
    #访问日志access.log的格式
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
    #访问日志存储路径
    #access_log  logs/access.log  main;
    #linux内核  提供文件读写的机制
    sendfile        on;
    #tcp_nopush     on;   // 即使注释了 这个也是默认开启

    #keepalive_timeout  0;
    #长连接超时时间  单位为s  // 当客户端跟服务器断开时间超过65秒以上, 服务器连接就断开回收
    keepalive_timeout  65;
    #gzip压缩
    #gzip  on;
    #server虚拟主机的配置
    server {
        #监听端口
        listen       80;
        #域名  可以有多个 用空格分隔
        server_name  localhost;
        #默认编码
        #charset koi8-r;

        #access_log  logs/host.access.log  main;
        #location 用来匹配url
        location / {
            #默认访问的网站路径
            root   html;
            #默认访问页面 从前往后的顺序查找
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```

> 主要注意：
>
> http=>==server===>location    递进关系