<template>
  <div class="headerWrapper">
    <div class="leftList">
      <img class="imageStyle" src="../images/Snobi.png" alt="系统图标" />
      <el-dropdown trigger="click" v-for="item in  list" :key="item.key" @command="handleCommand">
        <span class="el-dropdown-link">{{ item.meta }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="items in item.children"
            :key="items.key"
            :command="items.key"
          >{{ items.meta }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import indexJs from "../../static/index.json";
export default {
  created() {},
  data() {
    return {
      list: indexJs.tableList
    };
  },
  methods: {
    // handleCommand
    handleCommand(command) {
      this.$message("Click on " + command);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.headerWrapper {
  height: 30px !important;
  background-color: #545c64;
  font-size: 15px;
  width: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.leftList {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imageStyle {
  width: 22px;
  height: 22px;
}
.el-dropdown-link {
  cursor: pointer;
  margin-left: 10px;
}
</style>