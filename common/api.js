import config from './config.js';


function request(type,url, data={},load = true) {
    return new Promise(function(resolve, reject) {
		if(data){
			var token=uni.getStorageSync('token') || '';
			 data.token=token;
		}
		if(load){
			uni.showLoading({
				mask:true,
				title:"加载中.."
			})
		} 
		url = config.URL + url
        uni.request({
            url:url,
            data: data,
            method: type,
			header: {'Content-Type':'application/x-www-form-urlencoded'},
            success: function(res) {
                if (res.statusCode === 200) {
					if(res.data.code == 0 || res.data.code==200){
						resolve(res.data)
					}
					else if (res.data.code == 1) {//没有数据
						uni.showToast({
							title: res.data.msg,
							icon: "none",
							duration: 2000,
							position:'bottom',												
						})
						 reject(res.data)
					}
					else {
						uni.showToast({
							title: res.data.msg,
							icon: "none",
							duration: 2000,
							position:'bottom',												
						})
						reject(res.data)
					}											
                } else {
                  switch (res.statusCode) {
                    case 500:
						uni.showToast({
							title: "500:服务器内部错误",
							icon: "none",
							duration: 2000						
						})
						break;
                    case 404:
						uni.showToast({
							title: "404:网络请求不存在",
							icon: "none",
							duration: 2000
					  						
						})
						break;
					case 403:
					    uni.showToast({
					    	title: "403:网络请求不存在",
					    	icon: "none",
					    	duration: 2000
					    						
					    })
					    break;
                    default:
						uni.showToast({
							title: '服务器繁忙，请稍后再试',
							icon: "none",
							duration: 2000,
												
						})
                  }
                  reject(res.data);
                }
            },
            fail: function(err) {
				// console.log('err',err)
				uni.showToast({
					title: "网络超时" + err.msg,
					icon: "none",
					duration: 2000,
					position:'bottom',
										
				})
              reject(err.msg);
            },
			complete() {
				setTimeout(()=>{
					uni.hideLoading();
				},500)
			}
        })
    });
}
export default request
