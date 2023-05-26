import Vue from 'vue'
import VueRouter from 'vue-router'

// 提示文字通用组件
import components from '../javascript/components';

Vue.use(VueRouter);

// 解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};

const router = new VueRouter({
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
      children: [
        // 主面板
        {
          path: "/Pages/MenuComponents/homePage",
          name: "HomePage",
          component: () => import("../MenuComponents/homePage.vue"),
          meta: {
            title: "主面板"
          }
        },
        // 问题管理
        {
          path: "/Pages/MenuComponents/QuestionManagement",
          name: "QuestionManagement",
          component: () => import("../MenuComponents/questionManagement.vue"),
          meta: {
            title: "问题管理"
          }
        },
        // 在制品报表
        {
          path: "/Pages/MenuComponents/WipReport",
          name: "WipReport",
          component: () => import("../MenuComponents/wipReport.vue"),
          meta: {
            title: "在制品报表"
          }
        },
        // 系统管理
        {
          path: "/Pages/MenuComponents/SystemModule",
          name: "SystemModule",
          component: () => import("../MenuComponents/systemModule.vue"),
          meta: {
            title: "系统管理"
          }
        },
        // 数据字典
        {
          path: "/Pages/MenuComponents/DataDictionary",
          name: "DataDictionary",
          component: () => import("../MenuComponents/dataDictionary.vue"),
          meta: {
            title: "数据字典"
          }
        }
      ]
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
      name: "PagesNotFound",
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

