<template>
	<div class="login-box">
		<div class="login-box-bar">
			<div class="box-title-img"></div>
			<ul class="">
				<li class="login-list">
					<span class="el-icon-mobile-phone"></span>
					<span>手机号：</span>
					<input class="long-input" type="text"/>
				</li>
				<li class="login-list-pas">
					<span class="el-icon-mobile-phone"></span>
					<span>密码：</span>
					<input class="long-input" type="password"/>
				</li>
				<li class="login-list-pas">
					<el-checkbox align='left' v-model="checked1">是否记住账号</el-checkbox>
					<a>忘记密码</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked1: true,
		}
	}
}
</script>

<style>
.long-input {
	outline: none;
	border: 0;
	background: none;
	color: #fff;
	height: 42px;
	font-size: 18px;
}
.login-list {
	list-style: none;
	height: 42px;
	line-height: 42px;
	border-bottom: 1px solid #fff;
}
.login-list-pas {
	list-style: none;
	height: 42px;
	line-height: 42px;
	margin-top: 20px;
}
.login-list span,
.login-list-pas span {
	color:#fff;
}
</style>
