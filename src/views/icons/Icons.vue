<template>
  <div class="icons">
    <h1>icons search pages</h1>
    <div>
      <el-input v-model="icon"></el-input>
    </div>
    <div class="list">
      <div class="list-item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as icons from '@element-plus/icons-vue';
import { computed, ref } from 'vue';

const icon = ref('');

const iconItems = computed(() => {});
</script>

<style scoped lang="postcss">
.icons {
  .list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    border-top: 1px solid #aaaaaa;
    border-left: 1px solid #aaaaaa;
    .list-item {
      border-right: 1px solid #aaaaaa;
      border-bottom: 1px solid #aaaaaa;
    }
  }
}
</style>
