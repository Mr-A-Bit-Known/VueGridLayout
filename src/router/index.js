import Vue from 'vue'
import Router from 'vue-router'

// 提示文字通用组件
import components from '../javascript/components';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      // 默认路由重定向
      path: '/',
      redirect: "Pages/Login",
      component: () => import("../Pages/Login.vue"),
    },
    {
      // 登录页
      path: "/Pages/Login",
      name: 'Login',
      component: () => import("../Pages/Login.vue"),
    },
    // 主界面
    {
      path: "/Pages/MainPage",
      name: 'MainPage',
      component: () => import("../Pages/MainPage.vue"),
      meta: {
        requireAuth: true,
        title: "主页"
      }
    },
    // 注册页面
    {
      path: "/Pages/Register",
      name: 'Register',
      component: () => import("../Pages/Register.vue"),
    },

    // 密码找回
    {
      path: "/Pages/PasswordGetBack",
      name: "PasswordGetBack",
      component: () => import("../Pages/PasswordGetBack.vue"),
    },

    // 404
    {
      path: "*",
      component: () => import("../Pages/PagesNotFound.vue"),
    },
  ]
})

// 路由全局守卫
router.beforeEach((to, from, next) => {
  // 无需token验证界面路由(登录,注册,修改密码)
  if (to.path === "/Pages/Login" || to.path === "/Pages/Register" || to.path === "/Pages/PasswordGetBack") {
    next();
  }
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      components.messagePointer("无效Token,返回登录页...", "error", 1000);
      // 无效token,返回登录页
      router.push({ path: "/Pages/Login" });
    }
  } else {
    next();
  }
})

router.afterEach(() => {

})

export default router;

