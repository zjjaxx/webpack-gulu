import Vue from "vue"
import chai from "chai"
import chiSpies from "chai-spies"
chai.use(chiSpies)
const expect =chai.expect
import ZBadge from "../src/components/base/z-badge.vue"
describe("badge 测试",()=>{
    it("badge 存在",()=>{
        expect(ZBadge).to.be.an("object")
    })
    it("number 有效",()=>{
        let ZBadgeConstructor=Vue.extend(ZBadge)
        let badge=new ZBadgeConstructor({
            propsData:{
                badge:10
            }
        })
        badge.$mount()
        expect(badge.$el.innerText).to.equal("10")
        badge.$el.remove()
        badge.$destroy()
    })
    it("background 有效",()=>{
        let ZBadgeConstructor=Vue.extend(ZBadge)
        let badge=new ZBadgeConstructor({
            propsData:{
                badge:10,
                background:"#f50"
            }
        })
        badge.$mount()
        expect(badge.$el.style.background).to.equal("rgb(255, 85, 0)")
        badge.$el.remove()
        badge.$destroy()
    })
})