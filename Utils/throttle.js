/** 按钮节流 */

const throttle = (func, delay) => {
    // 定时器
    let timer = null;

    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, arguments);
                timer = null;
            }, delay);
        }
    }
}

export default throttle;