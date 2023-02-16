import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      // 默认路由重定向
      path: '/',
      redirect: "/Pages/HomePage",
      component: resolve => require(['@/Pages/Login'], resolve)
    },
    {
      // 登录页
      path: "/Pages/Login",
      component: resolve => require(['@/Pages/Login'], resolve)
    },
    // 默认HelloWorld为登陆界面
    {
      path: "/Pages/HelloWorld",
      component: resolve => require(['@/Pages/HelloWorld'], resolve)
    },
    // 注册界面
    {
      path: '/Pages/register',
      component: resolve => require(['@/Pages/Register'], resolve)
    },
    // 密码找回
    {
      path: "/Pages/PasswordGetBack",
      component: resolve => require(['@/Pages/PasswordGetBack'], resolve)
    },
    // 服务条款详情
    {
      path: "/Pages/ServiceDetailInfoList",
      component: resolve => require(['@/Pages/ServiceDetailInfoList'], resolve)
    },
    // 管理界面 
    {
      path: "/Pages/Homepage",
      component: resolve => require(['@/Pages/Homepage'], resolve)
    },
    // 主界面
    {
      path: "/Pages/MainPage",
      component: resolve => require(['@/Pages/MainPage'], resolve)
    },

    // 404
    {
      path: "*",
      component: resolve => require(['@/Pages/PagesNotFound'], resolve)
    },
  ]
})
