// 书写 登录 找回密码 上传交易密码的回调
let query = require('../common/mysql')
let jwt = require('jsonwebtoken')
let login = function (req, res) {
	// 接收到手机号和密码
	let mobile = req.body.mobile || req.query.mobile;
	let password = req.body.password || req.query.password;
	console.log(req.body);
	console.log(password)
	var reg = /0?(13|14|15|18|17)[0-9]{9}/
	if (!mobile) {
		res.json({
			status: 501,
			message: '请输入手机号'
		})
		return false;
	}
	else if (!reg.test(mobile)) {
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
	let sql = "select id,username,mobile,email,avatar,createTime  FROM USER WHERE mobile= ? && PASSWORD= ?"
	query(sql, [mobile, password]).then((data, error) => {
		if (!error && data.length > 0) {
			let token = jwt.sign({ mobile: mobile }, 'jwt', {
				expiresIn: 60 * 60 * 1
			})
			//登录成功
			res.json({
				status: 200,
				data: {
					username: data[0],
					token
				}
			})
		} else {
			res.json({
				status: 504,
				message: '用户不存在'
			})
		}
	}).catch((data)  => {
		console.log(222)
		return false
	})
}
let forget = function () {

}
module.exports = {
	login,
	forget
}