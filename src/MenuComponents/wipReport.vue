<template>
  <div class="wrapper" :style="{height:autoHeight.height}">
    <el-container>
      <el-header style="height:30px">
        <div class="detailsBtn">
          <el-button type="primary" size="mini" @click="refresh()">刷新</el-button>
        </div>
      </el-header>
      <el-main :style="{height:autoHeight.tableHeight}">
        <el-table :data="tableList" v-loading="loading"></el-table>
      </el-main>
      <el-footer style="height:30px">
        <div class="pagePan">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page"
              :page-sizes="[50,100, 200, 300, 400,500]"
              :page-size="pageSize"
              layout="total, prev, pager, sizes, next, jumper"
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
      total: 0,

      // 当前页数(默认第一页)
      page: 1,

      // 每页显示总数(默认50条)
      pageSize: 50
    };
  },

  // 计算属性
  computed: {
    // 表头
    columns() {
      return [
        { key: 1, prop: "产品名称", label: "产品名称", width: "180" },
        { key: 2, prop: "工作令", label: "工作令", width: "180" },
        { key: 3, prop: "组装批", label: "组装批", width: "180" },
        { key: 4, prop: "组装批", label: "组装批", width: "180" },
        { key: 5, prop: "批次数量", label: "批次数量" },
        { key: 6, prop: "BinExplain", label: "Bin说明" },
        { key: 7, prop: "BinType", label: "Bin类型" },
        { key: 8, prop: "工序名称", label: "工序名称" },
        { key: 9, prop: "工序状态", label: "工序状态" },
        { key: 10, prop: "工序编码", label: "当前所在工序代码" },
        { key: 11, prop: "AreaName", label: "区域名称" },
        { key: 12, prop: "作业状态", label: "作业状态" },
        { key: 12, prop: "批次状态", label: "批次状态" }
      ];
    }
  },
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
    // 获取表单数据
    async getTableList() {
      await this.$axios
        .get("/wipReportPagesSearch", {
          // 请求头
          headers: {
            Authorization: localStorage.token
          },
          params: {
            page: this.page,
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
          this.page = res.data.page;
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
      this.page = val;
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
.pagePan {
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>