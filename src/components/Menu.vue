<template>
  <div class="wrapper">
    <template v-for="item in list">
      <template v-if="item.children">
        <el-submenu :key="item.id" :index="item.path?item.path:Math.random() + ''">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.menu_name }}</span>
          </template>
          <el-menu-item-group>
            <Menu :list="item.children"></Menu>
          </el-menu-item-group>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="`/Pages${item.path}`" :key="item.index">
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
  created() {},
  props: {
    list: Array
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>