<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-01 14:37:56
 * @LastEditTime: 2021-12-24 09:55:55
 * @Description: Modify here please
-->
<script setup>
import { computed } from "vue";
import { useAppStoreWithOut } from "/@/store/modules/app";

const appStore = useAppStoreWithOut();

// 如果使用计算属性绑定v-model。需要设置get set
const isShow = computed({
  get: () => appStore.getMenuStatus,
  set: () => appStore.getMenuStatus,
});

function handleTab() {
  appStore.changeMenuStatus();
}
</script>
<template>
  <div
    class="sticky top-0 flex justify-between w-full px-6 py-4 bg-white border-b md:py-0"
  >
    <!-- logo -->
    <a href="#">
      <img
        width="150"
        class="md:mt-7"
        src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/logo0.png"
      />
    </a>
    <div class="hidden md:block">
      <ul class="flex space-x-16 text-gray-500">
        <li class="py-7"><a href="#/about">ABOUT</a></li>
        <li class="py-7"><a href="#/product">PRODUCTS</a></li>
        <li class="py-7"><a href="#/news">NEWS</a></li>
        <li class="py-7"><a href="#/contact">CONTACT</a></li>
        <li class="shop-sub__menu py-7">
          <a href="#/shop">ONLINE SHOP</a>
          <div class="hidden sub__menu-wrapper">
            <ul
              class="absolute left-0 flex justify-end w-screen px-20 py-8 space-x-16 subMenu mt-7 menu-sub-bg"
            >
              <li><a href="">Sake Shop海琳堂オンラインショップ </a></li>
              <li><a href="">海琳堂yahoo!店 </a></li>
              <li><a href="">海琳堂Amazon店 </a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="relative menu-wrapper md:hidden">
      <input
        class="absolute z-20 w-full h-full opacity-0 cursor-pointer"
        @click="handleTab"
        v-model="isShow"
        type="checkbox"
        for="menuToggle"
      />
      <button class="space-y-1" id="menuToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  <div
    class="absolute w-full duration-500 ease-in-out transform bg-white m-menu md:hidden"
    :class="isShow ? '' : '-translate-y-full opacity-0'"
  >
    <ul class="text-xl text-center text-gray-500 divide-y">
      <li class="py-5"><a @click="handleTab" href="#/about">ABOUT</a></li>
      <li class="py-5"><a @click="handleTab" href="#/product">PRODUCTS</a></li>
      <li class="py-5"><a href="#">NEWS</a></li>
      <li class="py-5"><a href="#">CONTACT</a></li>
      <li class="py-5"><a href="#">ABOUT</a></li>
      <li class="py-5"><a href="#">PRODUCTS</a></li>
      <li class="py-5"><a href="#">NEWS</a></li>
      <li class="py-5"><a href="#">CONTACT</a></li>
      <li class="py-5"><a href="#">ABOUT</a></li>
      <li class="py-5"><a href="#">PRODUCTS</a></li>
      <li class="py-5"><a href="#">NEWS</a></li>
      <li class="py-5"><a href="#">CONTACT</a></li>
      <li class="py-5"><a href="#">ABOUT</a></li>
      <li class="py-5"><a href="#">PRODUCTS</a></li>
      <li class="py-5"><a href="#">NEWS</a></li>
      <li class="py-5"><a href="#">CONTACT</a></li>
    </ul>
  </div>
</template>
<style scoped>
.m-menu {
  z-index: -22222;
}
.subMenu::before {
  content: "";
  position: absolute;
  opacity: 1;
  right: 80px;
  top: -16px;
  margin-left: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #e7e6e3;
  border-left: 10px solid transparent;
}
.shop-sub__menu:hover .sub__menu-wrapper {
  display: block;
}
/* 移动端menuToggle */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;

  background: #cdcdcd;
  border-radius: 3px;

  transform-origin: 20px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 60% 100%;
}

/* 导航点击 */
.menu-wrapper input:checked ~ #menuToggle span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background-color: #cdcdcd;
}

.menu-wrapper input:checked ~ #menuToggle span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.menu-wrapper input:checked ~ #menuToggle span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

.menu-sub-bg {
  background-color: #e7e6e3;
}
</style>
