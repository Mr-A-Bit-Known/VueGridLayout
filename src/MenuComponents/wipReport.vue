<template>
  <div class="wrapper" :style="{height:autoHeight.height}">
    <el-container>
      <el-header>Header</el-header>
      <el-main :style="{height:autoHeight.tableHeight}">
        <el-table :style="{height:autoHeight.tableHeight}" :data="tableList">
          <el-table-column prop="产品名称" label="产品名称"></el-table-column>
        </el-table>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// 获取浏览器高度
const windowHeight = parseInt(window.innerHeight);
export default {
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },
  data() {
    return {
      // 屏幕高度
      windowHeight: windowHeight,

      // 动态自适应高度
      autoHeight: {
        height: "",
        tableHeight: ""
      },

      // table数据源
      tableList: []
    };
  },
  methods: {
    // 已知 padding 40 , tabs 54 footer 20
    getHeight() {
      this.autoHeight.height = windowHeight - 114 + "px";
      this.autoHeight.tableHeight = windowHeight - 234 + "px";
    }
  },
  destroyed() {
    window.addEventListener("resize", this.getHeight);
  }
};
</script>

<style scoped>
.wrapper {
  background-color: aquamarine;
}
</style>