<!--  -->
<template>
  <div class="z-tab-panel" v-show="c_active">
    <slot></slot>
  </div>
</template>

<script>
import mixin from '../../mixin/emitter'
export default {
  props: {
    //tab title
    title: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  name: 'ZTabPanel',
  mixins: [mixin],
  inject: ['tabParent'],
  components: {},
  data() {
    return {}
  },
  computed: {
    c_index() {
      return this.getChildren(this.tabParent, 'ZTabPanel').indexOf(this)
    },
    c_active() {
      return this.tabParent.active == this.c_index
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {
    console.log('ZTabPanel updated')
    // this.getParent('ZTabs').$emit('tabUpdate')
  }, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>