<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-06 13:56:21
 * @LastEditTime: 2021-12-06 18:01:41
 * @Description: Modify here please
-->
<script setup></script>

<template>
  <div class="pt-5 text-center dot-bg md:pt-96">
    <div class="space-y-5 font-thin">
      <h1 class="text-lg font-medium md:text-5xl pt-80">8th Ocean</h1>
      <h2 class="text-2xl md:text-5xl">人魚が愛した果実のお酒</h2>
      <h2 class="md:text-3xl">高果汁リキュール</h2>
    </div>
    <!-- 页面链接 -->
    <ul
      class="flex flex-wrap justify-center max-w-5xl px-5 py-24 mx-auto md:space-x-20 md:px-0 md:py-40 page-links"
    >
      <li class="p-3 md:mb-10 md:p-0" v-for="item in 9" :key="item">
        <a
          :style="{
            backgroundImage: `url('http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_item_btn0${item}.png')`,
          }"
          href="#"
        ></a>
      </li>
    </ul>
    <img
      class="mb-10 px-14 md:hidden"
      src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_eyecatch2_sp.png"
      alt=""
    />
    <!-- 产品简介 -->
    <div class="max-w-5xl pb-40 mx-auto px-14 md:px-0 md:flex md:space-x-28">
      <div class="w-full md:w-1/2">
        <h6>FEATURE #01</h6>
        <h2 class="py-2 text-2xl font-thin md:text-5xl">たっぷり高果汁</h2>
        <div
          class="w-16 h-1 mx-auto my-4 bg-gray-800 rounded-lg md:my-10 md:w-28"
        ></div>
        <p class="font-thin leading-8 text-left">
          厳選したフルーツの果汁をたっぷり使用し、とろり濃厚な果実感がたまらない。
          まるでデザートを味わっているような甘酸っぱい果物の香りに、人魚たちは恋をした。
        </p>
      </div>

      <div class="w-full mt-14 md:mt-0 md:w-1/2">
        <h6>FEATURE #02</h6>
        <h2 class="py-2 text-2xl font-thin md:text-5xl">ラベルアート</h2>
        <div
          class="w-16 h-1 mx-auto my-4 bg-gray-800 rounded-lg md:my-10 md:w-28"
        ></div>
        <p class="font-thin leading-8 text-left">
          <a
            href=""
            class="text-red-800 border-b-2 border-red-800 border-dotted"
            >アーティスト古河原泉</a
          >
          さんによる、果実と人魚の可愛らしいイラストのラベルはちょっとした手土産におすすめ。種類も豊富だからお好みの組み合わせで、アートな贈り物にも。
        </p>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="max-w-6xl px-16 mx-auto md:flex md:px-0 md:space-x-20">
      <!-- 左边 -->
      <div class="w-full md:w-1/2">
        <div
          v-for="item in 5"
          :key="'left' + item"
          class="relative mb-24 md:mb-40"
        >
          <img
            v-sr-re-box="{
              reset: false,
              delay: 200,
              origin: 'top',
              duration: 800,
              scale: 1.1,
            }"
            src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_item_bg01.png"
            alt=""
            class="w-80 product-bg"
          />
          <div
            class="absolute text-4xl font-thin text-gray-400 left-4 -top-6"
            v-sr-re-box="{
              reset: false,
              origin: 'top',
              delay: 1000,
              duration: 1000,
            }"
          >
            <h2>STRAWBERRY</h2>
            <h3>LIQUEUR</h3>
          </div>
          <img
            v-sr-re-box="{ reset: false, origin: 'right' }"
            class="absolute z-10 right-9 md:-right-10 product-img md:-top-6 -top-3"
            src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_item_bottle01.png"
            alt=""
          />
          <h3 class="md:text-2xl pt-14 md:pt-32">8th OCEAN</h3>
          <h2 class="my-5 text-2xl font-thin md:text-4xl">
            人魚が愛したみかん酒
          </h2>
          <div class="space-y-2 md:py-10">
            <p>国産みかんを贅沢に使用したお酒。</p>
            <p>みかんを食べているかのような濃い果実感がたまらない。</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 md:pt-40">
        <div class="relative mb-24 md:mb-40" v-for="item in 5" :key="'right' + item">
          <img
            v-sr-re-box="{
              reset: false,
              delay: 200,
              origin: 'top',
              duration: 800,
              scale: 1.1,
            }"
            src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_item_bg02.png"
            alt=""
            class="w-80 product-bg"
          />
          <div
            class="absolute text-4xl font-thin text-gray-400 left-4 -top-6"
            v-sr-re-box="{
              reset: false,
              origin: 'top',
              delay: 1000,
              duration: 1000,
            }"
          >
            <h2>STRAWBERRY</h2>
            <h3>LIQUEUR</h3>
          </div>
          <img
            v-sr-re-box="{ reset: false, origin: 'right' }"
            class="absolute z-10 right-9 product-img md:-right-10 md:-top-6 -top-3"
            src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_item_bottle02.png"
            alt=""
          />
          <h3 class="text-2xl md:pt-32 pt-14">8th OCEAN</h3>
          <h2 class="my-5 text-2xl font-thin md:text-4xl">人魚が愛したみかん酒</h2>
          <div class="space-y-2 md:py-10">
            <p>国産みかんを贅沢に使用したお酒。</p>
            <p>みかんを食べているかのような濃い果実感がたまらない。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 移动端 */
.dot-bg {
  background-image: url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_eyecatch.png"),
    url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_dot_bg.png");
  background-repeat: no-repeat, repeat;
  background-position: center 120px, center;
  background-size: 560px, 30px 30px;
}

/* pc端 */
@media (min-width: 768px) {
  .dot-bg {
    background-position: center 130px, center;
    background-size: 1470px 680px, 30px 30px;
  }
  .product-img {
    height: 568px !important;
  }
  .product-bg{
      width: 527px;
  }
}
.page-links li a {
  display: block;
  width: 107px;
  height: 132px;
  /* background-image: url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/fruits_item_btn01.png"); */
  background-repeat: no-repeat;
  background-size: 107px;
}
.page-links li a:hover {
  background-position: 0 -145px;
}
.product-img {
  height: 346px;
}
</style>
