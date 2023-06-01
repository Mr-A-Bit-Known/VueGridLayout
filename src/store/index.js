import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定义Vuex状态管理
const store = new Vuex.Store({
    state() {
        return {
            token: "",

            // 标签页数组
            tableList: [],
        }
    },
    getters: {
        // 获取tabList
        getTabs: (state) => {
            return state.tableList;
        },
    },
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

        // 添加tabs,如存在则不添加
        add_active_tabs(state, tab) {
            // 存在tab则不添加
            if (state.tableList.some(item => item.path === tab.path)) return;
            state.tableList.push(tab);
        },
    },
    // 异步操作
    actions: {

    },
})

export default store;