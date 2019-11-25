<template>
	<div class="login-box forget">
			<div class="login-box-main">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="login-box-bar demo-ruleForm">
					<div class="fond-title">
						<span>找 回 登 录 密 码</span>
					</div>
					<el-form-item
						class="login-form-username"
						prop="email"
						label=""
					>
						<i class="login-icony el-icon-mobile-phone"></i>
						<input placeholder="请输入邮箱" class="login-input" v-model="ruleForm2.email"/>
					</el-form-item>
					<el-form-item prop="code" label="" class="login-form-username demo-form-inline">
						<i class="login-icony el-icon-mobile-phone"></i>
						<input placeholder="请输入验证码" class="login-input" style="width:170px" v-model="ruleForm2.code"/>
						<el-button round @click="onSubmit">获取验证码</el-button>
					</el-form-item>
					<el-form-item class="login-form-username" label="" prop="pass">
						<i class="login-icony el-icon-lock"></i>
						<input class="login-input" placeholder="请输入密码" type="password" v-model="ruleForm2.pass" auto-complete="off"/>
					</el-form-item>
					<el-form-item class="login-form-username" label="" prop="checkPass">
						<i class="login-icony el-icon-lock"></i>
						<input class="login-input" placeholder="确认新密码" type="password" v-model="ruleForm2.checkPass" auto-complete="off"/>
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
			 var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        }else if (!value.length === 6) {
						callback(new Error('请输入正确的验证码'))
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
						email: [
            { validator: validatetell, trigger: 'blur' }
          ],
					code: [
						{ validator: validateCode, trigger: 'blur' }
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

<style lang="less" scoped>
@import './css/register.less';
</style>
