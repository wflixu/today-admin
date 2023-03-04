<template>
  <el-container class="layout-admin">
    <el-aside class="aside" :width="asideWidth">
      <el-scrollbar>
        <el-menu
          :collapse="isCollapse"
          class="aside-menu"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon> <message /> </el-icon>
              <span> Navigator One </span>
            </template>
            <el-menu-item-group>
              <template #title>
                <span> Group 1 </span>
              </template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span> Navigator Two </span>
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon> <setting /> </el-icon>
              <span> Navigator Three </span>
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
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
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';
import HeaderContent from './components/HeaderContent.vue';
import { useLayoutAdminStore } from '@/stores/layout';

const layoutAdminStore = useLayoutAdminStore();
onMounted(() => {
  console.log('admin ---- layout init');
});

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
