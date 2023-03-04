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
  </div>
  <div class="center">cneter</div>
  <div class="right">right</div>
</template>

<script setup lang="ts">
import { useLayoutAdminStore } from '@/stores/layout';
import { Expand, Fold } from '@element-plus/icons-vue';
import { ref } from 'vue';

const layoutStore = useLayoutAdminStore();

const expand = ref(layoutStore.sidebarExpanded);

const onToggle = () => {
  expand.value = !expand.value;
  layoutStore.sidebarExpanded = expand.value;
};
</script>

<style scoped lang="postcss">
.left {
  .toggle {
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
</style>
