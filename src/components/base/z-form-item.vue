<!--  -->
<template>
  <div class="z-form-item">
    <div class="flex aligin-center">
      <div class="label-wrap flex aligin-center justify-center" v-if="label">
        <span class="need">*</span>
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
    }
  },
  watch: {},
  methods: {
    validate(value) {
      let descriptor = {
        [this.prop]: this.rules[this.prop]
      }
      this.validator = new schema(descriptor)
      this.validator
        .validate({ [this.prop]: this.model[this.prop] })
        .then(() => {
           this.errorMessage=""
        }) 
        .catch(({ errors, fields }) => {
          this.errorMessage=errors[0].message
        })
    }
  },
  created() {},
  mounted() {
    this.$on('validate', this.validate)
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
    margin-left: 80px;
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