<template>
	<!-- 真首页 -->
	<view>
		<uni-popup ref="popupLogin" type="center" :mask-click="false">
			<view class="popupLogin">
				<view class="popup-address">账户地址</view>
				<view style="color: #000;">{{addressCopy}}</view>
				<view class="popup-input">
					<view style="width: 40%;color: #000000;">邀请地址:</view>
					<!-- <view class="input">{{popupAddress}}</view> -->
					<input class="" style="color: #000000;" placeholder-style="color:#000000;" v-model="popupAddress" type="text" placeholder="地址" />
				</view>
				<view class="popup-sub" @click="submitPop">登录</view>
			</view>
		</uni-popup>
		<image src="../../static/banner-small.gif" mode="" class="earth"></image>
		<view class="header">
			<view class="header_one">
				<image src="../../static/1.png" mode=""></image>
				<view class="">金象</view>
			</view>
			<view class="header_two" @click="copy(address)">
				<image src="../../static/4.png" mode=""></image>
				<view class="">{{addressCopy}}</view>
			</view>
			<!-- <image src="../../static/组 44.png" mode=""></image> -->
		</view>
		<view class="first_content">
			<view class="first_content_one">
				<view class="">我的算力</view>
				<view class="">
					<view class="">OSK:</view>
					<view class="">{{osk}}</view>
				</view>
			</view>
			<view class="first_content_two">{{indexInfo.user.myPow}}</view>
			<view class="first_content_three">当前释放比例8%</view>
			<view class="first_content_four">总收益0</view>
		</view>
		<view class="tabs">
			<view class="tabs_item" v-for="(item,index) in tabsList" :key="item.id" @click="gotoPage(index)">
				<image :src="item.img" mode="widthFix"></image>
				<view class="">{{item.title}}</view>
			</view>
		</view>
		<image src="../../static/m1.png" mode="" class="mid_img"></image>
		<view class="second_content" v-for="item in contentItem">
			<view class="second_content_one">
				<view class="second_content_one_one">
					<image :src="item.img1" mode=""></image>
					<view class="">
						<view class="">{{item.img1text}}</view>
						<view class="">余额:{{item.img3text}}</view>
					</view>
				</view>
				<view class="second_content_one_two">
					<image :src="item.img2" mode=""></image>
					<view class="">
						<view class="">{{item.img2text}}</view>
						<view class="">余额:{{item.img4text}}</view>	
					</view>
				</view>
			</view>
			<view class="second_content_two">
				<view class="">-</view>
				<view class=""></view>
				<view class="">1</view>
				<view class=""></view>
				<view class="">+</view>
			</view>
			<view class="">支付所需</view>
			<view class="">{{item.text}}</view>
			<view class="" @click="gotoBuy">我要购买</view>
		</view>
		<view class="footer">
			<view class="footer_one" @click="gotoBillDetail">
				<view class="">账单明细</view>
				<image src="../../static/back.png" mode=""></image>
			</view>
			<view class="footer_two">
				<view class=""></view>
				<view class="">联系我们</view>
				<view class=""></view>
			</view>
			<view class="footer_three">
				<image src="../../static/28.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import tool from '@/common/tool.js'
	import contract from '@/common/abi.json';
	import Web3 from 'web3';
	window.web3 = new Web3(window.ethereum);
	const contractAddress = "0x55d398326f99059fF775485246999027B3197955";
	const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
	const contractWebAddress = "0x5fbC8000e7D9F619E43b3FBfce9Aba70494A57C3";
	const nftContractWeb = new web3.eth.Contract(contract.webabi, contractWebAddress);
	export default {
		data() {
			return {
				popupAddress: '',
				popupAddType: false,
				address: '',
				addressCopy: '',
				osk:'',
				today_time: null,
				indexInfo: {
					"user": {
						"id": "2944",
						"level": "0",
						"username": "0",
						"teamgonglv": "0",
						"myPow": "0",
						"teamPow": "0",
						"bonus": 0
					},
					"info": {},
					"address": "0",
					"invite_url": "https://web.bnbsm.cn?addr=",
					"invite": []
				},
				tabsList:[
					{img:'/static/8.png',title:'交易',id:'1'},
					{img:'/static/11.png',title:'发布',id:'2'},
					{img:'/static/14.png',title:'充币',id:'3'},
					{img:'/static/15.png',title:'资产',id:'4'},
					{img:'/static/16.png',title:'社区',id:'5'},
				],
				contentItem:[
					{
						img1:'/static/45.png',
						img2:'/static/46.png',
						img1text:'USDT',
						img2text:'JXB',
						img3text:'',
						img4text:'',
						num:50,
						text:'50 USDT+50JXB'
					},
					{	
						img1:'/static/46.png',
						img2:'/static/40.png',
						img1text:'10 复投JXB',
						img2text:'3.14159 OSK',
						img3text:'',
						img4text:'',
						num:50,
						text:'50复投 JXB+3.14152osk'
					}
				]
			};
		},
		onLoad(){
			const that = this;
			
		},
		onShow() {
			const that = this;
			this.login()
			// this.codeList()
			that.getBalanceOf();
			that.getRate()
			that.getWallet()
			this.timer = setInterval(()=>{
				that.todayTime()
				that.getBalanceOf()
			},10000)
		},
		methods:{
			async login(){
				const that = this;
				const acount = await ethereum.enable()
				console.log('account',acount)
				this.address = acount[0]
				this.loginType = acount ? false : true;
				this.homeType = acount ? true : false;
				const length = acount[0].length;
				this.addressCopy = acount[0].substring(0,6) +'******' + acount[0].substring(length - 6,length)
				uni.setStorageSync('addressCopy',this.addressCopy)
				let tokenValue = uni.getStorageSync('token') || 1
				console.log('fdf',tokenValue)
				if(tokenValue == 1){
					that.$refs.popupLogin.open('center');
				}
				console.log('address',acount)
				console.log('addressCopy',this.addressCopy)
				// this.loginInfo()
			},
			todayTime(){
				var time = new Date()
				var year = time.getFullYear();  //取得4位数的年份
				var month = time.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
				var date = time.getDate();      //返回日期月份中的天数（1到31）
				var hour = time.getHours();     //返回日期中的小时数（0到23）
				var minute = time.getMinutes(); //返回日期中的分钟数（0到59）
				var second = time.getSeconds(); //返回日期中的秒数（0到59）
				if(hour < 10) hour = `0${hour}`;
				if(minute < 10) minute = `0${minute}`;
				this.today_time = year + '.' + month + "." + date + " " + hour + ":" + minute; 
			},
			getBalanceOf(){
				const that = this;
				nftContractWeb.methods.balanceOf('0x0000000000000000000000000000000000000000').call({
					from: '0x0000000000000000000000000000000000000000'
				},function(err,res){
					console.log('黑洞',web3.utils.fromWei(res,'gwei'))
					that.blockHole = web3.utils.fromWei(res,'gwei');
				})
			},
			submitPop:tool.debounce(function(){
				if(!this.popupAddress && this.popupAddType) return uni.showToast({
					title: '请输入地址',
					icon: 'none'
				})
				const that = this;
				that.$request('post','index/login',{
					trc_addr: that.address,
					address: that.popupAddress
				}).then(res => {
					console.log('登录',res)
					uni.setStorageSync('token',res.data.token)
					uni.setStorageSync('userId',res.data.userId)
					that.getIndexInfo()
					that.$refs.popupLogin.close()
					uni.showToast({
						title: '登录成功',
						icon: 'none'
					})
				})
			}),
			loginInfo(){
				const that = this;
				this.$request('get','index/info',{
					address: that.address,
				}).then(res => {
					console.log('登录',res)
					if(window.location.href.split('?')[1]) {
						let Id = window.location.href.split('?')[1].split('&')[0].split('=')[1];
						Id = Id.replace('#/','');
						this.popupAddress = Id
					}
					if(res.data.is_reg == 0) {
						that.$refs.popupLogin.open('center');
						that.popupAddType = true;
					}
					if(res.data.is_reg == 1 && res.data.status == 0){
						that.popupAddType = false;
						that.$refs.popupLogin.open('center');
					} else {
						this.getIndexInfo()
					}
				})
			},
			getRate(){
				this.$request('get','index/rate').then(res => {
					console.log('首页数据11',res)
					this.osk = res.data.osk
				})
			},
			getWallet(){
				this.$request('post','index/wallet',{}).then(res => {
					this.contentItem[0].img3text = res.data.usdt
					this.contentItem[0].img4text = res.data.jxb
					this.contentItem[1].img3text = res.data.repeat_jxb
					this.contentItem[1].img4text = res.data.osk
				})
			},
			getIndexInfo(){
				const that = this
				this.$request('get','index/index').then(res => {
					console.log('首页数据',res)
					that.indexInfo = res.data
				})
			},
			gotoBillDetail(){
				uni.navigateTo({
					url:'../index/billDetail'
				})
			},
			gotoBuy(){
				uni.navigateTo({
					url:'/pages/index/buy'
				})
			},
			copy(text){
				uni.setClipboardData({
					data: text,
					showToast: false,
					success(res) {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						})
					}
				})
			},
			gotoPage(index){
				if(index==0){
					uni.navigateTo({
						url:'/pages/index/buy'
					})
				}
				else if(index==1){
					uni.navigateTo({
						url:'/pages/index/publish'
					})
				}
				else if(index==2){
					uni.navigateTo({
						url:'/pages/index/transfer'
					})
				}
				else if(index==3){
					uni.navigateTo({
						url:'/pages/index/asset'
					})
				}
				else if(index==4){
					uni.navigateTo({
						url:'/pages/index/community'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #000000;
}
.earth{
	width: 750rpx;
	height: 500rpx;
}
.header{
	display: flex;
	margin-top: 20rpx;
	text-align: center;
	height: 50.54rpx;
	line-height: 50.54rpx;
	.header_one{
		display: flex;
		>:nth-child(1){
			width: 60.04rpx;
			height: 50.54rpx;
			margin-left: 19rpx;
		}
		>:nth-child(2){
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-left: 14rpx;
		}
	}
	.header_two{
		display: flex;
		margin-left: 300rpx;
		align-items: center;
		>:nth-child(1){
			width: 28.2rpx;
			height: 24.29rpx;
			vertical-align: middle;
		}
		>:nth-child(2){
			font-size: 20rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-left: 5rpx;
		}
	}
	>:nth-child(3){
		width: 47rpx;
		height: 46rpx;
		margin-left: 39rpx;
		margin-right: 30rpx;
	}
}
.first_content{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24rpx;
	.first_content_one{
		display: flex;
		align-items: center;
			>:nth-child(1){	
				position: relative;
				left: 108rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
			>:nth-child(2){
				position: relative;
				left: 238rpx;
				width: 183rpx;
				height: 109rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #3270CE;
				border-radius: 21rpx;
				border: 3rpx solid #3270CE;
				padding-left: 20rpx;
				>:nth-child(1){
					margin-top: 13rpx;
				}
			}
	}
	.first_content_two{
		font-size: 50rpx;
		font-weight: 600;
		color: #3270CE;
	}
	.first_content_three{
		font-size: 20rpx;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 13rpx;
	}
	.first_content_four{
		font-size: 28rpx;
		font-weight: 500;
		color: #3270CE;
		margin-top: 8rpx;
	}
}
.tabs{
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 83rpx;
	.tabs_item{
		>:nth-child(1){
			width: 45rpx;
			height: 45rpx;
		}
		>:nth-child(2){
			font-size: 22rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-top: 24rpx;
		}
	}
}
.mid_img{
	width: 656rpx;
	height: 191rpx;
	margin-left: 44rpx;
	margin-top: 30rpx;
}
.second_content{
	width: 656rpx;
	height: 663rpx;
	background-color: #090909;
	margin-top: 20rpx;
	margin-left: 44rpx;
	color: #FFFFFF;
	font-size: 20rpx;
	font-weight: 600;
	.second_content_one{
		width: 528rpx;
		height: 227rpx;
		border-radius: 12rpx;
		border: 3rpx solid #3270CE;
		margin-left: 53.5rpx;
		.second_content_one_one{
			margin-left: 107rpx;
			margin-top: 35rpx;
			display: flex;
			image{
				width: 59rpx;
				height: 59rpx;
			}
			>:nth-child(2){
				margin-left: 12rpx;
			}
		}
		.second_content_one_two{
			margin-left: 107rpx;
			margin-top: 34rpx;
			display: flex;
			image{
				width: 59rpx;
				height: 59rpx;
			}
			>:nth-child(2){
				margin-left: 12rpx;
			}
		}
	}
	.second_content_two{
		width: 525rpx;
		height: 93rpx;
		border-radius: 12rpx;
		border: 3rpx solid #3270CE;
		margin-left: 53.5rpx;
		margin-top: 19rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		>:nth-child(1){
			font-size: 40rpx;
		}
		>:nth-child(2){
			width: 2rpx;
			height: 58rpx;
			background-color: #3270CE;
		}
		>:nth-child(3){
			color: #3270CE;
			font-size: 32rpx;
			margin-left: 100rpx;
			margin-right: 100rpx;
		}
		>:nth-child(4){
			width: 2rpx;
			height: 58rpx;
			background-color: #3270CE;
		}
		>:nth-child(5){
			font-size: 40rpx;
		}
	}
	>:nth-child(3){
		margin-left: 53.5rpx;
		margin-top: 34rpx;
		font-size: 24rpx;
		font-weight: 600;
	}
	>:nth-child(4){
		margin-left: 53.5rpx;
		margin-top: 26rpx;
		font-size: 24rpx;
		font-weight: 600;
	}
	>:nth-child(5){
		width: 515rpx;
		height: 74rpx;
		border-radius: 37rpx;
		border: 3rpx solid #3270CE;
		color: #3270CE;
		line-height: 74rpx;
		text-align: center;
		margin-left: 53.5rpx;
		margin-top: 14rpx;
	}
}
.footer{
	color: #FFFFFF;
	margin-top: 23rpx;
	.footer_one{
		display: flex;
		width: 635rpx;
		height: 96rpx;
		background-color: #201E21;
		margin-left: 58rpx;
		border-radius: 19rpx;
		align-items: center;
		image{
			width: 8.4rpx;
			height: 16.08rpx;
			margin-left: 440rpx;
		}
		>:nth-child(1){
			margin-left: 30rpx;
		}
	}
	.footer_two{
		display: flex;
		align-items: center;
		margin-top: 19rpx;
			>:nth-child(1){
				width: 157.01rpx;
				height: 2rpx;				
				background: #31312F;
				margin-left: 130rpx;
			}
			>:nth-child(2){
				font-size: 26rpx;
				font-weight: 600;
				margin-left: 38rpx;
			}
			>:nth-child(3){
				width: 157.01rpx;
				height: 2rpx;
				background: #31312F;
				margin-left: 38rpx;
			}
	}
	.footer_three{
		margin-top: 37rpx;
		image{
			width: 69rpx;
			height: 69rpx;
			margin-left: 341rpx;
			margin-bottom: 71rpx;
		}
	}
}
/deep/uni-popup{
		color: #000;
	}
.popupLogin{
		width: 80vw;
		background: #fff;
		border-radius: 20rpx;
		box-shadow: 0 0 20rpx #3194F8;
		padding: 50rpx 20rpx;
		text-align: center;
		overflow: hidden;
		color: #000!important;
		.popup-address{
			font-size: 35rpx;
			margin-bottom: 10rpx;
			color: #000;
		}
		input{
			color: #000!important;
		}
		.popup-input{
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 30rpx 0;
			color: #000;
			.input{
				// border-bottom: 1rpx solid #3194F8;
				// margin-left: 10rpx;
				text-align: left;
				// padding-left: 10rpx;
				color: #000;
			}
		}
		.popup-sub{
			width: 200rpx;
			text-align: center;
			padding: 10rpx 0;
			margin: 40rpx auto 20rpx;
			background: #3194F8;
			border-radius: 30rpx;
			color: #fff;
		}
	}
</style>
