---
title: "[Mysql] 企业架构缓存中间件分布式Redis"
sidebar_position: 6
---

## 模拟运维设计方案

![re1](assets/re1.jpg)

根据以上业务需求，准备加入 Redis 缓存中间件服务器，可以使用到 redis 更加丰富的功能

在商城业务中实现：

①session 共享存储到 redis

②openresty（nginx+lua）动态限制 IP 访问

## Redis 介绍

Nosql 非关系数据库 key => value 键值对

Redis 是**R**emote **D**ictionary **S**erver(远程数据服务)的缩写

由意大利人 antirez(Salvatore Sanfilippo) 开发的一款 内存高速缓存数据库

该软件使用 C 语言编写,它的数据模型为 key-value

它支持丰富的数据结构，比如 **String list（双向链表） hash（哈希） set（集合） sorted set（zset 有序集合）**

可持久化（保存数据到磁盘中），保证了数据安全

### 2、业务使用场合

> **①[Sort Set]**排行榜应用，取top n操作，例如sina微博热门话题
>
> **②[List]**获得最新N个数据 或 某个分类的最新数据
>
> **③[String]**计数器应用
>
> **④[Set]**sns(social network site)获得共同好友
>
> **⑤[Set]**防攻击系统(ip判断)黑白名单等等


## 3、对比memcached

> ①Redis不仅仅支持简单的k/v类型的数据，同时还提供list，set，zset，hash等数据结构的存储。
>
> ②Redis支持master-slave(主—从)模式应用。
>
> ③Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用。
>
> ④Redis单个value存储string的最大限制是512MB， memcached只能保存1MB的数据
>
> ⑤redis是单核，memcached是多核
>

​	由于redis只能使用单核，而memcached可以使用多核，所以在比较上，平均每一个核上redis在储存小数据时比memcached性能更高。而却100K以上数据中，memcached性能要高于redis，虽然redis最近也在储存大数据的性能上进行优化，但是比起memcached还是有点逊色。结论是无论你使用那个，每秒处理请求的次数都不会成为瓶颈。

你需要关注内存使用率。对于key-vlaue这样简单的数据储存，memcached的内存使用率更高，如果采用hash结构，redis的内存使用率会更高，当然这都依赖于具体的应用场景。

## 案例使用

## 主从模式

缓存集群架构示意图

![wps125](assets/wps125.jpg)

## TODO
