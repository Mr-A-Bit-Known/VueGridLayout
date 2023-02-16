import Vue from "vue";
import Vuex from "vuex";
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
    // state存放状态
    state: {
        // 显示当前时间节点
        globalDate: moment().format("YYYY-MM-DD"), // 年份
        globalTime: moment().format("HH:mm:ss"), // 时间

        // token
        token: ''
    },
    // getters为state的计算属性
    getters: {

    },
    // mutations改变状态逻辑，同步操作
    mutations: {
        // 获取当前时间
        getNowDate(state) {
            state.globalDate,
                state.globalTime
        },

        // 设置token
        SET_TOKEN: (state, token) => {
            state.token = token
            localStorage.setItem("token", token)
        }
    },
    // actions提交mutations，异步操作   
    actions: {
        getNowDateAsync(context) {
            setInterval(() => {
                context.commit('getNowDate')
            }, 1000)
        }
    }
})