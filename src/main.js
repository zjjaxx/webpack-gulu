/*
 * @Author: zjj
 * @Date: 2020-01-19 14:02:57
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-20 17:10:50
 */
// import "../src/assets/style/global.less"
import Vue from "vue"
import App from "./App.vue"
var div=document.createElement("div")
document.body.append(div)
new Vue({ render: (h) => h(App) }).$mount(div)
