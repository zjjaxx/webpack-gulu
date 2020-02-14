<!--  -->
<template>
  <div class="z-row clear-fix">
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
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    _getGutter(){
      console.log("this.gutter",this.gutter)
      return this.gutter
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