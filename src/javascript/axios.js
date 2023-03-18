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
    if (loading != undefined) {
        loading.close();
    }
}


// 请求拦截
axios.interceptors.request.use(config => {
    startLoading();
    console.log(config);
    return config;
}, error => {
    console.log();
    throw error;
})


// 响应拦截

axios.interceptors.response.use(response => {
    endLoading();
    return response;
}, error => {
    endLoading();
    Message.error(error.response.status + " " + error.response.statusText + " " + "服务端响应错误...");
    throw error;
})


export default axios;
