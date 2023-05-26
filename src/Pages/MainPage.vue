<template>
  <div class="wrapper" @contextmenu.prevent>
    <el-container>
      <el-header :style="{ height: this.headerHeight }">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px" :style="{ height: this.screenHeight }">
          <Menu :list="list"></Menu>
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
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/Menu.vue";
import Content from "../components/content.vue";
import getViewInfo from "../javascript/viewInfos";
export default {
  components: {
    Header,
    Footer,
    Menu,
    Content
  },
  created() {
    this.getMenuList();
  },
  data() {
    return {
      // header height
      headerHeight: 30,
      // footer height
      footerHeight: 19,

      // 屏幕高度
      screenHeight: "",
      // 菜单是否折叠(默认不折叠)
      isCollaspe: false,

      // 导航菜单数据
      list: []
    };
  },
  methods: {
    // 获取屏幕高度
    getViewheight() {
      const screenHeight =
        getViewInfo.getViewHeight() -
        (this.headerHeight + this.footerHeight) +
        "px";
      this.screenHeight = screenHeight;
    },

    // 获取菜单列表
    getMenuList() {
      this.$axios
        .post("/show_list_display")
        .then(res => {
          this.list = res.data.data;
        })
        .catch(err => {
          this.$pointerList.messagePointer(err, "error", 1000);
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
.el-message_content {
  width: auto !important;
  height: auto !important;
  background: none !important;
}
</style>