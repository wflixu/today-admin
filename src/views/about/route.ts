import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
import About from './About.vue';
export const adminRoute: RouteRecordRaw = {
  path: '/about',
  component: LayoutAdmin,
  children: [
    {
      path: '',
      component: About,
    },
  ],
};

export default adminRoute;