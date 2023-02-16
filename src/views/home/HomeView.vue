<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
});

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  console.log('publishedBooksMessage');
  return author.books.length > 0 ? 'Yes' : 'No';
});
// 函数
const publishedBooksMessage2 = function () {
  console.log('publishedBooksMessage2');
  return author.books.length > 0 ? 'Yes' : 'No';
};
const show = ref(true);

const toggle = () => {
  show.value = !show.value;
};
const onAdd = () => {
  author.books.push('Vue 5 - The Mystery');
};
</script>

<template>
  <main>
    <h1>home</h1>
    <button @click="toggle">toggle</button>
    <button @click="onAdd">add</button>
    <hr />
    <p>{{ author.name }} has published books:</p>
    <template v-if="show">
      <span>{{ publishedBooksMessage }}</span>
      ||
      <span>{{ publishedBooksMessage2() }}</span>
    </template>
    <!-- <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span> -->
  </main>
</template>

<style scoped lang="postcss"></style>
