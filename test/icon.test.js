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
        console.log("use",use)
        expect(use.getAttribute("xlink:href")).to.equal("#i-setting")
        icon.$el.remove()
        icon.$destroy()
    })
})