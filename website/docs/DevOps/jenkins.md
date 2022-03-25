---
title: "[DevOps] jenkins"
sidebar_position: 3
---

## 认识 jenkins

​ Jenkins 是一个可扩展的持续集成引擎，是一个开源软件项目，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。Jenkins 非常易于安装和配置，简单易用。

官网：https://jenkins.io/

## git+github+jenkins

### 架构图

![1552924791657](assets/jenkins物理架构.png)

**实验架构图**

![1553086621836](assets/实验架构规划图.png)

## 准备环境

### nginx 服务器准备

在 nginx 服务器上安装 nginx,并启动服务

```powershell
[root@nginx ~]# yum install epel-release
[root@nginx ~]# yum install nginx -y
[root@nginx ~]# systemctl start nginx
[root@nginx ~]# systemctl enable nginx
```

### jenkins 安装插件

jenkins 图形确认安装**git plugin**和**publish over ssh**插件

![1553010890677](assets/jenkins私钥配置1.png)

![1553010947301](assets/jenkins私钥配置2.png)

![1553011281250](assets/jenkins私钥配置3.png)

![1553011546506](assets/jenkins私钥配置4.png)

![1553011660527](assets/jenkins私钥配置5.png)

### 配置 jenkins 通过 publish over ssh 免密连接 nginx

第 1 步: 在 jenkins 服务器上生成空密码密钥对

```powershell
[root@jenkins_server ~]# ssh-keygen -t rsa -f /root/.ssh/id_rsa -C "jenkins-server@itcast.cn" -N ""
```

第 2 步: 查看并复制私钥

```powershell
[root@jenkins_server ~]# cat /root/.ssh/id_rsa
-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEAvWekHSkS23a/8kN6SkDTjFdcdw5zuupaVY9KJd2Ejnfg7/ZU
-----END RSA PRIVATE KEY-----
```

第 3 步: 在 jenkins 中添加 ssh 私钥

![1553012342059](assets/jenkins私钥配置6.png)

![1553658190008](assets/jenkins私钥配置7.png)

第 4 步: 在 jenkins 服务器上配置对 nginx 服务器的免密登录

```powershell
[root@jenkins_server ~]# ssh-copy-id -i 10.1.1.14
10.1.1.14为nginx服务器的IP
```

第 5 步: 然后填写连接 nginx 信息，测试连接成功后保存

![1553013194254](assets/jenkins私钥配置8.png)

### 添加 Jenkins 服务器公钥到 github

略

### 为 jenkins 服务器添加凭据

凭据是 jenkins 给自己的构建项目授权用的。

我们本项目案例里 jenkins 是通过 ssh 免密去找 github 的项目仓库 clone 或 pull 项目代码。

在前面的配置里已经把 jenkins 服务器的公钥添加到了 github 仓库上, 在 jenkins 服务器上 root 用户使用`git clone 项目地址`都可以成功。

但是 jenkins 服务本身并不允许使用自己的私钥去访问 github 的公钥, 给个凭据, 让它能做就解决问题了

**总结:** **==凭据是一种和第三方程序(如 github,gitlab 等)通讯的权限授权。本案例的凭据就是允许使用 ssh 免密==**。

​ 你可以把这个凭据在 jenkins 里授予给任何需要 ssh 免密通讯的构建项目。

第 1 步: 在 jenkins 界面添加凭据

![1553013641895](assets/jenkins添加凭据.png)

![1553013717332](assets/jenkins添加凭据2.png)

![1553013776330](assets/jenkins添加凭据3.png)

![1553013819399](assets/jenkins添加凭据4.png)

第 2 步: 添加凭据信息

![1553014084926](assets/jenkins添加凭据5.png)

![1553014143212](assets/jenkins添加凭据6.png)

### jenkins 任务创建

第 1 步: 创建新任务

![1553078055293](assets/jenkins创建任务1.png)

第 2 步: 自定义任务名称与风格

![1553078335434](assets/jenkins创建任务2.png)

第 3 步: 自定义任务描述

![1553078510045](assets/jenkins创建任务3.png)

第 4 步: 定义源码管理

![1553079064976](assets/jenkins创建任务4.png)

第 5 步:定义构建方法

![1553079481477](assets/jenkins创建任务5.png)

第 6 步: 定义构建的源码,目标主机和目标目录

![1562558046005](assets/jenkins创建任务6.png)

第 7 步: 设置完毕，保存，并验证

![1553079846398](assets/jenkins创建任务7.png)

![1553080073223](assets/jenkins创建任务8.png)

### 手动构建

第 1 步: 立即构建

![1553082456795](assets/jenkins构建1.png)

第 2 步: 在 workspace 工作区间查看

![1553082562299](assets/jenkins构建2.png)

![1553082689184](assets/jenkins构建3.png)

第 3 步: 查看控制台输出信息

![1553083607694](assets/jenkins构建4.png)

第 4 步: nginx 服务器上验证文件是否被传到 nginx 家目录

```powershell
[root@nginx ~]# ls /usr/share/nginx/html/
404.html  index.html      poweredby.png
50x.html  nginx-logo.png  README.md
可以看到README.md被传过来了
```

**练习:** 在开发者电脑上再次上传文件,并构建测试

## **小结**

![1562567947685](assets/过程小结图.png)

---

## 自动发布系统

![1553098138330](assets/自动发布系统实验环境图.png)

### Gitlab 上创建自动构建仓库

第 1 步: gitlab 上创建新仓库

![1553174861062](assets/gitlab创建自动构建web1.png)

第 2 步: 自定义项目名称等

![1553174585594](assets/gitlab创建自动构建web2.png)

第 3 步: 确认创建成功

