<template>
  <div class="headerWrapper">
    <div class="fontWrapper">忽如一夜春风来,千树万树梨花开...</div>
    <div class="dateWrapper">{{ this.nowDate }}</div>
  </div>
</template>

<script>
export default {
  // 页面创建，获取当前时间...
  created() {
    setInterval(this.getNowDate, 1000);
  },
  data() {
    return {
      nowDate: "",
    };
  },
  methods: {
    //  获取当前时间
    getNowDate() {
      let myDate = new Date();
      this.nowDate = myDate.toLocaleString();
    },
  },
};
</script>

<style scoped>
.headerWrapper {
  font-size: 15px;
  font-weight: bold;
  display: flex;
}
</style>