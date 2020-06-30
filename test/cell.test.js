import Vue from "vue"
import { mount, createLocalVue } from "@vue/test-utils"
import chai, { expect } from "chai"
import ZCellItem from "../src/components/base/z-cell-item.vue"
import ZCellGroup from "../src/components/base/z-cell-group.vue"
import VueRouter from 'vue-router'

describe("cell 单元格测试", () => {
    it("cell cellGroup 存在", () => {
        expect(ZCellItem).to.be.an("object")
        expect(ZCellGroup).to.be.an("object")
    })
    it("title单元格标题 value单元格内容", () => {
        let instance = mount(ZCellItem, {
            propsData: {
                title: "测试标题",
                value: "单元格内容"
            }
        })
        expect(instance.find(".content-title").text()).to.equal("测试标题")
        expect(instance.find(".content").text()).to.equal("单元格内容")
        instance.destroy()
    })
    it("route 路由模式", async () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()
        let instance = mount(ZCellItem, {
            propsData: {
                route:true,
                title: "测试标题",
                to: {
                    path: "/icon"
                }
            },
            localVue,
            router
        })
        instance.trigger("click")
        await Vue.nextTick()
        expect(instance.vm.$route.path).to.include("/icon")
        instance.destroy()
    })
    it("z-cell-group",async()=>{
        let test=document.createElement("div")
        test.id="test"
        document.body.appendChild(test)
        let nameList=["test1","test2","test3"].map(item=>{
            return `<z-cell-item title="${item}"></z-cell-item>`
        })
        let instance = mount(ZCellGroup, {
            attachTo:"#test",
            slots: {
                default:nameList
            },
            stubs: {
                "z-cell-item":ZCellItem
            }
        })
        let cssObject = window.getComputedStyle(instance.findAllComponents(ZCellItem).at(0).element,":after")
        let cssObject1 = window.getComputedStyle(instance.findAllComponents(ZCellItem).at(2).element,":after")
        expect(cssObject.borderBottomWidth).equal("1px")
        expect(cssObject1.borderBottomWidth).equal("0px")
        instance.destroy()
    })
})