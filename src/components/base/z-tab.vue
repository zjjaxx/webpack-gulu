<!--  -->
<template>
  <div
    :class="['z-tab','flex', 'aligin-center', 'justify-center',c_active? 'active-style' : '']"
    @click="tabClick"
  >
    <slot name="title">
      <span>{{title}}</span>
    </slot>
  </div>
</template>

<script>
import mixin from '../../mixin/emitter'
export default {
  inject: ['tabParent'],
  mixins: [mixin],
  name: 'ZTab',
  props: {
    //tab 根据 name 来匹配active
    name: {
      type: String,
      default: () => {
        return ''
      }
    },
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
      return this.getChildren(this.tabParent, 'ZTab').indexOf(this)
    },
    c_active() {
      return (
        this.tabParent.active === this.name ||
        this.tabParent.active == this.c_index
      )
    }
  },
  watch: {},
  methods: {
    tabClick() {
      console.log("name",this.name)
      this.getParent('ZTabs').$emit('change', this.name || this.c_index)
    }
  },
  created() {},
  mounted() {
    console.log('z-tab mounted')
  },
  updated() {
    console.log('z-tab update')
    // this.getParent('ZTabs').$emit('tabUpdate')
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