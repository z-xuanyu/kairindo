<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-02 17:20:28
 * @LastEditTime: 2021-12-06 12:01:12
 * @Description: Modify here please
-->
<script setup></script>

<template>
  <h1 class="p-32 text-5xl text-center text-gray-500">CONTACT</h1>
  <div class="h-96 contact-img"></div>
  <div class="max-w-5xl px-10 py-20 mx-auto text-xl text-center text-gray-500 md:text-base md:px-0 md:py-52">
    <div class="mb-10 leading-10">
      <p>
        株式会社海琳堂は日本酒をはじめとしたメイドインジャパンを、海外に輸出しています。
      </p>
      <p>
        日本のすばらしい蔵人、職人、つくり手と、消費者との懸け橋になる事が私共が存在する意味です。
      </p>
      <p>
        当社商品に関するお問合せはもちろん、輸出をお考えの製品についての情報等もお待ちしております。
      </p>
    </div>
    <p class="text-lg text-gray-700">TEL 03-5809-9670</p>
    <p>（営業時間 10:00〜18:00）</p>
  </div>
  <!--留言表单 -->
  <div class="px-10 md:p-40 md:px-0 contact-form-bg">
    <div class="max-w-5xl mx-auto md:flex">
      <div class="py-20 text-4xl text-center text-gray-500 md:py-0 md:text-left">
        <p>CONTACT</p>
        <p>FORM</p>
      </div>
      <div class="space-y-4 md:flex-1 md:ml-32">
        <div class="flex flex-col">
          <label class="mb-1 text-gray-500" for="name"
            >NAME <span class="text-2xl text-green-500">●</span></label
          >
          <input
            class="block p-2 border rounded-sm md:w-2/3 focus:outline-none focus:ring-1 focus:ring-gray-300"
            type=""
            placeholder=""
            password
          />
        </div>
        <div class="flex flex-col">
          <label class="mb-1 text-gray-500" for="name"
            >E-MAIL <span class="text-2xl text-green-500">●</span></label
          >
          <input
            class="block p-2 border rounded-sm md:w-2/3 focus:outline-none focus:ring-1 focus:ring-gray-300"
            type=""
            placeholder=""
            password
          />
        </div>
        <div class="flex flex-col">
          <label class="mb-1 text-gray-500" for="name"
            >TEL <span class="text-2xl text-green-500">●</span></label
          >
          <input
            class="block p-2 border rounded-sm md:w-2/3 focus:outline-none focus:ring-1 focus:ring-gray-300"
            type=""
            placeholder=""
            password
          />
        </div>
        <div class="flex flex-col">
          <label class="mb-1 text-gray-500" for="name"
            >MESSAGE <span class="text-2xl text-green-500">●</span></label
          >
          <input
            class="block p-2 border rounded-sm md:w-2/3 focus:outline-none focus:ring-1 focus:ring-gray-300"
            type=""
            placeholder=""
            password
          />
        </div>
        <div class="flex flex-col">
          <textarea
            class="block p-2 border rounded-sm md:w-2/3 h-60 focus:outline-none focus:ring-1 focus:ring-gray-300"
          ></textarea>
        </div>
        <p class="text-sm">
          個人情報取扱いへの同意<span class="text-2xl text-green-500">●</span>
        </p>
        <p class="text-sm">
          <input type="checkbox" />
          <span class="ml-2"
            >同意する（詳しくは
            <a class="border-b-2 border-black border-dotted cursor-pointer"
              >プライバシーポリシー</a
            >
            をご覧下さい）</span
          >
        </p>
        <p class="pb-20 ml-20 md:pl-32 md:pb-0">
          <button class="px-24 py-3 mt-20 text-white bg-gray-600">送出</button>
        </p>
      </div>
    </div>
  </div>
  <div class="px-10 py-20 text-gray-300 bg-black md:px-0 md:py-40">
    <div class="max-w-5xl mx-auto">
      <h1 class="mb-10">プライバシーポリシー</h1>
      <div class="space-y-4 text-xl md:text-sm">
        <p class="leading-7">
          私どもは、お客様から得た個人情報を適切に扱い管理することは、重要な責務であると考えております。
          私どもは、Webサイトを運営するにあたりプライバシー・ポリシーを制定致します。
          内容をWebサイトで公開するとともにお客様に関する個人情報の取扱方をこれに従って行い、担当者・グループ会社、業務の委託先および提携先への徹底を図っています。
        </p>

        <div class="leading-7">
          <p>
            <span class="text-2xl align-middle">●</span
            ><span class="ml-2 align-middle">個人情報利用目的</span>
          </p>
          <p>
            お客様からご提供いただいた個人情報は、情報管理担当がお客様から依頼されたサービスの責任を果たすため、新しい開発・より良いサービスを提供するためその他正当な目的のために使用いたします。
          </p>
        </div>

        <div class="leading-7">
          <p>
            <span class="text-2xl align-middle">●</span
            ><span class="ml-2 align-middle">個人情報取扱の範囲</span>
          </p>
          <p>
            お客様からご提供いただいた個人情報は、正当な使用目的理由のあるときを除きグループ会社、業務の委託先および提携先、ならびに当社またはグループ会社関連業務の承諾先以外の第三者には提供いたしません。
            お伺いした個人情報は、当ホームページのサービスによって、配達等の業務を委託した会社サービスを提供する上で必要な場合第三者に通知することをご了承ください。
          </p>
        </div>

        <div class="leading-7">
          <p>
            <span class="text-2xl align-middle">●</span
            ><span class="ml-2 align-middle">個人情報の開示について</span>
          </p>
          <p>
            下記項目に該当する場合、お客様の個人情報を開示することがあります。
            お客様が当社の運営に不利益を及ぼす行いをしたことが判明した場合、その関係者・関連諸機関に個人情報を通知することがあります。また、開示権限を有する、裁判所・検察官・警察・等またはこれに準じた権限を持つ組織からお客様の情報についての開示を求められた場合、提示することがあります。
          </p>
        </div>

        <div class="leading-7">
          <p>
            <span class="text-2xl align-middle">●</span
            ><span class="ml-2 align-middle">保証、及び責任制限</span>
          </p>
          <p>
            Webサイトから取得された各種情報、及びリンクされている他のWebサイトから取得された各種情報・サービス利用によって生じたあらゆる損害に関して、私どもは一切の責任を負いません。インターネットの性質上、全世界からアクセスすることが可能ですので、法律・習慣等が異なる国からアクセスした場合であっても、当サイトにアクセスされた方は、各国の法律原理の以外に関わらず、日本の法律・習慣に準拠されることに同意するものとし、当サイトで公開しているプライバシー・ポリシーを了承していただくものとします。当サイトの閲覧は、アクセスされた方の意志によるものとします。
          </p>
        </div>
      </div>

      <div class="text-xl md:text-sm mt-14">
        <p>＜個人情報保護に関してのお問い合わせ先＞</p>
        <p>株式会社海琳堂（かいりんどう）</p>
        <p>東京都江東区富岡1-8-2 天孝ビル4・5階</p>
        <p>TEL：03-5809-9670</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-img {
  background: url("http://www.kairindo.co.jp/wp/wp-content/themes/kairindo/images/contact.jpg")
    repeat-x center top;
}
.contact-form-bg {
  background-color: #f2f0e9;
}
</style>
