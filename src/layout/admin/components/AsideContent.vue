<template>
  <el-scrollbar>
    <el-menu
      @select="onSelect"
      :collapse="isCollapse"
      :default-active="selected"
      class="aside-menu"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <template v-for="menu in menus">
        <el-sub-menu v-if="menu.children" :index="menu.id">
          <template #title>
            <el-icon>
              <component :is="menu.icon"></component>
            </el-icon>
            <span>{{ menu.title }}</span>
          </template>
          <template v-for="subMenu in menu.children">
            <el-sub-menu v-if="subMenu.children" :index="subMenu.id">
              <template #title>
                <span>
                  {{ subMenu.title }}
                </span>
              </template>
            </el-sub-menu>
            <el-menu-item v-else :index="subMenu.id">{{ subMenu.title }}</el-menu-item>
          </template>
        </el-sub-menu>
        <template v-else>
          <el-menu-item :index="menu.id">
            <!-- <el-icon v-if="menu.icon"><Odometer /></el-icon> -->
            <template #title>
              <el-icon>
                <component :is="menu.icon"></component>
              </el-icon>
              <span>
                {{ menu.title }}
              </span>
            </template>
          </el-menu-item>
        </template>
      </template>
      <el-sub-menu index="1">
        <template #title>
          <el-icon> <message /> </el-icon>
          <span> Navigator One </span>
        </template>
        <el-menu-item-group>
          <template #title>
            <span> Group 1 </span>
          </template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>Option4</template>
          <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span> Navigator Two </span>
        </template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="2-4">
          <template #title>Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon> <setting /> </el-icon>
          <span> Navigator Three </span>
        </template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="3-4">
          <template #title>Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Menu as IconMenu, Message, Setting, Odometer } from '@element-plus/icons-vue';
import { useLayoutAdminStore } from '@/stores/layout';
import { useSystemStore } from '@/stores/system';
const layoutAdminStore = useLayoutAdminStore();
const systemStore = useSystemStore();

const isCollapse = computed(() => {
  return !layoutAdminStore.sidebarExpanded;
});

const selected = ref<string>('dashboard');
const onSelect = (index: any, indexPath: any) => {
  console.log(index, indexPath);
};
const menus = computed(() => {
  return systemStore.menus;
});
</script>

<style scoped></style>
