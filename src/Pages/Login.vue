<template>
  <div class="wrapper" @contextmenu.prevent>
    <el-container class="container">
      <!-- 头部选项 -->
      <el-header>
        <loginHeader></loginHeader>
      </el-header>
      <el-main>
        <!-- 表单内容 -->
        <div class="formContainer">
          <div class="containerLeft">
            <h1>MES仓库管理系统 © 2023</h1>
            <el-image class="loginImage" :src="require('../images/qrcode_www.bilibili.com.png')"></el-image>
            <h3>详情请访问网络地址:172.20.17.10</h3>
            <h4>扫描二维码查看</h4>
          </div>
          <el-divider direction="vertical"></el-divider>
          <!-- 登录表单 -->
          <div class="formWrapper">
            <el-form :model="Form" :rules="loginFormRules" ref="Form" label-width="100px">
              <el-form-item label="用户名" prop="username" style="width: 380px">
                <el-input placeholder="请输入用户名" v-model="Form.username" prefix-icon="el-icon-user"></el-input>
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
              <el-form-item class="checkBox">
                <el-checkbox v-model="Form.remember">记住密码</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('Form')"
                  style="width: 280px; float: left"
                >登录</el-button>
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
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import loginHeader from "../components/loginHeader.vue";
import Footer from "../components/footer.vue";
import {
  nameRule,
  passwordRule
  // validateCodeRule,
} from "../javascript/vaildate";
export default {
  components: {
    loginHeader,
    Footer
  },
  // 页面渲染时
  created() {},
  data() {
    return {
      checked: "",
      Form: {
        username: "",
        password: "",
        remember: ""
      },
      // 表单校验规则
      loginFormRules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }]
      },
      // token
      token: "",
      // 登录信息
      loginInfo: ""
    };
  },
  methods: {
    // 登录表单提交
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const params = this.Form;
          await this.$axios
            .post("/login", params)
            .then(res => {
              if (res.data.code !== 200) {
                this.$components.messagePointer(res.data.msg, "error", 1000);
              } else {
                // 路由跳转
                this.$components.messagePointer(res.data.msg, "success", 500);
                this.token = res.data.data.token;
                this.$store.commit("set_token", this.token);
                this.$router
                  .replace("/Pages/MainPage/MenuComponents/homePage")
                  .catch(err => {
                    throw err;
                  });
              }
            })
            .catch(err => {
              this.$components.messagePointer(err, "error", 1000);
            });
        } else {
          return false;
        }
      });
    },
    // 注册
    register() {
      this.$router.replace("../Pages/Register").catch(err => {
        this.$components.messagePointer(err, "error", 1000);
      });
    },
    // 密码找回
    passwordGetBack() {
      this.$router.replace("../Pages/PasswordGetBack").catch(err => {
        this.$components.messagePointer(err, "error", 1000);
      });
    }
  }
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
.checkBox {
  margin: 0px 0px 10px !important;
}
.checkBox >>> .el-form-item-content {
  padding: 0px 0px 0px;
  line-height: 0px !important;
  height: 20px !important;
}
.checkBox .el-checkbox {
  height: 20px !important;
  display: flex;
  align-items: center;
}
.checkBox >>> .el-checkbox__input {
  height: 14px;
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