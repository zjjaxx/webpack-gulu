<!--  -->
<template>
  <div class="z-row" :class="[type=='flex'?'flex':'clear-fix']" :style="cssStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide: function() {
    return {
      getGutter: this._getGutter
    }
  },
  props: {
    gutter: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: () => {
        return ''
      }
    },
    justify: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    _getGutter() {
      return this.gutter
    },
    cssStyle() {
      return {
        marginLeft: `-${parseInt(this.gutter) / 2}px`,
        marginRight: `-${parseInt(this.gutter) / 2}px`,
        justifyContent: this.justify
      }
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
.z-row {
 
}
</style>