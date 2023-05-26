<template>
  <div class="wrapper">
    <el-menu
      router
      :default-active="this.$route.path"
      background-color="#545c64"
      text-color="#fff"
      :unique-opened="true"
    >
      <template v-for="item in list">
        <!-- 标题 -->
        <template v-if="item.children">
          <el-submenu :key="item.id" :index="item.path?item.path:Math.random()">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.menu_name }}</span>
            </template>
            <el-menu-item-group>
              <Menu :list="item.children"></Menu>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <!-- 选项 -->
        <template v-else>
          <el-menu-item :index="`/Pages${item.path}`" :key="item.id">
            <i :class="item.icon"></i>
            <span>{{ item.menu_name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  // 导航菜单选项(父组件传子组件)
  props: {
    // 导航菜单数据
    list: Array
  },
  data() {
    return {};
  },
  methods: {
    // 菜单是否折叠
  }
};
</script>

<style scoped>
.is-active {
  background: #1e78bf;
  color: #fff !important;
}
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
.el-menu {
  border-right: 0;
}
.el-menu /deep/ .li .el-menu-item {
  padding-left: 14px;
}
.el-menu /deep/ .el-menu-item-group__title {
  padding: 0px 0px 0px 0px !important;
}
.el-menu /deep/ .el-menu-item span {
  padding-left: 33px;
}
</style>