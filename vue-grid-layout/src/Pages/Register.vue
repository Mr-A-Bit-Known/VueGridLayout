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
        <div class="registerBoxWrapper"></div>
      </el-main>
      <el-footer class="Footer" :style="{ height: this.footerHeight + 'px' }"
        ><Footer></Footer
      ></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: 160,
      footerHeight: 30,
      // screenWidth: "",
      screenHeight: "",
    };
  },
  methods: {
    // 过去屏幕高度信息
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
  text-align: center;
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
</style>