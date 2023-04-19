<template>
  <div class="wrapper">
    <!-- 头部搜索栏 -->
    <div class="searchWrapper"></div>
    <!-- 多级菜单导航 -->
  </div>
</template>

<script>
export default {
  name: "Menu",
  created() {
    this.getMenuList();
  },
  data() {
    return {
      list: "",
    };
  },
  methods: {
    // 获取菜单列表
    getMenuList() {
      this.$axios
        .post("/show_list_display")
        .then((res) => {
          this.list = res.data.data;
        })
        .catch((err) => {
          this.$pointerList.messagePointer(err, "error", 1000);
        });
    },
  },
};
</script>

<style scoped>
.searchWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper >>> .el-submenu__title,
.el-menu-item,
.el-menu {
  width: 200px !important;
  font-size: 12px !important;
  height: 40px !important;
}
.wrapper >>> .el-submenu__title {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 20px !important;
}
.wrapper >>> .el-menu-item {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 50px !important;
}
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
</style>