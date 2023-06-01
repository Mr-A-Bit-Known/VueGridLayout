<template>
  <div class="wrapper" @contextmenu.prevent>
    <el-container>
      <el-container>
        <el-aside width="200px" :style="{ height: this.screenHeight }">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :unique-opened="true"
            :default-active="$route.path"
          >
            <Menu :list="list"></Menu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main :style="{ height: this.screenHeight }">
            <Content></Content>
          </el-main>
        </el-container>
      </el-container>
      <el-footer :style="{ height: this.footerHeight }">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from "../components/footer";
import Menu from "../components/Menu.vue";
import Content from "../components/content.vue";
import getViewInfo from "../javascript/viewInfos";
export default {
  components: {
    Footer,
    Menu,
    Content
  },
  created() {
    this.getTableList();
  },
  data() {
    return {
      // footer height
      footerHeight: 19,

      // 屏幕高度
      screenHeight: "",
      // 菜单是否折叠(默认不折叠)
      isCollaspe: false,
      // 菜单列表
      list: []
    };
  },
  methods: {
    // 获取屏幕高度
    getViewheight() {
      const screenHeight =
        getViewInfo.getViewHeight() - this.footerHeight + "px";
      this.screenHeight = screenHeight;
    },
    // 获取菜单列表
    getTableList() {
      this.$axios
        .post("/show_list_display")
        .then(res => {
          this.list = res.data.data;
          // 提示语
          // this.$components.messagePointer(res.data.msg, "success", 1000);
        })
        .catch(err => {
          this.$components.messagePointer(err, "error", 1000);
        });
    }
  },
  mounted() {
    this.getViewheight();
    window.addEventListener("resize", this.getViewheight);
  },
  destroyed() {
    window.removeEventListener("resize", this.getViewheight, false);
  }
};
</script>

<style scoped>
.el-header {
  background-color: #545c64;
  width: 100%;
}
.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #68217a;
}
.el-aside {
  width: 200px !important;
  background-color: #545c64;
  overflow: hidden;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}
.el-menu {
  border-right: 0px;
}
.el-menu /deep/ .el-menu-item {
  padding-left: 53px !important;
}
.el-menu /deep/ .el-menu-item-group__title {
  padding: 0px 0px 0px 0px !important;
}
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
</style>