<template>
  <div class="parent">
    <el-container>
      <el-header class="Header" :style="{ height: this.headerHeight + 'px' }"
        ><Header></Header
      ></el-header>
      <el-main class="Main" :style="{ height: this.screenHeight + 'px' }">
        <div class="boxWrapper">
          <div class="register_login_box">
            <div class="login_container">
              <div class="login_box">
                <el-form
                  :model="userInfoForm"
                  label-width="0px"
                  class="login_form"
                >
                  <div class="titleWrapper">
                    <img src="../../static/史努比.png" alt="" />
                    <div class="login_title">用户登录注册界面</div>
                  </div>
                  <el-form-item class="login_username">
                    <el-input
                      v-model="userInfoForm.username"
                      placeholder="请输入用户名"
                      prefix-icon="el-icon-user"
                      clearable
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="login_password">
                    <el-input
                      v-model="userInfoForm.password"
                      placeholder="请输入密码"
                      type="password"
                      prefix-icon="el-icon-lock"
                      clearable
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div>
                      <el-button
                        class="login_button"
                        type="primary"
                        @click="submit()"
                        >登录</el-button
                      >
                    </div></el-form-item
                  >
                  <div class="selection">
                    <div class="registerAccount">
                      <el-link @click="registerAccountFun()"
                        >没有账号?立即注册</el-link
                      >
                    </div>
                    <div class="forgetPassword">
                      <el-link @click="passwordGetBack()"
                        >忘记密码?找回密码</el-link
                      >
                    </div>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-footer class="Footer" :style="{ height: this.footerHeight + 'px' }">
      <Footer></Footer>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: 40,
      footerHeight: 30,
      // screenWidth: "",
      screenHeight: "",
      // 表单数据
      userInfoForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 获取屏幕高度信息
    getViewHeight() {
      const screenHeight =
        this.$getViewSize().height - (this.headerHeight + this.footerHeight);
      this.screenHeight = screenHeight;
    },
    // 表单提交
    submit() {
      alert("Success...");
    },
    // 注册账号
    registerAccountFun() {
      this.$router.push({ path: "/Pages/register" });
    },
    // 找回密码
    passwordGetBack() {
      this.$router.push({ path: "/Pages/PasswordGetBack" });
    },
  },
  mounted() {
    this.getViewHeight();
    window.addEventListener("resize", this.getViewHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.getViewHeight, false);
  },
  // 事件监听
  watch: {},
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  display: flex;
  align-items: center;
}

.el-main {
  background-image: linear-gradient(#3fb0ac, #c5d7a1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-footer {
  background-color: #b3c0d1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.boxWrapper {
  width: 1200px;
  height: 400px;
  display: flex;
  justify-content: right;
  align-items: center;
}
.register_login_box {
  width: 380px;
  height: 380px;
  background-color: #f6f0fb !important;
  -webkit-box-shadow: rgb(7, 216, 223) 0px 0px 10px;
  -moz-box-shadow: rgb(7, 216, 223) 0px 0px 10px;
  box-shadow: rgb(7, 216, 223) 0px 0px 10px;
  display: flex;
  justify-content: center;
}
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 16%;
}
.login_form .login_title {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
.login_form .login_username {
  width: 300px;
  margin-top: 10%;
}
.login_form .login_password {
  margin-top: 3%;
  width: 300px;
}
.login_button {
  margin-top: 3%;
  width: 300px;
  color: #fff !important;
}
.login_container {
  height: 100%;
}
.login_box {
  width: 340px;
  height: 320px;
}
.selection {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
</style>