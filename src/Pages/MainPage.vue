<template>
  <div class="wrapper" @contextmenu.prevent>
    <el-container>
      <el-header :style="{ height: this.headerHeight }"
        ><Header></Header
      ></el-header>
      <el-container>
        <el-aside :style="{ height: this.screenHeight }"
          ><Menu></Menu
        ></el-aside>
        <el-container>
          <el-main :style="{ height: this.screenHeight }">
            <el-button type="primary" @click="selectAll()"
              >点击获取数据</el-button
            >
          </el-main>
        </el-container>
      </el-container>
      <el-footer :style="{ height: this.footerHeight }"
        ><Footer></Footer
      ></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/Menu.vue";
import getViewInfo from "../javascript/viewInfos";
export default {
  components: {
    Header,
    Footer,
    Menu,
  },
  data() {
    return {
      // header height
      headerHeight: 30,
      // footer height
      footerHeight: 19,

      // 屏幕高度
      screenHeight: "",
    };
  },
  methods: {
    // 获取屏幕高度
    async getViewheight() {
      const screenHeight =
        (await getViewInfo.getViewHeight()) -
        (this.headerHeight + this.footerHeight) +
        "px";
      this.screenHeight = screenHeight;
    },

    // 获取所有数据
    async selectAll() {
      await this.$axios
        .post("/apiInterface/show-plugin-batch-display")
        .then((res) => {
          this.$components.messagePointer(res.data.msg, "success", 1000);
        })
        .catch((err) => {
          this.$components.messageBoxPointer(err, "error", 1000);
        });
    },
  },
  mounted() {
    this.getViewheight();
    window.addEventListener("resize", this.getViewheight());
  },
  destroyed() {
    window.removeEventListener("resize", this.getViewheight(), false);
  },
};
</script>

<style scoped>
.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #68217a;
}
.el-aside {
  width: 200px !important;
  background-color: #545c64;
}
</style>