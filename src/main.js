// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ElementUI
import ElementUI from 'element-ui';
import 'element-theme-chalk';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './javascript/axios';
import components from './javascript/components';

// 去除CSS默认样式
import '../src/javascript/index.css';

Vue.use(ElementUI);


Vue.prototype.$axios = axios;


// 自定义组件
Vue.prototype.$components = components;

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
  components: { App },
  template: '<App/>'
})
