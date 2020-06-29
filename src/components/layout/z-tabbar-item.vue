<!--  -->
<template>
  <div @click="clickEvent" class="menu-item flex justify-center aligin-center flex-column">
    <slot name="icon" :active="c_active">
      <z-icon v-bind="iconConfig" :color="c_active?activeColor:inactiveColor"></z-icon>
    </slot>
    <slot name="name" :active="c_active">
      <div class="mt-3 f-12">{{name}}</div>
    </slot>
  </div>
</template>

<script>
import ZIcon from '../base/z-icon.vue'
import Mixin from '../../mixin/emitter.js'
export default {
  mixins: [Mixin],
  inject: ['inactiveColor', 'activeColor', 'route',"parent"],
  props: {
    //标签名称，作为匹配的标识符
    label:{
      type:String,
      default: () => {
        return ""
      }
    },
    //tab 标签名
    name: {
      type: String,
      default: () => {
        return ''
      }
    },
    //图标配置参数
    iconConfig: {
      type: Object,
      default: () => {
        return {
          //大小
          size: '16',
          //font-family
          classPrefix: 'iconfont',
          //icon 名称
          iconName: 'wancheng',
          //右上角的小红点
          dot: false,
          //角标
          info: 10,
          //颜色
          color: '#333'
        }
      }
    },
    //路由参数配置
    to: {
      type: String,
      default: () => {
        return '/home'
      }
    },
    //是否使用replace跳转路由
    replace: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  components: { ZIcon },
  data() {
    return {}
  },
  computed: {
    c_index(){
      return this.getParent('ZTabbar').$children.indexOf(this)
    },
    //判断是否被选中激活
    c_active() {
      if (this.route) {
        return this.$route.path.match(this.to)
      } else {
        return this.parent.active === this.label || this.parent.active ===this.c_index
      }
    }
  },
  watch: {},
  methods: {
    clickEvent() {
      //如果不是路由模式 用label或则index来匹配active 并调用父组件派发事件
      if (!this.route) {
        this.dispatch('ZTabbar', 'change', this.label || this.c_index)
      }
      //如果是路由模式，用to匹配路由，并且路由跳转
      else {
        if (this.replace) {
          this.$router.replace(this.to)
        } else {
          this.$router.push(this.to)
        }
      }
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.menu-item {
  flex: 1;
  height: 100%;
  font-size: 14px;
}
.mt-3 {
  margin-top: 3px;
}
.f-12 {
  font-size: 12px;
}
</style>