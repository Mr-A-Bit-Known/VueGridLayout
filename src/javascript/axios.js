import axios from 'axios';

import { Loading } from 'element-ui';


import components from '../javascript/components';

// 配置请求基本路径
axios.defaults.baseURL = "http://localhost:8080/apiInterface/v1";

// 定义加载动画方法

let loading;
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: "稍等片刻...",
        background: 'rgba(0,0,0,0,7)',
    })
}


function endLoading() {
    if (loading != undefined) {
        loading.close();
    }
}


// 请求拦截
axios.interceptors.request.use(config => {
    startLoading();
    return config;
}, error => {
    components.messagePointer(error, "error", 1000);
})


// 响应拦截

axios.interceptors.response.use(response => {
    endLoading();
    return response;
}, error => {
    endLoading();
    components.messagePointer(error, "error", 1000);
})


export default axios;
