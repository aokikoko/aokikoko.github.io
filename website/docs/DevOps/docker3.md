---
title: "[DevOps] 容器技术管理工具-Docker(下)"
sidebar_position: 7
---

## 官方镜像仓库介绍

### 镜像仓库分类

- 公有仓库
- 私有仓库

### 官方镜像仓库(公有仓库)

属于公有仓库

网址：hub.docker.com 网站名称： dockerhub

- linux 命令行方式登录

```shell
[root@bogon ~]# docker --help
[root@bogon ~]# docker login hub.docker.com
[root@bogon ~]# docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a
Docker ID, head over to https://hub.docker.com to create one.
Username: smartgodocker
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store
Login Succeeded
```

### dockerhub 镜像上传, 下载

- 镜像上传

给需要上传到公有仓库的容器镜像打标记

```shell
[root@bogon ~]# docker images
REPOSITORY TAG IMAGE ID CREATED SIZE
centos latest 9f38484d220f 6 weeks ago 202MB
[root@bogon ~]# docker tag centos:latest smartgodocker/centos:v1
[root@bogon ~]# docker images
REPOSITORY TAG IMAGE ID CREATED SIZE
centos latest 9f38484d220f 6 weeks ago
202MB
smartgodocker/centos v1 9f38484d220f 6 weeks ago
202MB
```

把已打标记的容器镜像上传到公有仓库

```shell
[root@bogon ~]# docker push smartgodocker/centos:v1
The push refers to repository [docker.io/smartgodocker/centos]
d69483a6face: Mounted from library/centos
v1: digest: sha256:ca58fe458b8d94bc6e3072f1cfbd334855858e05e1fd633aa07cf7f82b048e66
size: 529
```

- 镜像下载

```shell
[root@bogon ~]# docker pull smartgodocker/centos-nginx:v1
v1: Pulling from smartgodocker/centos-nginx
8ba884070f61: Already exists
b49e39a48ce9: Pull complete
ee8f9e32e5d1: Pull complete
76444f96007d: Pull complete
3a3e79f9d90d: Pull complete
Digest: sha256:b51c09890e5dca970a846012c05123b8eeab9e55a3ea7b94408ae42c718389d9
Status: Downloaded newer image for smartgodocker/centos-nginx:v1
[root@bogon ~]# docker images
REPOSITORY TAG IMAGE ID CREATED
SIZE
smartgodocker/centos-nginx v1 cf23c20ff2cd 2 hours ago
466MB
centos latest 9f38484d220f 6 weeks ago
202MB
smartgodocker/centos v1 9f38484d220f 6 weeks ago
202MB
```

## 镜像加速

### 永久配置方法

第一步：修改/usr/lib/systemd/system/docker.service

```shell
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
#把上述行时行修改，修改如下：
ExecStart=/usr/bin/dockerd
```

第二步：在/etc/docker/daemon.json

```shell
[root@bogon ~]# cat /etc/docker/daemon.json
{
"registry-mirrors": ["https://registry.docker-cn.com"]
}
```

第三步：重启 docker daemon

```shell
[root@bogon ~]# systemctl daemon-reload
[root@bogon ~]# systemctl restart docker
```

第四步：验证加速器是否可用

```shell
[root@bogon ~]# docker pull ansible/centos7-ansible:latest
latest: Pulling from ansible/centos7-ansible
45a2e645736c: Downloading 29.48MB/70.39MB
1c3acf573616: Downloading 30.1MB/59.73MB
edcb61e55ccc: Download complete
cbae31bad30a: Download complete
aacbdb1e2a62: Download complete
fdeea4fb835c: Downloading 48.93MB/69.68MB
```

### 阿里云加速器方法

修改/etc/docker/daemon.json

```shell
[root@bogon ~]# cat /etc/docker/daemon.json
{
"registry-mirrors":
["https://阿里给的地址.mirror.aliyuncs.com","https://registry.docker-cn.com"]
}
```

---

## docker 本地容器镜像仓库

TODO

---

## docker 容器网络

### 本地网络

本地网络类型:

- bridge NAT 模式, 可使容器连接外网
- host 与主机共享网络, 可使容器连接外网
- none 容器仅有 lo 网卡, 无法连接外网

### 1. bridge

所有容器连接到桥，就可以使用外网，使用 NAT 让容器可以访问外网

```shell
[root@bogon ~]# ip a s
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN
group default
link/ether 02:42:0d:52:fa:0a brd ff:ff:ff:ff:ff:ff
inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
valid_lft forever preferred_lft forever
inet6 fe80::42:dff:fe52:fa0a/64 scope link
valid_lft forever preferred_lft forever
#所有容器连接到此桥，IP地址都是172.17.0.0/16
#启动docker服务后出现
[root@bogon ~]# brctl show
bridge name bridge id STP enabled interfaces
br-5ca493f64e19 8000.02429cb0e393 no
docker0 8000.02420d52fa0a no
[root@bogon ~]# docker network ls
NETWORK ID NAME DRIVER SCOPE
93283dec7d39 bridge bridge local
#使用--network选择完成对容器网络的选择
[root@bogon ~]# docker run -d --network bridge smartgodocker/centos-nginx:v1
```

### 2. host

所有的容器与 docker host 在同一网络中，可以让容器访问，甚至可以让外网主机访问容器中的服务

```shell
[root@bogon ~]# docker network ls
NETWORK ID NAME DRIVER SCOPE
51ab732381e8 host host local
```

使用--network 选择容器运行的网络

```shell
[root@bogon ~]# docker run -it --network host centos:latest /bin/bash
[root@bogon /]# ip a s
bash: ip: command not found
[root@bogon /]# yum -y install iproute
#安装完成后，查看IP地址，发现其使用了docker host地址
#好处在于方便访问
#坏处在多容器同时运行一种服务，端口冲突
#仅在测试环境中使用
```

### 3. none

容器仅与 lo 网卡，不能与外界连接，在高级应用中会使用到

```shell
[root@bogon ~]# docker network ls
NETWORK ID NAME DRIVER SCOPE
93283dec7d39 bridge bridge local
5ca493f64e19 harbor_harbor bridge local
51ab732381e8 host host local
4b7fd7698bec none null local
[root@bogon ~]# docker run -it --network none centos:latest
[root@8159e9d168ab /]# ip a s
#无法验证
```

## 跨主机容器间网络通信

### 实现跨主机容器间通信的工具

- Pipework
- Flannel
- Weave
- Open V Switch OVS
- Calico

### Weave 的思路

在每个宿主机上布置一个特殊的 route 的容器, 不同宿主机的 route 容器连接起来. route 拦截所有普通容器的 ip 请求, 并通过 udp 包发送到其他宿主机上的普通容器, 这样在跨机的多个容器端看到的就是同一个扁平网络

| weave 解决了网络问题, 不过部署依然是单机的

### flannel 的思路

- 是 Overlay 网络，即覆盖型网络
- 通过 etcd 保存子网信息及网络分配信息
- 给每台 Docker Host 分配置一个网段
- 通过 UDP 传输数据包

### 后续 TODO

TODO
