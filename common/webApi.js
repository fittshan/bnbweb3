import Web3 from 'web3';
import contract from '@/common/abi.json';   // abi对应合约的abi，可以在区块浏览器里面找
window.web3 = new Web3(window.ethereum);
const contractAddress = "0x55d398326f99059fF775485246999027B3197955";  //usdt合约地址
const contractMe = new web3.eth.Contract(contract.abi, contractAddress);

// 必须先调用login中的enable方法授权，负责会一直报错

// 授权登录
async function login () {
	const acount = await ethereum.enable()
	return acount[0] // acount 是钱包的地址数组
}

//余额
function balanceOf (address) {
	contractMe.methods.balanceOf(address).call({
		from: address
	},(err, res) => {
		console.log(web3.utils.fromWei(res,'ether'))
		const num = web3.utils.fromWei(res,'ether');  //fromWei 把代币数量格式转为普通数字格式
		return num
	})
}

/* 
	转账
	address 转账地址
	fromAddress 当前钱包地址
	num 数字  字符串格式
*/ 
function transfer (address, fromAddress, num) {
	const sendNum = web3.utils.toWei(num,'ether')  //toWei 把普通数字转为代币数字格式
	contractMe.methods.transfer(address, sendNum).send({
		from: fromAddress
	},function(err,res){
		
		/*
			err 错误信息  英文格式
			res  hash值
		*/
	})
}

/*
address 接收的钱包地址
num 数字 字符串格式
*/
function transferFrom (address, num) {
	// 注意：后面拼接的是完整的私钥，在钱包导出私钥后就按这种格式拼接
	const account = web3.eth.accounts.privateKeyToAccount("0x"+"c92d8d4398e1676fef6887d50c7d4983c1e4375d11f2aa1f677d11636c3d2db6");
	web3.eth.accounts.wallet.add(account);
	web3.eth.defaultAccount = account.address;
	
	const sendNum = web3.utils.toWei(num,'ether')
	contractMe.methods.transfer(address, sendNum).send({
		from: account.address
	},(err, res) => {
		
	})
}

export default {
	login,
	balanceOf,
	transfer,
	transferFrom
}