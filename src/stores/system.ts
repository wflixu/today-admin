
import { treeFindNode, treeFindPath } from '@/util';
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
    ]  as  MenuItem[],
    activeMenu:'dashboard',
    openedMenu:[{
      title:'首页',
      id:'dashboard'
    }],
    user:{
      nickName:'张三'
    }
  }),
  getters: {
    activeRoutePath:(state) => {
      if(!state.activeMenu || state.menus?.length<1 ) {
        return '';
      }
      return treeFindPath(state.menus,state.activeMenu);
    }
  },
  actions: {
    addOpened(menu:{title:string,id:string}){
      let opened = this.openedMenu.find(item => item.id == menu.id);
       if(!opened) {
        this.openedMenu.push(menu );
       }
    }
  },
});


