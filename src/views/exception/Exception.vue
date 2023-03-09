<template>
  <div>
    <el-empty :image="errorMeta.url" :description="errorMeta.description"> </el-empty>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import result404 from '@/assets/svg/result-404.svg?url';
import result500 from '@/assets/svg/result-500.svg?url';
import resultWifi from '@/assets/svg/result-wifi.svg?url';

const resultMap: Record<string, { url: string; description: string }> = {
  result404: {
    url: result404,
    description: '页面不见了',
  },
  result500: {
    url: result500,
    description: '服务器发生了错误',
  },
  resultwifi: {
    url: resultWifi,
    description: '请检查网络',
  },
};
const route = useRoute();

const errorMeta = computed(() => {
  let key: string = route.params.pathMatch[0] ?? '';
  let resultMessage = resultMap['result' + key] ?? {
    url: result404,
    description: '页面不见了',
  };
  return resultMessage;
});
</script>

<style scoped></style>
