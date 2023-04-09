<template>
	<!-- 资产明细页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view class="">资产明细</view>
			<view style="display: flex;align-items: center;">
				<image class="img" src="../../static/4.png" mode=""></image>
				<view class="">{{addressCopy}}</view>
			</view>
		</view>
		<view class="tab">
			<view :class="changeIndex == index?'blue_text':'text'" v-for="(item,index) in typeArr"
				@click="change(index)">{{item.name}}</view>
		</view>
		<view class="top_text">
			<picker mode="date" :value="date" fields="month" @change="dateChange">
				<view class="selestDate">{{date}}</view>
			</picker>
			<image src="../../static/31down.png" mode=""></image>
		</view>
		<view class="content">
			<view class="content_item" v-for="(item,index) in list">
				<view class="right">
					<view class="left_up_text">{{item.desc}}</view>
					<view class="right_up_text">{{item.num}}</view>
				</view>
				<view class="right">
					<view class="left_down_text">{{item.addtime}}</view>
					<view class="right_down_text">{{item.balance}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			// const currentDate = this.getDate()
			return {
				date: '',
				addressCopy: uni.getStorageSync('addressCopy') || '',
				changeIndex: 0,
				page: 0,
				list:[],
				count:null,
				typeArr: [{
						name: 'USDT',
						type: 'usdt'
					},
					{
						name: 'JXB',
						type: 'jxb'
					},
					{
						name: 'OSK',
						type: 'osk'
					},
					{
						name: '复投JXB',
						type: 'repeat_jxb'
					},
					{
						name: '算力',
						type: 'pow_log'
					},
					{
						name: '销毁池',
						type: 'pool'
					}
				],
				contentList: [
					{
					text1: '购买下单',
						text2: '-50',
						text3: '03-16  16:51:21',
						text4: '当前余额：50.0000'
					},
					{
						text1: '交易购买花费',
						text2: '-10',
						text3: '03-16  16:51:21',
						text4: '当前余额：50.0000'
					},
					{
						text1: '交易购买花费',
						text2: '-10',
						text3: '03-16  16:51:21',
						text4: '当前余额：50.0000'
					},
					{
						text1: '转入',
						text2: '+10',
						text3: '03-16  16:51:21',
						text4: '当前余额：50.0000'
					},
					{
						text1: '转入',
						text2: '+10',
						text3: '',
						text4: '当前余额：50.0000'
					},
				]
			};
		},
		onShow() {
			this.getDate()
		},
		methods: {
			change(i) {
				this.changeIndex = i
				this.list = []
				this.page = 0
				this.getwalletLog()
			},
			dateChange(e) {
				this.date = e.target.value.slice(0, 7);
				this.list = []
				this.getwalletLog()
			},
            getwalletLog(){
            	this.$request('post','index/walletLog',
				{type:this.typeArr[this.changeIndex].type,page:this.page,date:this.date}).then(res => {
					this.count = res.data.count
            		this.list = [...this.list,...res.data.data]
            	})
            },
			// 获取年月日信息
			getDate(type) {
				this.page = 0;
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				// day = day > 9 ? day : '0' + day;
				this.date =  `${year}-${month}`;
				this.getwalletLog()
			},
			back() {
				uni.navigateBack({
					delta: 1
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
	page {
		background-color: #000000;
		color: #FFF;
		padding-top: 200rpx;
	}

	.header {
		display: flex;
		color: #FFFFFF;
		align-items: center;
		padding-top: 33rpx;
		// margin-left: 41rpx;
		padding-left: 20rpx;
		position: fixed;
		box-sizing: border-box;
		top: 0;
		left: 0;
		width: 100%;
		justify-content: space-between;
		background-color: #000;
		z-index: 98;

		>:nth-child(1) {
			width: 30rpx;
			height: 30rpx;
		}

		>:nth-child(2) {
			font-size: 36rpx;
			font-weight: 500;
			// margin-left: 248rpx;
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
	}

	.tab {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-top: 32rpx;
		position: fixed;
		top: 80rpx;
		width: 100%;
		left: 0;
		background-color: #000;
		z-index: 99;

		view {
			font-size: 30rpx;
		}

		.blue_text {
			font-size: 38rpx;
			color: #3980EB;
		}
	}

	.top_text {
		margin-top: 39rpx;
		margin-left: 37rpx;
		width: 259rpx;
		height: 95rpx;
		border-radius: 36rpx;
		border: 3rpx solid #3270CE;
		color: #3270CE;
		line-height: 95rpx;
		text-align: center;
		font-size: 28rpx;

		image {
			margin-left: 20rpx;
			width: 15.92rpx;
			height: 7.94rpx;
		}
	}

	.content {
		width: 664rpx;
		// height: 1053rpx;
		background-color: #201E21;
		border-radius: 28rpx 28rpx 0 0;
		margin-left: 43rpx;
		margin-top: 48rpx;
	
	.content_item {
			padding-left: 43rpx;
			border-bottom: 1rpx solid #707070;
			padding-right: 20rpx;

			>:nth-child(1) {
				position: relative;
				display: flex;
				padding-top: 22rpx;

				.left_up_text {
					font-size: 36rpx;
					font-weight: 400;
				}

				.right_up_text {
					// position: absolute;
					font-size: 40rpx;
					font-weight: 600;
					color: #3980EB;
					// left: 520rpx;
				}
			}
           .right{
			   display: flex;
			   align-items: center;
			   margin-top: 20rpx;
			   justify-content: space-between;
			   width: 100%;
			   margin-bottom: 20rpx;
		   }
		}
	}
</style>
