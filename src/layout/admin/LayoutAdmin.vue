<template>
  <el-container class="layout-admin">
    <el-aside class="aside" :width="asideWidth">
      <AsideContent />
    </el-aside>

    <el-container class="content">
      <el-header class="header">
        <HeaderContent></HeaderContent>
        <!-- <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div> -->
      </el-header>
      <firefox-tabs
        class="mt-2"
        v-model="activePage"
        :items="tabItems"
        @select="onSelectPageTab"
        @close="onClosePageTab"
      />
      <el-main class="main">
        <el-scrollbar :view-style="{ padding: '16px' }">
          <router-view v-slot="{ Component, route }">
            <template v-if="route.meta.alive">
              <keep-alive :max="10" :include="['LayoutBasic']">
                <component :is="Component" :key="route.path" />
              </keep-alive>
            </template>
            <component v-else :is="Component" :key="route.path" />
          </router-view>
        </el-scrollbar>
      </el-main>
      <el-footer height="32px" v-if="showFooter"> footer </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

import HeaderContent from './components/HeaderContent.vue';
import AsideContent from './components/AsideContent.vue';
import { useLayoutAdminStore } from '@/stores/layout';
import { useSystemStore } from '@/stores/system';
import router from '@/router';
const layoutAdminStore = useLayoutAdminStore();
const systemStore = useSystemStore();

const activePage = ref(systemStore.activeMenu);
const tabItems = computed(() => {
  return systemStore.openedMenu;
});

watch(
  () => systemStore.activeMenu,
  (newVal) => {
    activePage.value = newVal;
  },
);
onMounted(() => {
  console.log('admin ---- layout init');
});

const onSelectPageTab = (id: string) => {
  systemStore.activeMenu = id;
  console.log(systemStore.activeRoutePath);
  if (systemStore.activeRoutePath) {
    router.push(systemStore.activeRoutePath);
  }
  console.log(id);
};
const onClosePageTab = (id: string) => {
  let index = systemStore.openedMenu.findIndex((item) => item.id == id);
  if (index > -1) {
    systemStore.openedMenu.splice(index, 1);
  }
  if (id == systemStore.activeMenu) {
    if (systemStore.openedMenu[index]) {
      onSelectPageTab(systemStore.openedMenu[index].id);
    } else if (systemStore.openedMenu[index - 1]) {
      onSelectPageTab(systemStore.openedMenu[index - 1].id);
    }
  }
};

const asideWidth = computed(() => {
  return layoutAdminStore.sidebarExpanded ? '200px' : '64px';
});

const isCollapse = computed(() => {
  return !layoutAdminStore.sidebarExpanded;
});
const showFooter = computed(() => {
  return layoutAdminStore.showFooter;
});
</script>

<style scoped lang="postcss">
.layout-admin {
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    .header {
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }
    .main {
      padding: 0;
    }
  }
  .el-aside {
    color: var(--el-text-color-primary);
    background: #545c64;
    .aside-meun :not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
  .el-menu {
    border-right: none;
  }
  .toolbar {
    right: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
