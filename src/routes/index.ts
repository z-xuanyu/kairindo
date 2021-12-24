/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-30 10:03:03
 * @LastEditTime: 2021-12-09 09:59:26
 * @Description: Modify here please
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    redirect: '/home',
    component: () => import("/@/layouts/index.vue"),
    meta: {
        title: "Layout",
        keepAlive: false,
    },
    children: [
        {
            path: '/home',
            component: () => import("/@/views/home/index.vue"),
            meta: {
                title: "home",
                keepAlive: false,
            },
        },
        {
            path: '/about',
            component: () => import("/@/views/about/index.vue"),
            meta: {
                title: "about",
                keepAlive: false,
            },
        },
        {
            path: '/product',
            component: () => import("/@/views/product/index.vue"),
            meta: {
                title: "product",
                keepAlive: false,
            },
        },
        {
            path: '/product/fruits',
            component: () => import("/@/views/product/Fruits.vue"),
            meta: {
                title: "fruits",
                keepAlive: false,
            },
        },
        {
            path: '/news',
            component: () => import("/@/views/news/index.vue"),
            meta: {
                title: "news",
                keepAlive: false,
            },
        },
        {
            path: '/news/detail/:id',
            component: () => import("/@/views/news/Detail.vue"),
            meta: {
                title: "newsDetail",
                keepAlive: false,
            },
        },
        {
            path: '/contact',
            component: () => import("/@/views/contact/index.vue"),
            meta: {
                title: "contact",
                keepAlive: false,
            },
        }
    ]
},
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("/@/layouts/Error.vue") },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: () => { y: 0 }
})

export function setupRouter(app: App) {
    app.use(router);
}