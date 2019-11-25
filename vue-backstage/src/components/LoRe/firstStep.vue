<template>
	<div>
		<div class="firstStep-from">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
				<el-form-item class="text-align-l tishi-text">
					<p>是否需要委托印链平台加密保存您的交易密码</p>
					<p class="text-main">若为选择加密保存服务，请您务必认真保存，一旦丢失将无法找回！</p>
					<div class="switch-box">
						<el-switch
							v-model="ruleForm.isSave"
							active-text="是"
							inactive-text="否"
							@change="handleClose"
							>
						</el-switch>
					</div>
				</el-form-item>
				<el-form-item label="输入新交易密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认新交易密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item class="varCode" label="输入验证码" prop="code">
					<el-input type="text" v-model="ruleForm.code" autocomplete="off"></el-input>
					<el-button type="primary" @click="onSubmit">获取验证码</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="changeSt('ruleForm')">下一步</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-dialog
			title="交易密码保存协议"
			:visible.sync="dialogVisible"
			:show-close="false"
			width="50%">
			<div class="modal-dialog">
				<p>主要内容</p>
				<p>主要内容</p>
				<p>主要内容</p>
				<p>主要内容</p>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: {
		changeStep: Function
	},
	data() {
		var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
			}
			var validateCode = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入验证码'))
				}else if (!value.length === 6) {
						callback(new Error('请输入正确的验证码'))
				} else {
					callback()
				}
			}
			return {
				ruleForm: {
					pass: '',
					checkPass: '',
					code: '',
					buttonVal: false
				},
				dialogVisible: false,
				rules: {
					pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
					],
					code: [
            { validator: validateCode, trigger: 'blur' }
          ]
				}
			}
	},
	methods: {
		changeSt(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.changeStep(2)
				} else {
					console.log('error submit!!')
					return false;
				}
			})
		},
		onSubmit() {
			console.log('submit!');
		},
		handleClose(value) {
			this.dialogVisible = value
		}
	}
}
</script>

<style lang='less'>
@import './css/step.less';
</style>
