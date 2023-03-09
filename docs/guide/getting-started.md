# 介绍
## 什么是 today-admin

today-admin 企业级中后台前端/设计解决方案脚手架，目标也非常简单，希望在Vue上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

## 开发进度

[ x ] 布局

[ - ]  mock

[ - ]  登陆注销

[ - ]  权限

[ - ]  

[]
## 环境搭建

Vue 开发环境至少需要安装 Node.js(Node.js 内置了 npm 无须单独安装）、VSCode编辑器，其中 Node.js 建议安装 LTS 版本，安装完成后可以通过终端窗口中运行：

```
node -v # 查看 Node.js 当前版本
npm -v # 查看 npm  当前版本

```

NPM 默认从国外源来下载包信息，鉴于国内环境因素，在开始下一步前先设定淘宝提供镜像：

```
npm config set registry https://registry.npmmirror.com
npm config set sass_binary_site https://npmmirror.com/mirrors/node-sass
# restore
npm config delete registry
npm config delete sass_binary_site

```


