<template>
	<!-- 账单明细页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view class="">账单明细</view>
			<view style="display: flex;align-items: center;">
				<image class="img" src="../../static/4.png" mode=""></image>
				<view class="">{{addressCopy}}</view>
			</view>
		</view>
		<view class="tab_text">
			<view :class="changeIndex == index?'blue_text':'text'" v-for="(item,index) in typeArr"
					@click="change(index)">{{item.name}}</view>
		</view>
		<view class="content">
			<view class="content_one">
				<image src="../../static/1.png" mode=""></image>
				<view class="">0133…5558</view>
				<image src="../../static/37.png" mode=""></image>
			</view>
			<view class="content_two">
				<view class="content_two_one">
					<image src="../../static/45.png" mode=""></image>
					<view class="">
						<view>USDT</view>
						<view>50</view>
					</view>
				</view>
				<view class="content_two_two">
					<image src="../../static/38.png" mode=""></image>
					<view class="">
						<view>JXB</view>
						<view>50</view>		
					</view>
				</view>
			</view>
			<view class="conten_items">
				<view class="">购买数量</view>
				<view class="blue_text">1</view>
			</view>
			<view class="conten_items">
				<view class="">支付USDT</view>
				<view class="blue_text">50</view>	
			</view>
			<view class="conten_items">
				<view class="">支付JXB</view>
				<view class="blue_text">50</view>
			</view>
			<view class="conten_items">
				<view class="">获得算力</view>
				<view class="blue_text">120</view>
			</view>
			<view class="conten_items">
				<view class="">下单时间</view>
				<view class="">2023-03-16 16:51:21</view>
			</view>
		</view>
		<view class="footer">没有更多了</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressCopy: uni.getStorageSync('addressCopy') || '',
				changeIndex: 0,
				list:[],
				page:0,
				typeArr: [{
						name: '下单',
						type: 0
					},
					{
						name: '复投',
						type: 1
					}]
			};
		},
		onShow() {
			this.getwalletLog()
		},
		methods:{
			change(i) {
				this.changeIndex = i
				this.list = []
				this.page = 0
				this.getwalletLog()
			},
			getwalletLog(){
				this.$request('post','shop/orderList',
				{type:this.typeArr[this.changeIndex].type,page:this.page}).then(res => {
					this.count = res.data.count
					this.list = [...this.list,...res.data.data]
				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onReachBottom() {
			console.log('asd')
			if(this.list.length >= this.count){
				uni.showToast({
					title:'没有更多数据',
					icon:'none'
				})
			}else{
				this.page ++
				this.getwalletLog()
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #000000;
	color: #FFF;
	padding-top: 100rpx;
}
.header{
	display: flex;
	color: #FFFFFF;
	align-items: center;
	margin-top: 33rpx;
	padding-left: 20rpx;
	position: fixed;
	box-sizing: border-box;
	top: 0;
	left: 0;
	width: 100%;
	justify-content: space-between;
	background-color: #000;
	z-index: 98;
	>:nth-child(1){
		width: 30rpx;
		height: 30rpx;
	}
	>:nth-child(2){
		font-size: 36rpx;
		font-weight: 500;
	}
	.img {
		width: 28rpx;
		height: 24rpx;
	}
	
	.txt {
		font-size: 26rpx;
		font-weight: 500;
		margin-left: 15rpx;
	}
	// >:nth-child(3){
	// 	width: 28rpx;
	// 	height: 24rpx;
	// 	margin-left: 93rpx;
	// }
	// >:nth-child(4){
	// 	font-size: 26rpx;
	// 	font-weight: 500;
	// 	margin-left: 15rpx;
	// }
}
.tab_text{
	display: flex;
	align-items: center;
	margin-top: 59rpx;
	.blue_text{
		font-size: 60rpx;
		font-weight: 600;
		color: #3270CE;
	}
	.text{
		font-size: 50rpx;
		font-weight: 600;
		color: #FFFFFF;
		margin-left: 79rpx;
		margin-top: 8rpx;
	}
	>:nth-child(1){
		margin-left: 76rpx;
	}
	>:nth-child(2){
		margin-left: 79rpx;
		margin-top: 8rpx;
	}
}
.content{
	width: 685rpx;
	height: 675rpx;
	background-color: #201E21;
	border-radius: 22rpx;
	margin-left: 32.5rpx;
	margin-top: 31rpx;
	.content_one{
		display: flex;
		margin-left: 36rpx;
		padding-top: 21rpx;
		align-items: center;
		>:nth-child(1){
			width: 56.61rpx;
			height: 47.65rpx;
		}
		>:nth-child(2){
			font-size: 22rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-left: 14rpx;
		}
		>:nth-child(3){
			width: 25.1rpx;
			height: 25.1rpx;
			margin-left: 8rpx;
		}
	}
	.content_two{
		display: flex;
		width: 600rpx;
		height: 162rpx;
		border-radius: 24rpx;
		border: 3rpx solid #3270CE;
		margin-left: 41rpx;
		margin-top: 36rpx;
		color: #FFFFFF;
		.content_two_one{
			display: flex;
			margin-left: 32rpx;
			margin-top: 34rpx;
			>:nth-child(1){
				width: 96rpx;
				height: 95rpx;
			}
			>:nth-child(2){
				font-size: 30rpx;
				font-weight: 500;
				margin-left: 37rpx;
				>:nth-child(1){
					margin-top: 5rpx;
				}
			}
		}
		.content_two_two{
			display: flex;
			margin-top: 34rpx;
			margin-left: 146rpx;
			>:nth-child(1){
				width: 97rpx;
				height: 97rpx;
			}
			>:nth-child(2){
				margin-left: 35rpx;
				margin-top: 7rpx;
			}
		}
	}
	.conten_items{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: 400;
		color: #FFFFFF;
		margin-left: 43rpx;
		margin-top: 29.5rpx;
		.blue_text{
			color: #3270CE;
		}
		>:nth-child(2){
			margin-right: 50rpx;
		}
	}
}
.footer{
	margin-top: 69rpx;
	color: #FFFFFF;
	margin-left: 285rpx;
	font-size: 36rpx;
	font-weight: 500;
}
</style>
