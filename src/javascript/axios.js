import axios from 'axios';

import { Message, Loading } from 'element-ui';


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
    loading.close();
}


// 请求拦截
axios.interceptors.request.use(config => {
    startLoading();
    return config;
}, error => {
    throw error;
})


// 响应拦截

axios.interceptors.response.use(response => {
    endLoading();
    return response;
}, error => {
    endLoading();
    throw error;
})


export default axios;
