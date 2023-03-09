<template>
  <div class="icons">
    <h1 class="header-1">element-plus 内置图标</h1>
    <div>
      <el-input v-model="icon" placeholder="请输入图名名称"></el-input>
    </div>
    <template v-if="iconItems?.length < 1"> <el-empty description="没有" /></template>
    <div class="list mt-4" v-else>
      <div class="list-item" v-for="item in iconItems" @click="onClick(item.tip)">
        <el-icon size="24">
          <component :is="item.comp" />
        </el-icon>
        <el-tooltip :content="item.tip">
          <span class="name">
            {{ item.name }}
          </span>
        </el-tooltip>
      </div>
    </div>

    <h1 class="header-1">svg 图标</h1>
    <p class="my-3">vite-svg-loader 插件，可以直接引用svg 文件作为图标组件, 效果如下:</p>
    <div>
      <el-icon size="24">
        <Logo />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as icons from '@element-plus/icons-vue';
import { computed, ref } from 'vue';
import { useClipboard } from '@vueuse/core';

import { ElMessage } from 'element-plus';
import Logo from './logo.svg';
const icon = ref('');
console.log(icons);
const iconItems = computed(() => {
  return Object.entries(icons)
    .map(([key, val]) => {
      return {
        name: key,
        comp: val,
        tip: `
        <el-icon size="18">
          < ep-${key.toLocaleLowerCase()}/>
        </el-icon>
        `,
      };
    })
    .filter((item) => {
      return icon.value?.length > 0 ? item.name.indexOf(icon.value) > 0 : true;
    });
});
const { text, copy, copied, isSupported } = useClipboard();
const onClick = (source: string) => {
  copy(source);
  ElMessage({ message: '拷贝成功！', type: 'success' });
};
</script>

<style scoped lang="postcss">
.icons {
  .header-1 {
    margin: 20px 0;
    font-size: 32px;
    font-weight: bold;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #aaaaaa;
    border-left: 1px solid #aaaaaa;
    .list-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 160px;
      height: 100px;
      padding: 12px;
      border-right: 1px solid #aaaaaa;
      border-bottom: 1px solid #aaaaaa;
      &:hover {
        cursor: pointer;
      }
      .name {
      }
    }
  }
}
</style>
