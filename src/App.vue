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
    // 页面创建,初始化localStorage内容
    this.setLocalStorageDefaultValue();
  },
  name: "App",
  data() {
    return {
      loginInfo: "{}",
      token: "{}"
    };
  },
  methods: {
    // 页面初始化,localStorage设置默认值
    setLocalStorageDefaultValue() {
      // 登录信息
      this.$store.commit("set_defaultValue", this.loginInfo);
      // token
      this.$store.commit("set_token", this.token);
    }
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden; /** 为了避免动画过程中出现水平方向的滚动条 */
}
</style>
