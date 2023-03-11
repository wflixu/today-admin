<template>
  <div class="tb-chrome-tabs bd">
    <div class="tb-tab">首页</div>
    <div class="tb-tab active">图标</div>
    <div class="tb-tab">权限</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.tb-chrome-tabs {
  display: flex;
  height: 42px;
  .tb-tab {
    position: relative;
    padding: 10px 15px;
    cursor: pointer;
    background-color: red;
    border-radius: 12px 12px 0 0;
    transition: 0.2s;
    &::before,
    &::after {
      position: absolute;
      bottom: 0;
      width: 20px;
      height: 20px;
      content: '';
      border-radius: 100%;
      box-shadow: 0 0 0 40px blue;
      transition: 0.2s;
    }
    &::before {
      left: -20px;
      clip-path: inset(50% -10px 0 50%);
    }
    &::after {
      right: -20px;
      clip-path: inset(50% 50% 0 -10px);
    }
  }
}
</style>
