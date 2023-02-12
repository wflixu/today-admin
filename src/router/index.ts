
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

// 自动导入modules文件夹下所有ts文件
const modules = import.meta.glob('./../views/**/route.ts', { eager: true });

// 路由暂存
const routeModuleList: Array<RouteRecordRaw> = [];


Object.keys(modules).forEach((key:string) => {
  // @ts-ignore
  const mod = modules[key].default || {};  
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});


export const asyncRouterList: Array<RouteRecordRaw> = [...routeModuleList];

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },

  {
    path: '/:w+',
    name: '404Page',
    redirect: '/result/404',
  },
];


export const allRoutes = [...defaultRouterList, ...asyncRouterList];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
})

export default router
