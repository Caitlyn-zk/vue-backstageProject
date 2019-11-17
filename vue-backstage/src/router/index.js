import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Top from 'components/Common/Top'
import Login from 'components/LoRe/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
			components: {
				default: Index,
				Top: Top
			}
	}, {
			path: '/login',
			name: 'Login',
			components: {
				default: Login
			}
		}
  ]
})
