<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-06 15:16:56
 * @LastEditTime: 2021-12-06 15:24:01
 * @Description: Modify here please
-->
<script setup>
import { ref } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="h-full layouts">
    <div
      class="fixed top-0 z-30 w-full h-full overflow-scroll navbar md:overflow-hidden md:sticky"
    >
      <TheHeader />
    </div>
    <h2 class="py-10 text-5xl text-center text-red-400">404页面</h2>
    <TheFooter />
  </div>
</template>
<style scoped>
.layouts .navbar::-webkit-scrollbar {
  display: none;
}
</style>
