<template>
  <div class="registerWrapper">
    <el-container class="registerFormWrapper">
      <el-header class="Header">
        <div class="container">
          <div class="containerLeft">
            <img src="../../static/史努比-128.png" alt="主题图片" />
            <div>用户密码找回</div>
          </div>
        </div>
        <div class="accountAlreadyWrapper">
          <div class="accountAlready" @click="returnLoginPage()">
            不用了?想起来了
          </div>
        </div>
      </el-header>
      <el-main class="Main">
        <el-form
          label-width="80px"
          status-icon
          :model="form"
          ref="form"
          :rules="rules"
        >
          <el-form-item label="手机号码" prop="phoneNumber">
            <el-input
              placeholder="请输入手机号码"
              v-model.number="form.phoneNumber"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="form.password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordReload">
            <el-input
              type="password"
              placeholder="请再次输入密码"
              v-model="form.passwordReload"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="confirm" type="primary" @click="confirm('form')"
              >确认提交</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer class="Footer"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import { passwordGetBack } from "../javascript/vaildate";
export default {
  data() {
    // 两次输入密码是否一致校验
    var passwordReLoad = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 检查手机号码是否存在
    var checkPhoneNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号码"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      // 表单数据
      form: {
        phoneNumber: "",
        password: "",
        passwordReload: "",
      },
      // 校验规则
      rules: {
        phoneNumber: [{ validator: checkPhoneNumber, trigger: "blur" }],
        password: [{ validator: passwordGetBack, trigger: "blur" }],
        passwordReload: [{ validator: passwordReLoad, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 返回登录页
    returnLoginPage() {
      this.$router.push("../Pages/HelloWorld");
    },
    // 表单提交
    confirm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
        } else {
          console.error("Error Submit");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.registerWrapper {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.Header {
  height: 160px !important;
  background-color: #b3c0d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #c2e9fb 30%, #a1c4fd 100%);
}
.registerFormWrapper {
  height: 100vh;
  padding: 0 !important;
  margin: 0 !important;
}
.accountAlreadyWrapper {
  width: 60%;
  display: flex;
  justify-content: right;
}
.accountAlready {
  display: flex;
  font-size: 16px;
}
.accountAlready:hover {
  cursor: pointer;
  color: rgb(64, 158, 255);
}
.Main {
  background-color: #e9eef3;
  display: flex;
  justify-content: center;
}
.Main .el-form {
  margin-top: 5%;
}
.Footer {
  height: 30px !important;
  background-color: #b3c0d1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 80%;
  height: 100px;
  font-style: italic;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.containerLeft {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.el-form .el-select {
  width: 140px !important;
}
.el-form .el-input {
  width: 400px !important;
  vertical-align: middle;
}
.confirm {
  width: 100%;
}
</style>