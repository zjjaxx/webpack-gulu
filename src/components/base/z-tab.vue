<!--  -->
<template>
  <span class="z-tab flex aligin-center justify-center" :class="c_class">
    <span>{{title}}</span>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      //tab 名
      type: String,
      default: () => {
        return ''
      },
      required: true
    }
  },
  components: {
  },
  data() {
    return {
      isActive:false
    }
  },
  computed: {
     c_class(){
      return this.isActive?'active-style':''
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
.z-tab {
  min-width: 84px;
  flex-shrink: 0;
  height: 100%;
  flex-grow: 1;
  color: @tab-color;
}
.active-style{
  color:@tab-active-color;
}
</style>