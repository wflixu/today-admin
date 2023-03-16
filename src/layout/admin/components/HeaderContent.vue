<template>
  <div class="left">
    <span @click="onToggle" class="toggle">
      <el-icon v-if="expand">
        <Fold />
      </el-icon>
      <el-icon v-else>
        <Expand />
      </el-icon>
    </span>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="crumb in breadItems" :to="{ path: crumb.path }">{{ crumb.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="center"></div>
  <div class="right">
    <FullScreen class="mr-3" />
    <HeaderUser />
  </div>
</template>

<script setup lang="ts">
import { useLayoutAdminStore } from '@/stores/layout';
import { Expand, Fold } from '@element-plus/icons-vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import FullScreen from './FullScreen.vue';
import HeaderUser from './HeaderUser.vue';

const route = useRoute();
const layoutStore = useLayoutAdminStore();

const expand = ref(layoutStore.sidebarExpanded);

const onToggle = () => {
  expand.value = !expand.value;
  layoutStore.sidebarExpanded = expand.value;
};

console.log(route.matched);
const breadItems = computed(() => {
  let res = route.matched
    .filter((item) => {
      return !item.redirect && item.path != '/dashboard';
    })
    .map((item) => {
      return {
        title: item.meta.title ?? '',
        path: item.path,
      };
    });
  console.log(res);

  return res;
});
</script>

<style scoped lang="postcss">
.left {
  display: inline-flex;
  align-items: center;
  .toggle {
    display: inline-flex;
    align-items: center;
    margin-right: 12px;
    font-size: 20px;
    &:hover {
      color: var(--el-color-primary);
      cursor: pointer;
    }
  }
}
.center {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.right {
  display: inline-flex;
  align-items: center;
}
</style>
