import Vue from "vue"
import ZMenuItem from "../src/components/base/z-menu-item.vue"
//单元测试
import chai from "chai"
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect
Vue.config.productionTip = false
Vue.config.devtools = false

describe("ZMenuItem", () => {
    it("存在", () => {
        expect(ZMenuItem).to.be.an("object")
    })
    it("title 测试", () => {
        let ZMenuItemConstructor=Vue.extend(ZMenuItem)
        let menuItem=new ZMenuItemConstructor({
            propsData:{
                title:"地址列表"
            }
        })
        menuItem.$mount()
        let content_title=menuItem.$el.querySelector(".content-title")
        expect(content_title.innerText).to.equal("地址列表")
        menuItem.$el.remove()
        menuItem.$destroy()
    })
})