<template>
  <el-icon size="20" class="full-screen" @click="toggle">
    <FullScreen />
  </el-icon>
</template>

<script setup lang="ts">
import { FullScreen } from '@element-plus/icons-vue';
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<style scoped lang="postcss">
.full-screen {
  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
