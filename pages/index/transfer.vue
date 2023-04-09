<template>
	<!-- 转账页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view class="">转账</view>
			<image src="../../static/4.png" mode=""></image>
			<view class="">0133…5558</view>
		</view>
		<view class="tabs">
			<view class="" tabindex="1">USDT</view>
			<view class="" tabindex="1">JXB</view>
			<view class="" tabindex="1">OSK</view>
		</view>
		<view class="content">
			<view class="content_one" v-for="(item,index) in contentList">{{item.text}}</view>
			<view class="content_two">
				<view class="small_text">账户余额</view>
				<view class="big_text">267.092</view>
			</view>
			<view class="content_three">
				<view class="small_text">转账手续费</view>
				<view class="big_text">0%</view>
			</view>
			<view class="content_four">
					<view class="small_text">到账数量</view>
					<view class="big_text">0 USDT</view>
			</view>
			<view class="content_five">我要转出</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contentList:[
					{text:'请输入接收方钱包地址'},
					{text:'请输入转出数量'}
				]
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
	color: #FFF;
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
	margin-left: 62rpx;
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
	height: 565rpx;
	margin-left: 60.5rpx;
	margin-top: 54rpx;
	border-radius: 25rpx;
	background-color: #1F1D20;
	.content_one{
		width: 580rpx;
		height: 95rpx;
		border-radius: 9rpx;
		border: 3rpx solid #3980EB;
		font-size: 26rpx;
		font-weight: 400;
		line-height: 95rpx;
		margin-left: 24.5rpx;
		padding-left: 22rpx;
		box-sizing: border-box;
		position: relative;
		top: 43rpx;
		margin-bottom: 18rpx;
	}
	.content_two{
		display: flex;
		align-items: center;
		margin-top: 65rpx;
		margin-left: 55rpx;
		margin-bottom: 20rpx;
		>:nth-child(2){
			margin-left: 295rpx;
		}
	}
	.content_three{
		display: flex;
		align-items: center;
		margin-left: 55rpx;
		margin-bottom: 20rpx;
		>:nth-child(2){
			margin-left: 338rpx;
		}
	}
	.content_four{
		display: flex;
		align-items: center;
		margin-left: 55rpx;
		margin-bottom: 20rpx;
		>:nth-child(2){
			margin-left: 300rpx;
		}
	}
	.content_five{
		width: 474rpx;
		height: 78rpx;
		border-radius: 37rpx;
		border: 3rpx solid #3270CE;
		line-height: 78rpx;
		text-align: center;
		margin-left: 75rpx;
		margin-top: 12rpx;
	}
	.small_text{
		font-size: 24rpx;
		font-weight: 400;
	}
	.big_text{
		font-size: 30rpx;
		font-weight: 600;
	}
}
</style>
