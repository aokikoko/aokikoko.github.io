---
title: "[DevOps] 容器编排-docker compose"
sidebar_position: 8
---

## 编排部署工具

- docker machine
- docker compose
- docker swarm
- kubernetes
- mesos + marathon

## docker compose

docker compose 是用来在 docker 中定义和运行复杂应用的小工具, 比如在一个文件中定义多个容器, 只用一行命令就可以让一切就绪并运行

Docker Compose 将所管理的容器分为三层, 工程 project, 服务 service, 容器 container

Docker Compose 运行的目录下的所有文件(docker-compose.yml, extends 文件或环境变量文件等) 组成一个工程, 若无特殊指定工程名即为当前目录名. 一个工程当中可包含多个服务, 每个服务中定义了容器运行的镜像, 参数, 依赖. 一个服务当中可包括多个容器实例, Docker Compose 并没有解决负载均衡的问题, 因此需要借助其他工具实现服务发现及负载均衡

### docker compose 作用

在一个文件中定义复杂的容器应用之间的关系, 用一个命令即可执行

- YAML，类似于 html,xml #标记类语言
- YAML 格式文件
- docker-compose 使用 yaml 文件启动容器
  - start & stop
  - down & up

### docker compose 定义方法
