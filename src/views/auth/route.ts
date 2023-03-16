import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
export const adminRoute: RouteRecordRaw = {
  path: '/auth',
  component: LayoutAdmin,
  redirect: '/auth/page',
  children: [
    {
      path: 'page',
      component: () => import('./AuthPage.vue'),
      meta: {
        title: '页面权限'
      }
    },
    {
      path: 'role',
      component: () => import('./AuthRole.vue'),
      meta:{
        title:'角色权限'
      }
    },
  ],
};

export default adminRoute;
