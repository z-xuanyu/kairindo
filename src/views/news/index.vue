<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-02 17:20:35
 * @LastEditTime: 2021-12-07 14:37:30
 * @Description: Modify here please
-->
<script setup>
  import { useRouter } from 'vue-router';
  import TheShareIcon from '/@/components/TheShareIcon.vue';

  const router = useRouter();

  function goDetail(id){
    router.push(`/news/detail/${id}`)
  }
</script>
<template>
  <h1 class="py-32 text-5xl text-center text-gray-500">NEWS</h1>

  <div class="max-w-5xl m-auto news-wrapper">
    <div class="px-10 md:px-0">
      <span class="text-2xl text-gray-500">ニュース一覧</span>
      <select class="p-1 ml-10 text-gray-600 border">
        <option value="1">CATEGORIES</option>
        <option value="1">CATEGORIES</option>
      </select>
    </div>
    <div class="flex flex-wrap px-10 mt-10 md:px-0">
      <div class="w-full px-1 mb-6 md:mb-2 md:w-1/4" v-for="item in 20" :key="item" v-sr-re-box="{ reset: false }">
        <div class="overflow-hidden rounded-sm shadow-sm news-bg-color" @click="goDetail(item)">
          <img
            class="object-cover w-full cursor-pointer h-36"
            src="http://www.kairindo.co.jp/wp/wp-content/uploads/2021/11/img04-238x160.jpg"
            alt=""
          />
          <p class="h-40 p-4 cursor-pointer">
            深川醗酵所
            　11月8日（月）よりランチ営業スタート！〜醗酵をテーマにしたカラダにやさしいランチ〜
          </p>
          <p class="p-2 text-sm border-t border-gray-400">
              <span>2021年11月08日</span>
              <span class="ml-5">お知らせ</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 分頁 -->
    <div class="mt-40 mb-10 space-x-2 text-center">
        <button v-for="item in 4" :key='item' class="w-10 h-10 text-white bg-gray-600" :class="item == 3 ? 'mr-6': ''">{{ item }}</button>
    </div>
    <TheShareIcon />
  </div>
</template>

<style scoped>
    .news-bg-color {
        background-color: #f2f0e9;
    }
</style>
