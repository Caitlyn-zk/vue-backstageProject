// 集中发送ajax的地方
// 所有ajax发送请求的地方
// import Vue from 'vue'
import { request, get, post } from './axios'

// jsonp跨域 插件协助vue.jsonp jsonp

// 登录请求
// params是一个对象 包含data
// 成功回调
// let loginRequest = (params) => {
// 	Vue.$request('login', 'post', params.data).then(function (res) {
// 		params.success(res)
// 	}).catch((error) => {
// 		params.error()
// 	})
// }
// params代理 vue自带

let loginRequest = (params) => {
	request('login', 'get', params.data).then(function (res) {
		params.success(res)
	}).catch((error) => {
		params.error()
	})
}

export {
	loginRequest
}
