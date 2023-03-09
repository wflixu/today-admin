export default {
    title: 'Today-admin',
    description: 'A admin ',
    base:'/today-admin/',
    themeConfig: {
    nav: [
      { text: '文档', link: '/guide/getting-started' },
      { text: '组件', link: '/components' },
      {
        text: 'today-admin 库',
        items: [
          { text: '主题系统', link: '/item-1' },
          { text: '用户认证', link: '/item-2' },
          { text: '动态表单', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: '入门',
        collapsed: true,
        items: [
          { text: '介绍', link: '/guide/getting-started' },
          { text: '体系结构', link: '/guide/architecture' },
        ]
      },
      {
        text: '常用功能',
        collapsed: true,
        items: [
          { text: 'mock', link: '/function/mock' },
        ]
      },
    ]
  }
  }