import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../Pages/HelloWorld.vue'
import Register from '../Pages/Register.vue'
import PagesNotFound from '../Pages/PagesNotFound.vue'
import PasswordGetBack from '../Pages/PasswordGetBack.vue'
import ServiceDetailInfoList from '../Pages/ServiceDetailInfoList.vue'
import Homepage from '../Pages/Homepage.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      // 默认路由重定向
      path: '/',
      // redirect: "/Pages/HelloWorld",
      redirect: "/Pages/Homepage"
    },
    // 默认HelloWorld为登陆界面
    {
      path: "/Pages/HelloWorld",
      naem: "HelloWorld",
      component: HelloWorld
    },
    // 注册界面
    {
      path: '/Pages/register',
      name: 'Register',
      component: Register
    },
    // 404
    {
      path: "/Pages/404",
      name: "PagesNotFound",
      component: PagesNotFound
    },
    // 密码找回
    {
      path: "/Pages/PasswordGetBack",
      name: "PasswordGetBack",
      component: PasswordGetBack
    },
    // 服务条款详情
    {
      path: "/Pages/ServiceDetailInfoList",
      name: "ServiceDetailInfoList",
      component: ServiceDetailInfoList
    },
    // 扫码界面 
    {
      path: "/Pages/Homepage",
      name: "Homepage",
      component: Homepage
    }
  ]
})
