# today-admin

之前用Angular 开发管理系统，实用ng-alain 脚手架，很方便快速开发，现在实用vue 开发管理系统，试用了很多管理系统的模版，多少都有所缺陷，计划参考ng-alain 的设计，结合vue 的特点，开发一套管理系统模版。

today-admin 企业级中后台前端/设计解决方案脚手架，目标也非常简单，希望在Vue上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

## 主要技术栈为

| 名称                 | 版本  | 名称        | 版本   |
| ------------------- | ------ | --------------- | --------- |
| Vue                 | 3.2.x  | TypeScript      | 4.7.x  |
| Vite                | 4.0..x | element-plus    | 2.2.x |
| vue-router          | 4.1.x | Pinia           | 2.0.x  |
| vueuse              | 9.13.x |       |   |
| 详见 `package.json` | 😁    | 🥰          | 🤗     |


## 开发环境

| 名称 | 版本    | 名称    | 版本  |
| ---- | ------- | ------- | ----- |
| node | 16.19.x | npm     | 8.19.x |
| pnpm | 7.18.x   | macos | 13    |


## 目录结构

```
├── LICENSE
├── README.md
├── auto-imports.d.ts
├── components.d.ts
├── docs
├── env.d.ts
├── index.html
├── mock
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── favicon.ico
│   └── logo.png
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── img
│   │   └── svg
│   ├── components
│   │   └── icons
│   ├── layout
│   │   ├── admin
│   │   │   ├── LayoutAdmin.vue
│   │   │   └── components
│   │   │       ├── AsideContent.vue
│   │   │       └── HeaderContent.vue
│   │   ├── basic
│   │   └── passport
│   │       └── LayoutPassport.vue
│   ├── main.ts
│   ├── plugins
│   ├── router
│   ├── stores
│   ├── style
│   ├── types
│   │   └── app.d.ts
│   ├── util
│   │   └── index.ts
│   └── views
│       ├── about
│       ├── auth
│       ├── dashboard
│       │   ├── Dashboard.vue
│       │   └── route.ts
│       ├── exception
│       │   └── Exception.vue
│       ├── icons
│       │   ├── Icons.vue
│       │   ├── logo.svg
│       │   └── route.ts
│       └── login
│           └── login.vue
├── stylelint.config.cjs
├── tsconfig.app.json
├── tsconfig.config.json
├── tsconfig.json
├── tsconfig.vitest.json
└── vite.config.ts

```
## 参与贡献，代码提交

- feat: 新功能
- fix: 修复 Bug
- docs: 文档修改
- perf: 性能优化
- revert: 版本回退
- ci: CICD集成相关
- test: 添加测试代码
- refactor: 代码重构
- build: 影响项目构建或依赖修改
- style: 不影响程序逻辑的代码修改
- chore: 不属于以上类型的其他类型(日常事务)


