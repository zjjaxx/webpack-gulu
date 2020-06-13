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
    it("button 状态测试", async () => {
        let zButton = mount(ZButton, {
            propsData: {
                buttonStatus: 0,
                superButton:true,
                iconName: "i-download"
            }
        })
        zButton.vm.$on("click", async () => {
            zButton.setProps({ buttonStatus: 1 })
            await Vue.nextTick()
            expect(zButton.find(ZIcon).vm.iconName).to.equal("i-loading")
            let superWrapLoadingStyle=window.getComputedStyle(zButton.find(".super-wrap").element) 
            expect(superWrapLoadingStyle.transform).to.equal("rotateX(90deg)")

            zButton.setProps({ buttonStatus: 2 })
            await Vue.nextTick()
            expect(zButton.find(ZIcon).vm.iconName).to.equal("i-wancheng")
            let superWrapComplateStyle=window.getComputedStyle(zButton.find(".super-wrap").element) 
            expect(superWrapComplateStyle.transform).to.equal("rotateX(180deg)")


            zButton.setProps({ buttonStatus: 0 })
            await Vue.nextTick()
            expect(zButton.find(ZIcon).vm.iconName).to.equal("i-download")
            let superWrapCommonStyle=window.getComputedStyle(zButton.find(".super-wrap").element) 
            expect(superWrapCommonStyle.transform).to.equal("rotateX(0deg)")

        })
        zButton.trigger("click")
        zButton.destroy()
    })
})
