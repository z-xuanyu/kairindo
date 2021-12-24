/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-29 18:26:25
 * @LastEditTime: 2021-11-29 18:28:44
 * @Description: Modify here please
 */
import type { App } from 'vue';

// 组件注册
export const withInstall = <T>(component: T, alias?: string) => {
    const comp = component as any;
    comp.install = (app: App) => {
        app.component(comp.name || comp.displayName, component);
        if (alias) {
            app.config.globalProperties[alias] = component;
        }
    };
    return component as T;
}