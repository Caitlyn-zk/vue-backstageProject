<template>
<!-- 选择模块的公共部分 -->
	<ul class="module-lists clearfix">
		<li :key="index" v-for="(item, index) in moduleList" :class="{'ckecked': item.isChecked && tabIndex === 1}" class="module-list" @click="changeModule(index)">
			<!-- ckecked -->
			<div class="module-list-cont">
				<div class="title">{{item.name}}</div>
				<div class="module-contents">
					{{item.desciptor}}
				</div>
				<span class="checked-status"><i class="el-icon-check"></i></span>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	data () {
		return {
			moduleList: []
		}
	},
	computed: {
		// moduleList () {
		// 	return this.$store.state.step.modulelist
		// },
		tabIndex () {
			return this.$store.state.step.tabIndex
		},
		chooseModule () {
			return this.$store.state.step.chooseModule
		}
	},
	methods: {
		changeModule(index) {
			if(this.tabIndex === 0) {
				return false
			}
			let module = this.moduleList[index]
			let moduleList = this.moduleList
			moduleList[index].isChecked = !moduleList[index].isChecked
			this.$set(this.moduleList,index, module)
			this.$store.dispatch('commitModuleList',moduleList)
		}
	},
	mounted () {
		this.moduleList = this.$store.state.step.modulelist
	}
}
</script>

<style lang='less'>
@import './css/step.less';
</style>
