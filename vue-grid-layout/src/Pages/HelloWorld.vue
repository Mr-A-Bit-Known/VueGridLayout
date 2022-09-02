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
                  <div class="login_title">用户登陆注册界面</div>
                  <el-form-item class="login_username">
                    <el-input
                      v-model="userInfoForm.username"
                      prefix-icon="el-icon-user"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="login_password">
                    <el-input
                      v-model="userInfoForm.password"
                      type="password"
                      prefix-icon="el-icon-lock"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="buttons">
                    <el-button class="login_button" type="primary"
                      >登录</el-button
                    >
                  </el-form-item>
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
    getViewHeight() {
      const screenHeight =
        this.$getViewSize().height - (this.headerHeight + this.footerHeight);
      this.screenHeight = screenHeight;
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
.login_form .login_title {
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: 18%;
}
.login_form .login_username {
  width: 300px;
  margin-top: 12%;
}
.login_form .login_password {
  width: 300px;
}
.login_form .login_button {
  width: 300px;
  background-color: rgb(255, 68, 0);
  color: #f6f0fb;
}
.login_container {
  height: 100%;
}
.login_box {
  width: 340px;
  height: 320px;
}
</style>