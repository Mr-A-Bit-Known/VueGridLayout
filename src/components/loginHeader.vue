<template>
  <div class="headerWrapper">
    <div class="fontWrapper">忽如一夜春风来,千树万树梨花开...</div>
    <div class="weatherWrapper"></div>
  </div>
</template>
  
  <script>
export default {
  components: {
    // weather
  },
  created() {},
  data() {
    return {
      weather: ""
    };
  },
  methods: {},
  mounted() {}
};
</script>
  
  <style scoped>
.headerWrapper {
  height: 30px !important;
  font-size: 15px;
  width: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fontWrapper {
  font-size: 16px;
  color: black;
  font-weight: bold;
  white-space: nowrap;
}
.weatherWrapper {
  margin-right: 30px;
}
</style>