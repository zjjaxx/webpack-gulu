<template>
  <div :class="{'placeholder':isPlaceholder}">
    <div
      class="z-header"
      :style="{ background: this.bg,color: this.bg ? '#fff' : '' ,position:isFixed?'':'absolute'}"
    >
      <div class="left-wrap flex justify-center aligin-center" @click="$emit('leftEvent')">
        <slot name="left">
          <z-icon :color="this.bg ? '#fff' : ''"  :classPrefix="classPrefix"  iconName="arrowleft" v-if="leftArrow"></z-icon>
          <span class="back" v-if="leftText">{{leftText}}</span>
        </slot>
      </div>
      <div class="center flex justify-center aligin-center">
        <slot name="center">
          <div class="title ellipsis" >{{title}}</div>
        </slot>
      </div>
      <div class="right-wrap flex justify-center aligin-center">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ZIcon from '../base/z-icon.vue'
export default {
  components: {ZIcon},
  props: {
    classPrefix:{
      type:String,
      default: () => {
        return "gulu"
      }
    },
    //是否fixed布局
    isFixed:{
      type:Boolean,
      default:()=>{
        return true
      }
    },
    //是否显示返回箭头
    leftArrow:{
      type:Boolean,
      default:()=>{
        return false
      }
    },
    //左文字
    leftText:{
      type:String,
      default:()=>{
        return ""
      }
    },
    //是否有占位符空间
    isPlaceholder: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    //标题
    title: {
      type: String,
      default: () => {
        return '标题'
      }
    },
    //背景颜色
    bg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  z-index: 220;
  background: #fff;
  box-sizing: border-box;
  box-shadow:0px 0px 1px -1px rgba(191,191,191,1),0px 2px 3px 0px rgba(217,217,217,1),0px 3px 6px 2px rgba(240,240,240,1);
  .left-wrap {
    padding: 0 10px;
    position: absolute;
    left: 0;
    top: 0;
    min-width: 45px;
    height: 100%;
    box-sizing: border-box;
  }
  .back {
    margin-left: 5px;
    font-size: 16px;
    line-height: 45px;
  }
  .center {
    width: 100%;
    height: 100%;
    .title {
      font-size: 16px;
      height: 100%;
      line-height: 45px;
      max-width: 150px;
    }
  }
  .right-wrap {
    padding:0 10px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    min-width: 45px;
    box-sizing: border-box;
  }
}
.placeholder {
  position: relative;
  &::after {
    display: block;
    content: ' ';
    height: 45px;
    z-index: 220;
  }
}
</style>
