import Vue from "vue"
import { mount } from "@vue/test-utils"
import { expect } from "chai"
import ZTabbar from "../src/components/layout/z-tabbar.vue"
import ZTabbarItem from "../src/components/layout/z-tabbar-item.vue"
import ZIcon from "../src/components/base/z-icon.vue"
describe("navbar test", () => {
    it("ZTabbar ZTabbarItem 存在", () => {
        expect(ZTabbar).to.be.an("object")
        expect(ZTabbarItem).to.be.an("object")
    })
    it("isPlaceholder 占位符", async () => {
        let testDiv = document.createElement("div")
        testDiv.id = "test"
        document.body.appendChild(testDiv)
       
        let instance = mount(ZTabbar, {
            attachTo: '#test'
        })
        let cssObject=window.getComputedStyle(instance.element)
        expect(cssObject.height).not.equal("0px")
        instance.setProps({isPlaceholder:false})
        await Vue.nextTick()
        let cssObject1=window.getComputedStyle(instance.element)
        expect(cssObject1.height).to.equal("0px")
        instance.destroy()
    })
    it("activeColor激活颜色 inactiveColor未激活颜色",async()=>{
        const $route = { path: 'http://0.0.0.0:8092/#/home' }
        let bottomMenu = [
            {
                path: "/home",
                name: "组件",
                iconConfig: {
                    classPrefix: "gulu",
                    iconName: "zujian",
                    size: "24"
                }
            },
            {
                path: "/layout",
                name: "布局",
                iconConfig: {
                    classPrefix: "gulu",
                    info: 2,
                    size: "24",
                    iconName: "layout"
                }
            },
            {
                path: "/person",

                name: "扩展",
                iconConfig: {
                    classPrefix: "gulu",
                    size: "24",
                    iconName: "setting"
                }
            }
        ]
        let ZTabbarItemList=bottomMenu.map((item,index)=>{
            return `<z-tabbar-item :key='${index}' :buttomMenuItem='${JSON.stringify(item)}'></z-tabbar-item>`
        })
        let instance = mount(ZTabbar, {
            propsData: {
                activeColor:"#ff0000",
                inactiveColor:"#000000"
            },
            slots: {
                default: ZTabbarItemList
            },
            stubs:{
               "z-tabbar-item":ZTabbarItem
            },
            mocks:{$route},
        })
        expect(instance.findAllComponents(ZTabbarItem).at(0).findComponent(ZIcon).vm.color).to.equal("#ff0000")
        expect(instance.findAllComponents(ZTabbarItem).at(1).findComponent(ZIcon).vm.color).to.equal("#000000")
        instance.destroy()
    })
})
