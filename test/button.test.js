/*
 * @Author: zjj
 * @Date: 2020-01-14 15:13:21
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-16 16:11:30
 */
import Vue from "vue"
import ZButton from "../src/components/base/z-button.vue"
//单元测试
import chai from "chai"
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect
Vue.config.productionTip=false
Vue.config.devtools=false

describe("Button",()=>{
    it("存在",()=>{
        expect(ZButton).to.be.an("object")
    })
    it("iconName 测试 ",()=>{
         let ButtonConstruct = Vue.extend(ZButton)
         let button = new ButtonConstruct({
             propsData: {
                 iconName: 'i-setting'
             }
         })
         button.$mount()
         let use = button.$el.querySelector("use")
         expect(use.getAttribute('xlink:href')).to.equal("#i-setting")
         button.$el.remove()
         button.$destroy()
    })
    it("isLoading测试",()=>{
        let ButtonConstruct = Vue.extend(ZButton)
        let button = new ButtonConstruct({
            propsData: {
                isLoading: true,
                iconName: 'i-setting'
            }
        })
        button.$mount()
        let use = button.$el.querySelector("use")
        expect(use.getAttribute('xlink:href')).to.equal("#i-loading")
        button.$el.remove()
        button.$destroy()
    })
    it("iconPosition测试",()=>{
        let div = document.createElement("div")
        document.body.appendChild(div)
        let ButtonConstruct = Vue.extend(ZButton)
        let button = new ButtonConstruct({
            propsData: {
                iconName: 'i-setting'
            }
        })
        button.$mount(div)
        let svg = button.$el.querySelector("svg")
        let cssObject = window.getComputedStyle(svg)
        let order = cssObject.getPropertyValue("order")
        expect(order).to.equal("0")
        button.$el.remove()
        button.$destroy()
    })
    it("iconPosition测试",()=>{
        let div = document.createElement("div")
        document.body.appendChild(div)
        let ButtonConstruct = Vue.extend(ZButton)
        let button = new ButtonConstruct({
            propsData: {
                iconPosition: "right",
                iconName: 'i-setting'
            }
        })
        button.$mount(div)
        let svg = button.$el.querySelector("svg")
        let cssObject = window.getComputedStyle(svg)
        let order = cssObject.getPropertyValue("order")
        expect(order).to.equal("2")
        button.$el.remove()
        button.$destroy()
    })
    it("click测试",()=>{
        let div = document.createElement("div")
        document.body.appendChild(div)
        let ButtonConstruct = Vue.extend(ZButton)
        let button = new ButtonConstruct({
            propsData: {
                iconPosition: "right",
                iconName: 'i-setting'
            }
        })
        const spy = chai.spy(()=>{});
        button.$on("click", spy)
        button.$mount(div)
        let _button = button.$el
        var event = new Event('click');
        _button.dispatchEvent(event);
        expect(spy).to.have.been.called()
        button.$el.remove()
        button.$destroy()
    })
})
