// 书写 登录 找回密码 上传交易密码的回调
let mysql = require('../common/mysql')
let jwt = require('jsonwebtoken')
let login = function (req, res) {
	// 接收到手机号和密码
	let mobile = req.body.mobile || req.query.mobile;
	let password = req.body.password ||req.query.password;
	console.log(mobile,password)
	var reg = /0?(13|14|15|18|17)[0-9]{9}/
	if (!mobile) {
		res.json({
			status: 501,
			message: '请输入手机号'
		})
	} else if (!reg.test(mobile)) {
		res.json({
			status: 502,
			message: '请输入正确的手机号'
		})
		return false;
	}
	if (!password) {
		res.json({
			status: 503,
			message: '请输入密码'
		})
		return false;
	}
	
	// 去数据库中验证传入的数据是否正确
	let sql = "SELECT id,username,mobile,email,avatar,avatar,createTime  FROM USER WHERE mobile='18233591086'AND PASSWORD='123456'"
	
	mysql(sql, [mobile, password], function (error, data) {
		if (!error && data.length > 0) {
			let token = jwt.body.token;
			jwt.verify(token, 'jwt', function (error, result) {
				//登录失效
				if (error) {
					res.json({
						status: 505,
						message: '登录失效'
					})
				} else {
					res.json({
						status: 506,
						message: '登录失效'
					})
				}
			})
		} else {
			res.json({
				status: 504,
				message: '用户不存在'
			})
		}
	})
}
let forget = function () {

}
module.exports = {
	login,
	forget
}