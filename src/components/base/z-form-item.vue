<!--  -->
<template>
  <div class="z-form-item">
    <div class="flex aligin-center">
      <div class="label-wrap flex aligin-center justify-center" v-if="label">
        <span class="need" v-if="c_need">*</span>
        <span class="label">{{label}}</span>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <div v-if="errorMessage" :class="c_class">{{errorMessage}}</div>
  </div>
</template>

<script>
import schema from 'async-validator'
export default {
  name: 'ZFormItem',
  components: {},
  inject: ['model', 'rules'],
  props: {
    label: {
      //标签
      type: String,
      default: () => {
        return ''
      }
    },
    prop: {
      //校验属性
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      errorMessage: '',
      validator: null
    }
  },
  computed: {
    c_class() {
      return this.label ? 'validate' : 'no-label-validate'
    },
    c_need() {
      return (
        this.rules[this.prop] &&
        this.rules[this.prop].find(item => item.required)
      )
    }
  },
  watch: {},
  methods: {
    validate(trigger) {
      console.log("trigger",trigger)
      if(!this.rules[this.prop])return
      //rule中没有trigger属性，input2个事件都触发，有trigger属性只匹配trigger事件触发
      let ruleList = this.rules[this.prop].filter(item => {
        if (!item.trigger||trigger=="") return true
        if (Array.isArray(item.trigger)) {
          return item.trigger.indexOf(trigger) > -1
        } else {
          return item.trigger === trigger
        }
      }).map(item => ({ ...item }))
      //要删除不然会出问题。。。。。。
      ruleList.forEach(element => {
        delete element.trigger
      })
      let descriptor = {
        [this.prop]: ruleList
      }
      this.validator = new schema(descriptor)
      return this.validator.validate(
        { [this.prop]: this.model[this.prop] },
        (errors, fields) => {
          if (errors) {
            this.errorMessage = errors.find(item => item.message).message
          } else {
            this.errorMessage = ''
          }
        }
      )
    }
  },
  created() {},
  mounted() {
    this.$on('validate', trigger => {
      this.validate(trigger)
    })
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-form-item {
  margin: 20px 0;
  .label-wrap {
    width: 80px;
    font-size: 14px;
    color: #333;
    .need {
      margin-right: 4px;
      color: #f40;
    }
  }
  .content {
    flex: 1;
  }
  .validate {
    margin-top: 10px;
    margin-left: 94px;
    font-size: 14px;
    color: #ee0a24;
  }
  .no-label-validate {
    margin-top: 10px;
    font-size: 14px;
    color: #ee0a24;
  }
}
</style>