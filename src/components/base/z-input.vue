<!--  -->
<template>
  <div class="input-wrap aligin-center" :class="[inputAttr.errorTip?'error':'']">
    <input class="z-input" v-bind="inputAttr" v-on="c_inputListener" />
    <template v-if="inputAttr.errorTip">
      <ZIcon iconName="i-error" class="icon-error"></ZIcon>
      <span class="tip-error">{{inputAttr.errorTip}}</span>
    </template>
  </div>
</template>

<script>
export default {
  components: { },
  props: {
    inputAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
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
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.input-wrap {
  display: inline-flex;
  font-size: 14px;
  * {
    margin-right: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
  .z-input {
    flex: 1;
    padding: 0 8px;
    height: var(--button-height);
    border: 1px solid var(--border-color);
    font-size: 14px;
    line-height: var(--button-height);
    border-radius: var(--border-radius);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:focus {
      outline: none;
    }
    &[disabled] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  .z-input[disabled].z-input::placeholder {
    color: #ccc;
  }
  .icon-error {
    fill: red;
  }
  .tip-error {
    color: red;
  }
}
.error {
  .z-input {
    border-color: red;
  }
}
</style>