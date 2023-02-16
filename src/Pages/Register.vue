<template>
  <!-- 系统帮助菜单组件 -->
  <div class="registerWrapper">
    <el-container class="registerFormWrapper">
      <el-header class="Header">
        <div class="container">
          <div class="containerLeft">
            <img src="../../static/史努比-128.png" alt="主题图片" />
            <div>新用户注册</div>
          </div>
        </div>
        <div class="accountAlreadyWrapper">
          <div class="accountAlready" @click="returnLoginPage()">
            已有账号?立即登录
          </div>
        </div>
      </el-header>
      <el-main class="Main">
        <div class="registerBoxWrapper">
          <div class="registerBoxContainer">
            <div class="registerBoxContainerHead"></div>
            <div class="formWrapper">
              <el-form
                label-width="80px"
                :model="loginNumberList"
                :rules="rules"
                ref="loginNumberList"
              >
                <div class="phoneNumberWrapper">
                  <el-form-item label="手机号码" prop="phoneNumber">
                    <el-input
                      placeholder="请输入你的手机号码"
                      v-model="loginNumberList.phoneNumber"
                      clearable
                    >
                      <!-- <el-select v-model="select" slot="prepend">
                        <el-option
                          v-for="item in this.menuListJson.selectOptions"
                          :key="item.id"
                          :label="item.label"
                          :value="item.value"
                          @change="$forceUpdate()"
                        ></el-option>
                      </el-select> -->
                    </el-input>
                  </el-form-item>
                </div>
                <div class="verificationCodeWrapper">
                  <el-form-item label="验证码" prop="verificationCode">
                    <el-input
                      placeholder="请输入验证码"
                      :disabled="btnDisabled"
                      v-model="loginNumberList.verificationCode"
                    >
                    </el-input>
                    <el-button
                      :disabled="btnEnabled"
                      @click="varifyCodeAchieve('loginNumberList')"
                      >获取验证码</el-button
                    >
                  </el-form-item>
                </div>
                <el-form-item>
                  <div>
                    <el-button
                      class="registerBtn"
                      type="primary"
                      :disabled="disabled"
                      @click="RegisterConfirm()"
                      >确认注册</el-button
                    >
                  </div>
                </el-form-item>
                <el-form-item>
                  <div class="serviceDetails">
                    <div>
                      <input
                        type="checkbox"
                        v-model="loginNumberList.checked"
                      />
                    </div>
                    <div>已阅读并同意以下协议</div>
                    <div class="serviceColor" @click="serviceDetailInfoList()">
                      平台服务协议、隐私权政策、法律声明、及客户端服务协议
                    </div>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div></div>
        </div>
      </el-main>
      <el-footer class="Footer"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import menuListJson from "../../static/menuMockData/menuMock.json";
import { phoneNumberRule } from "../javascript/vaildate";
export default {
  created() {
    // this.selectOptionsAchieve();
  },
  data() {
    return {
      // 下拉选项框静态数据
      menuListJson: menuListJson,
      select: "",
      // form表单信息
      loginNumberList: {
        phoneNumber: "",
        verificationCode: "",
        // 服务条款是否勾选
        checked: false,
      },
      // 验证码Btn显示
      show: true,
      // 注册按钮置灰
      disabled: true,
      // 表单验证
      rules: { phoneNumber: [{ validator: phoneNumberRule, trigger: "blur" }] },
      // 验证码获取按钮置灰
      btnDisabled: true,
      btnEnabled: true,
    };
  },
  methods: {
    // // 获取号码归属地静态数据
    // selectOptionsAchieve() {
    //   const item = this.menuListJson.selectOptions;
    //   const arr = [];
    //   arr.push(item);
    //   this.select = arr[0][0].value;
    // },
    // 获取验证码
    varifyCodeAchieve(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          console.error("Error Submit");
          return false;
        }
      });
    },
    // 返回登录页
    returnLoginPage() {
      this.$router.push("../Pages/HelloWorld");
    },
    // 确认注册
    RegisterConfirm() {
      if (this.loginNumberList.checked == false) {
        if (document.getElementsByClassName("el-message").length > 1) return;
        this.$message({
          message: "请查看同意并勾选服务条款...",
          type: "error",
          center: true,
        });
      }
    },
    // 服务条款阅读
    serviceDetailInfoList() {
      window.open("../Pages/ServiceDetailInfoList");
    },
  },
  // 事件监听
  watch: {
    "loginNumberList.phoneNumber": {
      handler(newVal, oldVal) {
        if (newVal != "") {
          this.btnDisabled = false;
          this.btnEnabled = false;
        } else {
          this.btnDisabled = true;
          this.btnEnabled = true;
        }
      },
    },
    "loginNumberList.verificationCode": {
      handler(newVal, oldVal) {
        if (newVal != "") {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      },
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
  align-items: center;
  justify-content: center;
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
.registerBoxWrapper {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.registerBoxContainerHead {
  height: 150px;
}
.el-form .el-select {
  width: 140px !important;
}
.el-form .el-input {
  width: 400px !important;
  vertical-align: middle;
}
.registerBtn {
  width: 400px !important;
}
.serviceDetails {
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  margin-top: 3%;
}
.serviceDetails div:nth-child(2) {
  margin-left: 5px;
}
.serviceColor {
  color: red;
  cursor: pointer;
}
.varifyCodeAchieve {
  color: rgb(64, 158, 255);
  cursor: pointer;
}
.varifyCodeAchieveForbidden {
  cursor: not-allowed;
}
.phoneNumberWrapper {
  display: flex;
}
.verificationCodeWrapper .el-input {
  width: 285px !important;
}
.reminderMsg {
  height: 40px;
  color: red;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-left: 3%;
}
</style>