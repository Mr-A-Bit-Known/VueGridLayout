<template>
  <div class="wrapper">
    <el-container>
      <el-header :style="{ height: this.headerHeight + 'px' }"
        ><Header></Header
      ></el-header>
      <el-main :style="{height: this.screenHeight}"></el-main>
      <el-footer :style="{ height: this.footerHeight + 'px' }"
        ><Footer></Footer
      ></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import clientHeightComputed from "../javascript/computed";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      // header height
      headerHeight: 30,
      // footer height
      footerHeight: 22,

      // 屏幕高度
      screenHeight: "",
    };
  },
  methods: {
    // 获取屏幕高度
    getViewheight() {
      const screenHeight = clientHeightComputed() - (this.headerHeight + this.footerHeight) + 'px';
      this.screenHeight = screenHeight;
    }
  },
  mounted() {
    this.getViewheight();
    window.addEventListener('resize',this.getViewheight);
  },
  destroyed() {
    window.removeEventListener('resize',this.getViewheight, false);
  }
};
</script>

<style scoped>
.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #68217a;
}
</style>