<template>

    <div class="layout-admin">
        <div class="header">
        <router-link to="/home">Home</router-link>
        <router-link to="/test">Test</router-link>
      </div>
       <h1>layout adming</h1>

       <RouterView />
    </div>
</template>

<script setup lang="ts">import { onMounted } from 'vue';

onMounted(()=>{
  console.log('admin ---- layout init');
  
})
</script>

<style scoped>

</style>