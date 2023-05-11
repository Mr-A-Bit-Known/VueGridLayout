<template>
  <div class="wrapper">
    <h1>404 NotFound</h1>
    <h2>
      <el-link class="link" @click="backToLogin()">返回首页</el-link>
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 返回首页
    backToLogin() {
      this.$router.replace("../Pages/Login");
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  font-size: 60px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  color: #fff;
  background-image: linear-gradient(
    125deg,
    #2c3e50,
    #27ae60,
    #2980b9,
    #e74c3c,
    #8e44ad
  );
  background-size: 400%;
  animation: backgroudMove 20s infinite;
}

@keyframes backgroudMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
.link {
  font-size: 30px;
  color: #fff;
}
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
</style>