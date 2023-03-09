
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
import Exception from '@/views/exception/Exception.vue'
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
    path: '/',
    name: 'Root',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },

  {
     path: '/:pathMatch(.*)*', 
     name: 'ExceptionParent', 
     component: LayoutAdmin,
     redirect:'/exception/' ,
     children:[
      {
        path: '',
        name: 'Exception', 
        component: Exception
      }
     ] 
  },
];


export const allRoutes = [...defaultRouterList, ...asyncRouterList];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
  strict:true,
  sensitive:true,
})

export default router
