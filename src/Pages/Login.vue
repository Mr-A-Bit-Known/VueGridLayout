<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xl="6" :lg="7">
      <h1>欢迎使用MES仓库管理系统</h1>
      <el-image
        class="loginImange"
        :src="require('../../static/qrcode_chrome.png')"
      ></el-image>
      <h3>详情请访问网络地址:172.20.17.10</h3>
      <h4>详情请扫描二维码</h4>
    </el-col>
    <el-col :span="1">
      <el-divider direction="vertical"></el-divider>
    </el-col>
    <!-- 登录表单 -->
    <el-col :xl="6" :lg="7">
      <el-form
        :model="Form"
        :rules="LoginFormRules"
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
          ></el-input>
        </el-form-item>
        <!-- <el-form-item
          label="验证码"
          class="validateCodeStyle"
          prop="validateCode"
          style="width: 380px"
        >
          <el-input
            v-model="Form.validateCode"
            style="width: 170px; float: left"
          ></el-input>
          <el-image :src="validateImage" class="validateImage"></el-image>
        </el-form-item> -->
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('Form')"
            style="width: 280px; float: left"
            >登录</el-button
          >
          <!-- <el-button @click="resetForm('Form')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import {
  nameRule,
  passwordRule,
  // validateCodeRule,
} from "../javascript/vaildate";
export default {
  // 页面渲染时
  created() {
    // this.getValidateImage();
  },
  data() {
    return {
      Form: {
        username: "",
        password: "",
        // validateCode: "",
        // token
        token: "",
      },
      // 表单校验规则
      LoginFormRules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }],
        // validateCode: [{ validator: validateCodeRule, trigger: "blur" }],
      },
      //   验证码图片
      // validateImage: null,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/Login", this.Form).then((res) => {
            const jwt = res.headers["authorization"];
            this.$store.commit("SET_TOKEN", jwt);
            this.$router.push("../Pages/HomePage");
          });
        } else {
          console.error("Error Submit");
          return false;
        }
      });
    },
    // 表单清空
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取验证码
    // getValidateImage() {
    //   this.$axios.post("/getValidateImage").then((res) => {
    //     console.log("/getValidateImage");
    //     console.log(res);
    //     this.Form.token = res.data.data.token;
    //     this.validateImage = res.data.data.validateImage;
    //   });
    // },
  },
};
</script>

<style scoped>
.el-row {
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
}
.loginImange {
  width: 180px;
  height: 180px;
}
.el-divider {
  height: 200px;
}
.validateImage {
  margin-left: 5px;
  height: 40px;
}
.validateCodeStyle >>> .el-form-item__content {
  line-height: 0px !important;
}
</style>