// 所有请求回调的出口
let login = require('./login')

// Object.assign 合并对象合并到router中统一导出
let router = Object.assign({}, login)

module.exports = router