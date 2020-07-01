<!--  -->
<template>
  <span
    @click="tabTap"
    class="z-tab flex aligin-center justify-center"
    :class="[c_active? 'active-style' : '']"
  >
    <slot name="title">
      <span>{{title}}</span>
    </slot>
  </span>
</template>

<script>
import mixin from '../../mixin/emitter'
export default {
  inject: ['tabParent'],
  mixins: [mixin],
  name: 'ZTab',
  props: {
    //tab 标签名
    title: {
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
    c_index() {
      return this.tabParent.$children.indexOf(this)
    },
    c_active() {
      return this.tabParent.active == this.c_index
    }
  },
  watch: {},
  methods: {
    tabTap() {
      this.getParent('ZTab').$emit('change', c_index)
    }
  },
  created() {},
  mounted() {},
  updated() {
    this.getParent('ZTabs').$emit('tabUpdate')
  }, //生命周期 - 更新之后
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
.active-style {
  color: @tab-active-color;
}
</style>