![1553175117175](assets/gitlab创建自动构建web3.png)

在开发者电脑 clone 创建好的项目,进行开发

```powershell
# git clone git@10.1.1.12:root/auto_build_web.git
# cd auto_build_web
```

开发者要产生 ssh 空密码密钥对,把公钥添加到 gitlab(过程省略)

### jenkins 安装对应插件

jenkins 安装 gitlab 与 gitlab hook 插件

![1553176922376](assets/jenkins安装gitlab与gitlab_hook插件.png)

![1553185157195](assets/jenkins安装gitlab与gitlab_hook插件2.png)

### 添加 Jenkins 服务器公钥到 gitlab

第 1 步: jenkins 产生 root 用户的 ssh 空密码密钥对(步骤省略)

添加公钥到 gitlab

![1553185839595](assets/添加jenkins公钥到gitlab.png)

第 2 步: 复制 gitlab 上自动发布项目地址

![1553183183209](assets/获取自动发布项目地址.png)

第 3 步: 在 jenkins 服务器上克隆仓库，确认连接 OK

```powershell
[root@jenkins-server ~]# git clone git@10.1.1.12:root/auto_build_web.git
Cloning into 'auto_build_web'...
The authenticity of host '10.1.1.12 (10.1.1.12)' can't be established.
ECDSA key fingerprint is SHA256:Sp1FZaHscluT1mTIKFUiFQPoqcsSL2urGiujjlUN4lE.
ECDSA key fingerprint is MD5:8b:95:f9:83:8c:ea:e8:43:e4:58:36:9b:8f:c5:ba:96.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '10.1.1.12' (ECDSA) to the list of known hosts.
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (3/3), done.
```

### jenkins 创建自动构建任务

![1553184493070](assets/jenkins创建自动构建任务.png)

![1553184602674](assets/jenkins创建自动构建任务2.png)

**==凭据使用的是上面实验的凭据(如果 ssh 密钥对重新产生了,就需要重配置凭据)==**

![1553186294154](assets/jenkins创建自动构建任务3.png)

![1553186616179](assets/jenkins创建自动构建任务4.png)

![1553224131699](assets/jenkins创建自动构建任务5.png)

![1553186863931](assets/jenkins创建自动构建任务6.png)

![1553187361214](assets/jenkins创建自动构建任务7.png)

注意: 执行此脚本不再是使用 publish over ssh 插件,而是**==使用 jenkins 服务器上的 jenkins 用户来执行的==**

```powershell
#!/bin/bash

#源目录为jenkins存放任务文件的目录
SOURCE_DIR=/var/lib/jenkins/workspace/$JOB_NAME/
#目标目录为nginx服务器的家目录
DEST_DIR=/usr/share/nginx/html
#使用rsync同步源到nginx服务器家目录(需要免密登录)，IP为nginx服务器IP
/usr/bin/rsync -av --delete $SOURCE_DIR root@10.1.1.14:$DEST_DIR

```

问题: 既然是使用 jenkins 服务器上的 jenkins 用户来执行，为什么 rsync 不传给 10.1.1.14 的 jenkins 用户，而是传给它的 root 用户?

```powershell
答: 因为10.1.1.14上没有jenkins用户,就算有jenkins用户,对/usr/share/nginx/html也没有写权限
```

### 配置 jenkins 服务器上的 jenkins 用户

```powershell
[root@jenkins-server ~]# grep jenkins /etc/passwd
jenkins:x:988:982:Jenkins Automation Server:/var/lib/jenkins:/bin/false

[root@jenkins-server ~]# usermod -s /bin/bash jenkins

[root@jenkins-server ~]# grep jenkins /etc/passwd
jenkins:x:988:982:Jenkins Automation Server:/var/lib/jenkins:/bin/bash
```

```powershell
[root@jenkins-server ~]# su - jenkins
-bash-4.2$ ssh-keygen -t rsa -C "jenkins user" -N ""

-bash-4.2$ ssh-copy-id -i root@10.1.1.14
```

### jenkins 全局安全配置

![1553228664875](assets/jenkins全局安全配置.png)

![1553228811977](assets/jenkins全局安全配置2.png)

### 配置 gitlab 允许本地网络使用 webhook

gitlab 默认在本地网络不能使用 webhook，所以需要我们配置允许（注意要使用管理员配置,普通用户看不到下图的扳手图标)

![1553229742769](assets/配置gitlab允许本地使用webhook1.png)

![1553229844953](assets/配置gitlab允许本地使用webhook2.png)

![1553229928009](assets/配置gitlab允许本地使用webhook3.png)

![1553229997098](assets/配置gitlab允许本地使用webhook4.png)

### 为 gitlab 自动构建项目添加 webhook

![1553230226025](assets/为gitlab自动构建项目添加webhook支持1.png)

![1553230580824](assets/为gitlab自动构建项目添加webhook支持2.png)

![1553230666947](assets/为gitlab自动构建项目添加webhook支持3.png)

![1553230778636](assets/为gitlab自动构建项目添加webhook支持4.png)

### 代码自动发布测试

开发者电脑上使用 git 提交测试文件（确认前面 clone 过项目仓库)

```powershell
[root@vm1 ~]# cd auto_build_web/
[root@vm1 auto_build_web]# echo "auto_build_web" > index.html
[root@vm1 auto_build_web]# git add index.html
[root@vm1 auto_build_web]# git commit -m "add index.html"
[root@vm1 auto_build_web]# git push -u origin master
```

在 nginx 服务器上验证

```powershell
[root@nginx ~]# cat /usr/share/nginx/html/index.html
auto_build_web
```

## **小结**

![1562578462093](assets/自动发布系统小结图.png)
