<template>
  <div class="wrapper">在制品报表</div>
</template>

<script>
export default {
  mounted() {
    this.selectAll();
  },
  data() {
    return {};
  },
  methods: {
    // 获取所有数据
    async selectAll() {
      await this.$axios
        .post("/show-plugin-batch-display")
        .then(res => {
          this.$components.messagePointer(res.data.msg, "success", 1000);
        })
        .catch(err => {
          this.$components.messagePointer(err, "error", 1000);
        });
    }
  }
};
</script>

<style scoped>
</style>