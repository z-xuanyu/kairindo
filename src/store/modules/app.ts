/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-07 10:37:18
 * @LastEditTime: 2021-12-21 16:03:00
 * @Description: Modify here please
 */
import { defineStore } from 'pinia';
import { store } from '/@/store';
export const appStore = defineStore({
    id: 'app-setting',
    state:() =>({
        isShowMenu: false
    }),

    getters: {
        getMenuStatus(): Boolean{
            return this.isShowMenu;
        }
    },

    actions:{
        changeMenuStatus(){
            this.isShowMenu = !this.isShowMenu;
        }
    }
})

export function useAppStoreWithOut(){
    return appStore(store)
}