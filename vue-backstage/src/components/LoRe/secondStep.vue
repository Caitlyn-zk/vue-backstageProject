<template>
		<div class="secondStep clearfix">
			<div class="changeTab-title ">选择应用功能模块</div>
			<el-tabs @tab-click="changeTab" tab-position="left" style="height: 500px;">
				<el-tab-pane label="通用功能模块">
					<Secondcona></Secondcona>
				</el-tab-pane>
				<el-tab-pane label="自定义功能模块">
					<Secondtow></Secondtow>
				</el-tab-pane>
			</el-tabs>
			<el-button type="primary" @click="changeSt">应用模板</el-button>
		</div>
</template>

<script>
import Secondcona from './secondcona'
import Secondtow from './secondtow'
export default {
	props: {
		changeStep: Function
	},
	methods: {
		changeSt () {
			var index = this.$store.state.step.tabIndex
			let moduleData = []
			let modulelist = this.$store.state.step.modulelist
			if(index === 0) {
				moduleData = modulelist
			}else {
				moduleData = modulelist.filter((item) => {
					return item.isChecked
				})
				if(moduleData.length <= 0) {
					this.$message({
						type: 'error',
						message: '请选择功能模块'
					})
					return false
				}
			}
			this.$store.commit('changeChooseModule', moduleData)
			this.changeStep(3)
		},
		changeTab (value) {
			this.$store.commit('changTabIndex', value.index)
		}
	},
	components: {
		Secondcona,
		Secondtow
	}
}
</script>

<style lang='less'>
@import './css/step.less';
</style>
