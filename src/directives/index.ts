/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-29 16:34:43
 * @LastEditTime: 2021-12-01 16:35:55
 * @Description: 自定义指令
 */
import type { App } from 'vue';
import { setImgLazyDirective } from './imgLazy';
import { setScrollRevealBoxDirective } from './scrollRevealBox';
export function setupGlobDirectives(app: App) {
    setImgLazyDirective(app);
    setScrollRevealBoxDirective(app);
}