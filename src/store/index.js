import Vue from 'vue';
import Vuex from 'vuex';

// 天气接口


Vue.use(Vuex);

// 定义Vuex状态管理
const store = new Vuex.Store({
    state() {
        return {
            token: "",

            // 存储标签页数组
            tableList: []
        }
    },
    getters: {
        // 获取tabList
        getTabs: (state) => {
            return state.tableList
        }
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


        // 添加标签页
        add_tabs(state, tab) {
            // 如果存在tab，则不添加新的tabs
            if (state.tableList.some(item => item.path === tab.path)) return
            state.tableList.push(tab);
        },
        // 设置当前选中的tab
        set_active_index(state, index) {
            this.state.activeTab = index;
        },
        // 登录失败，或者退出登录，清空标签页
        clearTabs() {
            this.state.tableList.length = 0;
        }
    },
    // 异步操作
    actions: {

    },
})

export default store;