let state = {
	tabIndex: 0,
	modulelist: [{
		name: '账户管理',
		desciptor: '这是账户管理描述',
		showName: '账户管理',
		id: 1,
		isChecked: false
	}, {
			name: '产品管理',
			desciptor: '这是产品管理描述',
			showName: '产品管理',
			id: 2,
			isChecked: false
		}, {
			name: '二维码管理',
			desciptor: '这是二维码管理管理描述',
			showName: '二维码管理',
			id: 3,
			isChecked: false
		}],
	chooseModule: {}
}
let mutations = {
	changTabIndex(state, index) {
		console.log(index)
		state.tabIndex = parseInt(index)
	},
	changeChooseModule(state, module) {
		// state.chooseModule.push(module)
		state.chooseModule = module
	},
	changeModuleList(state, modulelist) {
		state.modulelist = modulelist

	}
}
let actions = {
	commitModuleList({ commit }, modulelist) {
		commit('changeModuleList', modulelist)
	}
}
export default {
	state: state,
	mutations,
	actions
}