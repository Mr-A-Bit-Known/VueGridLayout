<template>
  <div class="parent">
    <el-container>
      <el-header class="Header" :style="{ height: this.headerHeight + 'px' }"
        ><Header></Header
      ></el-header>
      <el-main class="Main" :style="{ height: this.screenHeight + 'px' }">
        <div class="boxWrapper">
          <div class="register_login_box"></div>
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
  width: 350px;
  height: 350px;
  background-color: #f6f0fb;
}
</style>