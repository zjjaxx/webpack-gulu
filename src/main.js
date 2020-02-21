/*
 * @Author: zjj
 * @Date: 2020-01-19 14:02:57
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-22 15:36:40
 */
import Vue from "vue"
import App from "./App.vue"
import "../src/assets/style/global.css"
import "../src/assets/style/global.less"

//zui
import ZIcon from "./components/base/z-icon.vue"
Vue.component("z-icon", ZIcon)

import ZHeader from "./components/layout/z-header.vue"
Vue.component("z-header", ZHeader)

import ZMenuItem from "./components/base/z-menu-item.vue"
Vue.component("z-menu-item",ZMenuItem)

import ZBody from "./components/layout/z-body.vue"
Vue.component("z-body",ZBody)

import ZTitle from "./components/base/z-title.vue"
Vue.component("z-title",ZTitle)
//vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from "./router/index.js"

//插件
import Toast from "./utils/plugins"
Vue.use(Toast)
// import VConsole from "vconsole"
// var vConsoleInstance = new VConsole();
// Vue.use(vConsoleInstance)

new Vue({ router, render: (h) => h(App) }).$mount("#App")

