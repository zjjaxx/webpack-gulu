<!--  -->
<template>
  <div class="form-container">
    <z-form :model="form" ref="Form" :rule="rule">
      <z-form-item prop="name" label="姓名">
        <z-input v-model="form.name"></z-input>
      </z-form-item>
      <z-form-item prop="age" label="年龄">
        <z-input v-model="form.age"></z-input>
      </z-form-item>
       <z-form-item prop="from">
        <z-input v-model="form.from" placeholder="请输入籍贯"></z-input>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
import ZForm from '../../components/base/z-form.vue'
import ZFormItem from '../../components/base/z-form-item.vue'
import ZInput from '../../components/base/z-input.vue'
export default {
  components: { ZForm, ZFormItem, ZInput },
  data() {
    return {
      form: {
        name: '小明',
        age: '',
        from:"",
      },
      rule: {}
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>