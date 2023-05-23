<template>
  <div class="wrapper">
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
</style>