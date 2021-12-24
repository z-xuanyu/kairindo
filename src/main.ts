/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-11 11:28:22
 * @LastEditTime: 2021-12-01 14:34:59
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue';
import { setupGlobDirectives } from './directives';
import { setupStore } from './store';
import './index.css'
import { setupRouter } from './routes';

function bootstrap() {
    const app = createApp(App);
    // 状态仓库
    setupStore(app);
    // 注册全局自定义指令
    setupGlobDirectives(app)

    // 注冊路由
    setupRouter(app);
    
    app.mount('#app')
}

bootstrap();