// 校验规则


// 账号校验规则
export function nameRule(rules, value, callback) {
    // let nameData = /^[\w-]{5}$/;
    if (!value) {
        callback(new Error("请输入用户名"));
    }
    // else if (!nameData.test(value)) {
    //     callback(new Error("用户名是5位数"));
    // } 
    else {
        callback();
    }
}

// 密码校验规则
export function passwordRule(rules, value, callback) {
    // let passwordData = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    if (!value) {
        callback(new Error("请输入密码"));
        // } else if (!passwordData.test(value)) {
        //     callback(new Error("6-12位密码,需要包含大小写字母,数字以及特殊字符"));
    } else {
        callback();
    }
}
// 验证码校验规则
export function validateCodeRule(rules, value, callback) {
    if (!value) {
        callback(new Error("请输入验证码"));
    } else {
        callback();
    }
}

// 手机号码验证
export function phoneNumberRule(rules, value, callback) {
    let phoneNumberVaildate = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
    if (!value) {
        callback(new Error("手机号码不能为空"));
    } else if (!phoneNumberVaildate.test(value)) {
        callback(new Error("手机号码格式不正确,请重新输入"));
    } else {
        callback();
    }
}

// 忘记密码密码校验规则
export function passwordGetBack(rules, value, callback) {
    // let passwordData = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    if (!value) {
        callback(new Error("请输入密码"));
        // } else if (!passwordData.test(value)) {
        //     callback(new Error("6-12位密码,需要包含大小写字母,数字以及特殊字符"));
    } else {
        callback();
    }
}
