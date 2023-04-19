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
    return {};
  },
  methods: {}
};
</script>

<style scoped>
body {
  overflow-x: hidden; /** 为了避免动画过程中出现水平方向的滚动条 */
}
</style>
