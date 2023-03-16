import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
 import Icons from './Icons.vue';
export const iconsRoute: RouteRecordRaw = {
  path: '/icons',
  component: LayoutAdmin,
  redirect:'icons/list',
  meta: {
    alive:false,
  },
  children: [
    {
      path: 'list',
      name: 'icons-default',
      component: Icons,
      meta: {
        title: "图标列表"
      }
    },
  ],
};

export default iconsRoute;
