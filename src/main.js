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

// 图片懒加载
import lazy from './directive/lazy';

Vue.directive('lazy', lazy);

Vue.use(ElementUI);

// 全局组件
import Header from '../src/components/header.vue';
import Footer from '../src/components/footer.vue';
import NavHeader from '../src/components/navHeader.vue';
import NavBar from '../src/components/navBar';

Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('NavHeader', NavHeader);
Vue.component('NavBar', NavBar);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
