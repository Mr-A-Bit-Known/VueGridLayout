<template>
  <div class="homepageWrapper">
    <el-container class="layouWrapper">
      <!-- 头部区域 -->
      <el-header class="headerWrapper">
        <div class="headerContainer">
          <div class="headerLeft">
            <img src="../../static/史努比.png" alt="" />
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
          </div>
        </div>
      </el-header>
      <!-- 侧边栏 -->
      <el-container>
        <el-aside width="200px">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            :collapse="isCollapse"
            unique-opened
          >
            <el-submenu
              :index="item.id + ' '"
              v-for="item in menuListJson.menuList"
              :key="item.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ item.name }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-submenu
                :index="subItem.id + ''"
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ subItem.name }}</span>
                </template>
                <el-submenu
                  :index="thirdItem.id + ''"
                  v-for="thirdItem in subItem.children"
                  :key="thirdItem.id"
                >
                  <template slot="title">
                    <i class="el-icon-s-promotion"></i>
                    <span>{{ thirdItem.name }}</span>
                  </template>
                </el-submenu>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 主体部分 -->
          <el-main></el-main>
        </el-container>
      </el-container>
      <!-- 底部区域 -->
      <el-footer class="footerWrapper"><Footer></Footer></el-footer>
    </el-container>
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
      //   是否折叠
      isCollapse: false,
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
      this.systemInfoAbout = element.systemVersion;
      this.phoneNumber = element.phoneNumber;
    },
    // 下拉菜单点击事件
    handleCommand(command) {
      // 551展开菜单,552个人中心,553退出登录
      switch (command) {
        case 551:
          this.isCollapse = true;
          break;
        case 552:
          alert("个人中心");
          break;
        case 553:
          alert("退出登录");
          break;
        case 554:
          alert("文件查询");
          break;
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.layouWrapper {
  height: 100vh !important;
}
.headerWrapper {
  display: flex;
  align-items: center;
  height: 40px !important;
}
.footerWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px !important;
}
.headerContainer {
  display: flex;
  align-items: center;
}
.headerLeft {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-dropdown-link {
  margin-left: 10px;
  cursor: pointer;
}
</style>