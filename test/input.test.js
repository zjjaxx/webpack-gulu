import Vue from "vue"
import ZButton from "../src/components/base/z-button.vue"
//单元测试
import chai from "chai"
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect
Vue.config.productionTip=false
Vue.config.devtools=false

describe("Button",()=>{
    it("存在",()=>{
        expect(ZButton).to.be.exist
    })
})