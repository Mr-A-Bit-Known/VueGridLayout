<template>
  <div class="wrapper" :style="{height:autoHeight.height}">
    <el-container>
      <el-header style="height:30px">
        <div class="detailsBtn">
          <el-button type="primary" size="mini" @click="refresh()">刷新</el-button>
          <el-button type="primary" size="mini" @click="advancedQuery()">高级查询</el-button>
        </div>
      </el-header>
      <!-- 表格 -->
      <el-main :style="{height:autoHeight.tableHeight}" class="custom-table">
        <el-table
          :height="autoHeight.tableHeight"
          :row-style="{height:'20px'}"
          :cell-style="{padding:'0px'}"
          style="font-size: 10px"
          :data="tableList"
          v-loading="loading"
          :row-class-name="tableRowClassName"
        >
          <el-table-column
            v-for="(item, index) in tableList"
            :key="item"
            :label="index"
            show-overflow-tooltip
          >
            <template slot-scope="scope">{{ scope.row[index] }}</template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer style="height:30px">
        <div class="pagePanel">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[50,100, 200, 300, 400,500]"
              :page-size="pageSize"
              layout="total, prev, pager,sizes, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </div>
      </el-footer>
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

    // 调用数据接口
    this.getTableList();
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
      tableList: [],

      // 加载动画
      loading: true,

      // 总条数
      total: null,

      // 当前页数(默认第一页)
      currentPage: 1,

      // 每页显示总数(默认50条)
      pageSize: 50
    };
  },

  // 计算属性
  computed: {},
  methods: {
    // 已知 padding 40 , tabs 54 footer 20
    getHeight() {
      this.autoHeight.height = windowHeight - 114 + "px";
      this.autoHeight.tableHeight = windowHeight - 174 + "px";
    },
    // 刷新,重新获取表单数据
    refresh() {
      this.loading = true;
      this.getTableList();
    },
    // 高级查询
    advancedQuery() {},
    // 依据Bin类型使用不同颜色分辨
    tableRowClassName({ row, rowIndex }) {
      if (row.BinType === "Fail") {
        return "warning-row";
      } else if (row.BinType === "Good") {
        return "success-row";
      }
      return "";
    },

    // 获取表单数据
    async getTableList() {
      await this.$axios
        .get("/wipReportPagesSearch", {
          // 请求头
          headers: {
            Authorization: localStorage.token
          },
          params: {
            page: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.$components.messagePointer(res.data.msg, "success", 1000);
          // 总条数
          this.total = res.data.total;
          // 表格数据
          this.tableList = res.data.data;
          // 当前页码
          this.currentPage = Number(res.data.page);
          this.loading = false;
        })
        .catch(err => {
          this.$components.messagePointer(err, "error", 1000);
        });
    },

    // handleSizeChange(每页显示条数)
    handleSizeChange(val) {
      this.pageSize = val;
      this.loading = true;
      this.getTableList();
    },
    // handleCurrentChange(页数跳转)
    handleCurrentChange(val) {
      this.currentPage = val;
      this.loading = true;
      this.getTableList();
    }
  },
  destroyed() {
    window.addEventListener("resize", this.getHeight);
  }
};
</script>

<style scoped>
.detailsBtn {
  display: flex;
  align-items: center;
}
.pagePanel {
  display: flex;
  align-items: center;
  justify-content: right;
}
.el-header {
  padding: 0px 0px !important;
}
.el-main {
  padding: 0px !important;
}
</style>