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
      <z-input v-model="value"></z-input>
      <z-title title="输入框+错误提示"></z-title>
      <z-input v-model="value_two" :placeholder="placeholder_two" :errorTip="errorTip_two"></z-input>
      <z-title title="输入框+只读"></z-title>
      <z-input v-model="value_three" :placeholder="placeholder_two" :disabled="disabled_three"></z-input>
      <z-title title="输入框+数字"></z-title>
      <z-input v-model="value_four" :type="type_four" :placeholder="placeholder_four"></z-input>
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
      placeholder_four: '请输入数字'
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
  height:100%;
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