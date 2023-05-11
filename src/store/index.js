import Vue from 'vue';
import Vuex from 'vuex';

// 天气接口


Vue.use(Vuex);

// 定义Vuex状态管理
const store = new Vuex.Store({
    state() {
        return {
            token: "",
        }
    },
    getters: {},
    // 操作
    mutations: {
        // 存储token
        set_token(state, token) {
            state.token = token;
            localStorage.token = token;
        },
        // 删除token
        del_token(state) {
            localStorage.removeItem('token');
        },
    },
    // 异步操作
    actions: {

    },
})

export default store;