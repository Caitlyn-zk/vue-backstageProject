<template>
	<div class="third-module">
		<div>
			<div class="third-renme">
				<div class="third-module-title">菜单设置</div>
				<ul class="third-module-list">
					<li :key="index" v-for="(item,index) in chooseModule" class="third-module-list clearfix">
						<div class="fl">
							<p class="font-16">{{item.name}}</p>
							<div class="margin-t-5">显示名称:<input v-model="item.showName" class="input" type="text"/></div>
						</div>
						<span @click="deletelist" class="fr el-icon-delete text-main font-16 margin-t-15"></span>
					</li>
				</ul>
			</div>
			<el-button @click="changeSt">返回</el-button>
			<el-button @click="changeSuccess" type="primary">完成</el-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		changeStep: Function
	},
	computed: {
		chooseModule () {
			let datamodule = []
			let modulelist = this.$store.state.step.chooseModule
			datamodule = JSON.stringify(modulelist)
			window.localStorage.setItem("module",datamodule)
			return modulelist
		}
	},
	methods: {
		changeSt () {
			this.changeStep(2)
		},
		changeSuccess () {
			this.$router.push('/')
		},
		deletelist () {
			let modulelist = this.$store.state.step.chooseModule
			let datamodule = []
			datamodule = JSON.stringify(modulelist)
			var obj = modulelist.find(function (x) {
				return x.id === 1
			})
			console.log(id)
			console.log(datamodule)
		}
	}
}
</script>

<style lang='less'>
@import './css/step.less';
</style>
