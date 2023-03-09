<template>
  <el-scrollbar>
    <el-menu
      @select="onSelect"
      :collapse="isCollapse"
      :default-active="defaultActive"
      class="aside-menu"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <template v-for="menu in menus">
        <el-sub-menu v-if="menu.children" :index="menu.location">
          <template #title>
            <el-icon>
              <component :is="menu.icon"></component>
            </el-icon>
            <span>{{ menu.title }}</span>
          </template>
          <template v-for="subMenu in menu.children">
            <el-sub-menu v-if="subMenu.children" :index="subMenu.location">
              <template #title>
                <span>
                  {{ subMenu.title }}
                </span>
              </template>
            </el-sub-menu>
            <el-menu-item v-else :index="subMenu.location">{{ subMenu.title }}</el-menu-item>
          </template>
        </el-sub-menu>

        <el-menu-item v-else :index="menu.location">
          <template #title>
            <el-icon>
              <component :is="menu.icon"></component>
            </el-icon>
            <span>
              {{ menu.title }}
            </span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useLayoutAdminStore } from '@/stores/layout';
import { useSystemStore, type MenuItem } from '@/stores/system';
import { useRouter } from 'vue-router';

const router = useRouter();
const layoutAdminStore = useLayoutAdminStore();
const systemStore = useSystemStore();
console.log('---init aside: ', layoutAdminStore.activeMenu);
const isCollapse = computed(() => {
  return !layoutAdminStore.sidebarExpanded;
});
const defaultActive = computed(() => {
  return layoutAdminStore.activeMenu;
});
const onSelect = (index: any, indexPath: string[]) => {
  const uri = indexPath.reduce((pre, cur) => {
    return pre + cur;
  }, '');
  layoutAdminStore.activeMenu = index;
  console.log(index, indexPath, uri, router.getRoutes());
  router.push(uri);
};
const menus = computed(() => {
  return systemStore.menus as MenuItem[];
});
</script>

<style scoped></style>
