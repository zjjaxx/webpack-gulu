import Vue from "vue"
import { mount } from "@vue/test-utils"
import { expect } from "chai"
import ZTabbar from "../src/components/layout/z-tabbar.vue"
import ZTabbarItem from "../src/components/layout/z-tabbar-item.vue"

describe("navbar test", () => {
    it("ZTabbar ZTabbarItem 存在", () => {
        expect(ZTabbar).to.be.an("object")
        expect(ZTabbarItem).to.be.an("object")
    })
})