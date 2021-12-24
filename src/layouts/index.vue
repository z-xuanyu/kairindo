<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-01 14:26:02
 * @LastEditTime: 2021-12-07 15:32:30
 * @Description: Modify here please
-->
<script setup>
import { computed } from 'vue';
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { useAppStoreWithOut } from '/@/store/modules/app';

const appStore = useAppStoreWithOut();
const isShow = computed(()=> appStore.getMenuStatus)
</script>

<template>
  <div
    class="h-full layouts"
  >
    <div
      :class="isShow? 'h-full': ''"
      class="fixed top-0 z-30 w-full overflow-y-scroll navbar md:sticky"
    >
      <TheHeader />
    </div>
    <router-view />
    <TheFooter />
  </div>
</template>
<style scoped>
.layouts .navbar::-webkit-scrollbar {
  display: none;
}

/* pc端 */
@media (min-width: 768px) {
  .navbar{
    overflow: inherit;
  }
}
</style>
