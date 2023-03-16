<template>
  <div class="header-user">
    <el-dropdown @command="onSelect"
      ><span class="title">{{ userName }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="profile" :icon="Avatar">个人中心</el-dropdown-item>
          <el-dropdown-item :divided="true" command="logout" :icon="SwitchButton">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/stores/system';
import { computed } from 'vue';
import { SwitchButton, Avatar } from '@element-plus/icons-vue';
const systemStore = useSystemStore();

const userName = computed(() => {
  return systemStore.user.nickName;
});
const onSelect = (command: string) => {
  console.log(command);
};
</script>

<style scoped lang="postcss">
.header-user {
  display: inline-flex;
}
</style>
