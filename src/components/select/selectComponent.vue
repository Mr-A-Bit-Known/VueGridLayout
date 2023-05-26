<template>
  <div class="wrapper">
    <el-select
      v-model="from.keyValue"
      placeholder="请选择"
      class="hotSelect"
      style="margin-left: 20px;width: 100%"
      filterable
      allow-create
      :popper-append-to-body="false"
      clearable
      @change="queryDatePage"
    >
      <el-option-group v-for="group in hotOptions" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span>{{ item.value }}</span>
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Data: {
        hotOptions: [
          {
            label: "经常被搜索",
            options: []
          },
          {
            label: "热点搜索",
            options: []
          },
          {
            label: "最近更新",
            options: []
          }
        ]
      }
    };
  },
  methods: {
    queryDatePage() {}
  }
};
</script>

<style scoped>
.wrapper /deep/ .el-select-group {
  padding: 0 26px;
}
.el-select-dropdown__item {
  display: inline-block;
  margin: 2px 8px 2px;
  color: #686868;
  padding: 0px;
  font-size: 14px;
}
.el-select-dropdown__item:hover {
  border-bottom: 1px solid #2a5cb0;
}
.el-select-group__title {
  font-size: 15px;
  color: #ff8000;
  font-weight: bold;
}
.el-select-dropdown ul:nth-child(2) .el-select-group__title {
  color: #006bcf;
}
.el-select-dropdown ul:nth-child(3) .el-select-group__title {
  color: #2dbb62;
}
</style>