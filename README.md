# 时间流

项目灵感来源于一本书《柳比歇夫奇特的一生》，读书笔记点此。当时想实践一下发现纸笔确实不太好用，就预想实现一个能够快速记录，自动计算时长，还能够统计的小软件。

[前端地址点此](https://github.com/lixiang19/timeRiver)

## 技术栈

本项目前后端完全分离，前端将打包成静态文件，只通过RESTful api与后端通信，后端鉴权使用jwt。

前端：vue+vuex+vue-router、axios、vuetifyjs

后端：koa2、mongodb、mongoose

## 项目地址

暂未上线，准备改成pwa后再上。
## todo
1. control层与service层耦合严重，应该一个路由对于一个control，一个control调用单个或多个service。service要面向资源来写。
2. 后端验证要快点加上。
