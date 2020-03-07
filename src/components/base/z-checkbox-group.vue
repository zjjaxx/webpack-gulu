<!--  -->
<template>
  <div class="z-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
const eventBus = new Vue()
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  provide() {
    return {
      _event: eventBus
    }
  },
  props: {
    value: {
      //选中数组
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    eventBus.$on('checkedChange', (name, type) => {
      if (type == 'remove') {
        let index = this.value.findIndex(item => item == name)
        if (index != -1) {
          this.value.splice(index, 1)
        }
      } else {
        this.value.push(name)
      }
      this.$emit('change', this.value)
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