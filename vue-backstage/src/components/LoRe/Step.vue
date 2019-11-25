<template>
	<div>
		<div class="step-box">
			<el-steps :active="stepActive" >
					<el-step  class="first-step" title="设置交易密码" icon="el-icon-success"></el-step>
					<el-step class="second-step" title="选择功能模块" icon="el-icon-success"></el-step>
					<el-step class="third-step" title="菜单配置" icon="el-icon-success"></el-step>
				</el-steps>
				
		</div>
		<firstStep :changeStep='changeStep' :is="view"></firstStep>
	</div>
</template>

<script>
import firstStep from 'components/LoRe/firstStep'
import secondStep from 'components/LoRe/secondStep'
import thirdStep from 'components/LoRe/thirdStep'
export default {
	data () {
		return {
			stepActive: 1,
			view: 'firstStep'
		}
	},
	components: {
		firstStep,
		secondStep,
		thirdStep
	},
	methods: {
		changeStep (step) {
			this.stepActive = step
			if(step === 1) {
				this.view = 'firstStep'
			}else if(step === 2) {
				this.view = 'secondStep'
			} else {
				this.view = 'thirdStep'
			}
		}
	}
}
</script>

<style lang='less'>
@import './css/step.less';
</style>