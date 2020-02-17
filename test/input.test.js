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
        let inputConstruct=Vue.extend(ZInput)
        let input=new inputConstruct({
            propsData:{
                inputAttr:{
                    value:""
                }
            }
        })
        input.$mount()
        let value_callback
        const spy = chai.spy((e)=>{
            value_callback=e
        });
        input.$on("input",spy)
        let _input =input.$el.querySelector("input")
        let inputEvent=new Event("input")
        Object.defineProperty(inputEvent,"target",{value:{value:"hahaha"},enumerable:true})
        _input.dispatchEvent(inputEvent)
        expect(value_callback).to.equal("hahaha")
    })
    it("clear可用",(done)=>{
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
        expect(svg.style.display).to.equal("none")
        input.$set(input.inputAttr,"value","hahaha")
        setTimeout(()=>{
            expect(svg.style.display).to.equal("")
            done()
            input.$el.remove()
            input.$destroy()
        },0)
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