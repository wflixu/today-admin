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
        <el-sub-menu v-if="menu.children" :index="menu.id">
          <template #title>
            <el-icon>
              <component :is="menu.icon"></component>
            </el-icon>
            <span>{{ menu.title }}</span>
          </template>
          <template v-for="subMenu in menu.children">
            <el-sub-menu v-if="subMenu.children" :index="subMenu.id">
              <template #title>
                <span>
                  {{ subMenu.title }}
                </span>
              </template>
            </el-sub-menu>
            <el-menu-item v-else :index="subMenu.id">{{ subMenu.title }}</el-menu-item>
          </template>
        </el-sub-menu>

        <el-menu-item v-else :index="menu.id">
          <el-icon>
            <component :is="menu.icon"></component>
          </el-icon>
          <template #title>
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
console.log('---init aside: ', systemStore.activeMenu);
const isCollapse = computed(() => {
  return !layoutAdminStore.sidebarExpanded;
});
const defaultActive = computed(() => {
  return systemStore.activeMenu;
});
const onSelect = (index: any, indexPath: string[]) => {
  let uri = '';
  let current;
  indexPath.reduce((pre: MenuItem[], cur: string) => {
    current = pre.find((item) => item.id == cur);
    if (current) {
      uri += current.location;
      return current.children ?? [];
    }
    return [];
  }, systemStore.menus as MenuItem[]);
  systemStore.activeMenu = index;
  if (current) {
    systemStore.addOpened(current);
  }
  router.push(systemStore.activeRoutePath);
};
const menus = computed(() => {
  return systemStore.menus as MenuItem[];
});
</script>

<style scoped></style>
