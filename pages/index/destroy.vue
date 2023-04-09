<template>
	<!-- 销毁页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view class="">销毁</view>
			<image src="../../static/4.png" mode=""></image>
			<view class="">0133…5558</view>
		</view>
		<view class="content">
			<view class="content_one">
				<view class="">销毁单位</view>
				<view class="">10</view>
				<view class="">JXB</view>
			</view>
			<view class="content_two">
				<view class="">销毁份数</view>
				<view class="">
					<view class="">-</view>
					<view class="">1</view>
					<view class="">+</view>
				</view>
			</view>
			<view class="content_three">
				<view class="">销毁数量</view>
				<view class="">
					<view class="">
						<view class="">10</view>
						<view class="">JXB</view>
					</view>
					<view class="">JXB余额: 0</view>
				</view>
			</view>
			<view class="content_four">
				<view class="">获得销毁算力</view>
				<view class="">10</view>
			</view>
			<view class="content_five">
				确定销毁
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
		margin-left: 260rpx;
	}
	>:nth-child(3){
		width: 28rpx;
		height: 24rpx;
		margin-left: 160rpx;
	}
	>:nth-child(4){
		font-size: 26rpx;
		font-weight: 500;
		margin-left: 15rpx;
	}
}
.content{
	width: 639rpx;
	height: 570rpx;
	background-color: #201E21;
	border-radius: 16rpx;
	margin-top: 35rpx;
	margin-left: 56rpx;
	.content_one{
		display: flex;
		align-items: center;
		margin-left: 28rpx;
		padding-top: 44rpx;
		>:nth-child(2){
			font-size: 50rpx;
			font-weight: 600;
			margin-left: 346rpx;
		}
		>:nth-child(3){
			margin-left: 11rpx;
		}
	}
	.content_two{
		display: flex;
		align-items: center;
		margin-left: 28rpx;
		margin-top: 22rpx;
		>:nth-child(2){
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 223rpx;
			height: 91rpx;
			border-radius: 10rpx;
			border: 3rpx solid #3270CE;
			margin-left: 248rpx;
			>:nth-child(1){
				font-size: 40rpx;
				font-weight: 600;
			}
			>:nth-child(2){
				font-size: 50rpx;
				font-weight: 600;
				color: #3270CE;
			}
			>:nth-child(3){
				font-size: 40rpx;
				font-weight: 600;
			}
		}
	}
	.content_three{
		display: flex;
		margin-top: 19rpx;
		align-items: center;
		>:nth-child(1){
			margin-left: 28rpx;
		}
		>:nth-child(2){
			margin-left: 346rpx;
			>:nth-child(1){
				display: flex;
				align-items: center;
				>:nth-child(1){
					font-size: 50rpx;
					font-weight: 600;
				}
				>:nth-child(2){
					margin-left: 11rpx;
				}
			}
			>:nth-child(2){
				font-size: 22rpx;
			}
		}
	}
	.content_four{
		display: flex;
		align-items: center;
		margin-top: 21rpx;
		>:nth-child(1){
			margin-left: 28rpx;
		}
		>:nth-child(2){
			font-size: 50rpx;
			font-weight: 600;
			color: #3270CE;
			margin-left: 350rpx;
		}
	}
	.content_five{
		width: 490rpx;
		height: 74rpx;
		border-radius: 37rpx;
		border: 3rpx solid #3270CE;
		line-height: 74rpx;
		text-align: center;
		margin-left: 74.5rpx;
		margin-top: 31rpx;
	}
}
</style>
