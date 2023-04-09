<template>
	<view class="hash">
		<image class="back" @click="back" src="../../static/back.png" mode="widthFix"></image>
		<!-- <view class="hash-btn" @click="relieve">解押</view> -->
		<view class="hash-select">
			<view @click="chage(0)" class="hash-text" :class="[index == 0 ? 'active' : '']">质押</view>
			<!-- <view @click="chage(1)" class="hash-text" :class="[index == 1 ? 'active' : '']">{{$t('m.hash_one')}}</view> -->
			<view @click="chage(1)" class="hash-text" :class="[index == 1 ? 'active' : '']">解押</view>
			<view @click="chage(2)" class="hash-text" :class="[index == 2 ? 'active' : '']">团队算力</view>
		</view>
		<view class="hash-list" v-if="index == 0">
			<view class="hash-list-item hash-list-team"  v-for="(item,index) in listInfo.info">
				<!-- <image class="hash-list-item-img" :src="item.imagepath" mode="widthFix"></image> -->
				<view class="mode-item-text">
					<view>资产: <text class="text-color-text">{{item.sumprice}}</text></view>
					<view>{{$t('m.hash_three')}}: <text class="text-color-text">{{item.lixi}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.addtime}}</view>
					<view>时间 : <text class="text-color-text">{{item.UG_getTime}}</text></view>
				</view>
				<view class="hash-btn" @click="relieve(item.id)">解押</view>
			</view>
		</view>
		<view class="hash-list" v-if="index == 1">
			<view class="hash-list-item hash-list-team"  v-for="(item,index) in listInfo.release">
				<!-- <image class="hash-list-item-img" :src="item.imagepath" mode="widthFix"></image> -->
				<view class="mode-item-text">
					<view>资产: <text class="text-color-text">{{item.sumprice}}</text></view>
					<view>{{$t('m.hash_three')}}: <text class="text-color-text">{{item.lixi}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.addtime}}</view>
				</view>
			</view>
		</view>
		<view class="hash-list" v-if="index == 2">
			<view class="hash-list-item hash-list-team"  v-for="(item,index) in listInfo.teamPow">
				<!-- <image class="hash-list-item-img" :src="item.imagepath" mode="widthFix"></image> -->
				<view class="mode-item-text">
					<view>算力类型: <text class="text-color-text">{{item.logdesc}}</text></view>
					<view>团队算力: <text class="text-color-text">{{item.pow}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.logtime}}</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popup">
				<view class="title">提示</view>
				<view style="text-align: center;margin: 30rpx 0;">是否确认解押?</view>
				<view @click="submit" class="btn">{{$t('m.invite')}}</view>
				<image @click="close" class="close" src="../../static/close.png" mode="widthFix"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import tool from '@/common/tool.js'
	import config from '@/common/config.js'
	export default {
		data () {
			return {
				index: 0,
				indexId: null,
				listInfo: {
					info: []
				}
			}
		},
		onShow() {
			this.getList()
		},
		// onReady() {
		// 	this.listInfo.info[0].UG_getTime = this.time(new Date().getTime() - this.listInfo.info[0].UG_getTime)
		// },
		methods: {
			relieve(index){
				this.indexId = index
				this.$refs.popup.open('center')
			},
			submit:tool.debounce(function(){
				this.$refs.popup.close()
				const that = this;
				that.$request('get','shop/release',{id: that.indexId}).then(res => {
					uni.showToast({
						title: res.msg,
						icon:'none'
					})
					that.getList()
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon:'none'
					})
				})
			}),
			close(){
				this.$refs.popup.close()
			},
			back(){
				uni.navigateTo({
					url:'../index/index'
				})
			},
			chage(index){
				this.index = index
			},
			getList(){
				this.$request('get','shop/pledgeLog').then(res => {
					console.log('首页数据',res)
					res.data.info.forEach(item => {
						let now = new Date().getTime()
						item.UG_getTime = this.time(now - (item.UG_getTime * 1000));
					})
					this.listInfo = res.data
					// this.listInfo.forEach(item => {
					// 	item.imagepath = config.ImgUrl + item.imagepath
					// })
				})
			},
			time(endTime){
				let secondTime = parseInt(endTime / 1000) //将传入的秒的值转化为Number
				
				// 时间差   Math.floor 向下取整
				var time = Math.floor(parseInt(endTime / 1000))
				//时间差(秒) / 一天24小时(秒)  过去多少天
				var day = Math.floor(time / (24 * 3600))
				// 过去多少小时
				var hour_a = day * 24 * 3600,
				hour_b = time - hour_a, //剩余小时的时间戳
				hour = Math.floor(hour_b / 3600)
				// 过去多少分钟
				var minute_a = hour_b - hour * 3600,
				minute = Math.floor(minute_a / 60) // 剩余分钟 时间戳
				// 过去秒数
				var second = minute_a - minute * 60;
				if(hour) day += 1;
				return `${day}天`;
			}
		}
	}
</script>

<style lang="scss">
	.hash{
		width: 100vw;
		height: 100vh;
		// background: url('@/static/bg.png');
		background-size: 100% 100%;
		// overflow: hidden;
		padding-bottom: 1rem;
		.back{
			width: 2rem;
			transform: rotate(180deg);
			margin: 1rem 1.5rem;
		}
		.hash-list{
			color: #3194F8;
			padding: 0 1rem 10rem;
			margin-top: 1rem;
			.hash-title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 1.5rem;
				padding-bottom: .5rem;
				border-bottom: 1px solid #3194F8;
			}
			.hash-item{
				display: flex;
				justify-content: space-between;
				padding: .5rem 0;
			}
		}
		.hash-select{
			display: flex;
			justify-content: space-around;
			align-items: center;
			color: #fff;
			font-size: 1.1rem;
			font-weight: 700;
		}
		.active{
			color: #3194F8;
			// padding-bottom: 1rem;
			border-bottom: 3px solid #3194F8;
		}
		.hash-list{
			// padding: 0 1rem 10rem;
			.hash-list-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fff;
				margin: .2rem 0;
				background: rgba(0, 0, 0, .2);
				border-radius: 20rpx;
				.hash-list-item-img{
					width: 7rem;
					margin-right: 1.5rem;
				}
				.text-color-text{
					color: #3194F8;
					margin-left: .5rem;
				}
				.text-color{
					color: #3194F8;
				}
			}
			.hash-btn{
				background: #3194F8;
				padding: 10rpx 30rpx;
				border-radius: 10rpx;
				font-size: 14px;
			}
			.hash-list-item-two{
				opacity: .5;
			}
			.hash-list-team{
				padding: 1rem 2.5rem;
			}
		}
	}
	.popup{
		background: #fff;
		width: 80vw;
		border-radius: 15px;
		padding: .5rem 1rem 1rem;
		position: relative;
		.title{
			text-align: center;
			font-weight: 700;
		}
		.popup-text{
			margin: .5rem 0;
		}
		.popup-input{
			width: 70%;
			margin: 50rpx auto;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #ddd;
			padding-bottom: 10rpx;
			.input{
				width: 55%;
				margin-left: 20rpx;
			}
		}
		.btn{
			font-size: 1rem;
			width: 5rem;
			text-align: center;
			color: #3194F8;
			border: .2rem solid #3194F8;
			border-radius: 20px;
			margin: 1rem auto;
		}
		.close{
			width: 2.5rem;
			position: absolute;
			bottom: -5rem;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>