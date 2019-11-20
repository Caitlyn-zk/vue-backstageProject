<template>
	<div class="login-box login">
			<div class="login-box-main">
				<el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" class="login-box-bar demo-ruleForm">
					<div class="box-title-img">
						<img src="../../assets/logo_2.png"/>
					</div>
					<el-form-item
						class="login-form-email"
						prop="email"
						label=""
					>
						<i class="login-icony el-icon-mobile-phone"></i>
						<input placeholder="邮箱" class="login-input" v-model="loginForm.email"/>
					</el-form-item>
					<el-form-item class="login-form-email" label="" prop="pass">
						<i class="login-icony el-icon-lock"></i>
						<input class="login-input" placeholder="密码" type="password" v-model="loginForm.pass" auto-complete="off"/>
					</el-form-item>
				<div class="login-list-pas">
					<label>
						<input class="login-checked" align='left' type="checkbox" v-model="checked1"/><span>是否记住账号</span>
					</label>
						<router-link class="login-fond" to="/retrievepas">忘记密码?立即找回</router-link>
					</div>
					<el-form-item class="login-submit-btn">
						<el-button type="primary" @click="loginsubmit('loginForm')">立即登录</el-button>
					</el-form-item>
					<div style="color:#fff;">百溯真商家后台</div>
				</el-form>
			</div>
	</div>
</template>

<script>
export default {
	data() {
		var validatetell = (rule, value, callback) => {
				let reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
				if (!value) {
          callback(new Error('请输入邮箱'))
        } else if(!reg.test(value)) {
					callback(new Error('请输入正确的邮箱'))
        }else {
					callback();
				}
      }
      return {
				checked1: true,
        loginForm: {
					pass: '',
					email: ''
        },
        rules2: {
          pass: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{min: 6, max: 18, message: '密码长度应在6-18位', trigger: 'blur'}
					],
					email: [
            { validator: validatetell, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      loginsubmit (formName) {
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

<style lang="less" scoped>
@import './css/register.less';
</style>
