<template>
  <div class="navHeaderWrapper">
    <div class="containerWrapper">
      <div class="dropDownSpanLeft">
      </div>
      <div class="dropDownSpanRight">
        <el-dropdown class="AvatarImg" trigger="click">
          <img src="../../static/Avatar.png" class="AvatarImg" alt="个人头像" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="quitNow">展开菜单</span></el-dropdown-item>
            <el-dropdown-item><span @click="personalCenter">个人中心</span></el-dropdown-item>
            <el-dropdown-item><span @click="changePassword">修改密码</span></el-dropdown-item>
            <el-dropdown-item><span @click="quitNow">退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="userinfoItems">
          <div>{{ this.username }},欢迎使用</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用户名
      username: "赵四",
      // 当前时间
      dateTime: "",
    };
  },
  methods: {
    // 个人中心
    personalCenter() {
      console.log("personalInfoCenter Loading Success...");
    },
    // 推出当前账号
    quitNow() {
      console.log("Quit Success...");
    },
    // 修改密码
    changePassword() {
      console.log("changePassword Success...");
    },
  },
};
</script>

<style scoped>
.navHeaderWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.containerWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.dropDownSpanLeft {
  margin-left: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropDownSpanRight {
  margin-right: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: dimgrey;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.AvatarImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: #409eff;
}
.userinfoItems {
  margin-left: 6%;
  white-space: nowrap;
}
</style>