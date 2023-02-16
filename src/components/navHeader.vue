<template>
  <div class="headerWrapper">
    <!-- 左侧下拉菜单 -->
    <div class="dropdownWrapper">
      <el-dropdown
        trigger="click"
        v-for="item in menuListJson.dropdownList"
        :key="item.id"
        @command="handleCommand"
      >
        <span class="el-dropdown-link">{{ item.name }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            :command="subItem.id"
            :name="subItem.name"
            v-for="subItem in item.children"
            :key="subItem.id"
            >{{ subItem.name }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 中间标题部分 -->
    <div><h3>MES仓库管理系统</h3></div>
  </div>
</template>

<script>
import menuListJson from "../../static/menuMockData/menuMock.json";
export default {
  created() {
    this.systemInfoAchieve();
  },
  data() {
    return {
      menuListJson: menuListJson,
      // 版本信息
      systemInfoAbout: "",
      // 联系方式
      phoneNumber: "",
    };
  },
  methods: {
    // 获取静态数据
    systemInfoAchieve() {
      const element = this.menuListJson.systemInfoList;
      const arr = [];
      for (const i in element) {
        arr.push(element[i]);
      }
      arr.forEach((el) => {
        this.systemInfoAbout = el.systemVersion;
        this.phoneNumber = el.phoneNumber;
      });
    },
    // 下拉菜单点击事件
    handleCommand(command) {
      // 551展开菜单,552个人中心,553退出登录
      switch (command) {
        // 收缩菜单
        case 551:
          break;
        // 个人中心
        case 552:
          alert("个人中心");
          break;
        // 退出登录
        case 553:
          this.$router.push("../Pages/Login"); // 退出登录

          break;
        // 文件查询
        case 554:
          alert("文件查询");
          break;
        // 系统信息
        case 555:
          this.$notify({
            title: "系统信息",
            type: "success",
            dangerouslyUseHTMLString: true,
            duration: 2000,
            message: (
              <div>
                <h4>系统当前版本: V {this.systemInfoAbout}</h4>
                <h4>联系电话: {this.phoneNumber}</h4>
              </div>
            ),
          });
          break;
        // 默认主题
        case 556:
          alert("默认主题");
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.headerWrapper {
  display: flex;
}
.el-dropdown-link {
  margin-left: 10px;
  cursor: pointer;
}
</style>