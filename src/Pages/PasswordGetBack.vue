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
      <el-main class="Main"></el-main>
      <el-footer class="Footer"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 返回登录页
    returnLoginPage() {
      this.$router.push("../Pages/HelloWorld");
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
.reminderMsg {
  height: 40px;
  color: red;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-left: 3%;
}
</style>