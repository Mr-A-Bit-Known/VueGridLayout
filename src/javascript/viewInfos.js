// 获取当前屏幕高度,宽度

const getViewInfo = {

    // 获取屏幕宽度
    getViewWidth() {
        var width = window.innerWidth || document.documentElement.width || document.body.width // 高度
        return width;
    },
    // 获取屏幕高度
    getViewHeight() {
        var height = window.innerHeight || document.documentElement.height || document.body.height // 高度
        return height;
    },

}


export default getViewInfo;