import Vue from "vue"
import { mount } from "@vue/test-utils"
import ZSticky from "../src/components/base/z-sticky.vue"
import { expect } from "chai"

describe("sticky 吸顶组件", () => {
    it("sticky 吸顶组件存在", () => {
        expect(ZSticky).to.be.an("object")
    })
    it("isSticky 吸顶 (window滚动)", async () => {
        let container = document.createElement("div")
        container.style.height = "1000px"
        let stickyWrap = document.createElement("div")
        stickyWrap.id = "stickyWrap"
        container.appendChild(stickyWrap)
        document.body.appendChild(container)
        let instance = mount(ZSticky, {
            attachTo: "#stickyWrap",
            slots: {
                default: `<div style='height:100px;'>stickyWrap</div>`
            }
        })
        await Vue.nextTick()
        instance.vm.$on('scroll', async() => {
            await Vue.nextTick()
            let cssObject = window.getComputedStyle(instance.find(".z-sticky").element)
            expect(cssObject.position).to.equal("fixed")
            instance.destroy()
        })
        window.scrollTo(0, 1000)
    })
    it("isSticky 吸顶 (div滚动)", async () => {
        let container = document.createElement("div")
        container.style.height = "500px"
        container.style.overflow = "auto"
        container.id = "container"
        let list = document.createElement("div")
        list.height = "1000px"
        let stickyWrap = document.createElement("div")
        stickyWrap.id = "stickyWrap"
        list.appendChild(stickyWrap)
        container.appendChild(list)
        document.body.appendChild(container)
        let instance = mount(ZSticky, {
            attachTo: "#stickyWrap",
            slots: {
                default: "<div style='height:100px;'>stickyWrap</div>"
            }
        })
        await Vue.nextTick()
        instance.vm.$on('scroll', async() => {
            await Vue.nextTick()
            let cssObject = window.getComputedStyle(instance.find(".z-sticky").element)
            expect(cssObject.position).to.equal("fixed")
            instance.destroy()
        })
        container.scrollTop = 800
      
    })
    it("offsetTop 吸顶时与顶部的距离", async () => {
        let container = document.createElement("div")
        container.style.height = "1000px"
        let stickyWrap = document.createElement("div")
        stickyWrap.id = "stickyWrap"
        container.appendChild(stickyWrap)
        document.body.appendChild(container)
        let instance = mount(ZSticky, {
            propsData: {
                offsetTop: 46
            },
            attachTo: "#stickyWrap",
            slots: {
                default: "<div style='height:100px;'>stickyWrap</div>"
            }
        })
        await Vue.nextTick()
        instance.vm.$on('scroll', async() => {
            await Vue.nextTick()
            expect(instance.find(".z-sticky").element.style.top).to.equal("46px")
            instance.destroy()
        })
        window.scrollTo(0, 800)
    })
})