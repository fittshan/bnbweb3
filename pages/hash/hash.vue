<template>
	<view class="hash">
		<image class="back" @click="back" src="../../static/back.png" mode="widthFix"></image>
		<view class="hash-select">
			<view @click="chage(0)" class="hash-text" :class="[index == 0 ? 'active' : '']">{{$t('m.hash')}}</view>
			<!-- <view @click="chage(1)" class="hash-text" :class="[index == 1 ? 'active' : '']">{{$t('m.hash_one')}}</view> -->
			<view @click="chage(2)" class="hash-text" :class="[index == 2 ? 'active' : '']">{{$t('m.hash_two')}}</view>
		</view>
		<view class="hash-list" v-if="index == 0">
			<view class="hash-list-item hash-list-team" @click="buy(index)"  v-for="(item,index) in listInfo.pow">
				<!-- <image class="hash-list-item-img" :src="item.imagepath" mode="widthFix"></image> -->
				<view class="mode-item-text">
					<view>节点: <text class="text-color-text">{{item.title}}</text></view>
					<view>{{$t('m.hash_three')}}: <text class="text-color-text">{{item.gonglv}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.addtime}}</view>
				</view>
			</view>
		</view>
		<view class="hash-list" v-if="index == 1">
			<view class="hash-list-item hash-list-item-two" @click="buy(index)"  v-for="(item,index) in 4">
				<image class="hash-list-item-img" src="../../static/message_01.gif" mode="widthFix"></image>
				<view class="mode-item-text">
					<view>{{$t('m.hash_three')}}: <text class="text-color-text">500</text></view>
					<view>{{$t('m.hash_four')}}: <text class="text-color-text">500</text></view>
					<view class="text-color">2022-05-20 15:02:31</view>
				</view>
			</view>
		</view>
		<view class="hash-list" v-if="index == 2">
			<view class="hash-list-item hash-list-team" @click="buy(index)"  v-for="(item,index) in listInfo.teamPow">
				<view class="mode-item-text">
					<view>算力类型:<text class="text-color-text">{{item.logdesc}}</text></view>
					<view>团队算力: <text class="text-color-text">{{item.pow}}</text></view>
					<!-- <view>{{$t('m.hash_four')}}: <text class="text-color-text">{{item.price}}</text></view> -->
					<view class="text-color">{{item.logtime}}</view>
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
				index: 0,
				listInfo: {
					pow: []
				}
			}
		},
		onLoad() {
			this.getList()
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
			getList(){
				this.$request('get','index/gonglv').then(res => {
					console.log('首页数据',res)
					this.listInfo = res.data
					// this.listInfo.forEach(item => {
					// 	item.imagepath = config.ImgUrl + item.imagepath
					// })
				})
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