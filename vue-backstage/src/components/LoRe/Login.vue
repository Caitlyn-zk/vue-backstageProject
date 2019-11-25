<template>
	<div class="login-box login">
			<div class="login-box-main">
				<el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" class="login-box-bar demo-ruleForm">
					<div class="box-title-img">
						<img src="../../assets/logo_2.png"/>
					</div>
					<el-form-item
						class="login-form-username"
						prop="username"
					>
						<i class="login-icony el-icon-mobile-phone"></i>
						<input placeholder="手机号" class="login-input" v-model="loginForm.username"/>
					</el-form-item>
					<el-form-item class="login-form-username" prop="password">
						<i class="login-icony el-icon-lock"></i>
						<input class="login-input" placeholder="密码" type="password" v-model="loginForm.password" auto-complete="off"/>
					</el-form-item>
					<div class="login-list-pas margin-10">
						<label>
							<input class="login-checked" align='left' type="checkbox" v-model="checked1"/><span class="text-white">是否记住账号</span>
						</label>
						<router-link class="login-fond" to="/retrievepas">忘记密码?立即找回</router-link>
					</div>
					<el-form-item class="login-submit-btn">
						<el-button type="primary" :loading="loginLoading" @click="loginsubmit('loginForm')">立即登录</el-button>
					</el-form-item>
					<div style="color:#fff;">百溯真商家后台</div>
				</el-form>
			</div>
	</div>
</template>

<script>
import axios from 'axios'
import {api} from 'js/api.js'
import {loginRequest} from 'js/axiosRequest'
export default {
	data() {
		var validatetell = (rule, value, callback) => {
				// let reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
				let reg = /0?(13|14|15|17|18|19)[0-9]{9}/
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
		loginLoading: false,
        loginForm: {
			password: '',
			username: ''
        },
        rules2: {
          password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{min: 6, max: 18, message: '密码长度应在6-18位', trigger: 'blur'}
					],
					username: [
            { validator: validatetell, trigger: 'blur' }
          ]
        }
      }
		},
    methods: {
      loginsubmit (formName) {
        this.$refs[formName].validate((valid) => {
					// 表单验证
          if (valid) {
						this.loginLoading = true
						// axios请求
						loginRequest({
							data: {
								mobile: this.loginForm.username,
								password: this.loginForm.password
							},
							error: () => {
								this.loginLoading = false
								console.log(error)
							},
							success: (res) => {
								this.loginLoading = false
								if(res.status === 200) {
									
									// 登录成功的数据存入localStorage中
									window.localStorage.setItem("token",res.data.token)
									window.localStorage.setItem("userinfo", JSON.stringify(res.data.userinfo))
									// 存入vuex中
									this.$store.commit('changeUser', res.data)
									this.$message({
										message: '登录成功',
										type: 'success',
										showClose: true,
										duration: 2000,
										onClose: () => {
											this.$router.push('/')
										}
									})
								} else {
									this.$message({
										message: res.message,
										type: 'error',
										showClose: true,
										duration: 3000,
									})
								}
							}
						})
          }
        })
      }
    }
}
</script>

<style lang="less" scoped>
@import './css/register.less';
</style>
