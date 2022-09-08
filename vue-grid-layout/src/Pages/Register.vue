<template>
  <div class="registerWrapper">
    <el-container>
      <el-header class="Header" :style="{ height: this.headerHeight + 'px' }">
        <div class="container">
          <div class="containerLeft">
            <img src="../../static/史努比-128.png" alt="" />
            <div>新用户注册</div>
          </div>
        </div>
        <div class="accountAlreadyWrapper"><div class="accountAlready" @click="returnLoginPage()">已有账号?立即登录</div></div>
      </el-header>
      <el-main class="Main" :style="{ height: this.screenHeight + 'px' }">
        <div class="registerBoxWrapper">
          <div class="registerBoxContainer">
            <div class="registerBoxContainerHead"></div>
            <div class="formWrapper">
              <el-form label-width="80px">
                <div class="phoneNumberWrapper">
                  <el-form-item label="手机号码">
                  <el-input placeholder="请输入你的手机号码" v-model="loginNumberList.inputValue" clearable>
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                      <el-option label="中国大陆 +86" value="1"></el-option>
                      <el-option label="中国香港 +852" value="2"></el-option>
                      <el-option label="中国澳门 +853" value="3"></el-option>
                      <el-option label="中国台湾 +886" value="4"></el-option>
                    </el-select>
                  </el-input>
                </el-form-item>
                <div class="reminderMsg" v-if="this.phoneNumberNull">手机号码不能为空!</div>
                <div class="reminderMsg" v-if="this.phoneNumberFormatIncorrect">手机格式不正确!</div>
                </div>
                <div class="phoneNumberWrapper">
                  <el-form-item label="验证码">
                  <el-input v-model="loginNumberList.varifyCode" class="varifyCode" placeholder="请输入短信验证码" clearable>
                    <template slot="append">
                    <el-button v-if="show" class="varifyCodeAchieve" @click="varifyCodeAchieve()">获取验证码</el-button>
                    <el-button v-if="!show" class="varifyCodeAchieveForbidden">重新获取({{this.count}}S)</el-button>
                    </template>
                  </el-input>
                </el-form-item>
                <div class="reminderMsg" v-if="this.varifyCodeNull">验证码不能为空!!!</div>
                </div>
                <el-form-item>
                  <div>
                    <el-button class="registerBtn" type="primary" @click="RegisterConfirm()">确认注册</el-button>
                  </div>
                </el-form-item>                
                  <el-form-item>
                    <div class="serviceDetails">
                    <div>
                      <input type="checkbox" v-model="loginNumberList.checked">
                    </div>
                    <div>已阅读并同意以下协议</div>
                    <div class="serviceColor" @click="serviceDetailInfoList()">平台服务协议、隐私权政策、法律声明、及客户端服务协议</div>
                    </div>
                  </el-form-item>
              </el-form>
            </div>
          </div>
          <div></div>
        </div>
      </el-main>
      <el-footer class="Footer" :style="{ height: this.footerHeight + 'px' }"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 组件高度
      headerHeight: 160,
      footerHeight: 30,
      // screenWidth: "",
      screenHeight: "",
      // 电话信息选择
      select: "",
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
      phoneNumberNull: false,
      // 手机号码格式不正确
      phoneNumberFormatIncorrect: false,
      // 验证码为空
      varifyCodeNull: false,
    };
  },
  methods: {
    // 过去屏幕高度信息
    getViewHeight() {
      const screenHeight =
        this.$getViewSize().height - (this.headerHeight + this.footerHeight);
      this.screenHeight = screenHeight;
    },
    // 返回登录页
    returnLoginPage() {
      this.$router.push('../Pages/HelloWorld');
    },
    // 验证码60S 倒计时
    // 获取验证码
    varifyCodeAchieve() {
      if(this.loginNumberList.inputValue == "") {
        this.phoneNumberNull = true;
        return;
      }     
      const TIME_COUNT = 60;
      if(!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if(this.count > 0 && this.count <= TIME_COUNT) {
            this.count --;
          }else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        },1000)
      }
    },
    // 确认注册
    RegisterConfirm() {
      if(this.loginNumberList.inputValue == "" && this.loginNumberList.varifyCode == "") {
        this.phoneNumberNull = true;
        this.varifyCodeNull = true;
      }
    },
    // 服务条款阅读
    serviceDetailInfoList() {
      window.open("../Pages/ServiceDetailInfoList");
    },
  },
    // 输入框数据监听
  watch: {
    'loginNumberList.inputValue': {
        handler(newVal,oldVal) {
          this.phoneNumberNull = false;  
        },
        immediate: true
    },
    deep: true,
    'loginNumberList.varifyCode': {
      handler(newVal,oldVal) {
        this.varifyCodeNull = false;
      },
      immediate: true
    }
  },
  mounted() {
    this.getViewHeight();
    window.addEventListener("resize", this.getViewHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.getViewHeight, false);
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
  background-image: linear-gradient(to right,#c2e9fb 30%,#a1c4fd 100%);
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
  color: rgb(64,158,255);
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
  width: 160px !important;
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
  color: rgb(64,158,255);
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