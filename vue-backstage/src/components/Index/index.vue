<template>

	<div>
		<Top></Top>
		<div class="clearfix">
			<div class="content-left fl">
				<ul>
					<div class="content-title-bar margin-b-20">
						<div class="content-portrait">
							<router-link to="step"><img src="../../assets/prop01.jpg"/></router-link>
						</div>
						<div class="text-white  font-16 padding-t-5">重庆耐尔克有限公司</div>
					</div>
					<p class="text-white margin-l-20 text-align-l"><span class="el-icon-location"></span>首页</p>
					<li class="content-list-li"  :key="index" v-for="(item, index) in modulelist">
						<span class="text-white el-icon-menu"></span>
						<router-link class="text-white " :to="item.path">{{item.name}}</router-link>
					</li>
				</ul>
			</div>
			<div class="counte-right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import portrait from '../../assets/top_portrait.jpg'
import Top from 'components/Common/Top'
export default {
	components: {
		Top,
		portrait
	},
	computed: {
		modulelist () {
			let routerPaht = JSON.parse(window.localStorage.getItem('module'))
			console.log(routerPaht)
			return routerPaht
		}
	}
}
</script>

<style lang='less'>
@import '~css/index';
</style>

