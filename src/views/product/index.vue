<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-02 17:13:21
 * @LastEditTime: 2021-12-07 15:57:05
 * @Description: 产品
-->
<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();


const productTabs = ref([
  "http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item_fruits_menu.png",
  "http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item-yogoo_menu.png",
  "http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item-8thocean_menu.png",
  "http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item-ohsplash.png",
  "http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item03_menu.png",
  "http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item07_menu.png",
]);
// 点击tab滚动
function handleClickSrcollTo(index){
  if(!index) return router.push("/product/fruits");
  document.getElementById(`product${index}`).scrollIntoView({
    behavior: 'smooth',
  });
}

</script>

<template>
  <div class="text-center">
    <h1 class="pt-40 pb-20 text-4xl text-gray-500 md:py-40">PRODUCTS</h1>
    <div
      class="px-10 text-xl text-gray-600 md:px-0 md:text-base"
      v-sr-re-box="{ distance: '30%', reset: false }"
    >
      <p class="leading-10">目を閉じて、味わってください。</p>
      <p class="leading-10">
        ゆっくりと心が開きます。 そう、 蕾が開いて花になるように。
      </p>
      <h3 class="py-10 text-xl font-semibold">SPECIAL SAKE for SPECIAL TIME</h3>
    </div>
  </div>
  <p
    class="max-w-2xl px-10 mx-auto text-xl text-gray-500 md:px-0"
    v-sr-re-box="{ distance: '30%', reset: false }"
  >
    大切な人と過ごす特別な時間。楽しい気持ちを、さらに高めてくれるのは海琳堂の日本酒です。
    豊かに広がる香り、深く沁み入る味わいに誘われて、きっと言葉が溢れ出し、その言葉は人と人を固くつなぎます。
    さぁ、グラスを手に乾杯しましょう。
  </p>

  <!-- 产品tab -->
  <div
    class="flex flex-wrap items-center justify-between max-w-2xl px-10 mx-auto mt-24 md:my-24 md:px-0 md:h-60"
    v-sr-re-box="{ distance: '30%', reset: false }"
  >
    <div
      class="w-1/2 mb-20 cursor-pointer md:mb-0 md:w-1/6"
      @click="handleClickSrcollTo(index)"
      v-for="(item, index) in productTabs"
      :key="item"
    >
      <img class="h-32 mx-auto" :src="item" />
      <p class="mt-5 text-sm text-center text-gray-500">
        <span class="inline-block" :class="!index ? 'transform -rotate-90' : ''"
          >▼</span
        >
        <span v-if="!index">SPECLAL</span>
      </p>
    </div>
  </div>
  <!-- 产品列表 -->
  <div class="product">
    <div
      class="relative product-item"
      v-for="(item, index) in productTabs"
      :key="item"
      :id="'product'+index"
    >
      <div v-sr-re-box="{ distance: '30%', reset: false }">
        <div
          class="z-30 max-w-5xl px-10 text-white bg-black xl:ml-20 xl:pl-96 md:absolute md:bg-transparent xl:left-60 py-14"
        >
          <h3 class="text-3xl">Yo-Goo</h3>
          <h4 class="py-3">ヨグー</h4>
          <p class="text-xl md:w-1/2 md:text-sm">
            蔵元自家製100%の濃厚ヨーグルト使用。クリーミーな味わいをお楽しみください。
          </p>
        </div>
        <div class="h-64 text-white product-item__title"></div>
      </div>

      <!-- 产品信息 -->
      <div class="relative max-w-5xl py-20 mx-auto md:pl-96">
        <!-- 产品描述 -->
        <div
          class="pb-10 mb-5"
          v-sr-re-box="{ distance: '30%', origin: 'right', reset: false }"
        >
          <h3 class="hidden pb-5 text-xl md:block">Yo-Goo</h3>
          <p class="px-10 text-xl text-gray-600 md:px-0">
            蔵元自家製100％のヨーグルトを使用したユニークな海琳堂のオリジナル商品です。コラボレーションした蔵元は岡山県嘉美心酒造。
            とろりと濃厚でクリーミーな飲み口でコクがありながらも、すっきりとお召し上がりいただけます。
            ストレートはもちろん、氷や炭酸で割るとよりすっきりとした味わいになり、フルーツジュースで割るとお酒が弱い方でも飲みやすいカクテルに。
          </p>
          <p class="px-10 md:px-0">
            開封前、瓶を何回か上下逆さまにして混ぜ、よく冷やしてからお召し上がりください。
          </p>
        </div>
        <!--产品照片 -->
        <img
          v-sr-re-box="{ distance: '30%', origin: 'left', reset: false }"
          class="left-0 w-32 mx-auto md:w-auto md:absolute -top-14"
          src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item-yogoo_big.png"
          alt=""
        />
        <div
          class="p-3 md:py-10 md:flex md:border-t"
          v-for="item in 3"
          :key="item"
          v-sr-re-box="{ distance: '30%', origin: 'right', reset: false }"
        >
          <img
            class="hidden md:block"
            src="http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item-yogoo.png"
            alt=""
          />
          <div class="px-10 md:pr-0">
            <h4 class="py-6 text-xl font-semibold md:text-base">
              Yo-Goo（ヨグー）
            </h4>
            <ul class="leading-6 md:text-xs">
              <li>濃厚ヨーグルト酒</li>
              <li>容量：720ml／500ml</li>
              <li>アルコール度数：7度</li>
              <li>
                原材料名：ヨーグルト醸造アルコール、果糖、トレハロース、清酒、酸味料
              </li>
              <li>製造元：嘉美心酒造株式会社(岡山県)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-item__title {
  background: url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/item-yogoo_bg.png")
    no-repeat center;
  background-color: #000;
}
</style>
