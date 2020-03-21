<!--  -->
<template>
  <div class="z-form">
      <slot></slot>
  </div>
</template>

<script>
import mixin from "../../mixin/emitter"
export default {
  mixins:[mixin],
  components: {},
  provide(){
    return {
      model:this.model,
      rules:this.rules
    }
  },
  props: {
    model: {
      //表单数据
      type: Object,
      default: () => {
        return {}
      },
      required: true
    },
    rules: { //校验规则
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      
    }
  },
  computed: {},
  watch: {},
  methods: {
      //校验
      validate(){
        let children= this.getChildren(this,"ZFormItem")
        return new Promise((resolve,reject)=>{
          children.forEach(element => {
            element.validate()
          });
        })
      }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>