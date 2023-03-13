<template>
  <div class="wrapper">
    <el-container class="container">
      <el-header>
        <div class="headerLeft">
          <el-image
            class="imageTitle"
            :src="require('../images/Snobi.png')"
          ></el-image>
          <h1>密码找回</h1>
        </div>
        <div class="linkTitle">
          <el-link class="linkStyle" @click="returnLogin"
            ><h1>已有账户,立即登录</h1></el-link
          >
        </div>
      </el-header>
      <el-main>123</el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    // 返回登录页
    returnLogin() {
      this.$router.replace("../Pages/Login");
    },
  },
};
</script>

<style scoped>
.container {
  height: calc(100vh);
}
.el-header {
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.imageTitle {
  width: 50px !important;
  height: 50px !important;
}
.headerLeft {
  display: flex;
  align-items: center;
  justify-content: center;
}
.linkStyle {
  color: black;
}
.el-footer {
  width: 100%;
  height: 22px !important;
  background-color: #68217a;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>