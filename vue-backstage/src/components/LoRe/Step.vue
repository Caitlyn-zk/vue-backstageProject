<template>
	<div>第一步
		<div class="step-box">
			<el-steps :active="1" >
				<el-step title="设置交易密码" icon="el-icon-circle-check"></el-step>
				<el-step title="选择功能模块" icon="el-icon-circle-check"></el-step>
				<el-step title="菜单配置" icon="el-icon-circle-check"></el-step>
			</el-steps>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import './css/step.less';
</style>