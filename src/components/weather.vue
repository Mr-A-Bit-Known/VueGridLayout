<template>
  <!-- 天气组件 -->
  <div class="weatherInfoBox">
    <el-tooltip class="item" effect="dark" :content="this.content" placement="bottom">
      <div class="wrapper" @mouseover="showWeatherInfo()" @mouseleave="showWeatherInfoNot()">
        <div v-for="item in realTimeweatherArr" :key="item.index">
          <div class="leftBox">
            <div>最高气温</div>
            <div>{{ item.tem1 }}°C</div>
          </div>
          <div class="rightBox">
            <div class="top">
              <img :src="require('../images/weatherImages/' + weatherImage + '.png')" alt="天气图片" />
            </div>
            <div class="bottom">
              <div class="fontSize">{{ item.air_level }}</div>
              <div class="fontSize">{{ item.humidity }}</div>
            </div>
          </div>
        </div>
      </div>
    </el-tooltip>
    <div v-if="showWeekWeatherInfo">
      <div class="weekWeatherInfoWrapper">
        <div class="weatehrContentBox" v-for="item in weekWeatherArr" :key="item.key">
          <div class="itemStyle" v-for="i in item" :key="i.key">
            <div class="itemContent">
              <div>{{ i.week }}</div>
              <div>{{ i.date }}</div>
              <div>{{ i.tem1 }}°C</div>
              <div>{{ i.wea_day }}</div>
              <div>
                <img
                  :src="require('../images/weatherImages/' + `${ i.wea_day }` + '.png')"
                  alt="天气图片"
                />
              </div>
              <div>{{ i.win[0] }}</div>
              <div>{{ i.air_level }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weatherInfo from "../javascript/weather";
export default {
  created() {
    // 获取实时天气
    this.getRealTimeWeather();
    // 获取未来七日天气
    this.getWeekWeather();
  },
  data() {
    return {
      // 实时天气
      realTimeweatherArr: [],
      // 未来七日天气
      weekWeatherArr: [],
      // 提示文字
      content: "未来七天天气详情",
      // 天气图片
      weatherImage: "",
      weekWeatherImage: "",
      // 显示未来七日天气信息
      showWeekWeatherInfo: false
    };
  },
  methods: {
    // 实时天气获取
    async getRealTimeWeather() {
      const weather = await weatherInfo.getRealTimeWeather();
      this.realTimeweatherArr.push(weather);
      const weaImg = this.realTimeweatherArr[0].wea_img;
      /**-------------------------------------------*/
      // 天气图片展示
      switch (weaImg) {
        case "xue":
          this.weatherImage = "雪";
          break;
        case "lei":
          this.weatherImage = "雷电";
          break;
        case "shanchen":
          this.weatherImage = "沙城暴";
          break;
        case "wu":
          this.weatherImage = "雾";
          break;
        case "bingbao":
          this.weatherImage = "冰雹";
          break;
        case "yun":
          this.weatherImage = "多云";
          break;
        case "yu":
          this.weatherImage = "雨";
          break;
        case "yin":
          this.weatherImage = "阴";
          break;
        case "qing":
          this.weatherImage = "晴";
          break;
        default:
          break;
      }
    },
    // 未来七天天气信息
    async getWeekWeather() {
      const weather = await weatherInfo.getWeekWeather();
      this.weekWeatherArr.push(weather.data);
    },
    // 显示详细信息
    showWeatherInfo() {
      this.showWeekWeatherInfo = true;
    },
    // 隐藏详细信息
    showWeatherInfoNot() {
      this.showWeekWeatherInfo = false;
    }
  }
};
</script>

<style scoped>
.weatherInfoBox {
  cursor: pointer;
}
.wrapper {
  position: relative;
  width: 110px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.leftBox {
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  color: #ffffff;
  background-color: #292929;
}
.rightBox {
  position: absolute;
  margin-left: 60px;
  margin-top: -50px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  background-color: black;
}
.top {
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
}
.bottom {
  width: 50px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #ededed;
  background-color: #2ab2ea;
}
.fontSize {
  font-size: 12px;
}
.weekWeatherInfoWrapper {
  position: absolute;
  margin-left: -660px;
  margin-top: -50px;
  width: 650px;
  height: 300px;
  border: 1px solid black;
  opacity: 0.7;
  background-color: #292929;
  justify-content: space-between;
}
.weatehrContentBox {
  display: flex;
  justify-content: space-around;
}
.itemStyle {
  width: 88px;
  height: 300px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  color: white;
  border-right: 1px solid #ededed;
}
.itemStyle:last-child {
  border-right: 0px;
}
.itemContent {
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>