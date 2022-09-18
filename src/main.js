// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 去除CSS默认样式
import '../src/javascript/index.css';

Vue.use(ElementUI);

// 全局组件
import Header from '../src/components/header.vue';
import Footer from '../src/components/footer.vue';

Vue.component('Header', Header);
Vue.component('Footer', Footer);


// 动态获取屏幕高度和宽度
Vue.prototype.$getViewSize = function () {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, // 宽度
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 高度
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
