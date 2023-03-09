import { defineStore } from 'pinia';

export interface MenuItem {
        title: string,
        id: string,
        location: string,
        icon: string,
        children: MenuItem[] | null,
}

export const useSystemStore = defineStore({
  id: 'system',
  state: () => ({
    menus: [
      {
        title: '首页',
        id: 'dashboard',
        location: '/dashboard',
        children: null,
        icon: 'ep-odometer',
      },
      {
        title: '图标',
        id: 'icons',
        location: '/icons',
        children: null,
        icon: 'ep-brush',
      },
      {
        title: '权限',
        id: 'auth',
        location: '/auth',
        icon: 'ep-lock',
        children: [
          {
            title: '页面权限',
            id:'auth-page',
            location:'/page'
          },
          {
            title: '角色权限',
            id:'auth-role',
            location:'/role'
          }
        ],
      },
    ] ,
  }),
  getters: {},
  actions: {},
});