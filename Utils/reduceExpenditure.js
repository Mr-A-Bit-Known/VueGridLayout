/** 按钮节流,防止重复点击 */

import Vue from "vue";

const reduceExpenditure = Vue.directive("reduceExpenditure-Button", {
    inserted: function (el, binding) {
        el.addEventListener('click', () => {
            // 判断按钮是否可以点击
            if (!el.disabled) {
                setTimeout(() => {
                    el.disabled = false;
                }, binding.value || 3000);  // 默认节流3秒
            }
        })
    }
})


export { reduceExpenditure }