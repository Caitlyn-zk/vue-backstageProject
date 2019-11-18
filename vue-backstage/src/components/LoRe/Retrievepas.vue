<template>
	<div class="login-box">
			<div class="login-box-main">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="102px" class="login-box-bar demo-ruleForm">
					<div class="fond-title">
						<span>找 回 登 录 密 码</span>
					</div>
					<el-form-item
						class="el-form-email"
						prop="email"
						label="请输入邮箱"
						:rules="[
							{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
							{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
						]"
					>
						<el-input v-model="ruleForm2.email"></el-input>
					</el-form-item>
					<el-form-item prop="code" label="请输入验证码" class="el-form-email demo-form-inline">
						<el-input v-model="ruleForm2.code" style="width:120px"></el-input>
						<el-button round @click="onSubmit">获取验证码</el-button>
					</el-form-item>
					<el-form-item class="el-form-email" label="请输入密码" prop="pass">
						<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item class="el-form-email" label="确认新密码" prop="checkPass">
						<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item class="fond-button">
						<el-button type="primary" @click="submitForm('ruleForm2')">确认找回</el-button>
					</el-form-item>
				</el-form>
			</div>
	</div>
</template>

<script>
export default {
	data() {
			 var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else {
          if (this.ruleForm2.code !== '') {
            this.$refs.ruleForm2.validateField('code')
          }
          callback()
        }
			}
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
			}
			var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback()
        }
      }
      return {
				checked1: true,
        ruleForm2: {
					pass: '',
					checkPass: '',
					email: '',
					code: ''
        },
        rules2: {
					code: [
            { validator: validatePass, trigger: 'blur' }
					],
          pass: [
            { validator: validatePass, trigger: 'blur' }
					],
					checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
			},
			onSubmit() {
				console.log('submit!');
			}
		}
}
</script>

<style>

</style>
