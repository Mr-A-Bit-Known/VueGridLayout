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
            showClose: true,
        })
    },


    /**
     *  弹窗
     */

    // 确认弹窗
    messageBoxConfirm(text = text ? `${text}` : "默认内容", title = title ? `${title}` : "默认标题", iconClass = iconClass ? `${iconClass}` : `ms-message-box`) {
        return MessageBox.confirm(text, title, {
            // 启用HTML文本
            dangerouslyUseHTMLString: true,
            // 是否居中
            center: false,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
        }).then(() => {

        }).catch(() => {

        })
    }
}

export default components;