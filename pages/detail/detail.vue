<template>
	<view class="hash">
		<view class="top">
			<image class="back" @click="back" src="../../static/back.png" mode="widthFix"></image>
			<view class="title">{{title}}</view>
		</view>
		<view class="hash-select" v-if="show">
			<view @click="chage(0)" class="hash-text" :class="[index == 0 ? 'active' : '']">算力</view>
			<!-- <view @click="chage(1)" class="hash-text" :class="[index == 1 ? 'active' : '']">{{$t('m.hash_one')}}</view> -->
			<view @click="chage(1)" class="hash-text" :class="[index == 1 ? 'active' : '']">分红</view>
			<view @click="chage(2)" class="hash-text" :class="[index == 2 ? 'active' : '']">提币明细</view>
		</view>
		<view class="hash-list" v-if="show&&index == 0">
			<view class="hash-list-item hash-list-team" @click="buy(index)"  v-for="(item,index) in listInfoPra">
				<view class="mode-item-text">
					<view>类型:<text class="text-color-text">{{item.type == '3' ? '节点算力' : '质押算力'}}</text></view>
					<view>数量: <text class="text-color-text">{{item.pe ? '获得':'支出'}} {{item.adds}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.addtime}}</view>
				</view>
			</view>
		</view>
		<view class="hash-list" v-if="show&&index == 1">
			<view class="hash-list-item hash-list-team" @click="buy(index)"  v-for="(item,index) in listInfo">
				<view class="mode-item-text">
					<!-- <view>算力类型:<text class="text-color-text">{{item.logdesc}}</text></view> -->
					<view>数量: <text class="text-color-text">{{item.pe ? '获得':'支出'}} {{item.adds}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.addtime}}</view>
				</view>
			</view>
		</view>
		<view class="hash-list" v-if="show&&index == 2">
			<view class="hash-list-item hash-list-team" @click="buy(index)"  v-for="(item,index) in listInfoOut">
				<view class="mode-item-text">
					<view>状态:<text class="text-color-text">{{item.status == '0' ? '审核中':'已通过'}}</text></view>
					<view>数量: <text class="text-color-text"> {{item.adds}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.addtime}}</view>
				</view>
			</view>
		</view>
		<view class="hash-list" v-if="!show">
			<view class="hash-list-item hash-list-team" @click="buy(index)"  v-for="(item,index) in listInfo">
				<view class="mode-item-text">
					<view  v-if="item.type != 2">类型:<text class="text-color-text">{{item.type ? '解押提现':'余额提现'}}</text></view>
					<view  v-else>类型:<text class="text-color-text">分红</text></view>
					<view>数量: <text class="text-color-text">{{item.pe ? '获得':'支出'}} {{item.adds}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.addtime}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from '@/common/config.js'
	export default {
		data () {
			return {
				title: '',
				index: 0,
				listInfo: [],
				listInfoPra: [],
				listInfoOut: [],
				show: false
				// listInfo: {
				// 	teamPow: [
				// 		{logdesc: '分红',pow: 100,logtime:'2022-07-03 15:30'},
				// 		{logdesc: '分红',pow: 100,logtime:'2022-07-03 15:30'},
				// 		{logdesc: '分红',pow: 100,logtime:'2022-07-03 15:30'},
				// 		{logdesc: '分红',pow: 100,logtime:'2022-07-03 15:30'},
				// 		{logdesc: '分红',pow: 100,logtime:'2022-07-03 15:30'},
				// 	]
				// }
			}
		},
		onLoad(option) {
			console.log(option)
			if(option.id == 10) {
				// this.getList();
				this.getWebList();
				this.title = 'web余额'
				this.show = true
			}
		},
		methods: {
			back(){
				uni.navigateTo({
					url:'../index/index'
				})
			},
			chage(index){
				this.index = index
			},
			// getList(){
			// 	this.$request('get','index/bonusLog').then(res => {
			// 		console.log('首页数据',res)
			// 		// this.listInfo.forEach(item => {
			// 		// 	item.imagepath = config.ImgUrl + item.imagepath
			// 		// })
			// 	})
			// },
			getWebList(){
				this.$request('get','index/webLog').then(res => {
					console.log('首页数据web',res.data)
					this.listInfoPra = res.data.pow
					this.listInfo = res.data.bonus
					this.listInfoOut = res.data.log
					// this.listInfo.forEach(item => {
					// 	item.imagepath = config.ImgUrl + item.imagepath
					// })
				})
			},
			chage(index){
				this.index = index
			},
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
		.top{
			position: relative;
			.back{
				width: 1.5rem;
				transform: rotate(180deg);
				margin: 1rem 1.5rem;
			}
			.title{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%) translateY(-50%);
				color: #fff;
				font-size: 35rpx;
			}
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
			font-size: .9rem;
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
			.hash-list-item-two{
				opacity: .5;
			}
			.hash-list-team{
				padding: 1rem 2.5rem;
			}
		}
	}
</style>