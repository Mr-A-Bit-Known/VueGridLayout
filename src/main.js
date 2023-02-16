// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 状态管理
import store from './store';
// 去除CSS默认样式
import '../src/javascript/index.css';


Vue.use(ElementUI);

import axios from './axios';

Vue.prototype.$axios = axios;

// mock

require("./mock");

// // 全局注册节流
// import { reduceExpenditure } from '../Utils/reduceExpenditure';
// Vue.prototype.$reduceExpenditure = reduceExpenditure;

// // 全局注册百度地图

// import BaiduMap from "vue-baidu-map";

// Vue.use(BaiduMap, {
//   ak: "1GNT0cXD0Ykmjy5dqzWMG1nRRYrFfYGL"
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
