/*
 * @Author: zjj
 * @Date: 2020-01-14 15:13:21
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-16 16:11:30
 */
import Vue from "vue"
import { shallowMount, mount } from '@vue/test-utils'
import ZButton from "../src/components/base/z-button.vue"
import ZIcon from "../src/components/base/z-icon.vue"
//单元测试
import chai from "chai"
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect
Vue.config.productionTip = false
Vue.config.devtools = false

describe("Button", () => {
    it("存在", () => {
        expect(ZButton).to.be.an("object")
    })
    it("button 状态测试 loadingIconName加载图标名称 complateIconName完成图标名称", async () => {
        let zButton = mount(ZButton, {
            propsData: {
                buttonStatus: 0,
                superButton: true,
                classPrefix: "gulu",
                iconName: "download",
                loadingIconName: "loading-out",
                complateIconName: "tipssuccess"
            }
        })
        expect(zButton.findComponent(ZIcon).vm.iconName).to.equal("download")
        zButton.vm.$on("click", async () => {
            zButton.setProps({ buttonStatus: 1 })
            await Vue.nextTick()
            expect(zButton.findComponent(ZIcon).vm.iconName).to.equal("loading-out")
            expect(zButton.classes()).include("loading")

            zButton.setProps({ buttonStatus: 2 })
            await Vue.nextTick()
            expect(zButton.findComponent(ZIcon).vm.iconName).to.equal("tipssuccess")
            expect(zButton.classes()).include("done")


            zButton.setProps({ buttonStatus: 0 })
            await Vue.nextTick()
            expect(zButton.findComponent(ZIcon).vm.iconName).to.equal("download")
            expect(zButton.classes()).not.include("done").that.not.include("loading")

            zButton.destroy()

        })
        zButton.trigger("click")
    })
    it("block 是否为块级元素", async () => {
        let testDiv = document.createElement("div")
        testDiv.id = "test"
        document.body.appendChild(testDiv)
        let instance = mount(ZButton, {
            propsData: {
                block: true
            },
            attachTo: "#test"
        })
        let cssObject = window.getComputedStyle(instance.find(".z-block").element)
        expect(cssObject.width).to.equal(document.body.clientWidth + "px")
        instance.destroy()
    })
    it("commonText待激活文字 loadingText加载中文字 complateText已完成文字", () => {
        let instance = mount(ZButton, {
            propsData: {
                superButton: true,
                commonText: "待激活文字",
                loadingText: "加载中文字",
                complateText: "已完成文字"
            }
        })
        let instanceArray = instance.findAll(".super-wrap .item")
        expect(instanceArray.at(0).text()).to.equal("待激活文字")
        expect(instanceArray.at(1).text()).to.equal("加载中文字")
        expect(instanceArray.at(2).text()).to.equal("已完成文字")
        instance.destroy()
    })
    it("round 方形",()=>{
        let testDiv = document.createElement("div")
        testDiv.id = "test"
        document.body.appendChild(testDiv)
        let instance = mount(ZButton, {
            propsData: {
                round: true
            },
            attachTo: "#test"
        })
        let cssObject = window.getComputedStyle(instance.find(".z-border-1px").element)
        expect(cssObject.borderRadius).equal("0px")
        instance.destroy()
    })
    it("type 类型",async()=>{
        let testDiv = document.createElement("div")
        testDiv.id = "test"
        document.body.appendChild(testDiv)
        let instance = mount(ZButton, {
            attachTo: "#test"
        })
        let cssObject = window.getComputedStyle(instance.element)
        expect(cssObject.borderWidth).equal("1px")
        expect(instance.classes()).include("rapple-default")
        instance.setProps({ type: "custom" })
        await Vue.nextTick()
        console.log("classes",instance.classes())
        let cssObject1 = window.getComputedStyle(instance.find(".z-default-button").element)
        expect(cssObject1.borderWidth).equal("0px")
        expect(instance.classes()).include("rapple-custom")
        instance.destroy()
    })
})
