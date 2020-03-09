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
    max: {
      type: Number,
      default: () => {
        return 100
      }
    },
    value: {
      //选中数组
      type: Array,
      default: () => {
        return []
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
    checkAll() {
      let nameList = this.$children.map(item => item.name)
      nameList.forEach(element => {
        if (!this.value.includes(element)) {
          this.value.push(element)
        }
      })
    },
    toggleAll() {
      let nameList = this.$children.map(item => item.name)
      nameList.forEach(element => {
        if (!this.value.includes(element)) {
          this.value.push(element)
        }
        else{
          let index=this.value.findIndex(item=>item==element)
          this.value.splice(index,1)
        }
      })
    }
  },
  created() {},
  mounted() {
    this.eventBus.$on('checkedChange', (name, type) => {
      if (type == 'remove') {
        let index = this.value.findIndex(item => item == name)
        if (index != -1) {
          this.value.splice(index, 1)
        }
      } else {
        if (this.max <= this.value.length) {
          return
        }
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