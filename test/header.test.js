import Vue from "vue"
import { mount } from "@vue/test-utils"

import chai,{ expect } from "chai"
import ZHeader from "../src/components/layout/z-header.vue"
import ZIcon from "../src/components/base/z-icon.vue"
import chaiSpies from "chai-spies"
chai.use(chaiSpies);
Vue.config.productionTip = false
Vue.config.devtools = false
describe("header 测试", () => {
    it("header 存在", () => {
        expect(ZHeader).to.be.an("object")
    })
    it("isFixed 布局测试", async () => {
        let testDiv = document.createElement("div")
        testDiv.id = "test"
        document.body.appendChild(testDiv)
        let instance = mount(ZHeader, {
            attachTo: '#test'
        })

        let styleObject = window.getComputedStyle(instance.find(".z-header").element)
        expect(styleObject.position).to.equal("fixed")
        instance.setProps({ isFixed: false })
        await Vue.nextTick()
        let styleObject1 = window.getComputedStyle(instance.find(".z-header").element)
        expect(styleObject1.position).to.equal("absolute")
        instance.destroy()
    })
    it("leftArrow 是否显示左箭头测试", async () => {
        let instance = mount(ZHeader)
        expect(instance.findComponent(ZIcon).exists()).to.equal(false)
        instance.setProps({ leftArrow: true })
        await Vue.nextTick()
        expect(instance.findComponent(ZIcon).vm.iconName).to.equal("arrowleft")
        instance.destroy()
    })
    it("leftText 是否显示左文字", async () => {
        let instance = mount(ZHeader)
        expect(instance.find(".back").exists()).to.equal(false)
        instance.setProps({ leftText: "返回" })
        await Vue.nextTick()
        expect(instance.find(".back").text()).to.equal("返回")
        instance.destroy()
    })
    it("isPlaceholder 是否显示占位符", async () => {
        let testDiv = document.createElement("div")
        testDiv.id = "test"
        document.body.appendChild(testDiv)
        let instance = mount(ZHeader, {
            attachTo: '#test'
        })
        let cssObject = window.getComputedStyle(instance.find(".placeholder").element, ":after")
        expect(cssObject.height).to.not.equal("0px")
        instance.setProps({ isPlaceholder: false })
        await Vue.nextTick()
        expect(instance.find(".placeholder").exists()).to.equal(false)
        instance.destroy()
    })
    it("title 是否显示标题", async () => {
        let instance = mount(ZHeader, {
            propsData: { title: "首页" }
        })
        expect(instance.find(".title").text()).to.equal("首页")
        instance.destroy()
    })
    it("bg 背景颜色", async () => {
        let instance = mount(ZHeader, {
            propsData: { bg: "#ff0000" }
        })
        expect(instance.find(".z-header").element.style.background).to.equal("rgb(255, 0, 0)")
        expect(instance.find(".z-header").element.style.color).to.equal("rgb(255, 255, 255)")
        instance.destroy()
    })
    it("leftEvent 默认左箭头点击事件", async ()=>{
        let instance = mount(ZHeader)
        const spy = chai.spy(() => {});
        instance.vm.$on("leftEvent",spy)
        instance.find(".left-wrap").trigger("click")
        expect(spy).to.have.been.called()
        instance.destroy()
    })
    it("左边 中间 右边 插槽",async()=>{
        let instance = mount(ZHeader, {
            slots: {
                "left": "<span id='left'>left</span>",
                "center":"<span id='center'>center</span>",
                "right":"<span id='right'>right</span>"
            },
        })
        expect(instance.find("#left").text()).to.equal("left")
        expect(instance.find("#center").text()).to.equal("center")
        expect(instance.find("#right").text()).to.equal("right")
        instance.destroy()
    })
})