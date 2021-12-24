/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-12-21 15:14:23
 * @LastEditTime: 2021-12-21 18:25:44
 * @Description: 请求封装处理
 */
import axios, { AxiosRequestConfig, Method } from 'axios';


interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: Function;
}
// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;

const server = axios.create({
    timeout: 10000,
    responseType: 'json',
})


// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = + key;
        const list: PendingType = pending[key]
        // 当前请求在数组中存在时执行函数体
        if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
            // 执行取消操作
            list.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            pending.splice(item, 1);
        }
    }
}

// 请求拦截
server.interceptors.request.use(request => {

    // 此处可以添加加载前loading

    removePending(request);
    request.cancelToken = new CancelToken((c) => {
        pending.push({ url: request.url, method: request.method, params: request.params, data: request.data, cancel: c });
    });

    // token
    const token = localStorage.getItem("token");

    if (token) {
        (request as any).headers.Authorization = token;
    }
    return request;
}, error => {
    return Promise.reject(error);
})


// 响应拦截

server.interceptors.response.use(response=>{
    // 此处可以关闭loading
    removePending(response.config);

    const data = response.data;
    // 根据业务处理code返回

    return data;
},error=>{

    const response = error.response;

    // 根据返回的http状态码做不同的处理
    switch (response?.status) {
        case 401:
            // token失效
            break;
        case 403:
            // 没有权限
            break;
        case 500:
            // 服务端错误
            break;
        case 503:
            // 服务端错误
            break;
        default:
            break;
    }

    // 超时重新请求
    const config = error.config;
    // 全局的请求次数,请求的间隙
    const [RETRY_COUNT, RETRY_DELAY] = [3, 1000];

    if (config && RETRY_COUNT) {
        // 设置用于跟踪重试计数的变量
        config.__retryCount = config.__retryCount || 0;
        // 检查是否已经把重试的总数用完
        if (config.__retryCount >= RETRY_COUNT) {
            return Promise.reject(response || { message: error.message });
        }
        // 增加重试计数
        config.__retryCount++;
        // 创造新的Promise来处理指数后退
        const backoff = new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, RETRY_DELAY || 1);
        });
        // instance重试请求的Promise
        return backoff.then(() => {
            return server(config);
        });
    }
    return Promise.reject(response || {message: error.message});
})
export default server;