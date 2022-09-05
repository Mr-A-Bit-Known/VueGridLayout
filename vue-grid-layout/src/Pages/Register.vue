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
      </el-header>
      <el-main class="Main" :style="{ height: this.screenHeight + 'px' }">
        <div class="registerBoxWrapper">
          <div class="registerBoxContainer">
            <div class="registerBoxContainerHead"></div>
            <div class="formWrapper">
              <el-form label-width="80px">
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
                <el-form-item label="验证码">
                  <el-input v-model="loginNumberList.varifyCode" class="varifyCode" placeholder="请输入短信验证码" clearable>
                    <template slot="append" @click="show()">获取验证码</template>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <div>
                    <el-button class="registerBtn" type="primary" @click="RegisterConfirm()">确认注册</el-button>
                  </div>
                </el-form-item>                
                  <div class="serviceDetails">  
                    <div>
                      <input type="checkbox" v-model="checked">
                    </div>
                    <div>已阅读并同意以下协议</div>
                    </div>
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
      },
      // 服务条款是否勾选
      checked: false,
    };
  },
  methods: {
    // 过去屏幕高度信息
    getViewHeight() {
      const screenHeight =
        this.$getViewSize().height - (this.headerHeight + this.footerHeight);
      this.screenHeight = screenHeight;
    },
    // 获取验证码
    show() {
      alert("123")
    },
    // 确认注册
    RegisterConfirm() {},
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
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #e7f6e6, #d3efd2);
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
  width: 100% !important;
}
.serviceDetails {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.serviceDetails div:nth-child(2) {
  margin-left: 5px;
}
</style>