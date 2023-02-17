<template>
  <div class="homepageWrapper">
    <el-container class="layouWrapper">
      <!-- 头部区域 -->
      <el-header class="headerWrapper">
        <div class="headerContainer">
          <div class="headerLeft">
            <img src="../../static/史努比.png" alt="" />
          </div>
          <!-- 头部导航菜单 -->
          <NavHeader></NavHeader>
        </div>
      </el-header>
      <!-- 侧边栏 -->
      <el-container>
        <el-aside width="200px">
          <NavBar></NavBar>
        </el-aside>
        <el-container>
          <!-- 主体部分 -->
          <el-main>
            <div id="app">{{ this.name }}</div>
          </el-main>
        </el-container>
      </el-container>
      <!-- 底部区域 -->
      <el-footer class="footerWrapper"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import NavHeader from "../components/navHeader";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
export default {
  components: {
    NavHeader,
    NavBar,
    Footer,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.layouWrapper {
  height: 100vh !important;
}
.headerWrapper {
  display: flex;
  align-items: center;
  height: 40px !important;
}
.footerWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px !important;
}
.headerContainer {
  display: flex;
  align-items: center;
}
.headerLeft {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>