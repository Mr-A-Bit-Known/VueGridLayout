<template>
  <div class="wrapper">
    <el-tabs v-model="activeTab" type="card" closable @tab-click="clickTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in tabList"
        :key="index"
        :label="item.title"
        :name="item.path"
      >{{item.content}}</el-tab-pane>
    </el-tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      activeTab: ""
    };
  },
  computed: {
    tabList() {
      return store.state.tableList;
    }
  },
  created() {},
  watch: {
    $route: function() {
      this.setActiveTab();
      this.addTab();
    }
  },
  mounted() {
    this.beforeRefresh();
    this.setActiveTab();
    this.addTab();
  },
  methods: {
    setActiveTab() {
      this.activeTab = this.$route.path;
    },
    // 添加tab
    addTab() {
      const { path, meta } = this.$route;
      const tab = {
        path,
        title: meta.title
      };
      store.commit("add_tabs", tab);
    },
    // 点击tab
    clickTab(tab) {
      const { name } = tab;
      this.$router.push({ path: name });
    },
    // 删除tab
    removeTab(target) {
      // 当前激活的tab
      let active = this.activeTab;
      const tabs = this.tabList;
      // 只有一个标签页的时候不允许删除
      if (tabs.length === 1) return;
      if (active === target) {
        tabs.forEach((tab, index) => {
          const nextTab = tab[index + 1] || tab[index - 1];
          if (nextTab) {
            active = nextTab.path;
          }
        });
      }
      // 重新设置当前激活的选项卡和 选项卡列表
      this.activeTab = active;
      store.state.tableList = tabs.filter(tab => tab.path !== target);
    },
    // 刷新数据丢失问题
    beforeRefresh() {
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("tabView", JSON.stringify(this.tabList));
      });
      let tabSession = sessionStorage.getItem("tabView");
      if (tabSession) {
        let oldTabs = JSON.parse(tabSession);
        if (oldTabs.length > 0) {
          store.state.tableList = oldTabs;
        }
      }
    }
  }
};
</script>

<style>
</style>