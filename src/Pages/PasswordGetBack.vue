<template>
  <div class="passwordGetBackWrapper">
    <el-container>
      <el-header class="Header" :style="{ height: this.headerHeight + 'px' }">
      </el-header>
      <el-main class="Main" :style="{ height: this.screenHeight + 'px' }">
        <div class="passwordGetBackBoxWrapper"></div>
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
      headerHeight: 40,
      footerHeight: 30,
      screenHeight: "",   
    };
  },
};
</script>

<style scoped>
</style>