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
      name: '登录',
      component: () => import("../Pages/Login.vue"),
    },
    // 常用菜单
    {
      path: "/Pages/MainPage",
      name: '常用菜单',
      component: () => import("../Pages/MainPage.vue"),
      children: [
        // 主面板
        {
          path: "/Pages/MainPage/MenuComponents/homePage",
          name: "HomePage",
          component: () => import("../MenuComponents/homePage.vue"),
          meta: {
            name: "HomePage",
            keepAlive: true,
            title: "主页"
          },

        },
        // 问题管理
        {
          path: "/Pages/MainPage/MenuComponents/QuestionManagement",
          name: "QuestionManagement",
          component: () => import("../MenuComponents/questionManagement.vue"),
          meta: {
            name: "QuestionManagement",
            keepAlive: true,
            title: "问题管理"
          }
        },
        // 日志查询
        {
          path: "/Pages/MainPage/MenuComponents/OperationLogs",
          name: "OperationLogs",
          component: () => import("../MenuComponents/operationLogs.vue"),
          meta: {
            name: "OperationLogs",
            keepAlive: true,
            title: "日志查询"
          }
        },
        // 报表看板模块
        {
          path: "/Pages/reportPanel/MenuComponents/wipReport",
          name: "WipReport",
          component: () => import("../MenuComponents/wipReport.vue"),
          meta: {
            name: "WipReport",
            keepAlive: true,
            title: "在制品报表"
          }
        },
        // 系统管理模块
        {
          path: "/Pages/systemSetting/MenuComponent/dataDictionary",
          name: "DataDictionary",
          component: () => import("../MenuComponents/dataDictionary.vue"),
          meta: {
            name: "DataDictionary",
            keepAlive: true,
            title: "数据字典维护"
          }
        },
        // 用户管理
        {
          path: "/Pages/systemSetting/MenuComponent/userManagement",
          name: "UserManagement",
          component: () => import("../MenuComponents/userManagement.vue"),
          meta: {
            name: "UserManagement",
            keepAlive: true,
            title: "用户管理"
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

router.afterEach((to, from, next) => {

})

export default router;

