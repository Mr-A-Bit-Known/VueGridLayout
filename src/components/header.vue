<template>
  <div class="headerWrapper">
    <div class="textWrapper">
      <div class="fontWrapper">忽如一夜春风来,千树万树梨花开...</div>
    </div>
    <div class="clockWrapper">
      <div class="dogTips" v-if="this.pictureBlock" @click="showTimeStamp()">
        <img src="../../static/史努比.png" />
        <div class="textCenter">点我看当前时间哦...</div>
      </div>
      <div class="dateWrapper" v-if="this.showOrBlock">
        {{ globalDate + " " + globalTime }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      nowDate: "",
      // 第一个计时器
      timer: null,
      // 第二个计时器
      timer_02: null,
      // 是否显示时间
      showOrBlock: false,
      // 图片显示
      pictureBlock: true,
      dateTime: "",
    };
  },
  methods: {
    ...mapMutations(["getNowDate"]),
    // 显示时间
    showTimeStamp() {
      this.showOrBlock = true;
      this.pictureBlock = false;
      this.timer = setTimeout(() => {
        this.showOrBlock = false;
        this.pictureBlock = true;
      }, 5000);
    },
  },
  computed: {
    ...mapState(["globalDate", "globalTime"]),
  },
  destroyed() {
    // 清除计时器
    clearTimeout(this.timer);
    clearInterval(this.timer_02);
  },
};
</script>

<style scoped>
.headerWrapper {
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fontWrapper {
  font-size: 16px;
  color: black;
  font-weight: bold;
}
.dateWrapper {
  font-size: 16px;
  font-weight: bold;
}
.dogTips {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.textCenter {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: black;
}
</style>