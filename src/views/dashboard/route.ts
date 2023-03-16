import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
 import Dashboard from './Dashboard.vue';
export const dashboardRoute: RouteRecordRaw = {
  path: '/',
  component: LayoutAdmin,
  redirect:'/dashboard/',
  meta: {
    alive:false,
  },
  children: [
    {
      path: 'dashboard',
      name: 'dashboard-default',
      component: Dashboard,
      meta:{
        title:'--'
      }
    },
  ],
};

export default dashboardRoute;
