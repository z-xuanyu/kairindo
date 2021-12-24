/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-29 16:51:04
 * @LastEditTime: 2021-11-29 16:53:14
 * @Description: 数据仓库管理
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';


const store = createPinia();

export function setupStore(app: App) {
    app.use(store);
}

export { store };