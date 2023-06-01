<template>
  <div class="wrapper">
    <el-tabs closable v-model="activeTab" @tab-click="clickTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in tableList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
      >{{ item.content }}</el-tab-pane>
    </el-tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前活跃的tab
      activeTab: ""
    };
  },
  methods: {
    // 设置当前活跃的tab
    setActiveTab() {
      this.activeTab = this.$route.path;
    },
    // 添加tabs
    addTab() {
      const { path, meta } = this.$route;
      const tab = { path, title: meta.title };
      this.$store.commit("add_active_tabs", tab);
    },
    // 点击标签
    clickTab(tab) {
      const { name } = tab;
      this.$router.push({ path: name });
    },
    removeTab(target) {
      // 当前活跃的tab
      let active = this.activeTab;
      const tabs = this.tableList;
      this.clickTab;
      // 只存在一个tab时不允许删除
      if (tabs.length === 1) return;
      if (active === target) {
        tabs.forEach((tab, index) => {
          if (tab.path === target) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              active = nextTab.path;
            }
          }
        });
      }
      // 重新设置当前的选项卡
      this.activeTab = active;
      this.$store.state.tableList = tabs.filter(tab => tab.path !== target);
      this.$router.push({ path: active });
    },
    // 防止刷新
    beforeRefresh() {
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("tabsView", JSON.stringify(this.tableList));
      });
      let tabSession = sessionStorage.getItem("tabsView");
      if (tabSession) {
        let oldTabs = JSON.parse(tabSession);
        if (oldTabs.length > 0) {
          this.$store.state.tableList = oldTabs;
        }
      }
    }
  },
  computed: {
    tableList() {
      return this.$store.getters["getTabs"];
    }
  },
  mounted() {
    this.beforeRefresh();
    this.setActiveTab();
    this.addTab();
  },
  watch: {
    $route: function() {
      this.setActiveTab();
      this.addTab();
    }
  }
};
</script>

<style scoped>
</style>