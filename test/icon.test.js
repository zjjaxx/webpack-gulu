/*
 * @Author: zjj
 * @Date: 2020-02-16 15:39:07
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-17 11:58:26
 */
import Vue from "vue"
import ZIcon from "../src/components/base/z-icon.vue"
//单元测试
import chai from "chai"
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect
Vue.config.productionTip=false
Vue.config.devtools=false
describe("ZIcon",()=>{
    it("存在",()=>{
        expect(ZIcon).to.be.an("object")
    })
    it("iconName 有效",()=>{
        let ZIconConstructor=Vue.extend(ZIcon)
        let icon =new ZIconConstructor({
            propsData:{
                iconName:"i-setting"
            }
        })
        icon.$mount()
        let use=icon.$el.querySelector("use")
        expect(use.getAttribute("xlink:href")).to.equal("#i-setting")
        icon.$el.remove()
        icon.$destroy()
    })
    it("dot 有效",()=>{
        let div =document.createElement("div")
        document.body.appendChild(div)
        let ZIconConstructor=Vue.extend(ZIcon)
        let icon =new ZIconConstructor({
            propsData:{
                iconName:"i-setting",
                dot:true
            }
        })
        icon.$mount(div)
        let dot=icon.$el.querySelector(".dot")
        expect(dot).to.exist
        icon.$el.remove()
        icon.$destroy()
    })
    it("info 有效",()=>{
        let div =document.createElement("div")
        document.body.appendChild(div)
        let ZIconConstructor=Vue.extend(ZIcon)
        let icon =new ZIconConstructor({
            propsData:{
                iconName:"i-setting",
                dot:true,
                info:"10"
            }
        })
        icon.$mount(div)
        let z_badge=icon.$el.querySelector(".z-badge")
        expect(z_badge).to.exist
        icon.$el.remove()
        icon.$destroy()
    })
    it("color 有效",()=>{
        let div =document.createElement("div")
        document.body.appendChild(div)
        let ZIconConstructor=Vue.extend(ZIcon)
        let icon =new ZIconConstructor({
            propsData:{
                iconName:"i-setting",
                dot:true,
                color:"#f50"
            }
        })
        icon.$mount(div)
        let _icon=icon.$el.querySelector(".icon")
        expect(_icon.style.fill).to.equal("rgb(255, 85, 0)")
        icon.$el.remove()
        icon.$destroy()
    })
})