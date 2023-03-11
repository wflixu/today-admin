<template>
  <div class="tb-firefox-tabs" :class="{ overflow: overflow }">
    <el-icon size="18" class="scroller left" @click="onScroll(1)"> <ep-arrowleft /> </el-icon>

    <div class="tab-list" ref="tabList">
      <div
        class="tb-tab"
        v-for="item in items"
        :key="item.id"
        :class="{ active: item.id == selectedTab }"
        @click="onSelect(item)"
      >
        <span> {{ item.title }} </span>
        <el-icon size="16" class="close" @click.stop="onClose(item)"> <ep-close /> </el-icon>
      </div>
    </div>
    <el-icon size="18" class="scroller right" @click="onScroll(-1)">
      <ep-arrowright />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, ref } from 'vue';
import { useLayoutAdminStore } from '@/stores/layout';

const props = defineProps({
  items: {
    type: Object,
    default: function () {
      return [];
    },
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (e: 'close', id: string): void;
  (e: 'modelValue:update', value: string): void;
  (e: 'select', value: string): void;
}>();

const selectedTab = ref(props.modelValue);
const tabList = ref(null);

interface TabItem {
  title: string;
  id: string;
  [key: string]: any;
}

watch(
  () => props.modelValue,
  (newVal: string) => {
    selectedTab.value = newVal;
  },
);

const overflow = computed(() => {
  let res = false;
  if (tabList.value) {
    const div = tabList.value as unknown as HTMLDivElement;
    console.log(div.scrollWidth, div.clientWidth);
    res = div.scrollWidth > div.clientWidth;
  }
  return res;
});

const onSelect = (item: TabItem) => {
  emit('modelValue:update', item.id);
  emit('select', item.id);
};
const onScroll = (direction: 1 | -1) => {
  let dom = tabList.value as unknown as HTMLDivElement;
  dom.scrollTo({
    left: (dom?.scrollLeft ?? 0) + 100 * direction,
    behavior: 'smooth',
  });
};

const onClose = (tab: TabItem) => {
  emit('close', tab.id);
};
</script>

<style scoped lang="postcss">
.tb-firefox-tabs {
  position: relative;
  min-height: 44px;
  border: 1px solid #eeeeee;
  &.overflow {
    padding: 0 20px;
    .scroller {
      display: inline-flex;
    }
  }
  .scroller {
    position: absolute;
    bottom: 0;
    z-index: 10;
    display: none;
    width: 20px;
    height: 100%;
    background-color: white;
    &:hover {
      cursor: pointer;
    }
    &.left {
      left: 0;
      box-shadow: 4px 0 4px #aaaaaa;
    }
    &.right {
      right: 0;
      box-shadow: -4px 0 8px #dddddd;
    }
  }
  .tab-list {
    display: flex;
    gap: 4px;
    padding: 4px 0;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .tb-tab {
    position: relative;
    flex: 1;
    min-width: 60px;
    max-width: 246px;
    padding: 5px 10px;
    padding-right: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 6px;
    &:hover {
      background-color: #d9d9dd;
    }
    .close {
      position: absolute;
      right: 4px;
      width: 24px;
      height: 24px;
      border-radius: 4px;
      &:hover {
        background-color: #c6c6ca;
      }
    }
    &.active {
      font-weight: 600;
      box-shadow: 0 0 5px #999999;
    }
  }
}
</style>
