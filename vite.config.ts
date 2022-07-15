/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-11-11 11:30:45
 * @LastEditTime: 2021-11-30 16:48:55
 * @Description: vite 配置
 */
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path';

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

export default ({ command }: ConfigEnv): UserConfigExport => {
    return {
        base: '/',
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: pathResolve('src') + '/',
                },
            ],
        },
        plugins: [
            vue(),
            viteMockServe({
                ignore: /^\_/,
                mockPath: 'mock',
                localEnabled: command === 'serve',
                injectCode: `import { setupProdMockServer } from '../mock/_createProductionServer';
                setupProdMockServer();`
            }),
        ],
        server: {
            host: true,
            port: 3200
        }
    }
}
