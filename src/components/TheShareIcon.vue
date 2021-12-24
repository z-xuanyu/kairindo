<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-07 11:35:08
 * @LastEditTime: 2021-12-07 11:49:28
 * @Description: Modify here please
-->
<script setup>
defineProps({
  bgColor: {
    type: String,
    default: "bg-white",
  },
});
</script>

<template>
  <div class="flex justify-center w-full py-10 space-x-10" :class="[bgColor]">
    <img
      class="w-10 h-10"
      src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/icon_insta.png"
      alt=""
    />
    <img
    class="w-10 h-10"
      src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/icon_twitter.png"
      alt=""
    />
    <img
    class="w-10 h-10"
      src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/icon_facebook.png"
      alt=""
    />
  </div>
</template>

<style scoped></style>
