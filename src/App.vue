<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  created() {
    if (document.getElementById("Loading")) {
      document.getElementById("Loading").remove();
    }
  },
  name: "App",
  data() {
    return {
      token: ""
    };
  },
  methods: {},
  // 页面关闭，移除token,以及登录信息
  destroyed() {
    this.$store.commit("del_token", token);
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden; /** 为了避免动画过程中出现水平方向的滚动条 */
}
</style>
