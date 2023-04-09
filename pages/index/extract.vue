<template>
	<!-- 提取金币页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view class="">提币</view>
			<image src="../../static/4.png" mode=""></image>
			<view class="">0133…5558</view>
		</view>
		<view class="tabs">
			<view class="" tabindex="1">USDT</view>
			<view class="" tabindex="1">JXB</view>
			<view class="" tabindex="1">OSK</view>
		</view>
		<view class="content">
			<view class="content_one">
				<view class="">账户余额</view>
				<view class="">267.0922</view>
			</view>
			<view class="content_two">
				<view class="">请输入</view>
				<view class="">全部</view>
			</view>
			<view class="content_three">
				<view class="">提取手续费</view>
				<view class="">3%</view>
			</view>
			<view class="content_four">
				<view class="">到账数量</view>
				<view class="">0 USDT</view>
			</view>
			<view class="content_five">确认提币</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				// uni.navigateTo({
				// 	url:'/pages/index/trueIndex'
				// })
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #000000;
}
.header{
	display: flex;
	color: #FFFFFF;
	align-items: center;
	margin-top: 33rpx;
	margin-left: 41rpx;
	>:nth-child(1){
		width: 30rpx;
		height: 30rpx;
	}
	>:nth-child(2){
		font-size: 36rpx;
		font-weight: 500;
		margin-left: 284rpx;
	}
	>:nth-child(3){
		width: 28rpx;
		height: 24rpx;
		margin-left: 129rpx;
	}
	>:nth-child(4){
		font-size: 26rpx;
		font-weight: 500;
		margin-left: 15rpx;
	}
}
.tabs{
	display: flex;
	align-items: center;
	font-size: 40rpx;
	font-weight: 400;
	margin-left: 61rpx;
	margin-top: 55rpx;
	view{
		margin-right: 31rpx;
		&:focus{
			color: #3980EB;
			font-size: 50rpx;
			font-weight: 600;
		}
	}
}
.content{
	width: 629rpx;
	height: 467rpx;
	background-color: #1F1D20;
	border-radius: 24rpx;
	margin-left: 61rpx;
	margin-top: 56rpx;
	.content_one{
		display: flex;
		align-items: center;
		padding-top: 39rpx;
		>:nth-child(1){
			font-size: 32rpx;
			margin-left: 56rpx;
		}
		>:nth-child(2){
			font-size: 30rpx;
			font-weight: 600;
			color: #3980EB;
			margin-left: 254rpx;
		}
	}
	.content_two{
		display: flex;
		align-items: center;
		width: 580rpx;
		height: 95rpx;
		border-radius: 9rpx;
		border: 3rpx solid #3980EB;
		margin-left: 23rpx;
		margin-top: 30rpx;
		>:nth-child(1){
			margin-left: 22rpx;
		}
		>:nth-child(2){
			margin-left: 380rpx;
		}
	}
	.content_three{
		display: flex;
		align-items: center;
		margin-left: 55rpx;
		margin-top: 21rpx;
		>:nth-child(1){
			font-size: 24rpx;
			font-weight: 400;
		}
		>:nth-child(2){
			font-size: 30rpx;
			font-weight: 600;
			margin-left: 348rpx;
		}
	}
	.content_four{
		display: flex;
		align-items: center;
		margin-left: 55rpx;
		margin-top: 21rpx;
		>:nth-child(1){
			font-size: 24rpx;
			font-weight: 400;
		}
		>:nth-child(2){
			font-size: 30rpx;
			font-weight: 600;
			margin-left: 310rpx;
		}
	}
	.content_five{
		width: 474rpx;
		height: 78rpx;
		border: 3rpx solid #3270CE;
		border-radius: 37rpx;
		line-height: 78rpx;
		text-align: center;
		margin-left: 77.5rpx;
		margin-top: 18rpx;
	}
}
</style>
