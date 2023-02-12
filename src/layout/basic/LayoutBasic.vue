<template>
  <div class="layout-basic">
    <div class="header">
      <router-link to="/home">Home</router-link>
      <router-link to="/test">Test</router-link>
    </div>
    <div class="nav">

    </div>
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <keep-alive :max="10" :include="['HomeView']">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

onMounted(() => {
  console.log('basic layout ---- init');

})
// defineOptions({
//   name:'LayoutBasic'
// })
</script>

<style scoped lang="postcss">

</style>
