<template>
	<view class="team">
		<image class="back" @click="back" src="../../static/back.png" mode="widthFix"></image>
		<view class="team-list">
			<view class="team-title">
				<view>{{$t('m.team_one')}}</view>
				<view>{{$t('m.team_two')}}</view>
			</view>
			<view class="team-item" v-for="item in 5">
				<view class="address">0xf4f2f82******986219</view>
				<view class="num">11111</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateTo({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.team{
		width: 100vw;
		height: 100vh;
		background: url('@/static/bg.png');
		background-size: 100% 100%;
		overflow: hidden;
		.back{
			width: 2rem;
			transform: rotate(180deg);
			margin: 1rem 1.5rem;
		}
		.team-list{
			color: #fbd8b3;
			padding: 0 2rem;
			.team-title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 1.5rem;
				padding-bottom: .5rem;
				border-bottom: 1px solid #fbd8b3;
			}
			.team-item{
				display: flex;
				justify-content: space-between;
				padding: .5rem 0;
			}
		}
	}
</style>