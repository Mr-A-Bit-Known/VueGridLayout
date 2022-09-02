<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    document.body.removeChild(document.getElementById("Loading")); // 加载页面完后移除加载动画
  },
};
</script>

<style scoped>
#app {
  margin: 0px;
  padding: 0px;
}
</style>
