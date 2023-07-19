<template>
  <div class="wrapper">
    <div class="operationBtn">
      <el-select v-model="TABLE_NAME" placeholder="请选择月度查询时间">
        <el-option v-for="item in data" :key="item.index" :value="item.TABLE_NAME"></el-option>
      </el-select>
      <el-button type="primary" @click="getQuarterlyLogs()">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // 查询全部表名
    this.getSheetsName();
    // 按季度查询日志（设置默认值）
    this.getQuarterlyLogs();
  },
  data() {
    return {
      // 表名
      data: "",
      // 默认值
      TABLE_NAME: "sysdatlog20230601",
      // 表格数据
      tableData: ""
    };
  },
  methods: {
    // 获取表名
    async getSheetsName() {
      await this.$axios
        .get("/AllSheetName", {
          // 请求头
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(res => {
          this.$components.messagePointer(res.data.msg, "success", 1000);
          this.data = res.data.data;
        })
        .catch(err => {
          this.$components.messagePointer(err, "error", 1000);
        });
    },
    // 传递表名参数，获取对应数据
    async getQuarterlyLogs() {
      await this.$axios
        .get("/operationLogSearch", {
          headers: {
            Authorization: localStorage.token
          },
          params: {
            sheetName: this.TABLE_NAME
          }
        })
        .then(res => {
          this.$components.messagePointer(res.data.msg, "success", 1000);
          this.tableData = res.data.data;
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