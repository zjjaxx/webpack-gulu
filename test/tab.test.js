import Vue from "vue"
import {mount} from "@vue/test-utils"
import chai, { expect }from "chai"
import spy from "chai-spies"
chai.use(spy)
import ZTab from "../src/components/base/z-tab.vue"
import ZTabs from "../src/components/base/z-tabs.vue"
import ZTabPanel from "../src/components/base/z-tab-panel.vue"

describe("ZTab",()=>{
    it("ZTab ZTabs ZTabPanel 存在",()=>{
        expect(ZTab).to.be.an("object")
        expect(ZTabs).to.be.an("object")
        expect(ZTabPanel).to.be.an("object")
    })
    it("ZTabs active 激活索引",async()=>{
        let tabpanelList=new Array(3).fill("标签").map((item,index)=>{
            return `<z-tab-panel title="${item+index}"></z-tab-panel>`
        })
        let instance = mount(ZTabs,{
            propsData:{
                active:0
            },
            stubs:{
                "z-tab-panel":ZTabPanel
            },
            slots: {
                default:tabpanelList
            }
        })
        let clickSpy=chai.spy((index)=>{})
        instance.vm.$on("change",clickSpy)
        await Vue.nextTick()
        instance.findAllComponents(ZTab).at(2).trigger("click")
        await Vue.nextTick()
        expect(clickSpy).to.have.been.called.with(2)
        instance.destroy()
    })
    it("tab 根据 name 来匹配active",async()=>{
        let tabpanelList=new Array(3).fill("标签").map((item,index)=>{
            return `<z-tab-panel name="${item+index}" title="${item+index}"></z-tab-panel>`
        })
        let instance = mount(ZTabs,{
            propsData:{
                active:"标签1"
            },
            stubs:{
                "z-tab-panel":ZTabPanel
            },
            slots: {
                default:tabpanelList
            }
        })
        let clickSpy=chai.spy((index)=>{})
        instance.vm.$on("change",clickSpy)
        await Vue.nextTick()
        instance.findAllComponents(ZTab).at(2).trigger("click")
        await Vue.nextTick()
        expect(clickSpy).to.have.been.called.with("标签2")
        instance.destroy()
    })
    it("isSticky 吸顶",()=>{
        
    })
})