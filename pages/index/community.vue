<template>
	<!-- 社区页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view class="">社区</view>
			<image src="../../static/4.png" mode=""></image>
			<view class="">0133…5558</view>
		</view>
		<view class="content">
			<view class="">普通用户</view>
			<view class="">VIP5</view>
		</view>
		<view class="main">
			<view class="main_one">
				<view class="">直推数量：</view>
				<view class="">9</view>
			</view>
			<view class="main_two">
				<view class="">
					<view class="">报单业绩：</view>
					<view class="">31415926 USD</view>
				</view>
				<view class="">
					<view class="">复投业绩：</view>
					<view class="">31415926 USD</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer_item" v-for="item in 2">
				<view class="footer_one">0sd5…00db</view>
				<view class="footer_two">
					<view class="">下单数量： 2 &nbsp;业绩：0</view>
					<view class="">2023-03-14 21:59:27</view>
				</view>
			</view>
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
.content{
	width: 679rpx;
	height: 178rpx;
	background-color: #1F1D20;
	border-radius: 36rpx;
	margin-top: 59rpx;
	margin-left: 35.5rpx;
	display: flex;
	align-items: center;
	font-size: 36rpx;
	font-weight: 400;
	white-space: nowrap;
	>:nth-child(1){
		margin-left: 78rpx;
	}
	>:nth-child(2){
		margin-left: 356rpx;
	}
}
.main{
	display: flex;
	align-items: center;
	margin-left: 37rpx;
	margin-top: 50rpx;
	.main_one{
		display: flex;
		font-weight: 400;
		>:nth-child(2){
			color: #3270CE;
		}
	}
	.main_two{
		margin-left: 174rpx;
		font-size: 28rpx;
		>:nth-child(1){
			display: flex;
			>:nth-child(2){
				color: #3270CE;
			}
		}
		>:nth-child(2){
			display: flex;
			>:nth-child(2){
				color: #3270CE;
			}
		}
	}
}
.footer{
	margin-top: 74rpx;
	.footer_item{
		width: 676rpx;
		display: flex;
		align-items: center;
		margin-left: 37rpx;
		border-bottom: 1rpx solid #707070;
		padding-bottom: 32rpx;
		.footer_one{
			font-size: 28rpx;
		}
		.footer_two{
			margin-left: 194rpx;
			margin-top: 36rpx;
			>:nth-child(1){
				font-size: 34rpx;
			}
			>:nth-child(2){
				font-size: 26rpx;
				font-weight: 400;
				margin-left: 61rpx;
				margin-top: 12rpx;
			}
		}
	}
}
</style>
