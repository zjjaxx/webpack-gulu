<!--  -->
<template>
  <div class="input-container">
    <z-header title="输入框" bg="linear-gradient(45deg, #0081ff, #1cbbb4)"></z-header>
    <z-body>
      <z-title title="基础用法"></z-title>
      <div class="input-wrap">
        <z-input v-model="value"></z-input>
      </div>
      <z-title title="带标签输入框"></z-title>
      <div class="input-wrap">
        <z-input label="姓名" v-model="value_two"></z-input>
      </div>
      <z-title title="只读输入框"></z-title>
      <div class="input-wrap">
        <z-input v-model="value_three" :placeholder="placeholder_two" :disabled="disabled_three"></z-input>
      </div>
      <z-title title="数字输入框"></z-title>
      <div class="input-wrap">
        <z-input
          label="身份证号码"
          v-model="value_four"
          :type="type_four"
          :placeholder="placeholder_four"
        ></z-input>
      </div>
      <z-title title="圆角输入框"></z-title>
      <div class="input-wrap">
        <z-input label="详细地址" v-model="value_five" round :placeholder="请输入详细地址"></z-input>
      </div>
    </z-body>
  </div>
</template>

<script>
import ZInput from '../../components/base/z-input.vue'
export default {
  components: { ZInput },
  data() {
    return {
      value: '',
      value_two: '',
      placeholder_two: '请输入手机号',
      errorTip_two: '手机号格式有误',
      value_three: '金华婺城区',
      disabled_three: true,
      value_four: '',
      type_four: 'number',
      placeholder_four: '请输入数字',
      value_five: ''
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
.input-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 210;
  .left-wrap {
    height: 100%;
  }
  .default-wrap {
    padding: 10px;
    * {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .input-wrap {
    margin: 10px 30px;
  }
}
</style>