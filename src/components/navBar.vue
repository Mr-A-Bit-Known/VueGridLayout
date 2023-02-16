<template>
  <div class="navWrapper">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
    </el-menu>
  </div>
</template>

<script>
import MenuList from "../../static/menuMockData/menuMock";
export default {
  created() {
    console.log(this.MenuList.menuList);
  },
  data() {
    return {
      // 是否收缩菜单
      isCollapse: false,
      collapseTransition: false,
      // 菜单选项
      MenuList,
    };
  },
  methods: {
    subItemClick(subItem) {
      console.log(subItem.path);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>