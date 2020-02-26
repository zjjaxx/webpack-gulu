<!--  -->
<template>
  <div class="input-container">
    <z-header title="输入框">
      <template v-slot:left>
        <div class="left-wrap flex justify-center aligin-center" @click="$router.back()">
          <z-icon icon-name="i-left"></z-icon>
        </div>
      </template>
    </z-header>
    <z-body>
      <z-title title="输入框+placeholder"></z-title>
      <z-input v-model="inputAttr_one.value" :inputAttr="inputAttr_one"></z-input>
      <z-title title="输入框+错误提示"></z-title>
      <z-input v-model="inputAttr_two.value" :inputAttr="inputAttr_two"></z-input>
      <z-title title="输入框+只读"></z-title>
      <z-input v-model="inputAttr_three.value" :inputAttr="inputAttr_three"></z-input>
      <z-title title="输入框+数字"></z-title>
      <z-input v-model="inputAttr_four.value" :inputAttr="inputAttr_four"></z-input>
    </z-body>
  </div>
</template>

<script>
import ZInput from '../../components/base/z-input.vue'
export default {
  components: { ZInput },
  data() {
    return {
      inputAttr: {
        value: ''
      },
      inputAttr_one: {
        value: '',
        placeholder: '请输入地址'
      },
      inputAttr_two: {
        value: '',
        placeholder: '请输入手机号',
        errorTip: '手机号格式有误'
      },
      inputAttr_three: {
        value: '金华婺城区',
        disabled: true
      },
      inputAttr_four: {
        value: '',
        type: 'number',
        placeholder: '请输入数字'
      }
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
  height: calc(100% + 50px);
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
}
</style>