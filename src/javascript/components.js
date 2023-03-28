import { Message, MessageBox, Notification } from "element-ui";

// 自定义全局组件
const components = {

    // 消息提示框
    messagePointer(message, type, duration) {
        if (document.getElementsByClassName('el-message').length > 1) return;
        Message({
            // 提示文字
            message: message,
            // 提示类型
            type: type,
            // 显示时间
            duration: duration,
            // 文字居中
            center: true,
            // 是否可以关闭
            // showClose: true,
        })
    },
    messageBoxPointer() {
        MessageBox({

        })
    },

    notificationPointer() {
        Notification({

        })
    }

}

export default components;