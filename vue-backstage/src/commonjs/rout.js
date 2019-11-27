
// 前端默认存储某个地址用的组件
let staticRoute = [
	{
		name: '账户管理',
		component: () => import('components/Account')
	}, {
		name: '产品管理',
		component: () => import('components/Product')
	}, {
		name: '二维码管理',
		component: () => import('components/Qrcode')
	}, {
		name: '首页',
		component: () => import('components/Index')
	}
]

export default staticRoute