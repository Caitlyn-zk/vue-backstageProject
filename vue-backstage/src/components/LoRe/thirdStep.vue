<template>
	<div class="third-module">
		<div>
			<div class="third-renme">
				<div class="third-module-title">菜单设置</div>
				<ul class="third-module-list">
					<li class="third-module-list">
						<p class="font-16">主要模块</p>
						<div>显示名称:<input class="input" type="text"/></div>
					</li>
				</ul>
			</div>
			<el-button @click="changeSt">返回</el-button>
			<el-button type="primary">完成</el-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		changeStep: Function
	},
	methods: {
		changeSt () {
			this.changeStep(2)
		}
	}
}
</script>

<style lang='less'>
@import './css/step.less';
</style>
