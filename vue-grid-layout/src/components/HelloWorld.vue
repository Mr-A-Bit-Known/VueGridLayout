<template>
  <div class="parent">
    <el-container>
      <el-header class="Header" :style="{ height: this.headerHeight + 'px' }"
        ><Header></Header
      ></el-header>
      <el-main class="Main" :style="{ height: this.screenHeight + 'px' }">
        <div class="boxWrapper">
          <div class="register_login_box">
            <div>
              <h1>用户注册登录界面</h1>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-footer class="Footer" :style="{ height: this.footerHeight + 'px' }">
      <Footer></Footer>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: 40,
      footerHeight: 30,
      // screenWidth: "",
      screenHeight: "",
    };
  },
  methods: {
    getViewHeight() {
      const screenHeight =
        this.$getViewSize().height - (this.headerHeight + this.footerHeight);
      this.screenHeight = screenHeight;
    },
  },
  mounted() {
    this.getViewHeight();
    window.addEventListener("resize", this.getViewHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.getViewHeight, false);
  },
  // 事件监听
  watch: {},
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  display: flex;
  align-items: center;
}

.el-main {
  background-image: linear-gradient(#3fb0ac, #c5d7a1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-footer {
  background-color: #b3c0d1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.boxWrapper {
  width: 1200px;
  height: 400px;
  display: flex;
  justify-content: right;
  align-items: center;
}
.register_login_box {
  width: 380px;
  height: 380px;
  background-color: #f6f0fb;
  opacity: 0.8;
  -webkit-box-shadow: rgb(7, 216, 223) 0px 0px 10px;
  -moz-box-shadow: rgb(7, 216, 223) 0px 0px 10px;
  box-shadow: rgb(7, 216, 223) 0px 0px 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.register_login_box h1 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 30%;
}
</style>