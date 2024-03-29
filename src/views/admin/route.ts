import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
import Admin from './Admin.vue';
export const adminRoute: RouteRecordRaw = {
  path: '/admin',
  component: LayoutAdmin,
  children: [
    {
      path: '',
      component: Admin,
    },
  ],
};

export default adminRoute;
