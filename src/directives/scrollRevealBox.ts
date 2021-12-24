/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-30 18:22:14
 * @LastEditTime: 2021-12-07 10:15:19
 * @Description: 页面滚动动画指令
 */
import { useIntersectionObserver } from '@vueuse/core';
import ScrollReveal from 'scrollreveal'
const sr = ScrollReveal();
import type { Directive, App } from 'vue';
export const scrollRevealBoxDirective: Directive = {
  mounted(el, binding) {
    const options = binding.value || {};
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          sr.reveal(el, { reset: true, delay: 500,duration:2000, mobile: false, origin: 'bottom',distance: '20%',easing:'ease-in-out',...options });
          stop();
        }
      },
      { threshold: 0 },
    );

  }
}
export function setScrollRevealBoxDirective(app: App) {
  app.directive('sr-re-box', scrollRevealBoxDirective)
}

export default scrollRevealBoxDirective;