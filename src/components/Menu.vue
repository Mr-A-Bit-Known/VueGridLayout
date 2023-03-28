<template>
  <div class="wrapper">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      :unique-opened="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in list">
        <el-submenu v-if="item.children" :index="item.path" :key="item.id">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.menu_name }}</span>
          </template>
          <el-menu-item
            v-for="ls in item.children"
            :key="ls.id"
            :index="ls.path"
          >
            <i></i>
            <span>{{ ls.menu_name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
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
        .post("/apiInterface/show_list_display")
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
}
.wrapper >>> .el-menu-item {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 0px;
}
</style>