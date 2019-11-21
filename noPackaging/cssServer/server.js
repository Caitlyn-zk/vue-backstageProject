let express = require('express');

let app = express();

let bodyParser = require('body-parser');
// 引入router导入的
let router = require('./router');
let parserJson = bodyParser.json();

let parserUrlencoded = bodyParser.urlencoded({
	extended: true
})
// 解析post请求的参数 解析出来放大req body 中
app.use(parserJson);

app.use(parserUrlencoded);

// 监听所有请求的跨域 做一个过滤处理
app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST,PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	next();
})

// 监听登录接口
// 接收参数通过bodyparser
app.get("/login", router.login)

// 监听端口
app.listen(3000, function () {
	console.log('port:3000')
})