/*
 * @Author: zjj
 * @Date: 2020-01-19 14:02:57
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 14:50:53
 */
import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"
import "../src/assets/style/reset.css"
import "../src/assets/style/global.less"

//zui
import ZIcon from "./components/base/z-icon.vue"
Vue.component("z-icon", ZIcon)

import ZHeader from "./components/layout/z-header.vue"
Vue.component("z-header", ZHeader)

import ZCellGroup from "./components/base/z-cell-group.vue"
Vue.component("z-cell-group", ZCellGroup)

import ZCellItem from "./components/base/z-cell-item.vue"
Vue.component("z-cell-item", ZCellItem)


import ZTitle from "./components/base/z-title.vue"
Vue.component("z-title", ZTitle)



//插件
import Toast from "./utils/toast/ToastPlugins"
import Dialog from "./utils/dialog/DialogPlugins"
Vue.use(Toast).use(Dialog)

// import VConsole from "vconsole"
// var vConsoleInstance = new VConsole();
// Vue.use(vConsoleInstance)
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

//element
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

new Vue({ router, render: (h) => h(App) }).$mount("#App")

