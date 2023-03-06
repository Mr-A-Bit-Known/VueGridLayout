<template>
  <div class="headerWrapper">
    <div class="textWrapper">
      <div class="fontWrapper">忽如一夜春风来,千树万树梨花开...</div>
    </div>
    <div class="clockWrapper">
      <el-link class="textCenter" @click="accountRegister" type="primary"
        >还没有账号?立即注册</el-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 账户注册
    accountRegister() {
      this.$router.replace("../Pages/Register");
    },
  },
};
</script>

<style scoped>
.headerWrapper {
  width: 90%;
  height: 30px !important;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fontWrapper {
  font-size: 16px;
  color: black;
  font-weight: bold;
}
.textCenter {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: black;
  cursor: pointer;
}
</style>