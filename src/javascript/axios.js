import axios from 'axios';

import { Loading } from 'element-ui';


import components from '../javascript/components';

// 配置请求基本路径
axios.defaults.baseURL = "http://localhost:8080/apiInterface/v1";

// 定义加载动画方法

// 设置请求超时
const service = axios.create({
    baseURL: axios.defaults.baseURL,
    timeout: 30000
})

// let loading;
// function startLoading() {
//     loading = Loading.service({
//         lock: true,
//         text: "稍等片刻...",
//         background: 'rgba(0,0,0,0,7)',
//     })
// }


// function endLoading() {
//     if (loading != undefined) {
//         loading.close();
//     }
// }


// 请求拦截
service.interceptors.request.use(config => {
    // startLoading();
    if (localStorage.getItem('token')) {  // 如本地已存储token
        config.headers['X-Access-Token'] = localStorage.getItem('token');
    }
    return config;
}, error => {
    components.messagePointer(error, "error", 1000);
})


// 响应拦截

service.interceptors.response.use(response => {
    // endLoading();
    return response;
}, error => {
    // endLoading();
    components.messagePointer(error, "error", 1000);
})


export default axios;
