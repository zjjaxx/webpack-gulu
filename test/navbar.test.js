import Vue from "vue"
import {mount} from "@vue/test-utils"
import {expect} from "chai"
import ZNavbar from "../src/components/layout/z-navbar.vue"
import ZNavbarItem from "../src/components/layout/z-navbar-item.vue"

describe("navbar test",()=>{
    it("ZNavbar ZNavbarItem 存在",()=>{
        expect(ZNavbar).to.be.an("object")
        expect(ZNavbarItem).to.be.an("object")
    })
})