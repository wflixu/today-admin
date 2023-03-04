import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
 import Dashboard from './Dashboard.vue';
export const dashboardRoute: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: LayoutAdmin,
  children: [
    {
      path: '',
      name: 'dashboard-default',
      component: Dashboard,
    },
  ],
};

export default dashboardRoute;
