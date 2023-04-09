<template>
	<view class="main">
		<!-- <view class="login" v-if="loginType">
			<image src="http://sms.bnbsm.cn/static/login.gif" class="login-top" mode="widthFix"></image>
			<image src="../../static/login.gif" class="login-top" mode="widthFix"></image>
			<view class="login-en">IN EVERY ONE OF US THERE IS A SUN</view>
			<view class="login-en">SO LONG AS WE LET IT SHINE</view>
			<view class="login-cn">每个人的身上都有太阳 重要的是如何让它发光</view>
			<view class="login-cn">——Socrates 苏格拉底</view>
			<image class="login-icon" src="../../static/login-icon.png" mode="widthFix"></image>
		</view> -->
		<!-- <view class="invite" v-if="inviteType">
			<image src="../../static/invite.png" class="invite-img" mode="widthFix"></image>
			<view class="invite-hr"></view>
			<view class="invite-input">
				<input class="invite-num" type="text" v-model="inviteNum" :placeholder="$t('m.invite_one')" placeholder-style="color:#fff;">
				<view class="invite-btn" @click="invite">{{$t('m.invite')}}</view>
			</view>
		</view> -->
		<uni-popup ref="popupLogin" type="center" :mask-click="false">
			<view class="popupLogin">
				<view class="popup-address">账户地址</view>
				<view>{{addressCopy}}</view>
				<view class="popup-input" v-if="popupAddType">
					<text style="width: 40%;">邀请地址:</text>
					<input class="input" v-model="popupAddress" type="text" placeholder="地址">
				</view>
				<view class="popup-sub" @click="submitPop">登录</view>
			</view>
		</uni-popup>
		<view class="home" v-if="homeType">
			<view class="home-top">
				<view class="home-address">
					{{addressCopy}}
					<!-- <image @click="copy(address)" class="copy" src="../../static/copy.png" mode="widthFix"></image> -->
					<view @click="copy(address)" class="copy">COPY</view>
					<view v-if="indexInfo.user.level == -1" class="home-level">游客</view>
					<view v-else-if="indexInfo.user.level == 0" class="home-level">会员</view>
					<view v-else class="home-level">{{$t('m.level')}}: V{{indexInfo.user.level}}</view>
				</view>
				<view class="home-lang">
					<image v-if="lang == 'zh'" @click="changeLang('en')" class="lang" src="../../static/lang-ch.png" mode="widthFix"></image>
					<image v-if="lang == 'en'" @click="changeLang('zh')" class="lang" src="../../static/lang-en.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="banner"><!-- 
				<image class="banner-img" src="http://sms.bnbsm.cn/static/banner.gif" mode="widthFix"></image> -->
				<image class="banner-img" src="../../static/2.gif" mode="widthFix"></image>
				<image class="banner-logo" src="../../static/logo-1.png" mode="widthFix"></image>
				<image class="banner-text" src="../../static/logo-text.png" mode="widthFix"></image>
			</view>
			<view class="message">
				<view class="title">
					<image class="title-img" src="../../static/message-zh.png" mode="widthFix"></image>
				</view>
				<view class="message-content">
					<view class="message-buy-list">
						<!-- <view @click="changeBuy(0)" class="message-list-item">{{$t('m.message_one')}} <view :class="[buyNum == 0 ? 'active-line' : '']"></view></view> -->
						<!-- <view @click="changeBuy(0)" class="message-list-item">{{$t('m.message_two')}} <view :class="[buyNum == 0 ? 'active-line' : '']"></view></view> -->
						<!-- <view @click="changeBuy(1)" class="message-list-item">{{$t('m.message_the')}} <view :class="[buyNum == 1 ? 'active-line' : '']"></view></view> -->
						<view @click="changeBuy(index)" class="message-list-item" v-for="(item,index) in buyUsdtList">{{item.title}}<view :class="[buyNum == index ? 'active-line' : '']"></view></view>
					</view>
					<view class="message-buy-num" v-if="buyUsdtList.length">
						{{buyUsdtList[buyNum].price}}U
					</view>
					<view class="message-buy-btn">
						<view class="message-buy-text" @click="buy">{{$t('m.message_four')}}</view>
					</view>
					<view class="message-bottom">
						<image class="mess-point" src="../../static/point.png" mode="widthFix"></image>
					</view>
					<view class="message-data-list">
						<view class="message-data-item" @click="link(0)">
							<view class="message-data-title">{{$t('m.message_five')}}</view>
							<view class="message-data-num">{{indexInfo.user.myPow}}</view>
						</view>
						<view class="message-data-item" @click="">
							<view class="message-data-title">{{$t('m.message_six')}}</view>
							<view class="message-data-num">{{indexInfo.user.bonus}}</view>
						</view>
						<view class="message-data-item" @click="link()">
							<view class="message-data-title">{{$t('m.message_se')}}</view>
							<view class="message-data-num">{{indexInfo.user.teamPow}}</view>
						</view>
					</view>
					<!-- <view class="message-content-list">
						<view class="message-content-item" @click="link(index)" v-for="(item,index) in messageList">
							<image v-if="lang == 'zh'" class="item-img" :src="item.img_zh" mode="widthFix"></image>
							<image v-else class="item-img" :src="item.img_en" mode="widthFix"></image>
							<view class="item-text">{{item.num}}</view>
						</view>
					</view> -->
				</view>
				<!-- <view class="message-bottom">
					<image class="mess-point" src="../../static/point.png" mode="widthFix"></image>
				</view> -->
			</view>
			<view class="price">
				<view class="title">
					<image class="title-img" src="../../static/price.png" mode="widthFix"></image>
				</view>
				<view class="price-input">
					<input type="number" v-model="priceNum" class="input-num" @blur="priceInput" :placeholder="$t('m.price_one')" placeholder-style="color:#42474B">
					<view class="price-buy-text" @click="pledge">{{$t('m.price_two')}}</view>
				</view>
				<view class="price-sum-num">
					<view class="price-text">{{$t('m.price_the')}}</view>
					<view class="price-num" v-if="priceNum">{{(priceNum / indexInfo.price).toFixed(2)}}</view>
					<view class="price-num" v-else>0</view>
				</view>
				<view class="price-sum-num">
					<view class="price-text">{{$t('m.price_four')}}</view>
					<view class="price-num" v-if="priceNum">{{priceNum / 100 * indexInfo.info.today_rate}}</view>
					<view class="price-num" v-else>0</view>
				</view>
				<view class="message-bottom">
					<image class="mess-point" src="../../static/point.png" mode="widthFix"></image>
				</view>
				<view class="price-data-list">
					<view class="price-data-item" @click="link(9)">
						<view class="price-data-title">{{$t('m.message_five')}}</view>
						<view class="price-data-num">{{indexInfo.user.pledge}}</view>
					</view>
					<view class="price-data-item"  @click="link()">
						<view class="price-data-title">{{$t('m.price_five')}}</view>
						<view class="price-data-num">{{indexInfo.user.pledge_total}}</view>
					</view>
					<view class="price-data-item" @click="link()">
						<view class="price-data-title">{{$t('m.price_six')}}</view>
						<view class="price-data-num">{{indexInfo.user.pledge_team}}</view>
					</view>
				</view>
				<!-- <view class="price-detail">
					<view class="detail-title">{{$t('m.price_se')}}</view>
					<view class="detail-num">
						<view class="detail-item">
						</view>
						<view class="detail-item">
							1000 <view class="detail-time">2022-5-25</view>
						</view>
					</view>
				</view> -->
				<!-- <view class="price-buy-btn">
					<view class="price-buy-text">{{$t('m.price_ei')}}</view>
				</view> -->
			</view>
			<view class="model">
				<view class="title">
					<image class="title-img" src="../../static/hash.png" mode="widthFix"></image>
				</view>
				<view class="model-price">
					<view class="left">
						<image class="model-money" src="../../static/money.png" mode="widthFix"></image>
						{{indexInfo.price}}
					</view>
					<view class="model-time">{{today_time}}</view>
				</view>
				<view class="message-bottom">
					<image class="mess-point" src="../../static/point.png" mode="widthFix"></image>
				</view>
				<view class="model-price-detail">
					<view class="left" @click="link(10)">
						<view class="text">{{$t('m.model_one')}}</view>
						{{indexInfo.user.web_balance}} web
					</view>
					<view class="model-buy-text" @click="pick(0)">{{$t('m.model_the')}}</view>
				</view>
				<view class="message-bottom">
					<image class="mess-point" src="../../static/point.png" mode="widthFix"></image>
				</view>
				<view class="model-price-detail">
					<view class="left">
						<view class="text">{{$t('m.model_two')}}</view>
						{{indexInfo.user.release_num}} web
					</view>
					<view class="model-buy-text" @click="pick(1)">{{$t('m.model_the')}}</view>
				</view>
			</view>
			<view class="team">
				<view class="title">
					<image class="title-img" src="../../static/team.png" mode="widthFix"></image>
				</view>
				<view class="team-detail">
					<view class="detail-title">{{$t('m.team_one')}}</view>
					<view class="detail-num">
						{{indexInfo.address}}
					</view>
				</view>
				<view class="message-bottom">
					<image class="mess-point" src="../../static/point.png" mode="widthFix"></image>
				</view>
				<view class="team-data-list">
					<view class="price-sum-num">
						<view class="price-text">{{$t('m.model')}}</view>
						<view class="price-num">{{indexInfo.info.today_rate}}</view>
					</view>
					<view class="price-sum-num">
						<view class="price-text">{{$t('m.price_the')}}</view>
						<view class="price-num">{{blockHole}}</view>
					</view>
					<view class="price-sum-num">
						<view class="price-text">{{$t('m.team_the')}}</view>
						<view class="price-num">{{indexInfo.info.produce_num}}</view>
					</view>
					<view class="price-sum-num">
						<view class="price-text">{{$t('m.team_four')}}</view>
						<view class="price-num">{{indexInfo.info.unwithdraw}}</view>
					</view>
					<view class="price-sum-num">
						<view class="price-text">{{$t('m.team_five')}}</view>
						<view class="price-num">{{indexInfo.info.withdraw}}</view>
					</view>
					<view class="price-sum-num">
						<view class="price-text">{{$t('m.team_six')}}</view>
						<view class="price-num">{{indexInfo.info.pow_total}}</view>
					</view>
					
					<!-- <view class="team-data-item">
						<view class="team-data-title">{{$t('m.model')}}</view>
						<view class="team-data-num">{{0}}</view>
					</view>
					<view class="team-data-item">
						<view class="team-data-title">{{$t('m.price_the')}}</view>
						<view class="team-data-num">{{0}}</view>
					</view>
					<view class="team-data-item">
						<view class="team-data-title">{{$t('m.team_the')}}</view>
						<view class="team-data-num">{{0}}</view>
					</view>
					<view class="team-data-item">
						<view class="team-data-title">{{$t('m.team_four')}}</view>
						<view class="team-data-num">{{0}}</view>
					</view>
					<view class="team-data-item">
						<view class="team-data-title">{{$t('m.team_five')}}</view>
						<view class="team-data-num">{{0}}</view>
					</view>
					<view class="team-data-item">
						<view class="team-data-title">{{$t('m.team_six')}}</view>
						<view class="team-data-num">{{0}}</view>
					</view> -->
				</view>
			</view>
			<view class="inviteCode">
				<view class="title">
					<image class="title-img" src="../../static/code.png" mode="widthFix"></image>
				</view>
				<!-- <u-qrcode class="qcode" ref="qrcode" canvas-id="qrcode" value="uQRCode" size="250"></u-qrcode> -->
				<view class="qcodeText">
					{{$t('m.code_one')}}
					<view>{{indexInfo.invite_url}}</view>
				</view>
				<view class="code-buy-text" @click="copy(indexInfo.invite_url)">{{$t('m.code_two')}}</view>
				<view class="invite-list">
					<view class="invite-title">邀请列表</view>
					<view class="invite-item" v-for="item in indexInfo.invite">
						<view>
							<view class="left">{{item.username}}</view>
							<view class="time">{{item.regdate}}</view>
						</view>
						<view class="right" v-if="item.level == -1">游客</view>
						<view class="right" v-else-if="item.level == 0">会员</view>
						<view class="right" v-else>V{{item.level}}</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popup">
				<view class="title">{{$t('m.popup_one')}}</view>
				<view class="popup-text">{{$t('m.popup_two')}}: {{buylist.name}}</view>
				<view class="popup-text">{{$t('m.popup_three')}}: {{buylist.num}} USDT</view>
				<view @click="submit" class="btn">{{$t('m.invite')}}</view>
				<image @click="close" class="close" src="../../static/close.png" mode="widthFix"></image>
			</view>
		</uni-popup>
		<uni-popup ref="popupPar" type="center">
			<view class="popup">
				<view class="title">{{$t('m.popup_one')}}</view>
				<view class="popup-text">类型: 质押矿机</view>
				<view class="popup-text">质押: {{priceNum}} USDT</view>
				<view style="font-size: 12px;padding-left: 80rpx;">{{(priceNum / indexInfo.price).toFixed(2)}} web</view>
				<view @click="submitPar" class="btn">{{$t('m.invite')}}</view>
				<image @click="close" class="close" src="../../static/close.png" mode="widthFix"></image>
			</view>
		</uni-popup>
		<uni-popup ref="popupPick" type="center">
			<view class="popup">
				<view class="title">提币</view>
				<view class="popup-input">
					数量:
					<input class="input" v-model="pickNum" type="number" placeholder="请输入数量">
				</view>
				<view @click="submitPick" class="btn">{{$t('m.invite')}}</view>
				<image @click="close" class="close" src="../../static/close.png" mode="widthFix"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import tool from '@/common/tool.js'
	import contract from '@/common/abi.json';
	// import { createAlchemyWeb3 } from "@alch/alchemy-web3";
	// const web3 = createAlchemyWeb3("https://bsc-dataseed.binance.org/");
	import Web3 from 'web3';
	// import Web3 from '@/static/web3/dist/web3.min.js';
	window.web3 = new Web3(window.ethereum);
	// var web3 = new Web3(window.ethereum);
	// var web3 = new Web3('https://bsc-dataseed4.ninicoin.io');
	// console.log('https://bsc-dataseed1.binance.org/')
	const contractAddress = "0x55d398326f99059fF775485246999027B3197955";
	const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
	
	const contractWebAddress = "0x5fbC8000e7D9F619E43b3FBfce9Aba70494A57C3";
	const nftContractWeb = new web3.eth.Contract(contract.webabi, contractWebAddress);
	// console.log('nftContractWeb.methods',nftContractWeb.methods)
	
	// import vConsole from 'vconsole';
	// var VConsole = new vConsole()
	import webApi from '@/common/webApi.js'
	export default {
		data () {
			return {
				popupAddress: '',
				popupAddType: false,
				inviteNum: '',
				address: '',
				addressCopy: '',
				loginType: true,
				inviteType: false,
				homeType: false,
				lang: 'zh',
				messageList:[
					{name: '个人算力', num: 500},
					{name:'分红数量', num: 25},
					{name:'团队业绩', num: 56},
				],
				buyNum: 0,
				buyUsdtList: [],
				priceNum: '',
				priceList:[
					{name:'个人算力', num: 500},
					{name:'产出数量', num: 25},
					{name:'团队业绩', num: 1000 },
				],
				teamList:[
					{name:'今日算率', num: 200},
					{name:'销毁数量', num: 60},
					{name:'总产出', num: 500 },
					{name:'代提币', num: 200},
					{name:'已提币', num: 60},
					{name:'算力总值', num: 500 },
				],
				uQRCode: 'http://sms.bnbsm.cn?id=MOU8qaTL',
				buylist: {
					name: '普通节点',
					num: 300
				},
				toAddress: "0xad082516Fb3D6C7DC0726741019c6A93759eaC2E",
				bnbNum: 0,
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
				pickId: 0,
				pickNum: null,
				today_time: null,
				timer: '',
				blockHole: null
			}
		},
		onLoad(option) {
			// alert(window.location.href.indexOf('addr'))
			// console.log('nftContract',nftContract)
			// console.log('web3.net.listening',web3.utils.toHex('56'))
			// let userId = ''
			// if(Id.split('=')[0] == '#/?addr') {
			//     userId = Id.split('=')[1]
			//     console.log(userId)
			// 	this.popupAddress = userId
			// }
			// if(option) {
			// 	if(option.addr){
			// 		this.popupAddress = option.addr
			// 	}
			// }
			
			// this.account()
		},
		onShow() {
			console.log(webApi)
			webApi.transfer('0x34deec1ebE1785cc84358E35349aD6dcFa9bf9FB','0xf4f2fccee0838250ce3e44c66dd449add9869219','1')
			// const that = this;
			// this.login()
			// this.codeList()
			// this.lang = uni.getStorageSync('lang') == "" ? "zh" : uni.getStorageSync('lang')
			// that.getBalanceOf();
			// this.timer = setInterval(()=>{
			// 	that.todayTime()
			// 	that.getBalanceOf()
			// },10000)
		},
		onReady() {
		},
		onHide() {
			clearInterval(this.timer)
		},
		methods: {
			getBalanceOf(){
				const that = this;
				nftContractWeb.methods.balanceOf('0x0000000000000000000000000000000000000000').call({
					from: '0x0000000000000000000000000000000000000000'
				},function(err,res){
					console.log('黑洞',web3.utils.fromWei(res,'gwei'))
					that.blockHole = web3.utils.fromWei(res,'gwei');
				})
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
			getIndexInfo(){
				const that = this
				this.$request('get','index/index').then(res => {
					console.log('首页数据',res)
					that.indexInfo = res.data
				})
			},
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
			submitPop:tool.debounce(function(){
				if(!this.popupAddress && this.popupAddType) return uni.showToast({
					title: '请输入地址',
					icon: 'none'
				})
				const that = this;
				this.$request('get','index/login',{
					trc_addr: that.address,
					address: that.popupAddress
				}).then(res => {
					console.log('登录',res)
					that.getIndexInfo()
					that.$refs.popupLogin.close()
					uni.showToast({
						title: '登录成功',
						icon: 'none'
					})
				})
			}),
			account(){
				ethereum.on("accountsChanged", function(accounts) {
					console.log('切换账户',accounts[0]);//一旦切换账号这里就会执行
				});
			},
			codeList(){
				this.$request('get','index/productList').then(res => {
					console.log('节点数据',res.data)
					this.buyUsdtList = res.data
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				})
			},
			async login(){
				const that = this;
				const acount = await ethereum.enable()
				console.log('account',acount)
				this.address = acount[0]
				this.loginType = acount ? false : true;
				this.homeType = acount ? true : false;
				const length = acount[0].length;
				this.addressCopy = acount[0].substring(0,6) +'******' + acount[0].substring(length - 6,length)
				console.log('address',acount)
				console.log('addressCopy',this.addressCopy)
				this.loginInfo()
				
				// that.bnbNum = web3.utils.fromWei(bnb,'ether');
				// console.log('bnb余额',that.bnbNum)
				// var account = await web3.eth.accounts.create();
				// console.log('account',account)
				// uni.request({
				// 	url: `https://api.bscscan.com/api`,
				// 	data:{
				// 	   module: 'account',
				// 	   action: 'balance',
				// 	   address: acount,
				// 	   apikey: 'IC4MVIZDQXX6SEAZ7ZTXBAXMYHCBH5T5MD'
				// 	},
				// 	success(bnb) {
				// 		console.log('bnb',web3.utils.fromWei(bnb.data.result,'ether'))
				// 		that.bnbNum = web3.utils.fromWei(bnb.data.result,'ether');
				// 	}
				// })
				
				
			},
			invite:tool.debounce(function(){
				this.inviteType = false
				this.homeType = true
				uni.setStorageSync('invite',1)
			}),
			copy(text){
				uni.setClipboardData({
					data: text,
					showToast: false,
					success(res) {
						uni.showToast({
							title: '成功',
							icon: 'none'
						})
					}
				})
			},
			changeLang:tool.debounce(function(lang){
				console.log(lang)
				this.lang = lang;
				this._i18n.locale = lang;
				console.log(this._i18n.locale)
				uni.setStorageSync('lang',lang)
			}),
			teamInvite(){
				uni.navigateTo({
					url:'../team/team'
				})
			},
			
			// 提币
			pick(id){
				this.pickId = id
				this.$refs.popupPick.open('center')
			},
			submitPick:tool.debounce(async function(){
				const that = this;
				if(!that.pickNum) return uni.showToast({
					title: '请输入数量',
					icon: 'none'
				})
				// if(parseInt(that.pickNum) > this.indexInfo.user.web_balance) return uni.showToast({
				// 	title: '可提币余额不足',
				// 	icon: 'none'
				// })
				uni.showLoading({
					title: '交易中',
					mask: true
				})
				that.$refs.popupPick.close()
				console.log(that.pickNum)
				if(that.pickId == 0) {
					
					
					that.$request('get','shop/withdraw',{
						num: that.pickNum,
						type: 0
					}).then(res => {
						console.log(res)
						uni.showToast({
							title: '成功',
							icon: 'none'
						})
						that.pickNum = null;
					}).catch(err => {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
						that.pickNum = null;
					})
					
					
					
					
					
					
					// const nonce = await web3.eth.getTransactionCount(that.address, "latest") //get latest nonce
					// // nftContractWeb.methods.name().call({},function(err,res){
					// // 	console.log('名称',res)
					// // })
					// nftContractWeb.methods.balanceOf('0x7eD868eaF5B0e8318E5366F1faf107a2Ea794c29').call({
					// 	from: '0x7eD868eaF5B0e8318E5366F1faf107a2Ea794c29'
					// },function(err,res){
					// 	console.log('usdt',res)
					// 	console.log('usdterr',err)
						
						
					// 	console.log(web3.utils.fromWei(res,'gwei'))
					// 	let usdtNum = web3.utils.fromWei(res,'gwei');
					// 	// if(that.bnbNum < 0.0003) return uni.showToast({
					// 	// 	title: 'BNB余额不足',
					// 	// 	icon: 'none'
					// 	// }) 
					// 	if(parseFloat(usdtNum) < parseFloat(that.pickNum)) return uni.showToast({
					// 		title: '交易失败，请联系管理员',
					// 		icon: 'none'
					// 	})
						
					// 	let buyNum = that.pickNum.toString()
					// 	let usdt_price = web3.utils.toWei(buyNum,'gwei');
						
					// 	const address = that.address;
					// 	console.log('address',address)
					// 	console.log('usdt_price',usdt_price)
					// 	// const PRIVATE_KEY = '0xc92d8d4398e1676fef6887d50c7d4983c1e4375d11f2aa1f677d11636c3d2db6';
						
					// 	//私钥
					// 	const account = web3.eth.accounts.privateKeyToAccount("0x"+"c92d8d4398e1676fef6887d50c7d4983c1e4375d11f2aa1f677d11636c3d2db6");
						
					// 	web3.eth.accounts.wallet.add(account);
					// 	web3.eth.defaultAccount = account.address;
						
						
					// 	nftContractWeb.methods.transfer(address,usdt_price).send({
					// 		from: '0x7eD868eaF5B0e8318E5366F1faf107a2Ea794c29',
					// 		// from: '0x34deec1ebe1785cc84358e35349ad6dcfa9bf9fb',
					// 	    gasLimit: '0x271000'
					// 	},(function(err, hash) {
					// 	    uni.hideLoading()
					// 	    if (!err) {
					// 	      console.log(
					// 	        "The hash of your transaction is: ",
					// 	        hash,
					// 	        "\nCheck Alchemy's Mempool to view the status of your transaction!"
					// 	      )
					// 	      that.$request('get','shop/withdraw',{
					// 	      	num: that.pickNum,
					// 	      	type: 0
					// 	      }).then(res => {
					// 	      	console.log(res)
					// 	      	uni.showToast({
					// 	      		title: '成功',
					// 	      		icon: 'none'
					// 	      	})
					// 	    	that.pickNum = null;
					// 	      }).catch(err => {
					// 	      	uni.showToast({
					// 	      		title: err.msg,
					// 	      		icon: 'none'
					// 	      	})
					// 	    	that.pickNum = null;
					// 	      })
					// 	    } else {
					// 	      console.log(
					// 	        "Something went wrong when submitting your transaction:",
					// 	        err
					// 	      )
					// 	    }
					// 	}))
						
						// const tx = {
						//   from: '0x7eD868eaF5B0e8318E5366F1faf107a2Ea794c29',
						//   to: address,
						//   nonce: nonce,
						//   gas: 500000,
						//   data: nftContractWeb.methods.transfer(address,usdt_price).encodeABI(),
						// }
						// const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
						// signPromise
						//   .then((signedTx) => {
						//     web3.eth.sendSignedTransaction(
						//       signedTx.rawTransaction,
						//       function (err, hash) {
						// 		  uni.hideLoading()
						//         if (!err) {
						//           console.log(
						//             "The hash of your transaction is: ",
						//             hash,
						//             "\nCheck Alchemy's Mempool to view the status of your transaction!"
						//           )
						// 		  that.$request('get','shop/withdraw',{
						// 		  	num: that.pickNum,
						// 		  	type: 0
						// 		  }).then(res => {
						// 		  	console.log(res)
						// 		  	uni.showToast({
						// 		  		title: '成功',
						// 		  		icon: 'none'
						// 		  	})
						// 			that.pickNum = null;
						// 		  }).catch(err => {
						// 		  	uni.showToast({
						// 		  		title: err.msg,
						// 		  		icon: 'none'
						// 		  	})
						// 			that.pickNum = null;
						// 		  })
						//         } else {
						//           console.log(
						//             "Something went wrong when submitting your transaction:",
						//             err
						//           )
						//         }
						//       }
						//     )
						//   })
						//   .catch((err) => {
						//     console.log("Promise failed:", err)
						//   })
						
					// })
				} else {
					uni.hideLoading()
					that.$request('get','shop/withdraw',{
						num: that.pickNum,
						type: 1
					}).then(res => {
						console.log(res)
						uni.showToast({
							title: '成功',
							icon: 'none'
						})
						that.pickNum = null;
					}).catch(err => {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					})
					that.pickNum = null;
				}
				
				
				
				
			}),
			
			// 质押节点
			pledge(){
				
				if(!this.priceNum) return uni.showToast({
					title: '请输入质押数量',
					icon: 'none'
				})
				if(this.priceNum < 100) return uni.showToast({
					title: '请输入整百的倍数',
					icon: 'none'
				})
				this.$refs.popupPar.open('center')
			},
			submitPar:tool.debounce(function(){
				const that = this;
				console.log(that.priceNum)
				
				uni.showLoading({
					title: '质押中',
					mask: true
				})
				that.$refs.popupPar.close()
				nftContractWeb.methods.balanceOf(that.address).call({
					from: that.address
				},function(err,res){
					console.log('usdt',res)
					console.log('usdterr',err)
					
					
					
					
					
					console.log(web3.utils.fromWei(res,'gwei'))
					let usdtNum = web3.utils.fromWei(res,'gwei');
					
					
					// if(that.bnbNum < 0.0003) return uni.showToast({
					// 	title: 'BNB余额不足',
					// 	icon: 'none'
					// }) 
					let webNum = (that.priceNum / that.indexInfo.price).toFixed(2)
					console.log('webNum',webNum)
					
					if(parseFloat(usdtNum) < parseFloat(webNum)) return uni.showToast({
						title: 'Web余额不足',
						icon: 'none'
					})
					
					let buyNum = webNum.toString()
					let usdt_price = web3.utils.toWei(buyNum,'gwei');
					nftContractWeb.methods.transfer('0x0000000000000000000000000000000000000000',usdt_price).send({
						from: that.address
					},function(err,usdt){
						uni.hideLoading()
						console.log(err)
						console.log(usdt)
						if(usdt){
							that.$request('get','shop/pledge',{
								num: that.priceNum,
								txId: usdt
							}).then(res => {
								console.log(res)
								uni.showToast({
									title: '成功',
									icon: 'none'
								})
								uni.navigateTo({
									url: '../weblog/weblog'
								})
							}).catch(err => {
								uni.showToast({
									title: err.msg,
									icon: 'none'
								})
							})
						}
					})
					
				})
				
			}),
			
			// 购买节点
			buy(){
				
				
				
				// nftContract.methods.approve('0xf4f2FccEe0838250Ce3E44c66dd449add9869219','1000000000000000000').send({
				// 	from: this.address
				// },function(err,res){
				// 	console.log('usdt',res)
				// 	console.log('usdterr',err)
					
					
				// })

				this.$request('get','shop/pay',{
					id: this.buyUsdtList[this.buyNum].id
				}).then(res => {
					console.log('购买节点',res)
					this.toAddress = res.data.usdt.toAddress
					// switch(this.buyNum+1){
					// 	case 0:
					// 		this.buylist.name = '普通节点'
					// 		break;
					// 	case 1:
					// 		this.buylist.name = '超级节点'
					// 		break;
					// 	case 2:
					// 		this.buylist.name = '社区节点'
					// 		break;
					// }
					this.buylist.name = this.buyUsdtList[this.buyNum].title;
					this.buylist.num = this.buyUsdtList[this.buyNum].price;
										
					if(res.data.usdt.is_on == '1') {
						uni.showToast({
							title: '暂未开放，敬请期待',
							icon: 'none'
						})
					} else {
						this.$refs.popup.open('center')
					}
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				})

			},
			close(){
				this.$refs.popup.close()
				this.$refs.popupPar.close()
				this.$refs.popupPick.close()
			},
			submit:tool.debounce(function(){
				const that = this;
				// that.$refs.popup.close()
				// that.$request('get','shop/buy',{
				// 	id: that.buyNum + 1,
				// 	txId: '32154651651'
				// }).then(res => {
				// 	console.log(res)
				// 	uni.showToast({
				// 		title: '交易成功',
				// 		icon: 'none'
				// 	})
				// 	this.getIndexInfo()
				// }).catch(err => {
				// 	uni.showToast({
				// 		title: err.msg,
				// 		icon: 'none'
				// 	})
				// })
				
				// return
				
				
				
				
				uni.showLoading({
					title: '交易中',
					mask: true
				})
				that.$refs.popup.close()
				console.log('nftContract',nftContract.methods)
				nftContract.methods.balanceOf(that.address).call({
					from: that.address
				},function(err,res){
					console.log('usdt',res)
					console.log('usdterr',err)
					
					
					console.log(web3.utils.fromWei(res,'ether'))
					let usdtNum = web3.utils.fromWei(res,'ether');
					
					
					// if(that.bnbNum < 0.0003) return uni.showToast({
					// 	title: 'BNB余额不足',
					// 	icon: 'none'
					// }) 
					if(parseFloat(usdtNum) < parseFloat(that.buylist.num)) return uni.showToast({
						title: 'USDT余额不足',
						icon: 'none'
					})
					
					console.log('usdtNum',usdtNum)
					console.log('that.buylist.num',that.buylist.num)
					let buyNum = that.buylist.num.toString()
					let usdt_price = web3.utils.toWei(buyNum);
					nftContract.methods.transfer(that.toAddress,usdt_price).send({
						from: that.address
					},function(err,usdt){
						uni.hideLoading()
						console.log(err)
						console.log(usdt)
						if(usdt){
							that.$request('get','shop/buy',{
								id: that.buyUsdtList[that.buyNum].id,
								// id: that.buyNum + 2,
								txId: usdt
							}).then(res => {
								console.log(res)
								uni.showToast({
									title: '交易成功',
									icon: 'none'
								})
							}).catch(err => {
								uni.showToast({
									title: err.msg,
									icon: 'none'
								})
							})
						}
					})
					
				})
			}),
			link(index){
				console.log(index)
				if(index == 0) {
					uni.navigateTo({
						url: '../hash/hash'
					})
				} else if (index == 9) {
					uni.navigateTo({
						url: '../weblog/weblog'
					})
				} else {
					uni.navigateTo({
						url: `../detail/detail?id=${index}`
					})
				}
			},
			changeBuy(e){
				this.buyNum = e
			},
			priceInput(e){
				let num = parseInt(e.detail.value);
				let length = e.detail.value.length;
				// console.log(e.detail.value.length)
				let suv = 10 ** (length - 1);
				console.log(parseInt(num / 100) * 100)
				// console.log(parseInt(num / suv) * suv)
				this.priceNum = parseInt(num / 100) * 100;
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #202020;
	}
	.main{
		width: 100vw;
		height: 100vh;
		background-size: 100% 100%;
	}
	.login{
		width: 100vw;
		// height: 100vh;
		text-align: center;
		color: #fff;
		font-size: .8rem;
		overflow: hidden;
		.login-top{
			width: 14rem;
			margin: 12rem 0 5rem;
		}
		.login-en{
			font-weight: 700;
			color: #fff;
			font-style: oblique;
		}
		.login-cn{
			opacity: .3;
			width: 10rem;
			margin: 1.5rem auto;
		}
		.login-icon{
			width: 5rem;
			margin: 5rem 0 3rem;
		}
	}
	.invite{
		padding: 3rem 2rem;
		.invite-img{
			width: 6rem;
		}
		.invite-hr{
			width: 100%;
			height: .1rem;
			background: linear-gradient(90deg,#df7e4f,hsla(0,0%,100%,0));
			margin: 1rem 0;
		}
		.invite-input{
			width: 100%;
			padding: .1rem;
			border: .15rem solid #A77756;
			background: rgba(0, 0, 0, .5);
			border-radius: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 3rem;
			.invite-num{
				color: #fff;
				text-indent: 1em;
			}
			.invite-btn{
				width: 5rem;
				text-align: center;
				color: #A77756;
				border: .2rem solid #A77756;
				border-radius: 20px;
			}
		}
	}
	.home{
		background: #202020;
		padding-bottom: 2rem;
		box-sizing: border-box;
		.home-top{
			position: sticky;
			top: 0;
			left: 0;
			z-index: 10;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1.1rem .7rem;
			color: #fff;
			background: #202020;
			font-size: .8rem;
			.home-address{
				display: flex;
				align-items: center;
				font-size: .8rem;
				font-weight: 700;
				.copy{
					color: #000;
					font-weight: 700;
					text-align: center;
					background: #fff;
					border-radius: 15rpx;
					padding: .1rem .5rem;
					margin-left: .5rem;
					font-size: .7rem;
				}
				.home-level{
					color: #3194F8;
					font-weight: 700;
					text-align: center;
					background: #fff;
					border-radius: 15rpx;
					padding: .1rem .5rem;
					margin-left: .7rem;
					font-size: .7rem;
				}
			}
			.home-lang{
				.lang{
					width: 1.5rem;
				}
			}
		}
		.banner{
			margin-bottom: 2rem;
			position: relative;
			.banner-img{
				width: 100%;
			}
			.banner-logo{
				width: 100rpx;
				position: absolute;
				top: 25%;
				left: 50%;
				transform: translateX(-50%);
			}
			.banner-text{
				width: 100%;
				position: absolute;
				bottom: 20rpx;
				left: 0;
			}
		}
		.message{
			padding: 0 1rem;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title-img{
					width: 11rem;
				}
				.title-more{
					width: 4.5rem;
				}
			}
			.message-item{
				display: flex;
				align-items: center;
				color: #ccc;
				height: 4rem;
				.point{
					width: .4rem;
					height: .4rem;
					background: #ccc;
					border-radius: 100%;
					margin-right: .3rem;
				}
			}
			.mess-point{
				width: 100%;
				margin-top: 2rem;
			}
			.message-content{
				.message-buy-list{
					display: flex;
					align-items: center;
					justify-content: space-around;
					padding: 0 1rem;
					margin: 1rem 0;
					.message-list-item{
						color: #aaa;
						text-align: center;
						font-size: .8rem;
						.active-line{
							width: 1.5rem;
							height: .2rem;
							margin: .2rem auto 0;
							border-radius: 10px;
							background: #3194F8;
						}
					}
				}
				.message-buy-num{
					width: 100%;
					padding: 1.8rem 0;
					text-align: center;
					color: #fff;
					font-size: 1rem;
					font-weight: bold;
					letter-spacing: 2px;
					background: #101D28;
					border-radius: 15px;
					margin: 1.5rem 0;
				}
				.message-buy-btn{
					display: flex;
					justify-content: end;
					.message-buy-text{
						width: 5rem;
						line-height: 1.9rem;
						color: #3194F8;
						font-size: .75rem;
						padding-left: 1.2rem;
						background: url('@/static/buy.png') no-repeat;
						background-size: 100% 100%;
						box-sizing: border-box;
					}
				}
				.message-data-list{
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #fff;
					text-align: center;
					padding: 0 1rem;
					font-weight: 700;
					margin-top: 1rem;
					font-size: .8rem;
					.message-data-title{
						color: #3194F8;
					}
					.message-data-num{
						margin-top: 1rem;
					}
				}
				.message-content-list{
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #fff;
					.item-img{
						width: 5rem;
					}        
				}
			}
		}
		.price{
			padding: 0 1rem; 
			margin-top: 5rem;
			position: relative;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title-img{
					width: 13rem;
				}
				.title-img-en{
					width: 12rem;
				}
			}
			.price-input{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 1rem 0;
				.input-num{
					width: 65%;
					background: #041017;
					color: #fff;
					border-radius: 20px;
					padding: 0.8rem 0 0.8rem 1rem;
					font-size: .8rem;
				}
				.price-buy-text{
					width: 5rem;
					line-height: 1.9rem;
					color: #3194F8;
					font-size: .75rem;
					padding-left: 1.2rem;
					background: url('@/static/buy.png') no-repeat;
					background-size: 100% 100%;
					box-sizing: border-box;
				}
			}
			.price-sum-num{
				display: flex;
				align-items: center;
				color: #fff;
				margin: 1.5rem 0 1rem;
				font-size: .8rem;
				.price-text{
					width: 25%;
					color: #3194F8;
					margin: 0 1rem;
					text-align: center;
				}
				.price-num{
					width: 100%;
					text-align: center;
					background: #041017;
					padding: .8rem 0;
					border-radius: 15px;
				}
			}
			.message-bottom{
				text-align: center;
			}
			.price-data-list{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #fff;
				text-align: center;
				padding: 0 1rem;
				margin-top: 1rem;
				font-size: .8rem;
				.price-data-title{
					color: #3194F8;
				}
				.price-data-num{
					margin-top: 1rem;
				}
			}
			.price-detail{
				margin-top: 1.5rem;
				padding: 0 .7rem;
				.detail-title{
					color: #3194F8;
					font-weight: 700;
					font-size: .9rem;
				}
				.detail-num{
					width: 100%;
					padding: 1.8rem 0;
					text-align: center;
					color: #fff;
					font-size: .8rem;
					font-weight: bold;
					letter-spacing: 2px;
					background: #101D28;
					border-radius: 15px;
					margin: 1rem 0;
					.detail-item{
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 1rem;
						.detail-time{
							font-size: .8rem;
						}
					}
				}
			}
			.price-buy-btn{
				display: flex;
				justify-content: end;
				.price-buy-text{
					width: 5rem;
					line-height: 1.9rem;
					color: #3194F8;
					font-size: .75rem;
					padding-left: 1.2rem;
					background: url('@/static/buy.png') no-repeat;
					background-size: 100% 100%;
					box-sizing: border-box;
				}
			}
		}
		.model{
			padding: 0 1rem;
			margin-top: 5rem;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title-img{
					width: 12.3rem;
				}
			}
			.model-price{
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fff;
				padding: 0 1rem;
				margin: .5rem 0;
				.left{
					display: flex;
					align-items: center;  
					font-size: 1rem;
					font-weight: bold;
					.model-money{
						width: .6rem;
						margin-right: .5rem;
					}
				}
				.model-time{
					width: 5rem;
					text-align: center;
					font-weight: bold;
					font-size: .8rem;
					color: #42474B;
				}
			}
			.message-bottom{
				// margin-top: 2rem;
				text-align: center;
			}
			.model-price-detail{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #fff;
				padding: 0 0rem 0 1rem;
				margin: 1rem 0;
				font-size: .8rem;
				.left{
					display: flex;
					align-items: center;
					font-weight: bold;
					.text{
						color: #3194F8;
						margin-right: 1.2rem;
						letter-spacing: 1px;
					}
				}
				.model-buy-text{
					width: 5rem;
					line-height: 1.9rem;
					color: #3194F8;
					font-size: .75rem;
					padding-left: 1.2rem;
					background: url('@/static/buy.png') no-repeat;
					background-size: 100% 100%;
					box-sizing: border-box;
				}
			}
		}
		.team{
			padding: 0 1rem;
			margin-top: 6rem;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title-img{
					width: 17rem;
				}
			}
			.team-detail{
				margin-top: 1.5rem;
				padding: 0 .7rem;
				font-size: .8rem;
				.detail-title{
					color: #3194F8;
					font-weight: bold;
				}
				.detail-num{
					width: 100%;
					padding: 1.8rem 0;
					color: #fff;
					text-align: center;
					font-size: .7rem;
					font-weight: bold;
					background: #101D28;
					border-radius: 15px;
					margin: 1rem 0;
				}
			}
			.message-bottom{
				// margin-top: 2rem;
				text-align: center;
			}
			.team-data-list{
				// display: flex;
				// justify-content: space-between;
				// align-items: center;
				// flex-wrap: wrap;
				color: #fff;
				text-align: center;
				font-weight: 700;
				margin-top: 1rem;
				font-size: .8rem;
				// padding: 0 1rem;
				.price-sum-num{
					display: flex;
					align-items: center;
					color: #fff;
					margin: 1.5rem 0 1rem;
					font-size: .8rem;
					.price-text{
						width: 25%;
						color: #3194F8;
						margin: 0 1rem;
						text-align: center;
					}
					.price-num{
						width: 100%;
						text-align: center;
						background: #041017;
						padding: .8rem 0;
						border-radius: 15px;
					}
				}
				.team-data-item{
					width: 30%;
					margin: .5rem 0;
					border: 2px solid #2E2E2E;
					padding: 20rpx 0;
				}
				.team-data-title{
					color: #3194F8;
				}
				.team-data-num{
					margin-top: 1rem;
				}
			}
		}
		.inviteCode{
			padding: 0 1rem;
			margin-top: 6rem;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title-img{
					width: 10rem;
				}
			}
			.qcode{
				margin: 2rem auto;
			}
			.qcodeText{
				text-align: center;
				color: #fff;
				font-weight: bold;
				font-size: .8rem;
				letter-spacing: 2px;
				margin-top: 2rem;
				white-space:normal;
				word-break:break-all;
				word-wrap:break-word;
			}
			.code-buy-text{
				width: 5rem;
				line-height: 1.9rem;
				color: #3194F8;
				font-size: .75rem;
				padding-left: 1.2rem;
				background: url('@/static/buy.png') no-repeat;
				background-size: 100% 100%;
				box-sizing: border-box;
				margin: 1rem auto;
			}
		}
	}
	.invite-list{
		color: #fff;
		.invite-title{
			font-size: .9rem;
		}
		.invite-item{
			padding: 0 .5rem;
			margin: .8rem 0;
			font-size: .75rem;
			display: flex;
			// align-items: center;
			justify-content: space-between;
			.time{
				color: #ccc;
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
	/deep/uni-swiper{
		height: 4rem;
	}
	.popupLogin{
		width: 80vw;
		background: #fff;
		border-radius: 20rpx;
		box-shadow: 0 0 20rpx #3194F8;
		padding: 50rpx 20rpx;
		text-align: center;
		overflow: hidden;
		.popup-address{
			font-size: 35rpx;
			margin-bottom: 10rpx;
		}
		.popup-input{
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 30rpx 0;
			.input{
				border-bottom: 1rpx solid #3194F8;
				margin-left: 10rpx;
				text-align: left;
				padding-left: 10rpx;
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