<template>
	<!-- 资产页面 -->
	<view>
		<view class="header">
			<image src="../../static/bk.png" mode="" @click="back"></image>
			<view style="display: flex;align-items: center;"><image class="top-img" src="../../static/4.png" mode=""></image>
			<view class="top-txt">{{addressCopy}}</view></view>
		</view>
		<!-- <input type="search" name="" id="" placeholder="充值未到账？点这里自动找回!" placeholder-class="ipt_text"> -->
		<view class="content">
			<view class="">总资产折合 &nbsp;&nbsp;(包括USDT、JXB、OSK)</view>
			<view class="">
				<view class="">0</view>
				<view class="">USDT</view>
			</view>
			<view class="">
				<view :class="item.firstCla" v-for="(item,index) in blueList" :key="index" @click="gotoOther(index)">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="mid_text">
			<view class="">资产</view>
			<view class="" @click="gotoAssetDetail">资产明细</view>
			<image src="../../static/31.png" mode="widthFix"></image>
		</view>
		<view class="main">
			<view class="main_item" v-for="(item,index) in mainList">
				<image :src="item.img" mode="widthFix"></image>
				<view class="">{{item.text}}</view>
				<view class=""v-if="index == 0">{{list.usdt}}</view>
				<view class=""v-if="index == 1">{{list.jxb}}</view>
				<view class=""v-if="index == 2">{{list.osk}}</view>
			</view>
		</view>
		<view class="down_text">其他</view>
		<view class="footer">
			<view v-for="(item,index) in footerList" :key="index" class="footer_item">
				<image :src="item.img" mode=""></image>
				<view class="">
					<view class="">
						<view class="">{{item.text1}}</view>
						<view class="">{{item.text2}}</view>
					</view>
					<view class="">{{item.num}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressCopy:uni.getStorageSync('addressCopy') || '',
				list:{},
				blueList:[
					{text:'充币',firstCla:'bl'},
					{text:'提币'},
					{text:'转账'},
					{text:'销毁'}
				],
				mainList:[
					{img:'../../static/组 39.png',text:'USDT',num:'0'},
					{img:'../../static/组 38.png',text:'JXB',num:'0'},
					{img:'../../static/组 40.png',text:'OSK',num:'0'},
				],
				footerList:[
					{img:'../../static/组 41.png',text1:'销毁算了',text2:'每天释放OSK',num:'0'},
					{img:'../../static/组 46.png',text1:'复投JXB',text2:'复投JXB+OSK可用于复投',num:'0'}
				]
			};
		},
		onShow(){
			this.getWallet()
		},
		methods:{
			gotoAssetDetail(){
				uni.navigateTo({
					url:'/pages/index/assetDetail'
				})
			},
			getWallet(){
				this.$request('post','index/wallet',{}).then(res => {
					this.list = res.data
				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			gotoOther(index){
				if(index==1){
					uni.navigateTo({
						url:'/pages/index/extract'
					})
				}
				else if(index==2){
					uni.navigateTo({
						url:'/pages/index/transfer'
					})
				}
				else if(index==3){
					uni.navigateTo({
						url:'/pages/index/destroy'
					})
				}
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
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding-top: 33rpx;
	padding-left: 20rpx;
	position: fixed;
	box-sizing: border-box;
	background-color: #000;
	z-index: 99;
	top: 0;
	left: 0;
	>:nth-child(1){
		width: 30rpx;
		height: 30rpx;
	}
	.top-img{
		width: 28.2rpx;
		height: 24.29rpx;
	}
	.top-txt{
		font-size: 20rpx;
		margin-left: 15rpx;
	}
}
input{
	width: 638rpx;
	height: 58rpx;
	border-radius: 32rpx;
	border: 3rpx solid #3270CE;
	padding-left: 24rpx;
	margin-left: 57rpx;
	margin-top: 52rpx;
}
.ipt_text{
	color: #3270CE;
}
.content{
	width: 636rpx;
	height: 368rpx;
	background-color: #201E21;
	border-radius: 24rpx;
	margin-left: 56rpx;
	margin-top: 19rpx;
	padding-left: 33rpx;
	>:nth-child(1){
		font-size: 22rpx;
		padding-top: 32rpx;
	}
	>:nth-child(2){
		padding-top: 32rpx;
		display: flex;
		>:nth-child(1){
			font-size: 50rpx;
			color: #316DC9;
		}
		>:nth-child(2){
			color: #316DC9;
			font-size: 28rpx;
			margin-top: 22rpx;
			margin-left: 15rpx;
		}
	}
	>:nth-child(3){
		display: flex;
		flex-wrap: wrap;
		margin-top: 15rpx;
		view{
			width: 279rpx;
			height: 77rpx;
			border-radius: 17rpx;
			border: 3rpx solid #316DC9;
			margin-bottom: 18rpx;
			margin-right: 25rpx;
			line-height: 77rpx;
			text-align: center;
		}
		.bl{
			background-color: #316DC9;
		}
	}
}
.mid_text{
	display: flex;
	align-items: center;
	margin-top: 24rpx;
	>:nth-child(1){
		font-size: 42rpx;
		font-weight: 600;
		color: #3270CE;
		margin-left: 60rpx;
	}
	>:nth-child(2){
		font-size: 26rpx;
		margin-left: 452rpx;
	}
	>:nth-child(3){
		width: 10.29rpx;
		height: 20.61rpx;
		margin-left: 19rpx;
	}
}
.main{
	width: 635rpx;
	margin-top: 38rpx;
	padding-left: 56rpx;
	.main_item{
		position: relative;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #707070;
		margin-bottom: 35rpx;
		padding-bottom: 35rpx;
		image{
			width: 79rpx;
			height: 79rpx;
		}
		>:nth-child(2){
			margin-left: 19rpx;
		}
		>:nth-child(3){
			position: absolute;
			left: 566rpx;
		}
	}
}
.down_text{
	margin-left: 58rpx;
}
.footer{
	.footer_item{
		display: flex;
		width: 635rpx;
		margin-left: 55rpx;
		margin-top: 33rpx;
		border-bottom: 1rpx solid #707070;
		padding-bottom: 35rpx;
		image{
			width: 79rpx;
			height: 79rpx;
		}
		>:nth-child(2){
			display: flex;
			position: relative;
			>:nth-child(1){
				margin-left: 19rpx;
				>:nth-child(1){
					margin-top: 12rpx;
				}
				>:nth-child(2){
					font-size: 22rpx;
				}
			}
			>:nth-child(2){
				position: absolute;
				font-size: 38rpx;
				left: 540rpx;
				top: 30rpx;
			}
		}
	}
}
</style>
