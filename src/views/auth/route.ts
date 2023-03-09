import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
export const adminRoute: RouteRecordRaw = {
  path: '/auth',
  component: LayoutAdmin,
//   redirect: '/auth/page',
  children: [
    {
      path: 'page',
      component: () => import('./AuthPage.vue'),
    },
    {
      path: 'role',
      component: () => import('./AuthRole.vue'),
    },
  ],
};

export default adminRoute;
