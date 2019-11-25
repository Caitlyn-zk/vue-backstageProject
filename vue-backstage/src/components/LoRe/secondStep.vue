<template>
	<div>
		<div class="secondStep clearfix">
			<div class="secondStep-left">
				<el-row class="tac">
					<el-col class="bg-main text-align-l" :span="24">
						<h5 class="text-white margin-l-15 font-16">选择功能模块</h5>
						<el-menu
							default-active="2"
							class="el-menu-vertical-demo"
							@close="handleClose"
							background-color="#545c64"
							text-color="#fff"
							active-text-color="#ffd04b">
							<el-menu-item index="1">
								<i class="el-icon-menu"></i>
								<span slot="title">导航一</span>
							</el-menu-item>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">导航二</span>
							</el-menu-item>
							<el-menu-item index="3">
								<i class="el-icon-document"></i>
								<span slot="title">导航三</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span slot="title">导航四</span>
							</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>

			</div>
			<div class="secondStep-right text-align-l">
				<div class="cecond-right-title">
					<p class="font-18">自定义模板</p>
					<p>您可以根据企业的要求自定义选择模块，组合成您需要的功能模块</p>
				</div>
				<el-row :gutter="20">
					<el-col :span="6">
						<div class="grid-content bg-purple">
							 <div class="top-right-triangle"></div>
						</div>
					</el-col>
					<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
					<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
			</div>
		</div>
		<el-button @click="changeSt" type="primary">下一步</el-button>
	</div>
</template>

<script>
export default {
	props: {
		changeStep: Function
	},
	methods: {
		changeSt () {
			this.changeStep(3)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<style lang='less'>
@import './css/step.less';
</style>
