const Mock = require('mockjs');


const Random = Mock.Random;

let Result = {
    code: 200,
    msg: "操作成功",
    data: null
}

Mock.mock('/getValidateImage', 'post', () => {
    Result.data = {
        token: Random.string(32),
        validateImage: Random.dataImage('100x40', 'p7n5w')
    }
    return Result;
})

Mock.mock('/Login', 'post', () => {
    return Result
})
