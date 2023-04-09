<template>
	<!-- 购买 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<image src="../../static/4.png" mode=""></image>
			<view class="">0133…5558</view>
			<!-- <image src="../../static/44.png" mode=""></image> -->
		</view>
		<view class="tab">
			<view class="">购买</view>
			<view class="">出售</view>
			<view class="">
				<view class="">JXB/USDT</view>
				<image src="../../static/down.png" mode=""></image>
			</view>
		</view>
		<view class="content" v-for="item in 2">
			<view class="content_one">
				<image src="../../static/1.png" mode=""></image>
				2023-03-29 10:03:51
			</view>
			<view class="content_two">
				<view class="">
					<image src="../../static/31.png" mode=""></image>
					<view class="">
						<view class="">443 JXB</view>
						<view class=""></view>
					</view>
				</view>
				<view class="">剩余100%</view>
				<view class="">
					<image src="../../static/34.png" mode=""></image>
					<view class="">	
						<view class="">1 &nbsp;USDT</view>
						<view class="">单价</view>
					</view>
				</view>
			</view>
			<view class="content_three">
				我要购买
			</view>
		</view>
		<view class="footer">
			<view class="footer_one">发布订单</view>
			<view class="footer_two">我的发布</view>
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
		color: #fff;
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
		width: 28.2rpx;
		height: 24.29rpx;
		margin-left: 390rpx;
	}
	>:nth-child(3){
		font-size: 20rpx;
		margin-left: 5rpx;
	}
	>:nth-child(4){
		width: 60rpx;
		height: 60rpx;
		margin-left: 39rpx;
	}
}
.tab{
	display: flex;
	height: 64rpx;
	margin-top: 31rpx;
	align-items: center;
	>:nth-child(1){
		font-size: 40rpx;
		font-weight: 600;
		color: #3270CE;
		margin-left: 59rpx;
	}
	>:nth-child(2){
		font-size: 30rpx;
		font-weight: 600;
		margin-left: 36rpx;
	}
	>:nth-child(3){
		display: flex;
		width: 234rpx;
		height: 64rpx;
		border-radius: 32rpx;
		border: 3rpx solid #3270CE;
		line-height: 64rpx;
		text-align: center;
		margin-left: 226rpx;
		image{
			width: 26rpx;
			height: 18rpx;
			margin-top: 27rpx;
			margin-left: 18rpx;
		}
		view{
			color: #3270CE;
			font-size: 24rpx;
			margin-left: 36rpx;
		}
	}
}
.content{
	width: 638rpx;
	height: 546rpx;
	border-radius: 37rpx;
	background-color: #201E21;
	margin-left: 56rpx;
	margin-top: 31rpx;
	.content_one{
		margin-left: 30rpx;
		padding-top: 31rpx;
		font-size: 24rpx;
		image{
			width: 60.04rpx;
			height: 50.54rpx;
			margin-right: 14rpx;
		}
	}
	.content_two{
		width: 576rpx;
		height: 282rpx;
		border-radius: 24rpx;
		border: 3rpx solid #3270CE;
		margin-left: 30rpx;
		margin-top: 27rpx;
		>:nth-child(1){
			display: flex;
			margin-left: 62rpx;
			margin-top: 42rpx;
			image{
				width: 61.23rpx;
				height: 68.1rpx;
			}
			>:nth-child(2){
				margin-top: -8rpx;
				>:nth-child(1){
					font-size: 40rpx;
					font-weight: 600;
					margin-left: 34rpx;
				}
				>:nth-child(2){
					width: 320rpx;
					height: 10rpx;
					background-color: #3270CE;
					margin-left: 39rpx;
				}
			}
		}
		>:nth-child(2){
			margin-left: 324rpx;
			width: 165rpx;
			height: 37rpx;
			border-radius: 0 14rpx 14rpx 14rpx;
			border: 2rpx solid #3270CE;
			font-size: 22rpx;
			font-weight: 600;
			line-height: 37rpx;
			text-align: center;
			margin-top: 3rpx;
		}
		>:nth-child(3){
			display: flex;
			margin-left: 62rpx;
			margin-top: 11rpx;
			image{
				width: 69.64rpx;
				height: 63.64rpx;
			}
			>:nth-child(2){
				>:nth-child(1){
					display: flex;
					font-size: 24rpx;
					font-weight: 600;
					margin-left: 26rpx;
				}
				>:nth-child(2){
					margin-left: 31rpx;
				}
			}
		}
	}
	.content_three{
		width: 515rpx;
		height: 74rpx;
		border-radius: 37rpx;
		border: 3rpx solid #3270CE;
		margin-left: 60rpx;
		line-height: 74rpx;
		text-align: center;
		margin-top: 39rpx;
	}
}
.footer{
	margin-top: 58rpx;
	display: flex;
	.footer_one{
		width: 263rpx;
		height: 84rpx;
		border-radius: 18rpx;
		background-color: #3270CE;
		margin-left: 95rpx;
		line-height: 84rpx;
		text-align: center;
		margin-bottom: 118rpx;
	}
	.footer_two{
		width: 263rpx;
		height: 84rpx;
		border-radius: 18rpx;
		background-color: #3270CE;
		line-height: 84rpx;
		text-align: center;
		margin-left: 37rpx;
		margin-bottom: 118rpx;
	}
}
</style>
