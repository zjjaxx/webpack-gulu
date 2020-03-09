<!--  -->
<template>
  <div class="z-checkbox-group" :class="c_class">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  provide() {
    return {
      _event: this.eventBus
    }
  },
  props: {
    value: {
      //选中name
      type: [String,Number],
      default: () => {
        return ""
      }
    },
    direction: {
      type: String,
      default: () => {
        return 'vertical'
      },
      validator: value => value == 'horizontal' || value == 'vertical'
    }
  },
  components: {},
  data() {
    return {
      eventBus: new Vue()
    }
  },
  computed: {
    c_class() {
      return this.direction == 'vertical' ? '' : 'flex aligin-center'
    }
  },
  watch: {},
  methods: {
  },
  created() {},
  mounted() {
    this.eventBus.$on('checkedChange', (name) => {
      this.$emit('change', name)
    })
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-checkbox-group {
}
</style>