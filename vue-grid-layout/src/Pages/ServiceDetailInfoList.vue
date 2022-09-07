<template>
  <div class="serviceDetailInfoListWrapper">
    <el-container>
      <el-header>
        <div>某某平台服务协议</div>
        <div>最新版本生效日期:2022年09月07日</div>
      </el-header>
      <el-main> </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.serviceDetailInfoListWrapper {
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 80px!important;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
}
.el-header div:nth-child(2) {
  width: 80%;
  display: flex;
  justify-content: right;
  font-size: 16px!important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100vh;
}
</style>