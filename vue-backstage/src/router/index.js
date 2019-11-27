import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Login from 'components/LoRe/Login'
import Retrievepas from 'components/LoRe/Retrievepas.vue'
import Step from 'components/LoRe/Step'


Vue.use(Router)

export default new Router({
	// {
	// 	path: '/',
	// 	name: 'Index',
	// 	component: Index,
	// 	children: [
	// 		{
	// 			path: '/account',
	// 			component: () => import('components/Account')
	// 		}
	// 	]
	// },
  routes: [{
			path: '/login',
			name: 'Login',
			components: {
				default: Login
			}
		}, {
			path: '/retrievepas',
			name: 'Retrievepas',
			components: {
				default: Retrievepas
			}
		}, {
			path: '/step',
			name: 'Step',
			components: {
				default: Step,
			}
		}
  ]
})
