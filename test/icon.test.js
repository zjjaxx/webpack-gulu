/*
 * @Author: zjj
 * @Date: 2020-02-16 15:39:07
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-17 11:58:26
 */
import Vue from "vue"
import ZIcon from "../src/components/base/z-icon.vue"
//单元测试
import {mount} from "@vue/test-utils"
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
    it("classPrefix iconName 有效",()=>{
        let iconWrapper=mount(ZIcon,{
            propsData:{
                classPrefix:"gulu",
                iconName:'img'
            }
        })
        expect(iconWrapper.find("i").classes()).to.include('gulu');
        expect(iconWrapper.find("i").classes()).to.include('gulu-img');
        iconWrapper.destroy()
    })
    it("dot 有效",()=>{
        let iconWrapper=mount(ZIcon,{
            propsData:{
                classPrefix:"gulu",
                iconName:'img',
                dot:true
            }
        })
        expect(iconWrapper.find(".dot").exists()).to.equal(true)
        iconWrapper.destroy()
    })
    it("info 有效",()=>{
        let iconWrapper=mount(ZIcon,{
            propsData:{
                classPrefix:"gulu",
                iconName:'img',
                info:10
            }
        })
        expect(iconWrapper.find(".z-badge").exists()).to.equal(true)
        expect(iconWrapper.find(".z-badge").text()).to.equal("10")
        iconWrapper.destroy()
    })
    it("color 有效",()=>{
        let iconWrapper=mount(ZIcon,{
            propsData:{
                classPrefix:"gulu",
                iconName:'img',
                color:"#ff0000"
            }
        })
        expect(iconWrapper.find("i").element.style.color).to.equal("rgb(255, 0, 0)")
        iconWrapper.destroy()
    })
    it("size 有效",()=>{
        let iconWrapper=mount(ZIcon,{
            propsData:{
                classPrefix:"gulu",
                iconName:'img',
                size:20
            }
        })
        expect(iconWrapper.find("i").element.style.fontSize).to.equal("20px")
        iconWrapper.destroy()
    })
})