<template>
  <div class="wrapper" @contextmenu.prevent>
    <el-container class="container">
      <!-- 头部选项 -->
      <el-header><Header></Header></el-header>
      <el-main>
        <!-- 表单内容 -->
        <div class="formContainer">
          <div class="containerLeft">
            <h1>MES仓库管理系统 © 2023</h1>
            <el-image
              class="loginImage"
              :src="require('../images/qrcode_www.bilibili.com.png')"
            ></el-image>
            <h3>详情请访问网络地址:172.20.17.10</h3>
            <h4>扫描二维码查看</h4>
          </div>
          <el-divider direction="vertical"></el-divider>
          <!-- 登录表单 -->
          <div class="formWrapper">
            <el-form
              :model="Form"
              :rules="loginFormRules"
              ref="Form"
              label-width="100px"
            >
              <el-form-item label="用户名" prop="username" style="width: 380px">
                <el-input
                  placeholder="请输入用户名"
                  v-model="Form.username"
                  prefix-icon="el-icon-user"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" style="width: 380px">
                <el-input
                  type="password"
                  placeholder="请输入密码"
                  v-model="Form.password"
                  prefix-icon="el-icon-lock"
                  show-password
                  @keyup.enter.native="submitForm('Form')"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('Form')"
                  style="width: 280px; float: left"
                  >登录</el-button
                >
              </el-form-item>
              <!-- bottom -->
              <el-form-item class="bottomWrapper">
                <div class="bottomContainer">
                  <el-link @click="register">没有账户?立即注册</el-link>
                  <el-link @click="passwordGetBack">已有账户,忘记密码</el-link>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-main>
      <!-- 底部信息 -->
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import {
  nameRule,
  passwordRule,
  // validateCodeRule,
} from "../javascript/vaildate";
export default {
  components: {
    Header,
    Footer,
  },
  // 页面渲染时
  created() {},
  data() {
    return {
      Form: {
        username: "",
        password: "",
        // token
        token: "",
      },
      // 表单校验规则
      loginFormRules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 登录表单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = this.Form;
          this.$axios
            .post("/apiInterface/login", params)
            .then((res) => {
              if (res.data.code !== 200) {
                this.$components.messagePointer(res.data.msg, "error", 1000);
              } else {
                this.$components.messagePointer(res.data.msg, "success", 1000);
                // 路由跳转
                this.$router.replace("../Pages/MainPage");
                // 传入token
                localStorage.setItem("token:", res.data.data.token);
              }
            })
            .catch((err) => {
              this.$components.messagePointer(err, "error", 1000);
            });
        } else {
          return false;
        }
      });
    },
    // 注册
    register() {
      this.$router.replace("../Pages/Register");
    },
    // 密码找回
    passwordGetBack() {
      this.$router.replace("../Pages/PasswordGetBack");
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
}
.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-header {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #dcdcdc;
}
.el-footer {
  width: 100%;
  height: 22px !important;
  background-color: #68217a;
  display: flex;
  align-items: center;
  justify-content: center;
}
.formContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.formWrapper h1,
h3,
h4 {
  white-space: nowrap;
}
.containerLeft {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loginImage {
  width: 180px;
  height: 180px;
}
.el-divider {
  height: 250px;
  margin-left: 35px;
}

.bottomContainer {
  display: flex;
  justify-content: space-between;
}
.bottomContainer {
  line-height: 20px !important;
}
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
</style>