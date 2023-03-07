import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      // 默认路由重定向
      path: '/',
      redirect: "/Pages/Login",
      component: resolve => require(['@/Pages/Login'], resolve)
    },
    {
      // 登录页
      path: "/Pages/Login",
      component: resolve => require(['@/Pages/Login'], resolve)
    },
    // 主界面
    {
      path: "/Pages/MainPage",
      component: resolve => require(['@/Pages/MainPage'], resolve),
      meta: {
        title: "主界面"
      }
    },
    // 注册页面
    {
      path: "/Pages/Register",
      component: resolve => require(['@/Pages/Register'], resolve),
      meta: {
        title: "登录页面"
      }
    },

    // 404
    {
      path: "*",
      component: resolve => require(['@/Pages/PagesNotFound'], resolve),
      meta: {
        title: "页面404"
      }
    },
  ]
})
