(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-assetDetail"],{3385:function(t,e,i){"use strict";i.r(e);var n=i("b0fb"),a=i.n(n);for(var A in n)"default"!==A&&function(t){i.d(e,t,(function(){return n[t]}))}(A);e["default"]=a.a},"54d2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAYAAADNAiUZAAAAAXNSR0IArs4c6QAAANNJREFUSEvtliEOwkAQRd9ACHgUF+gxsDjOgEITHA6JIUgQ4LgHB8FwAILAIcgnNGkCNe20Wwiha3dm3v6/s5M1SeKza23fhg6AU4WiR8AMeFMamdmxKqikCbCqoZU4HMReSZHzdEkjbV6fTO5GktQA7k5oEr4LAb0CeQZMB2gDQaBdM7tkqZa0BKZ/Bd2HuFOvvb8LveXs3hbQBIIozWrc9H4x6LOKpJ6TNgbmQLGJ5ITF4UFmrxdcQxfA2WubI74PDNPfFUd+qdD4Y7YtVcKffHgA2P/yldzrK+MAAAAASUVORK5CYII="},7855:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return A})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"header"},[n("v-uni-image",{attrs:{src:i("f645"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),n("v-uni-view",{},[t._v("资产明细")]),n("v-uni-image",{attrs:{src:i("54d2"),mode:""}}),n("v-uni-view",{},[t._v("0133…5558")])],1),n("v-uni-view",{staticClass:"tab"},[n("v-uni-view",{staticClass:"blue_text"},[t._v("USDT")]),n("v-uni-view",{},[t._v("JXB")]),n("v-uni-view",{},[t._v("OSK")]),n("v-uni-view",{},[t._v("复投JXB")]),n("v-uni-view",{},[t._v("算力")]),n("v-uni-view",{},[t._v("销毁池")])],1),n("v-uni-view",{staticClass:"top_text"},[t._v("2023年03月"),n("v-uni-image",{attrs:{src:i("d3a5"),mode:""}})],1),n("v-uni-view",{staticClass:"content"},t._l(t.contentList,(function(e,i){return n("v-uni-view",{staticClass:"content_item"},[n("v-uni-view",{},[n("v-uni-view",{staticClass:"left_up_text"},[t._v(t._s(e.text1))]),n("v-uni-view",{staticClass:"right_up_text"},[t._v(t._s(e.text2))])],1),n("v-uni-view",{},[n("v-uni-view",{staticClass:"left_down_text"},[t._v(t._s(e.text3))]),n("v-uni-view",{staticClass:"right_down_text"},[t._v(t._s(e.text4))])],1)],1)})),1)],1)},A=[]},b0fb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{contentList:[{text1:"购买下单",text2:"-50",text3:"03-16  16:51:21",text4:"当前余额：50.0000"},{text1:"交易购买花费",text2:"-10",text3:"03-16  16:51:21",text4:"当前余额：50.0000"},{text1:"交易购买花费",text2:"-10",text3:"03-16  16:51:21",text4:"当前余额：50.0000"},{text1:"转入",text2:"+10",text3:"03-16  16:51:21",text4:"当前余额：50.0000"},{text1:"转入",text2:"+10",text3:"",text4:"当前余额：50.0000"}]}},methods:{back:function(){uni.navigateTo({url:"/pages/index/trueIndex"})}}};e.default=n},b365:function(t,e,i){"use strict";var n=i("dcbc"),a=i.n(n);a.a},b666:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-490426e6]{background-color:#000}.header[data-v-490426e6]{display:flex;color:#fff;align-items:center;margin-top:%?33?%;margin-left:%?41?%}.header[data-v-490426e6] > :nth-child(1){width:%?30?%;height:%?30?%}.header[data-v-490426e6] > :nth-child(2){font-size:%?36?%;font-weight:500;margin-left:%?248?%}.header[data-v-490426e6] > :nth-child(3){width:%?28?%;height:%?24?%;margin-left:%?93?%}.header[data-v-490426e6] > :nth-child(4){font-size:%?26?%;font-weight:500;margin-left:%?15?%}.tab[data-v-490426e6]{display:flex;align-items:center;justify-content:space-around;margin-top:%?32?%}.tab uni-view[data-v-490426e6]{font-size:%?30?%}.tab .blue_text[data-v-490426e6]{font-size:%?38?%;color:#3980eb}.top_text[data-v-490426e6]{margin-top:%?39?%;margin-left:%?37?%;width:%?259?%;height:%?95?%;border-radius:%?36?%;border:%?3?% solid #3270ce;color:#3270ce;line-height:%?95?%;text-align:center;font-size:%?28?%}.top_text uni-image[data-v-490426e6]{margin-left:%?20?%;width:%?15.92?%;height:%?7.94?%}.content[data-v-490426e6]{width:%?664?%;height:%?1053?%;background-color:#201e21;border-radius:%?28?% %?28?% 0 0;margin-left:%?43?%;margin-top:%?48?%}.content .content_item[data-v-490426e6]{padding-left:%?43?%;border-bottom:%?1?% solid #707070}.content .content_item[data-v-490426e6] > :nth-child(1){position:relative;display:flex;padding-top:%?62?%}.content .content_item > :nth-child(1) .left_up_text[data-v-490426e6]{font-size:%?36?%;font-weight:400}.content .content_item > :nth-child(1) .right_up_text[data-v-490426e6]{position:absolute;font-size:%?40?%;font-weight:600;color:#3980eb;left:%?520?%}.content .content_item[data-v-490426e6] > :nth-child(2){display:flex;position:relative;margin-top:%?18?%;padding-bottom:%?52?%}.content .content_item > :nth-child(2) .right_down_text[data-v-490426e6]{position:absolute;font-size:%?30?%;left:%?330?%}body.?%PAGE?%[data-v-490426e6]{background-color:#000}',""]),t.exports=e},d3a5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAMCAYAAACNzvbFAAAAAXNSR0IArs4c6QAAAeJJREFUOE+Vkk9IVFEUxr9z3zj2RMcQWqgQWLORoea9NyMubDEt3LRw5yJxkQizkMopaJfroI0zjVhEkZsghP5IIkKE4iIIRu9MErQQdwUxUYxEMDbvnnjP98aZ1EHv5nLO+c7vfvfcS/BWVzLX8u1x/I8fn2TvTeY6dZ2GdhS92spaRQrf2DjTpvF7MPUw0a182nxyEuDF6x97AlrTKghnGdiS+VIvGZNyRBA/d0HMtg3cKWRi08cBRybWw81BWgPQ6el3yrulbtdpSMMyAMvlAoqh7ubT8XuNwEZKDghWSyAKebq/FcVDnx7ElslJRMY/dDS3nXp3XLCRkglifkuEVs9ISTGPFjKxRSd2oVVwq74E4n4/p0Bz+bQ5VuvYmJSDgtQCQPrexPALCpdl1ir4uirUSZxL5tpP69oiiC/5Ama8kBnrqhMbN+UVEvyagKDn8GelogY2Z+Jfag+ug7qOh+eDTV3nnwqi0X0hvVGEOaHUSxBpVWDZ7tt82Lf9/+wPQF1BYiVgREPP6sH7rQz8qJTt/sOAdTM98NKJlYAZbX9EhPHaGjOKSgizMG18Pep3HO7UVw/Pa2Z3+D4Bt/euTN9h8wWZtYqNvltjqNdppNavCYhoeTc49Xk28rsR0Kn9A5lEqXB31wyZAAAAAElFTkSuQmCC"},dcbc:function(t,e,i){var n=i("b666");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5a871aa6",n,!0,{sourceMap:!1,shadowMode:!1})},e19e:function(t,e,i){"use strict";i.r(e);var n=i("7855"),a=i("3385");for(var A in a)"default"!==A&&function(t){i.d(e,t,(function(){return a[t]}))}(A);i("b365");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"490426e6",null,!1,n["a"],o);e["default"]=s.exports},f645:function(t,e){t.exports="data:image/png;base64,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"}}]);