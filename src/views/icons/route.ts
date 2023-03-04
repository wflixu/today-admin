import type { RouteRecordRaw } from 'vue-router';
import LayoutAdmin from '@/layout/admin/LayoutAdmin.vue';
 import Icons from './Icons.vue';
export const iconsRoute: RouteRecordRaw = {
  path: '/icons',
  name: 'icons',
  component: LayoutAdmin,
  children: [
    {
      path: '',
      name: 'icons-default',
      component: Icons,
    },
  ],
};

export default iconsRoute;
