// 计算屏幕高度

const clientHeightComputed = () => {
    // 获取屏幕高度组件
    var height = window.innerHeight || document.documentElement.height || document.body.height // 高度

    return height;
}


export default clientHeightComputed;
