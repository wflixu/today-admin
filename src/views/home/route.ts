import type { RouteRecordRaw } from "vue-router";
import HomeView from "./HomeView.vue";
import  LayoutBasic from '@/layout/basic/LayoutBasic.vue';
export const homeRoute: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    component: LayoutBasic,
    redirect:'/home',
    children:[
      {
        path:'home',
        name:"Home",
        component: HomeView
      }
    ]
}

export default homeRoute;