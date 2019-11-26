import Vue from 'vue'
import Vuex from 'vuex'
import Login from './login'
import Stepmodule from './stepmodule'
Vue.use(Vuex)

export default new Vuex.Store({
	// vuex 中存储的数据
	modules: {
		Login,
		step: Stepmodule
	},
	// 只有通过mutations中的方法去改变state
	mutations: {
		
	},
	actions: {
	},
	getters: {

	}
})
