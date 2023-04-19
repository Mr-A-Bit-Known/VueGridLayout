// 获取当前天气信息

import axios from 'axios';

import components from '../javascript/components';

// 实时天气在线接口
const realTimeweatherApiUrl = "https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=61337769&appsecret=L24mrgyF";

// 未来七日天气在线接口
const weekWeatherApiUrl = "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=61337769&appsecret=L24mrgyF";

const weatherInfo = {
    // 实时天气
    async getRealTimeWeather() {
        let weather = "";
        await axios.get(realTimeweatherApiUrl).then(res => {
            if (res.data.errcode) {
                components.messagePointer("错误简码:" + res.data.errcode + "  " + "错误信息:" + res.data.errmsg, "error", 1000);
            }
            weather = res.data;
        }).catch((err) => {
            components.messagePointer("错误信息为:" + err, "error", 1000);
        });
        return weather
    },
    // 七日天气
    async getWeekWeather() {
        let weather = "";
        await axios.get(weekWeatherApiUrl).then(res => {
            if (res.data.errcode) {
                components.messagePointer("错误简码:" + res.data.errcode + "  " + "错误信息:" + res.data.errmsg, "error", 1000);
            }
            weather = res.data;
        }).catch((err) => {
            components.messagePointer("错误信息为:" + err, "error", 1000);
        });
        return weather;
    }
}
export default weatherInfo;