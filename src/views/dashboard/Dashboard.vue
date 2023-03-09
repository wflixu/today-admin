<template>
  <div>
    <h1>dashboard</h1>
    <div>
      <button @click="onTest">test</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const onTest = () => {
  window
    .fetch('/api/user')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
</script>

<style scoped></style>
