// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElememtUi from 'element-ui'
import '../theme/index.css'
import './font/iconfont.css'
import './css/index.css'
import './css/login.css'
import {request, get, post } from 'js/axios'
Vue.use(ElememtUi)

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post

// 全局路由
router.beforeEach((to, from, next) => {
	let token = window.localStorage.getItem('token')
	if (to.meta.requireUser && to.meta.requireUser === 1) {
		// 判断用户登录
		if (token) {
			next()
		} else {
			next('/')
		}
	} else if (to.meta.requireUser && to.meta.requireUser === 2) {
		// 判断是否登录 登录了就不能进入当前页面
		if (token) {
			next('/usercenter')
		} else {
			next()
		}
	} else {
		// 不需要登录 直接进入首页
		next()
		// eslint-disable-next-line no-tabs
	}
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
  components: { App },
  template: '<App/>'
})
