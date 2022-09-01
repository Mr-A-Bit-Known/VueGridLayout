import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../Pages/HelloWorld.vue'
import Register from '../Pages/Register.vue'
import PagesNotFound from '../Pages/PagesNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      // 默认路由重定向
      path: '/',
      redirect: "/Pages/HelloWorld"
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
      path: "/Pages/404NotFound",
      name: "PagesNotFound",
      component: PagesNotFound
    }
  ]
})
