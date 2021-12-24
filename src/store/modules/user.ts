/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-29 16:54:38
 * @LastEditTime: 2021-11-29 17:50:48
 * @Description: 用户相关数据
 */

import { defineStore } from 'pinia';
import { store } from '/@/store';

interface UserInfo {
    name: string;
    token: string;
}

interface UserState {
    userInfo: UserInfo | null;
}

export const useUserStore = defineStore({
    id: 'app-user',
    state: (): UserState => ({ userInfo: null }),
    getters: {
        getUserInfo(): UserInfo | {} {
            return this.userInfo || {};
        }
    },
    actions: {
        async setUserInfo(info: UserInfo) {
            this.userInfo = info
        }
    }
})


export function useUserStoreWithOut() {
    return useUserStore(store);
}