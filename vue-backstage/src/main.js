// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../theme/index.css'
import ElememtUi from 'element-ui'
import staticRouter from './commonjs/rout'
import {request, get, post } from 'js/axios'
Vue.use(ElememtUi)

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post

let a = 0
// 全局路由 路由拦截
router.beforeEach((to, from, next) => {
	// 动态添加路由
	if (to.path === '/step' || to.path === '/login' || to.path === '/retrievepas') {
		next()
	} else {
		// 往路由中添加路由
		if (store.state.step.chooseModule.length <= 0) {
			let routerPaht = JSON.parse(window.localStorage.getItem('module'))
			routerPaht.forEach((item) => {
				let staticitem = staticRouter.find((itemrouter) => {
					return itemrouter.name === item.name
				})
				// 合并对象 后面向前合并
				Object.assign(item, staticitem)
			})
			store.commit('changeChooseModule', routerPaht)
			// 路由中添加路由
			router.addRoutes([{
				path: '/',
				component: () => import('components/Index'),
				children: routerPaht
			}])
			next({ ...to, replace: true});
		} else {
			next()
		}
		
	}


	// let token = window.localStorage.getItem('token')
	// if (to.meta.requireUser && to.meta.requireUser === 1) {
	// 	// 判断用户登录
	// 	if (token) {
	// 		next()
	// 	} else {
	// 		next('/')
	// 	}
	// } else if (to.meta.requireUser && to.meta.requireUser === 2) {
	// 	// 判断是否登录 登录了就不能进入当前页面
	// 	if (token) {
	// 		next('/usercenter')
	// 	} else {
	// 		next()
	// 	}
	// } else {
	// 	// 不需要登录 直接进入首页
	// 	next()
	// 	// eslint-disable-next-line no-tabs
	// }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
  components: { App },
  template: '<App/>'
})
