import Vue from "vue"
import { mount } from "@vue/test-utils"

import { expect } from "chai"
import ZHeader from "../src/components/layout/z-header.vue"
Vue.config.productionTip = false
Vue.config.devtools = false
describe("header 测试", () => {
    it("header 存在", () => {
        expect(ZHeader).to.be.an("object")
    })
    it("isFixed 布局测试", async () => {
        let instance = mount(ZHeader,{ isFixed: false })
        //    let styleObject= window.getComputedStyle(instance.find(".z-header").element) 
        //    console.log(styleObject.position)
        //    expect(styleObject.position).to.equal("fixed")
        // instance.setProps({ isFixed: false })
        // await Vue.nextTick()
        let styleObject = window.getComputedStyle(instance.find(".z-header").element)
        expect(styleObject.position).to.equal("absolute")
        instance.destroy()
    })
})