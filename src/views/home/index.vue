<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-02 10:16:15
 * @LastEditTime: 2021-12-23 18:08:41
 * @Description: Modify here please
-->
<script setup>
import { ref } from "vue";
import { useEventListener, useMediaQuery } from "@vueuse/core";

const tweenLogo1Top = ref(449.094);
const tweenOpacity2 = ref(0); // 長條
const tweenOpacity3 = ref(0);
const tweenOpacity4 = ref(0);
const tweenOpacity5 = ref(0);
const tweenOpacity6 = ref(0);
const tweenOpacity7 = ref(0);
const tweenHeight = ref(580);
const scrollTop = ref(0);

useEventListener(document, "scroll", () => {
  scrollTop.value =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  const isLargeScreen = useMediaQuery('(min-width: 768px)')
  if(!isLargeScreen.value) return;


  
  if (400 < scrollTop.value && scrollTop.value <= 500) {
    tweenOpacity2.value = 1;
    setTimeout(() => {
      tweenOpacity2.value = 0;
    }, 600);
  }

  if (500 < scrollTop.value && scrollTop.value <= 600) {
    tweenOpacity3.value = 1;
    setTimeout(() => {
      tweenOpacity3.value = 0;
    }, 600);
  }

  if (600 < scrollTop.value && scrollTop.value <= 700) {
    tweenOpacity4.value = 1;
    setTimeout(() => {
      tweenOpacity4.value = 0;
    }, 600);
  }

  if (700 < scrollTop.value && scrollTop.value <= 800) {
    tweenOpacity5.value = 1;
    setTimeout(() => {
      tweenOpacity5.value = 0;
    }, 600);
  }
  if (800 < scrollTop.value && scrollTop.value <= 900) {
    tweenOpacity6.value = 1;
    setTimeout(() => {
      tweenOpacity6.value = 0;
    }, 600);
  }

  if (900 < scrollTop.value && scrollTop.value <= 1000) {
    tweenOpacity7.value = 1;
    setTimeout(() => {
      tweenOpacity7.value = 0;
    }, 600);
  }

  if (scrollTop.value >= 1100) {
    tweenHeight.value = 200;
  } else {
    tweenHeight.value = 580;
  }
});
</script>
<template>
  <div class="home-bg">
    <div class="hidden overflow-hidden mian md:block">
      <div class="relative top-image">
        <div
          class="absolute tweenLogo1"
          :style="{ top: tweenLogo1Top + scrollTop / 2 + 'px' }"
        ></div>
        <div class="absolute tween02" :style="{ opacity: tweenOpacity2 }"></div>
        <div
          class="absolute water-drop tween03"
          :style="{ opacity: tweenOpacity3 }"
        ></div>
        <div
          class="absolute water-drop tween04"
          :style="{ opacity: tweenOpacity3 }"
        ></div>
        <div
          class="absolute water-drop tween05"
          :style="{ opacity: tweenOpacity4 }"
        ></div>
        <div
          class="absolute water-drop tween06"
          :style="{ opacity: tweenOpacity5 }"
        ></div>
        <div
          class="absolute water-drop tween07"
          :style="{ opacity: tweenOpacity6 }"
        ></div>
        <div
          class="absolute water-drop tween08"
          :style="{ opacity: tweenOpacity6 }"
        ></div>
        <div
          class="absolute water-drop tween09"
          :style="{ opacity: tweenOpacity7 }"
        ></div>
        <div
          class="absolute water-drop tween10"
          :style="{ opacity: tweenOpacity7 }"
        ></div>
        <div
          class="absolute tween11"
          :style="{ height: tweenHeight + 'px' }"
        ></div>
        <div class="absolute top-outline"></div>
        <div class="absolute tweenLogo2"></div>
      </div>
    </div>
    <div class="md:hidden">
      <img
        src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/topmobile.jpg"
        alt=""
      />
    </div>
    <div class="px-10 bg-white md:py-20 md:px-0">
      <div class="text-center" v-sr-re-box>
        <p class="text-3xl font-bold md:text-xl py-28">
          SPECIAL SAKE
          <span class="block py-5 text-green-400 md:py-0 md:inline-block">
            for </span
          >SPECIAL TIME
        </p>
        <p class="text-2xl">最高のお酒で、最高のじかんを。</p>
        <p class="pt-10 text-xl text-gray-400">
          わたしたち海琳堂の扱うSAKEは、その時間や空間をスタイリッシュな彩りへと導くことの出来る
        </p>
        <p class="text-xl text-gray-400">
          「深みある芳香な味わいをオシャレに楽しめる」逸品であることをコンセプトとしています。
        </p>
        <router-link
          to="/about"
          class="inline-block px-16 py-4 mt-10 text-gray-600 border border-gray-400"
        >
          OUR VISION
        </router-link>
      </div>
    </div>
    <!-- 产品 -->
    <div class="flex justify-center pt-20 bg-white pb-52 product">
      <div class="flex flex-wrap justify-center products__list" v-sr-re-box>
        <div
          class="w-full mt-20 text-center text-gray-400 md:w-1/3 lg:w-1/4 md:mt-0"
          v-for="item in 4"
          :key="item"
        >
          <img
            class="inline-block"
            src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top-yogoo.png"
            alt=""
          />
          <p class="mt-4">人魚の果実酒</p>
          <p>(エイスオーシャン)</p>
        </div>
      </div>
    </div>
    <!-- NEWS -->
    <div class="flex justify-center py-20 bg-gray-900">
      <div class="news-wrapper">
        <div class="title" v-sr-re-box="{ distance: '30%' }">
          <h2 class="text-2xl text-center text-white md:mt-20">NEWS</h2>
          <div class="flex justify-end pr-10 mt-10 md:pr-0 md:mt-0">
            <button
              class="py-1 pl-2 pr-20 text-sm text-white border border-gray-100"
            >
              ALL
            </button>
          </div>
        </div>
        <div
          class="w-full px-10 mt-8 md:px-0 space-y-7 md:space-y-0 md:flex md:space-x-2"
          v-sr-re-box="{ distance: '30%' }"
        >
          <div
            class="w-full text-white bg-gray-800 shadow-xl md:w-1/4 h-96"
            v-for="item in 4"
            :key="item"
          >
            <img
              class="object-cover w-full h-2/5"
              src="http://www.kairindo.co.jp/wp/wp-content/uploads/2021/11/img04-238x160.jpg"
              alt=""
            />
            <div class="p-5 mb-10 overflow-hidden content h-2/5">
              深川醗酵所
              　11月8日（月）よりランチ営業スタート！〜醗酵をテーマにしたカラダにやさしいランチ〜
            </div>
            <p class="px-4">2021年11月08日</p>
          </div>
        </div>
      </div>
    </div>
    <!-- kogahara卡片信息 -->
    <div class="flex justify-center px-10 pb-20 bg-gray-900 md:py-40 md:px-0">
      <div
        class="w-full p-5 text-white border md:w-4/6 xl:w-3/5 2xl:w-2/6"
        v-sr-re-box="{ distance: '30%' }"
      >
        <p>
          弊社のブランドデザインは,<a class="border-b" href="#"
            >画家・グラフィックデザイナーの古河原泉さん</a
          >に手掛けて頂いております。
        </p>
        <p>
          古河原さんは女性をテーマにした作品を数多く描かれている油彩作家さんです。
        </p>
        <div class="justify-between mt-5 lg:flex">
          <img
            class="w-full lg:w-80"
            src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/izumi.jpg"
          />
          <div class="mt-5 lg:mt-0 lg:ml-10 info">
            <h5 class="text-gray-500">Designer profile:</h5>
            <p class="py-3">Designer profile: 古河原 泉 (こがはらいずみ)</p>
            <p class="text-sm">
              グラフィックデザイナーであり画家としても活動中。女性の内面を色彩で表現。渋谷文化村ギャラリーをはじめ全国有名百貨店・画廊で個展開催。
            </p>
            <p class="mt-3 text-sm">
              <a class="border-b" href="#">→古河原泉オフィシャルサイト</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-bg {
  background: #1e1e1e
    url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top01.jpg")
    no-repeat center -2px;
}
.top-image {
  height: 2530px;
}
.news-wrapper {
  width: 1000px;
}
.tweenLogo1 {
  background: rgba(0, 0, 0, 0)
    url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/logo1.png")
    no-repeat scroll center top;
  height: 320px;
  width: 100%;
}
.tweenLogo2 {
  background: rgba(0, 0, 0, 0)
    url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/logo2.png")
    no-repeat scroll left top;
  height: 160px;
  width: 100%;
  top: 2060px;
  z-index: 20;
  left: 30%;
  /* opacity: 0; */
}
.tween02 {
  top: 1608px;
  background: rgba(0, 0, 0, 0)
    url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top02.png")
    no-repeat scroll center top;
  height: 130px;
  width: 100%;
  /* opacity: 0; */
  z-index: 10;
}
.water-drop {
  height: 20px;
  width: 100%;
  /* opacity: 0; */
  z-index: 10;
}
.tween03 {
  top: 1750px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top03.png)
    no-repeat scroll center top;
}
.tween04 {
  top: 1790px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top04.png)
    no-repeat scroll center top;
}
.tween05 {
  top: 1860px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top05.png)
    no-repeat scroll center top;
}
.tween06 {
  top: 1982px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top06.png)
    no-repeat scroll center top;
}
.tween07 {
  top: 2094px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top07.png)
    no-repeat scroll center top;
}
.tween08 {
  top: 2149px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top08.png)
    no-repeat scroll center top;
}
.tween09 {
  top: 2227px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top09.png)
    no-repeat scroll center top;
}
.tween10 {
  top: 2277px;
  background: rgba(0, 0, 0, 0)
    url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top10.png)
    no-repeat scroll center top;
}
.tween11 {
  top: 1755px;
  background: url(http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/mask.gif)
    no-repeat scroll center bottom;
  /* height: 460px;  */
  /* height: 200px; */
  width: 100%;
  z-index: 5;
  transition: all 1.8s ease-in-out;
}
.top-outline {
  background: url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/top99.png")
    no-repeat scroll center -5px;
  color: #ffffff;
  height: 2320px;
  width: 100%;
  z-index: 20;
}
.products__list {
  width: 860px;
}
</style>
