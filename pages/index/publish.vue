<template>
	<!-- 发布购买页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view class="">发布购买</view>
			<image src="../../static/4.png" mode=""></image>
			<view class="">0133…5558</view>
		</view>
		<view class="tabs">
			<view tabindex="1">我要购买</view>
			<view tabindex="1">我要出售</view>
			<view class="">
				JXB/USDT
				<image src="../../static/31down.png" mode=""></image>
			</view>
		</view>
		<view class="content">
			<view class="content_one">
				<view class="">1</view>
				<view class="">USDT</view>
			</view>
			<view class="content_two">
				<view class="">请设定购买数量</view>
				<view class="">JXB</view>
			</view>
			<view class="content_three">
				<view class="">余额</view>
				<view class="">3.141592678 USDT</view>
			</view>
			<view class="content_four">
				<view class="">手续费</view>
				<view class="">3%</view>
			</view>
			<view class="content_five">发布购买单</view>
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
				uni.navigateTo({
					url:'/pages/index/trueIndex'
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
		margin-left: 248rpx;
	}
	>:nth-child(3){
		width: 28rpx;
		height: 24rpx;
		margin-left: 93rpx;
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
	margin-top: 41rpx;
	>:nth-child(1){
		margin-left: 60rpx;
		font-size: 30rpx;
		font-weight: 600;
		&:focus{
			color: #3270CE;
			font-size: 40rpx;
		}
	}
	>:nth-child(2){
		font-size: 30rpx;
		font-weight: 600;
		margin-left: 45rpx;
		&:focus{
			color: #3270CE;
			font-size: 40rpx;
		}
	}
	>:nth-child(3){
		width: 226rpx;
		height: 70rpx;
		border-radius: 32rpx;
		border: 3rpx solid #3270CE;
		line-height: 70rpx;
		text-align: center;
		font-size: 24rpx;
		color: #3270CE;
		margin-left: 79rpx;
		image{
			width: 20.61rpx;
			height: 10.29rpx;
			margin-left: 23rpx;
		}
	}
}
.content{
	width: 630rpx;
	height: 671rpx;
	border-radius: 14rpx;
	background-color: #1F1D20;
	margin-left: 60rpx;
	margin-top: 41rpx;
	.content_one{
		display: flex;
		align-items: center;
		position: relative;
		width: 551rpx;
		height: 160rpx;
		border: 3rpx solid #3270CE;
		border-radius: 21rpx;
		margin: 0 39rpx 0 40rpx;
		top: 40rpx;
		>:nth-child(1){
			font-size: 40rpx;
			font-weight: 600;
			margin-left: 62rpx;
		}
		>:nth-child(2){
			font-size: 28rpx;
			font-weight: 600;
			margin-left: 351rpx;
		}
	}
	.content_two{
		display: flex;
		align-items: center;
		width: 551rpx;
		height: 160rpx;
		border: 3rpx solid #3270CE;
		border-radius: 21rpx;
		margin-top: 61rpx;
		margin-left: 40rpx;
		>:nth-child(1){
			font-size: 32rpx;
			font-weight: 400;
			margin-left: 62rpx;
		}
		>:nth-child(2){
			margin-left: 152rpx;
			font-weight: 600;
			font-size: 28rpx;
		}
	}
	.content_three{
		display: flex;
		margin-top: 19rpx;
		margin-left: 71rpx;
		>:nth-child(1){
			font-weight: 400;
			font-size: 28rpx;
		}
		>:nth-child(2){
			font-weight: 400;
			margin-left: 182rpx;
			font-size: 28rpx;
		}
	}
	.content_four{
		display: flex;
		font-weight: 400;
		margin-top: 22rpx;
		font-size: 28rpx;
		>:nth-child(1){
			margin-left: 71rpx;
		}
		>:nth-child(2){
			margin-left: 352rpx;
		}
	}
	.content_five{
		width: 490rpx;
		height: 74rpx;
		border-radius: 37rpx;
		border: 3rpx solid #3270CE;
		line-height: 74rpx;
		text-align: center;
		margin-left: 70rpx;
		margin-top: 41rpx;
		font-size: 28rpx;
	}
}
</style>
