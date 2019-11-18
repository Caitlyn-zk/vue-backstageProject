<template>
	<div class="login-box">
			<div class="login-box-main">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="52px" class="login-box-bar demo-ruleForm">
					<div class="box-title-img"></div>
					
					<el-form-item
						class="el-form-email"
						prop="email"
						label="邮箱"
						:rules="[
							{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
							{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
						]"
					>
						<el-input v-model="ruleForm2.email"></el-input>
					</el-form-item>
					<el-form-item class="el-form-email" label="密码" prop="pass">
						<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
					</el-form-item>
					<div class="login-list-pas">
						<el-checkbox align='left' v-model="checked1">是否记住账号</el-checkbox>
						<router-link class="login-fond" to="/retrievepas">忘记密码?立即找回</router-link>
					</div>
					<el-form-item class="login-submit-btn">
						<el-button type="primary" @click="submitForm('ruleForm2')">立即登录</el-button>
					</el-form-item>
					<div style="color:#fff;">百溯真商家后台</div>
				</el-form>
			</div>
	</div>
</template>

<script>
export default {
	data() {
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
      return {
				checked1: true,
        ruleForm2: {
					pass: '',
					resource: '',
					email: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
					],
					resource: [
            { required: true, message: '请勾选', trigger: 'change' }
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
      }
    }
}
</script>

<style>

</style>
