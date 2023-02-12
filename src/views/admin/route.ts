import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
import Admin from './Admin.vue';
export const adminRoute: RouteRecordRaw = {
  path: '/',
  name: 'Admin',
  component: LayoutAdmin,
  redirect: '/admin',
  children: [
    {
      path: 'admin',
      name: 'admin',
      component: Admin,
    },
  ],
};

export default adminRoute;
