<template>
  <div class="registerWrapper">
    <el-container class="registerFormWrapper">
      <el-header class="Header" :style="{ height: this.headerHeight + 'px' }">
        <div class="container">
          <div class="containerLeft">
            <img v-lazy src="../../static/史努比-128.png" alt="主题图片" />
            <div>新用户注册</div>
          </div>
        </div>
        <div class="accountAlreadyWrapper">
          <div class="accountAlready" @click="returnLoginPage()">
            已有账号?立即登录
          </div>
        </div>
      </el-header>
      <el-main class="Main" :style="{ height: this.screenHeight + 'px' }">
        <div class="registerBoxWrapper">
          <div class="registerBoxContainer">
            <div class="registerBoxContainerHead"></div>
            <div class="formWrapper">
              <el-form label-width="80px">
                <div class="phoneNumberWrapper">
                  <el-form-item label="手机号码">
                    <el-input
                      placeholder="请输入你的手机号码"
                      v-model="loginNumberList.inputValue"
                      clearable
                    >
                      <el-select
                        v-model="select"
                        slot="prepend"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in selectOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          @change="$forceUpdate()"
                        ></el-option>
                      </el-select>
                    </el-input>
                  </el-form-item>
                  <!-- <div
                    class="reminderMsg"
                    id="phoneNumberBox"
                    v-if="this.phoneNumberNull"
                  >
                    手机号码不能为空
                  </div> -->
                  <!-- <div class="reminderMsg" v-if="this.phoneNumberLengthIncorrecrt">手机号码最多不超过11位</div>
                <div class="reminderMsg" v-if="this.phoneNumberFormatIncorrect">手机格式不正确</div> -->
                </div>
                <div class="phoneNumberWrapper">
                  <el-form-item label="验证码">
                    <el-input
                      v-model="loginNumberList.varifyCode"
                      class="varifyCode"
                      placeholder="请输入短信验证码"
                      clearable
                    >
                      <template slot="append">
                        <el-button
                          v-if="show"
                          class="varifyCodeAchieve"
                          @click="varifyCodeAchieve()"
                          >获取验证码</el-button
                        >
                        <el-button
                          v-if="!show"
                          class="varifyCodeAchieveForbidden"
                          >重新获取({{ this.count }}S)</el-button
                        >
                      </template>
                    </el-input>
                  </el-form-item>
                  <!-- <div class="reminderMsg" id="varifyCodeBox" v-if="this.varifyCodeNull">验证码不能为空</div> -->
                  <!-- <div class="reminderMsg" v-if="this.varifyCodeFormatIncorrect">验证码格式不正确</div> -->
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
      <el-footer class="Footer" :style="{ height: this.footerHeight + 'px' }"
        ><Footer></Footer
      ></el-footer>
    </el-container>
  </div>
</template>

<script>
// import moment from "moment";
export default {
  data() {
    return {
      // 组件高度
      headerHeight: 160,
      footerHeight: 30,
      // screenWidth: "",
      screenHeight: "",
      // 电话信息下拉框选项
      selectOptions: [
        {
          value: "选项1",
          label: "中国大陆 +86",
        },
        {
          value: "选项2",
          label: "中国香港 +852",
        },
        {
          value: "选项3",
          label: "中国澳门 +853",
        },
        {
          value: "选项4",
          label: "中国台湾 +886",
        },
      ],
      // 下拉菜单默认选项
      select: "选项1",
      // form表单信息
      loginNumberList: {
        inputValue: "",
        varifyCode: "",
        // 服务条款是否勾选
        checked: false,
      },
      // 验证码Btn显示
      show: true,
      count: "",
      timer: null,
      // 手机号码为空
      // phoneNumberNull: false,
      // // 手机号码格式不正确
      // phoneNumberFormatIncorrect: false,
      // 验证码为空
      // varifyCodeNull: false,
      // // 验证码格式不正确
      // varifyCodeFormatIncorrect: false,
      // // 手机号码长度不正确
      // phoneNumberLengthIncorrecrt: false,
      // 输入框内容监听
      phoneNumberInput: "",
      // 验证是否输入验证码
      disabled: true,
      // 时间
      date: "",
      time: "",
      weekOfDay: "",
    };
  },
  methods: {
    // 返回登录页
    returnLoginPage() {
      this.$router.push("../Pages/HelloWorld");
    },
    // 获取时间
    // getTimeData() {
    //   const date = this.$getTimeDate().date;
    //   const time = this.$getTimeDate().time;
    //   this.date = date;
    //   this.time = time;
    //   this.timer = setTimeout(() => {
    //     this.getTimeData();
    //   }, 1000);
    // },
    // 验证码60S 倒计时
    // 获取验证码
    varifyCodeAchieve() {
      const regMobile =
        /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (!regMobile.test(this.loginNumberList.inputValue)) {
        if (document.getElementsByClassName("el-message").length > 1) return;
        this.$message({
          message: "手机号码格式不正确...",
          type: "error",
          center: true,
          duration: 1000,
        });
      } else {
        alert("Achiece Success...");
      }
      const reqMobile = /^1[3|4|5|7|8][0-9]{9}$/;
      if (this.loginNumberList.inputValue == "") {
        this.phoneNumberNull = true;
        return;
      } else if (!reqMobile.test(this.loginNumberList.inputValue)) {
        if (document.getElementsByClassName("el-message").length > 1) return;
        this.$message({
          message: "手机号码格式不正确...",
          type: "error",
          center: true,
        });
        return;
      } else {
        console.log("Achieve Success...");
      }
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
  // 输入框数据监听
  watch: {
    "loginNumberList.inputValue": {
      handler(newVal, oldVal) {
        if (this.loginNumberList.inputValue != "" && this.loginNumberList.varifyCode != "") {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      },
      "loginNumberList.varifyCode": {
        handler(newVal, oldVal) {},
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
  background-color: #b3c0d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #c2e9fb 30%, #a1c4fd 100%);
}
.registerFormWrapper {
  height: 100vh;
  padding: 0!important;
  margin: 0!important;
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
.reminderMsg {
  height: 40px;
  color: red;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-left: 3%;
}
</style>