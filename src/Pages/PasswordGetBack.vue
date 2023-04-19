<template>
  <div class="wrapper" @contextmenu.prevent>
    <el-container class="container">
      <el-header>
        <div class="headerLeft">
          <el-image class="imageTitle" :src="require('../images/Snobi.png')"></el-image>
          <h1>密码找回</h1>
        </div>
        <div class="linkTitle">
          <el-link class="linkStyle" @click="returnLogin">
            <h1>返回登录页</h1>
          </el-link>
        </div>
      </el-header>
      <el-main>
        <div class="containerWrapper">
          <el-form :model="Form" :rules="rules" ref="Form" label-width="100px">
            <el-form-item>
              <h1>请输入已注册的用户名,用户名唯一性</h1>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <div class="inputWrapper">
                <el-input
                  v-model="Form.username"
                  placeholder="请输入已注册用户名"
                  prefix-icon="el-icon-user"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
              <el-input
                type="password"
                v-model="Form.password"
                placeholder="请输入新密码"
                prefix-icon="el-icon-lock"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="passwordpre">
              <el-input
                type="password"
                v-model="Form.passwordpre"
                placeholder="请再次输入新密码"
                prefix-icon="el-icon-lock"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="confirmBtn" type="primary" @click="confirm('Form')">确认修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import { nameRule, passwordRule } from "../javascript/vaildate";
export default {
  components: {
    Footer
  },
  data() {
    // 判断两次密码是否输入一致
    const validatePwd = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (value != this.Form.password) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };

    return {
      Form: {
        username: "",
        password: "",
        // 再次输入密码
        passwordpre: ""
      },

      // 按钮置灰
      disabled: true,

      username: "",
      // 校验规则
      rules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }],
        passwordpre: [
          { validator: passwordRule, trigger: "blur" },
          { validator: validatePwd, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 返回登录页
    returnLogin() {
      this.$router.replace("../Pages/Login");
    },

    // 确认修改
    confirm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = this.Form.username;
          this.$axios
            .post("/apiInterface/search", params)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              this.$components.messagePointer(err, "error", 1000);
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  height: calc(100vh);
}
.el-header {
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.imageTitle {
  width: 50px !important;
  height: 50px !important;
}
.headerLeft {
  display: flex;
  align-items: center;
  justify-content: center;
}
.linkStyle {
  color: black;
}
.el-main {
  display: flex;
  justify-content: center;
}
.containerWrapper {
  width: 580px;
  margin-top: calc(13vh);
}
.containerWrapper h1 {
  margin-left: -100px;
}
.containerWrapper >>> .el-input {
  width: 300px;
}
.inputWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.confirmBtn {
  width: 300px;
}
.el-footer {
  width: 100%;
  height: 22px !important;
  background-color: #68217a;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
</style>