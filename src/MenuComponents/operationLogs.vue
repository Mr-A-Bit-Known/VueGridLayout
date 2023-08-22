<template>
  <div class="wrapper" v-loading="loading">
    <el-container>
      <el-header :style="{height: headerHeight}">
        <!-- 操作按钮 -->
        <div class="operationBtn">
          <!-- 刷新按钮 -->
          <el-button class="btn_style" type="primary" @click="getQuarterlyLogs()" size="mini">
            <i class="el-icon-refresh el-icon--left"></i>刷新
          </el-button>
          <!-- 高级查询 -->
          <el-button
            class="advancedStyle"
            type="primary"
            width="100"
            @click="advanced_query()"
            size="mini"
          >
            <i class="el-icon-search el-icon--left"></i>高级查询
          </el-button>
          <!-- 更多操作 -->
          <el-button type="primary" width="100" size="mini">
            <i class="el-icon-search el-icon--left"></i>更多操作
          </el-button>
        </div>
      </el-header>
      <el-main>
        <!-- 展示表格 -->
        <el-table
          style="font-size: 10px"
          height="calc(100vh - 220px)"
          :data="this.tableData"
          :row-style="{height: '0'}"
          :cell-style="{padding: '3px'}"
          id="exportExcel"
        >
          <!-- 多选框 -->
          <el-table-column type="selection" width="55" fixed align="center"></el-table-column>
          <!-- 登录ID -->
          <el-table-column label="LoginID" width="100" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.LoginID }}</template>
          </el-table-column>
          <!-- 用户名 -->
          <el-table-column label="UserName" width="100" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.UserName }}</template>
          </el-table-column>
          <!-- 创建时间 -->
          <el-table-column label="CreateTime" width="220" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.CreateTime }}</template>
          </el-table-column>
          <!-- 菜单名称 -->
          <el-table-column label="MenuName" width="100" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.MenuName }}</template>
          </el-table-column>
          <!-- 请求地址 -->
          <el-table-column label="RequestUrl" width="230" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.RequestUrl }}</template>?
          </el-table-column>
          <!-- 请求体 -->
          <el-table-column label="RequestBody" width="230" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.RequestBody }}</template>
          </el-table-column>
          <!-- 按钮名称 -->
          <el-table-column label="BtnName" width="100" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.BtnName }}</template>
          </el-table-column>
          <!-- 按钮ID -->
          <el-table-column label="BtnID" width="100" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.BtnID }}</template>
          </el-table-column>
          <!-- 更新时间 -->
          <el-table-column label="UpdateTime" width="220" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.UpdateTime }}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">预览</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer :style="{height: footerHeight}">
        <div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[25,50,100,200,300,400,500]"
            :page-size="pageSize"
            layout="total,prev,pager,next,sizes,jumper"
            :total="total"
          ></el-pagination>
        </div>
      </el-footer>
      <!-- dialog对话弹框 -->
      <ms-dialog
        ref="msDialog"
        :visible.sync="dialogVisible"
        :title="title"
        @handle="handleConfirm"
      >
        <div class="dialogContentWrapper">
          <el-form :model="advanceQueryForm">
            <el-form-item label="表名">
              <el-input size="mini" v-model="this.FormData" placeholder></el-input>
            </el-form-item>
          </el-form>
        </div>
      </ms-dialog>
    </el-container>
  </div>
</template>
  
<script>
// 引入dialog自定义组件
import MsDialog from "../components/dialog.vue";
export default {
  components: {
    MsDialog
  },
  created() {
    // 查询全部表名
    this.getSheetsName();
    // 按季度查询日志（设置默认值）
    this.getQuarterlyLogs();
  },
  data() {
    return {
      // 设置组件高度
      headerHeight: [{ height: 40 + "px" }],
      footerHeight: [{ height: 40 + "px" }],

      // 设置表格高度
      tableHeight: "",

      // 表名
      data: "",
      // 默认值
      TABLE_NAME: "sysdatlog20230601",
      // 表格数据
      tableData: "",

      // 加载动画
      loading: true,

      // 总条数
      total: null,

      // 当前页数(默认第一页)
      currentPage: 1,

      // 每页显示总数(默认50条)
      pageSize: 25,

      // 对话框
      dialogVisible: false,
      title: "高级查询",

      // advanceQueryForm
      advanceQueryForm: {},
      FormData: ""
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
        })
        .catch(err => {
          this.$components.messagePointer(err, "error", 1000);
        });
    },
    // 传递表名参数，获取对应数据
    async getQuarterlyLogs() {
      this.loading = true;
      await this.$axios
        .get("/operationLogSearch", {
          headers: {
            Authorization: localStorage.token
          },
          params: {
            sheetName: this.TABLE_NAME,
            page: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.$components.messagePointer(res.data.msg, "success", 1000);
          this.tableData = res.data.data;
          this.total = res.data.total;
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
      this.getQuarterlyLogs();
    },
    // handleCurrentChange(页数跳转)
    handleCurrentChange(val) {
      this.currentPage = val;
      this.loading = true;
      this.getQuarterlyLogs();
    },
    // 预览
    handleClick(val) {
      console.log(val.UserName);
    },
    // 高级查询
    advanced_query() {
      this.$refs.msDialog.dialogVisible = true;
    },
    handleConfirm() {}
  },
  computed: {}
};
</script>

<style scoped>
.el-header {
  padding: 0px !important;
}
.el-main {
  padding: 10px 0px 20px 0px !important;
}
.el-footer {
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0px !important;
}
.el-table_border {
  border-bottom: none !important;
  border-top: none !important;
  border-right: none !important;
}
.btn_style {
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.operationBtn {
  display: flex;
  align-items: center;
}
.advancedStyle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
}
.dialogContentWrapper {
  display: flex;
  flex-direction: column;
}
</style>