<template>
  <div class="mainPageWrapper">
    <el-container>
      <el-header :style="{height: this.header_style + 'px'}"><NavHeader></NavHeader></el-header>
      <el-container>
        <el-aside width="200px" :style="{height: this.screenHeight + 'px'}"><div :style="{height: this.screenHeight + 'px'}"><NavBar></NavBar></div></el-aside>
        <el-main :style="{height: this.screenHeight + 'px'}"></el-main>
      </el-container>
      <el-footer :style="{ height: this.footer_style + 'px' }"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
components:{},
  data() {
    return {
      header_style: 50,
      footer_style: 30,
    //   屏幕高度
    screenHeight: ""
    };
  },
  methods: {
    // 获取屏幕高度
    getViewHeight() {
        const screenHeight = this.$getViewSize().height - (this.header_style + this.footer_style);
        this.screenHeight = screenHeight;
    }
  },
  mounted() {
    this.getViewHeight();
    window.addEventListener('resize',this.getViewHeight);
  },
  destroyed() {
    window.removeEventListener('resize',this.getViewHeight,false);
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>