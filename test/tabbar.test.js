import Vue from "vue"
import { mount } from "@vue/test-utils"
import chai,{ expect } from "chai"
import ZTabbar from "../src/components/layout/z-tabbar.vue"
import ZTabbarItem from "../src/components/layout/z-tabbar-item.vue"
import ZIcon from "../src/components/base/z-icon.vue"
import spy from "chai-spies"
chai.use(spy)
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
        let cssObject = window.getComputedStyle(instance.element)
        expect(cssObject.height).not.equal("0px")
        instance.setProps({ isPlaceholder: false })
        await Vue.nextTick()
        let cssObject1 = window.getComputedStyle(instance.element)
        expect(cssObject1.height).to.equal("0px")
        instance.destroy()
    })
    it("fixed 固定布局", async () => {
        let testDiv = document.createElement("div")
        testDiv.id = "test"
        document.body.appendChild(testDiv)

        let instance = mount(ZTabbar, {
            attachTo: '#test'
        })
        let cssObject = window.getComputedStyle(instance.find(".z-tabbar-fixed").element)
        expect(cssObject.position).to.equal("fixed")
        instance.setProps({ fixed: false })
        await Vue.nextTick()
        let cssObject1 = window.getComputedStyle(instance.find(".z-tabbar").element)
        expect(cssObject1.position).not.to.equal("fixed")
        instance.destroy()
    })
    it("active 激活索引", async () => {
        let bottomMenu = [
            {
                name: "组件",
                iconConfig: {
                    classPrefix: "gulu",
                    iconName: "zujian",
                    size: "24"
                }
            },
            {
                name: "布局",
                iconConfig: {
                    classPrefix: "gulu",
                    info: 2,
                    size: "24",
                    iconName: "layout"
                }
            },
            {
                name: "扩展",
                iconConfig: {
                    classPrefix: "gulu",
                    size: "24",
                    iconName: "setting"
                }
            }
        ]
        let ZTabbarItemList = bottomMenu.map((item, index) => {
            return `<z-tabbar-item :key='${index}' v-bind='${JSON.stringify(item)}'></z-tabbar-item>`
        })
        let spy= chai.spy((index) => {});
        let instance = mount(ZTabbar, {
            propsData: {
                active: 0,
            },
            slots: {
                default: ZTabbarItemList
            },
            stubs: {
                "z-tabbar-item": ZTabbarItem
            },
            attachTo: '#test'
        })
        instance.vm.$on("change",spy)
        instance.findAllComponents(ZTabbarItem).at(2).trigger("click")
        await Vue.nextTick()
        expect(spy).to.have.been.called.with(2)
        instance.destroy()
    })
    it("active label标签激活索引", async () => {
        let bottomMenu = [
            {
                label:"标签1",
                name: "组件",
                iconConfig: {
                    classPrefix: "gulu",
                    iconName: "zujian",
                    size: "24"
                }
            },
            {
                label:"标签2",
                name: "布局",
                iconConfig: {
                    classPrefix: "gulu",
                    info: 2,
                    size: "24",
                    iconName: "layout"
                }
            },
            {
                label:"标签3",
                name: "扩展",
                iconConfig: {
                    classPrefix: "gulu",
                    size: "24",
                    iconName: "setting"
                }
            }
        ]
        let ZTabbarItemList = bottomMenu.map((item, index) => {
            return `<z-tabbar-item :key='${index}' v-bind='${JSON.stringify(item)}'></z-tabbar-item>`
        })
        let spy= chai.spy((index) => {});
        let instance = mount(ZTabbar, {
            propsData: {
                active: "标签2",
            },
            slots: {
                default: ZTabbarItemList
            },
            stubs: {
                "z-tabbar-item": ZTabbarItem
            },
            attachTo: '#test'
        })
        instance.vm.$on("change",spy)
        instance.findAllComponents(ZTabbarItem).at(2).trigger("click")
        await Vue.nextTick()
        expect(spy).to.have.been.called.with("标签3")
        instance.destroy()
    })
    it("activeColor激活颜色 inactiveColor未激活颜色(路由模式下)", async () => {
        const $route = { path: 'http://0.0.0.0:8092/#/layout' }
        let bottomMenu = [
            {
                to: "/home",
                name: "组件",
                iconConfig: {
                    classPrefix: "gulu",
                    iconName: "zujian",
                    size: "24"
                }
            },
            {
                to: "/layout",
                name: "布局",
                iconConfig: {
                    classPrefix: "gulu",
                    info: 2,
                    size: "24",
                    iconName: "layout"
                }
            },
            {
                to: "/person",
                name: "扩展",
                iconConfig: {
                    classPrefix: "gulu",
                    size: "24",
                    iconName: "setting"
                }
            }
        ]
        let ZTabbarItemList = bottomMenu.map((item, index) => {
            return `<z-tabbar-item :key='${index}' v-bind='${JSON.stringify(item)}'></z-tabbar-item>`
        })
        let instance = mount(ZTabbar, {
            propsData: {
                activeColor: "#ff0000",
                inactiveColor: "#000000",
                route:true
            },
            slots: {
                default: ZTabbarItemList
            },
            stubs: {
                "z-tabbar-item": ZTabbarItem
            },
            mocks: { $route },
        })
        expect(instance.findAllComponents(ZTabbarItem).at(0).findComponent(ZIcon).vm.color).to.equal("#000000")
        expect(instance.findAllComponents(ZTabbarItem).at(1).findComponent(ZIcon).vm.color).to.equal("#ff0000")
        instance.destroy()
    })
    it("activeColor激活颜色 inactiveColor未激活颜色(普通模式active为数字情况下)", async () => {
        let bottomMenu = [
            {
                name: "组件",
                iconConfig: {
                    classPrefix: "gulu",
                    iconName: "zujian",
                    size: "24"
                }
            },
            {
                name: "布局",
                iconConfig: {
                    classPrefix: "gulu",
                    info: 2,
                    size: "24",
                    iconName: "layout"
                }
            },
            {
                name: "扩展",
                iconConfig: {
                    classPrefix: "gulu",
                    size: "24",
                    iconName: "setting"
                }
            }
        ]
        let ZTabbarItemList = bottomMenu.map((item, index) => {
            return `<z-tabbar-item :key='${index}' v-bind='${JSON.stringify(item)}'></z-tabbar-item>`
        })
        let instance = mount(ZTabbar, {
            propsData: {
                activeColor: "#ff0000",
                inactiveColor: "#000000",
                active:1
            },
            slots: {
                default: ZTabbarItemList
            },
            stubs: {
                "z-tabbar-item": ZTabbarItem
            },
        })
        expect(instance.findAllComponents(ZTabbarItem).at(0).findComponent(ZIcon).vm.color).to.equal("#000000")
        expect(instance.findAllComponents(ZTabbarItem).at(1).findComponent(ZIcon).vm.color).to.equal("#ff0000")
        instance.destroy()
    })
    it("activeColor激活颜色 inactiveColor未激活颜色(标签模式active为字符串情况下)", async () => {
        let bottomMenu = [
            {
                label:"标签1",
                name: "组件",
                iconConfig: {
                    classPrefix: "gulu",
                    iconName: "zujian",
                    size: "24"
                }
            },
            {
                label:"标签2",
                name: "布局",
                iconConfig: {
                    classPrefix: "gulu",
                    info: 2,
                    size: "24",
                    iconName: "layout"
                }
            },
            {
                label:"标签3",
                name: "扩展",
                iconConfig: {
                    classPrefix: "gulu",
                    size: "24",
                    iconName: "setting"
                }
            }
        ]
        let ZTabbarItemList = bottomMenu.map((item, index) => {
            return `<z-tabbar-item :key='${index}' v-bind='${JSON.stringify(item)}'></z-tabbar-item>`
        })
        let instance = mount(ZTabbar, {
            propsData: {
                activeColor: "#ff0000",
                inactiveColor: "#000000",
                active:"标签2"
            },
            slots: {
                default: ZTabbarItemList
            },
            stubs: {
                "z-tabbar-item": ZTabbarItem
            },
        })
        expect(instance.findAllComponents(ZTabbarItem).at(0).findComponent(ZIcon).vm.color).to.equal("#000000")
        expect(instance.findAllComponents(ZTabbarItem).at(1).findComponent(ZIcon).vm.color).to.equal("#ff0000")
        instance.destroy()
    })
    it("name tab 标签名",async()=>{
        let bottomMenu = [
            {
                name: "组件",
            },
            {
                name: "布局",
            },
            {
                name: "扩展",
            }
        ]
        let ZTabbarItemList = bottomMenu.map((item, index) => {
            return `<z-tabbar-item :key='${index}' v-bind='${JSON.stringify(item)}'></z-tabbar-item>`
        })
        let instance = mount(ZTabbar, {
            propsData: {
                active: 0,
            },
            slots: {
                default: ZTabbarItemList
            },
            stubs: {
                "z-tabbar-item": ZTabbarItem
            }
        })
        expect(instance.findAllComponents(ZTabbarItem).at(2).find(".mt-3").text()).to.equal("扩展")
        instance.destroy()
    })
})
