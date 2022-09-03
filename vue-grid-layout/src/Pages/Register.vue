<template>
  <div class="registerWrapper">
    <el-container>
      <el-header
        class="Header"
        :style="{ height: this.headerHeight + 'px' }"
      ></el-header>
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
  text-align: center;
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
</style>