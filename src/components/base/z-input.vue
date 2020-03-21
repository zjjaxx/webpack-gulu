<!--  -->
<template>
  <div class="z-input-wrap" :class="c_round">
    <input
      :class="c_class"
      class="z-input"
      v-bind="$attrs"
      :value="value"
      v-on="c_inputListener"
    />
    <span class="label ellipsis" v-if="label">{{label}}</span>
    <div class="clear flex justify-center aligin-center" @click="$emit('input','')">
      <z-icon v-show="c_clear" color="gray" iconName="i-error"></z-icon>
    </div>
  </div>
</template>

<script>
import ZIcon from './z-icon.vue'
import mixin from "../../mixin/emitter"
export default {
  mixins:[mixin],
  inheritAttrs: false,//不希望组件的根元素继承 attribute，
  components: { ZIcon },
  inject:{
    rules:{
      default:()=>{
        return {}
      }
    }
  },
  props: {
    label: {
      //标签
      type: String,
      default: () => {
        return ''
      }
    },
    round:{//圆角
      type:Boolean,
      default:()=>{
        return false
      }
    },
    value: {
      //输入值
      type: [String, Number],
      default: () => {
        return ''
      },
      required: true
    },
    errorTip: {
      //错误提示
      type: String,
      default: () => {
        return ''
      }
    },
    validateEvent:{
      type:Boolean,
      default:()=>{
        return true
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    c_clear(){
      return this.value&&!this.$attrs.disabled
    },
    c_round(){
      return this.round?'input-round':''
    },
    c_class() {
      return this.label ? '' : 'pl-14'
    },
    c_inputListener() {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function(event) {
            vm.$emit('input', event.target.type=="number"?event.target.valueAsNumber:event.target.value)
            if(vm.validateEvent){
              vm.dispatch("ZFormItem","validate",event.target.value)
            }
          },
          blur:function(event){
            if(vm.validateEvent){
              vm.dispatch("ZFormItem","validate",event.target.value)
            }
          },
          focus: function(event) {
            // event.target.scrollIntoView()
          }
        }
      )
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-input-wrap /deep/ .icon {
  width: 18px;
  width: 18px;
}
.z-input-wrap {
  position: relative;
  font-size: 14px;
  box-shadow: 0px 5px 20px 2px rgba(162, 162, 162, 0.19);
  overflow: hidden;
  .label {
    position: absolute;
    height: 100%;
    width: 80px;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
    color: #fff;
    font-size: 14px;
    line-height: 35px;
    text-align: center;
    background: @z-input-label-bg;
  }
  .z-input {
    width: 100%;
    padding: 2px 30px 2px 94px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    line-height: 30px;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:focus {
      outline: none;
      padding-left: 14px;
    }
    &:focus + .label {
      transform: translateX(-100%);
    }
    &[disabled] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  .pl-14 {
    padding-left: 14px;
  }
  .z-input[disabled].z-input::placeholder {
    color: #ccc;
  }
  .icon-error {
    fill: red;
  }
  .tip-error {
    margin-left: 14px;
    color: red;
    font-size: 10px;
  }
  .clear {
    position: absolute;
    right: 0;
    top: 0;
    height: 35px;
    width: 30px;
  }
}
.input-round{
  border-radius: 5px;
}
</style>