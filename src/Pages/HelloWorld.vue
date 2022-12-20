<template>
  <div class="parent">
    <el-container class="helloworldWrapper">
      <el-header class="Header"><Header></Header></el-header>
      <el-main class="Main">
        <div class="boxWrapper">
          <div class="register_login_box">
            <div class="login_container">
              <div class="login_box">
                <el-form
                  :model="userInfoForm"
                  label-width="0px"
                  class="login_form"
                  :rules="LoginFromRules"
                  ref="userInfoForm"
                >
                  <div class="titleWrapper">
                    <!-- <img src="../../static/史努比.png" alt="" /> -->
                    <div class="login_title">用户登录注册</div>
                  </div>
                  <el-form-item class="login_username" prop="username">
                    <el-input
                      v-model="userInfoForm.username"
                      placeholder="请输入用户名"
                      prefix-icon="el-icon-user"
                      clearable
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="login_password" prop="password">
                    <el-input
                      v-model="userInfoForm.password"
                      placeholder="请输入密码"
                      type="password"
                      prefix-icon="el-icon-lock"
                      @keydown.enter.native="submit('userInfoForm')"
                      clearable
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div>
                      <el-button
                        class="login_button"
                        type="primary"
                        @click="submit('userInfoForm')"
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
      <el-footer class="Footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { nameRule, passwordRule } from "../javascript/vaildate";
export default {
  created() {
    this.keyupEnter();
  },
  data() {
    return {
      // 表单数据
      userInfoForm: {
        username: "",
        password: "",
      },
      // 表单校验规则
      LoginFromRules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 键盘回车事件
    keyupEnter() {},
    // 表单提交
    submit(userInfoForm) {
      this.$router.push({ path: "/Pages/HomePage" });
      this.$refs[userInfoForm].validate((valid) => {
        if (valid) {
        } else {
          console.error("Error Submit");
          return false;
        }
      });
    },
    // 注册账号
    registerAccountFun() {
      this.$router.push({ path: "/Pages/Register" });
    },
    // 找回密码
    passwordGetBack() {
      this.$router.push({ path: "/Pages/PasswordGetBack" });
    },
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
  height: 40px !important;
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
  height: 30px !important;
}
.helloworldWrapper {
  height: 100vh;
  padding: 0 !important;
  margin: 0 !important;
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