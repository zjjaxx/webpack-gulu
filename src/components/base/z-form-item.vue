<!--  -->
<template>
  <div class="z-form-item">
    <div class="flex aligin-center">
      <div class="label-wrap flex aligin-center justify-center">
        <span class="need" v-if="label">*</span>
        <span class="label" v-if="label">{{label}}</span>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <div v-if="errorMessage" class="validate">{{errorMessage}}</div>
  </div>
</template>

<script>
export default {
  components: {},
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
      errorMessage: ''
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
.z-form-item {
  margin: 20px 0;
  .label-wrap {
    width: 80px;
    font-size: 14px;
    color: #333;
    .need{
        margin-right: 4px;
        color: #f40;
    }
  }
  .content {
    margin-right: 20px;
    flex: 1;
  }
}
</style>