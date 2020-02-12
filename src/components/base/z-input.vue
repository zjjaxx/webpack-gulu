<!--  -->
<template>
  <div class="z-input-wrap aligin-center" :class="[inputAttr.errorTip?'error':'']">
    <input class="z-input" v-bind="inputAttr" v-on="c_inputListener" />
    <div  v-if="inputAttr.errorTip">
      <span class="tip-error">{{inputAttr.errorTip}}</span>
    </div>
    <div class="clear flex justify-center aligin-center" @click="$emit('input','')">
        <z-icon v-show="inputAttr.value &&!inputAttr.disabled" iconName="i-error" ></z-icon>
    </div>
  
  </div>
</template>

<script>
import ZIcon from "./z-icon.vue"
export default {
  components: { ZIcon},
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
          },
          focus:function(event){
            event.target.scrollIntoView()
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
.clear /deep/ .icon{
  fill: gray;
}
.z-input-wrap {
  position: relative;
  font-size: 14px;
  * {
    margin-right: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
  .z-input {
    width: 100%;
    padding: 0 28px 0 8px;
    height: var(--button-height);
    border: 1px solid var(--border-color);
    font-size: 14px;
    line-height: var(--button-height);
    border-radius: var(--border-radius);
    box-sizing: border-box;
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
  .clear{
    position: absolute;
    right: 0;
    top: 0;
    height: 32px;
    width: 28px;
  }
}
.error {
  .z-input {
    border-color: red;
  }
}

</style>