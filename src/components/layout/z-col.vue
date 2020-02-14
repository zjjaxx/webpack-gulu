<!--  -->
<template>
  <div class="z-col" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  inject: ['getGutter'],
  props: {
    span: {
      type: [String, Number],
      required: true
    },
    offset: {
      type: [String, Number]
    }
  },
  data() {
    return {}
  },
  computed: {
    colStyle() {
      return {
        width: (parseInt(this.span) * 100) / 24 + '%',
        marginLeft: (parseInt(this.offset) * 100) / 24 + '%',
        paddingLeft:`${parseInt(this.getGutter)/2}px`,
        paddingRight:`${parseInt(this.getGutter)/2}px`
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
.z-col {
  float: left;
  box-sizing: border-box;
}
</style>