import { defineStore } from 'pinia'

export const useLayoutAdminStore = defineStore({
  id: 'layout-admin',
  state: () => ({
    sidebarExpanded: true,
    showFooter:false,
    activeMenu:'/dashboard'
  }),
  getters: {
   
  },
  actions: {
    
  }
})