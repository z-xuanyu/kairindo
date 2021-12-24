<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-07 11:30:21
 * @LastEditTime: 2021-12-07 14:32:48
 * @Description: Modify here please
-->
<script setup>
    import TheShareIcon from '/@/components/TheShareIcon.vue';
</script>

<template>
  <h1 class="py-32 text-5xl text-center text-gray-500">NEWS</h1>
  <div class="max-w-5xl px-10 mx-auto md:space-x-20 md:px-0 md:flex">
    <div class="w-full md:w-3/4">
      <h1 class="text-2xl font-thin leading-10">
        深川醗酵所
        　11月8日（月）よりランチ営業スタート！〜醗酵をテーマにしたカラダにやさしいランチ〜
      </h1>
      <p class="my-10 text-sm">
        <span class="mr-5">2021年11月08日</span>
        <a href="">お知らせ </a>
      </p>
      <div class="pb-40 font-thin leading-10 text-gray-600 content">
        <img
          class="py-5"
          src="http://www.kairindo.co.jp/wp/wp-content/uploads/2021/11/img04.jpg"
          alt=""
        />
        <p>こんにちは。深川醗酵所です。</p>
        <p>2021.11月8日より深川醗酵所2階でランチ営業がスタートです！</p>
        <p>醗酵をテーマにしたカラダにやさしいランチ。</p>
        <p>今、発酵食品がとってもブームになっていますよね。</p>
        <p>毎日続けて食べることで、腸内環境を整えて改善につなげてくれたり、</p>
        <p>
          有害物質を吸着して外に出してくれたりとカラダにいいこといっぱいです！
        </p>
        <p>
          深川醗酵所のランチはあまざけや、麹をふんだんに使用し素材の旨みを引き出した
        </p>
        <p>メニューをご用意しました。</p>
        <img
          class="py-5"
          src="http://www.kairindo.co.jp/wp/wp-content/uploads/2021/11/img02-1.jpg"
          alt=""
        />
        <p>◆ランチメニュー　　　1,500円（税込）※電子決済のみ</p>
        <p>麹あまざけ</p>
        <p>副菜3種類</p>
        <p>具だくさんの粕汁</p>
        <p>メイン料理は2種類からお選びください。</p>
        <p>プチデザート</p>
        <p>※※※※　11月中にランチをご利用のお客様へ　※※※※　</p>
        <p>
          ランチ営業日：先着10名様へはちみつ梅ウォーター / 500mlをプレゼント！
        </p>
        <img
          class="py-5"
          src="http://www.kairindo.co.jp/wp/wp-content/uploads/2021/11/img07.jpg"
          alt=""
        />
        <p>
          2週間ごとにメニューは変更になりますので、飽きずに楽しむことができます。
        </p>
        <img
          class="py-5"
          src="http://www.kairindo.co.jp/wp/wp-content/uploads/2021/11/img08.jpg"
          alt=""
        />
        <p>＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝</p>
        <p>深川醗酵所</p>
        <p>〒135-0048</p>
        <p>東京都江東区門前仲町2-6-2(大江戸線門前仲町駅5番出口すぐ)</p>
        <p>1階は醗酵料理とお酒のテイクアウト</p>
        <p>11:00〜20:00(年中無休)</p>
        <p>2階は醗酵料理のランチ</p>
        <p>11:30〜14:30(L.O.14:00)年中無休</p>
        <p>2階は醗酵料理とお酒のペアリングを楽しめるBAR</p>
        <p>16:00〜23:00(L.O.22:00)年中無休</p>
        <p>
          ※席の間隔を空けてご案内するため１グループ３名様までとさせていただきます。
        </p>
        <p>
          ・URL　<a
            class="text-red-700 border-b-2 border-red-700 border-dotted"
            href=""
            >https://hakkojo.com/shop/fukagawa/</a
          >
        </p>
      </div>
    </div>
    <div class="w-full space-y-2 md:w-1/4">
      <div class="p-5 sidebar-box">
        <h6 class="py-5 text-sm text-center">RECENT POST</h6>

        <div
          class="py-5 text-sm leading-6 border-b"
          v-for="item in 3"
          :key="item"
        >
          <h6>2021.11.8</h6>
          <p>
            深川醗酵所
            　11月8日（月）よりランチ営業スタート！〜醗酵をテーマにしたカラダにやさしいランチ〜
          </p>
        </div>
      </div>

      <div class="hidden p-5 sidebar-box md:block">
        <h6 class="py-5 text-sm text-center">CATEGORIES</h6>
        <div class="text-sm font-thin leading-7">
          <p>すべての記事</p>
          <p>イベント情報</p>
          <p>お知らせ</p>
          <p>レポート</p>
        </div>
      </div>

      <div class="hidden p-5 sidebar-box md:block">
        <h6 class="py-5 text-sm text-center">ARCHIVES</h6>
        <div class="text-sm font-thin leading-10">
          <p>+ 2021年</p>
          <p>+ 2020年</p>
          <p>+ 2019年</p>
          <p>+ 2018年</p>
          <p>+ 2017年</p>
          <p>+ 2016年</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center py-20 space-x-3">
      <button class="px-5 py-2 mr-10 text-white bg-gray-600">
          See all post
      </button>
      <button class="px-5 py-2 text-white bg-gray-600">
          prev
      </button>
      <button class="px-5 py-2 text-white bg-gray-600">
          next
      </button>
  </div>
  <TheShareIcon />
</template>

<style scoped>
.sidebar-box {
  background: rgb(242, 240, 233);
}
</style>
