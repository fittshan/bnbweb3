import App from './App'
import request from './common/api.js'
import config from "./common/config.js"
import VueI18n from 'vue-i18n'

// #ifndef VUE3
import Vue from 'vue'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: uni.getStorageSync('lang') == "" ?
        "zh" :
        uni.getStorageSync('lang'),
    messages: {
        zh: require("./static/lang/text-zh.js"),
        en: require("./static/lang/text-en.js")
    }
});
Vue.prototype._i18n = i18n
// 请求包
Vue.prototype.$request=request
// 配置
Vue.prototype.$config = config;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif