<template>
  <div class="wrapper">
    <el-container class="container">
      <el-header>
        <div class="headerLeft">
          <el-image
            class="imageTitle"
            :src="require('../images/Snobi.png')"
          ></el-image>
          <h1>新用户注册</h1>
        </div>
        <div class="linkTitle">
          <el-link class="linkStyle" @click="returnLogin"
            ><h1>已有账户,立即登录</h1></el-link
          >
        </div>
      </el-header>
      <el-main>
        <div class="mainWrapper">
          <div class="contaimerLeft">
            <h1>Tips:</h1>
            <h3>用户名可自定义(必须为五位数)</h3>
            <h3>密码长度规范不限</h3>
            <h3>手机号码必须规范格式</h3>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="formWrapper">
            <el-form
              :model="Form"
              :rules="registerFromRules"
              ref="Form"
              label-width="100px"
            >
              <!-- 用户名 -->
              <el-form-item label="用户名" prop="username" style="width: 380px">
                <el-input
                  placeholder="请输入用户名"
                  v-model="Form.username"
                  prefix-icon="el-icon-user"
                ></el-input>
              </el-form-item>
              <!-- 密码 -->
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
              <!-- 手机号码 -->
              <el-form-item
                label="手机号码"
                prop="phoneNumber"
                style="width: 380px"
              >
                <el-input
                  placeholder="请输入手机号码"
                  v-model="Form.phoneNumber"
                  prefix-icon="el-icon-phone"
                ></el-input>
              </el-form-item>
              <!-- 注册 -->
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('Form')"
                  style="width: 280px; float: left"
                  >确认注册</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import {
  nameRule,
  passwordRule,
  phoneNumberRule,
} from "../javascript/vaildate";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      Form: {
        username: "",
        password: "",
        phoneNumber: "",
      },

      // 校验规则
      registerFromRules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }],
        phoneNumber: [{ validator: phoneNumberRule, trigger: "blur" }],
      },

      // 表单提交
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const params = this.Form;
            this.$axios.post("/apiInterface/register", params).then((res) => {
              if (res.data.code !== 200) {
                if (document.getElementsByClassName("el-message").length > 1)
                  return;
                this.$message({
                  center: true,
                  type: "error",
                  message: res.data.msg,
                });
              } else {
                if (document.getElementsByClassName("el-message").length > 1)
                  return;
                this.$message({
                  duration: 1000,
                  center: true,
                  type: "success",
                  message: res.data.msg,
                });
                // 添加计时器
                const timer = setTimeout(() => {
                  this.$router.replace("../Pages/Login");
                }, 1500);
                this.$once("hook:beforeDestory", function () {
                  clearTimeout(timer);
                });
              }
            });
          } else {
            return false;
          }
        });
      },
    };
  },
  methods: {
    // 返回登录页
    returnLogin() {
      this.$router.replace("../Pages/Login");
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
}
.el-header {
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.headerLeft {
  display: flex;
  align-items: center;
  justify-content: center;
}
.imageTitle {
  width: 50px !important;
  height: 50px !important;
}
.el-footer {
  height: 22px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #68217a;
}
.linkTitle {
  margin-right: 50px;
}
.linkStyle {
  color: black;
}
.mainWrapper {
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-divider {
  height: 250px;
}
.contaimerLeft {
  height: 250px;
  margin-right: 100px;
}
.contaimerLeft h1 {
  margin-left: -80px;
}
.contaimerLeft h1,
h3 {
  white-space: nowrap;
}
</style>