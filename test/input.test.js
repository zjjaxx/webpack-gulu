import Vue from "vue"
import ZInput from "../src/components/base/z-input.vue"
//单元测试
import chai from "chai"
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect
Vue.config.productionTip=false
Vue.config.devtools=false

describe("ZInput",()=>{
    it("存在",()=>{
        expect(ZInput).to.be.an("object")
    })
    it("接收 inputAttr",()=>{
        let inputConstruct=Vue.extend(ZInput)
        let input=new inputConstruct({
            propsData:{
                inputAttr:{
                    value:"哈哈哈"
                }
            }
        })
        input.$mount()
        expect(input.inputAttr).to.be.an("object")
        expect(input.inputAttr.value).to.equal("哈哈哈")
        input.$el.remove()
        input.$destroy()
    })
    it("v-model可用",()=>{
    })
    it("clear可用",()=>{
        let inputConstruct=Vue.extend(ZInput)
        let input=new inputConstruct({
            propsData:{
                inputAttr:{
                    value:""
                }
            }
        })
        input.$mount()
        let svg=input.$el.querySelector("svg")
        expect(svg).to.be.null
        let _input =input.$el.querySelector("input")
        _input.value="aaa"
        console.log(input.inputAttr.value)
        // let use=input.$el.querySelector("use")
        // expect(use['xlink:href']).to.equal("i-error")
    })
    it("input placeholder",()=>{
        let inputConstruct=Vue.extend(ZInput)
        let input=new inputConstruct({
            propsData:{
                inputAttr:{
                    value:"",
                    placeholder:"请输入地址"
                }
            }
        })
        input.$mount()
        let _input=input.$el.querySelector("input")
        expect(_input.placeholder).to.equal("请输入地址")
        input.$el.remove()
        input.$destroy()
    })
    it("input 只读",()=>{
        let inputConstruct=Vue.extend(ZInput)
        let input=new inputConstruct({
            propsData:{
                inputAttr:{
                    value:"",
                    disabled:true
                }
            }
        })
        input.$mount()
        expect(input.inputAttr.disabled).to.equal(true)
        let _input=input.$el.querySelector("input")
        expect(_input.disabled).to.equal(true)
        input.$el.remove()
        input.$destroy()
    })
    it("input 校验",()=>{
        let inputConstruct=Vue.extend(ZInput)
        let input=new inputConstruct({
            propsData:{
                inputAttr:{
                    value:"",
                    errorTip:"手机号格式有误"
                }
            }
        })
        input.$mount()
        let tip=input.$el.querySelector(".tip-error")
        expect(tip.innerText).to.equal("手机号格式有误")
        input.$el.remove()
        input.$destroy()
    })
    it("input 数字",()=>{
        let inputConstruct=Vue.extend(ZInput)
        let input=new inputConstruct({
            propsData:{
                inputAttr:{
                    value:"",
                    type:"number"
                }
            }
        })
        input.$mount()
        let _input=input.$el.querySelector("input")
        expect(_input.type).to.equal("number")
        input.$el.remove()
        input.$destroy()
    })
    
})