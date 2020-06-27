<!--
 * @Author: zjj
 * @Date: 2020-01-13 14:21:50
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-13 14:27:57
 -->
<!--  -->
<template>
  <div class="z-icon-wrap">
    <i :class="[classPrefix,`${classPrefix}-${iconName}`]" :style="{fontSize:size+'px',color:color}"></i>
    <span class="dot" v-if="dot"></span>
    <span class="z-badge" v-if="info">{{info}}</span>
  </div>
</template>

<script> 
export default {
  components: {},
  props: {
    //大小
    size: {
      type: [Number, String],
      default: () => {
        return '16'
      }
    },
    //font-family
    classPrefix: {
      type: String,
      default: () => {
        return 'iconfont'
      }
    },
    //icon 名称
    iconName: {
      type: String,
      default: () => {
        return ''
      },
      required: true
    },
    //右上角的小红点
    dot: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //角标
    info: {
      type: [Number, String],
      default: () => {
        return 0
      }
    },
    //颜色
    color: {
      type: String,
      default: () => {
        return '#333'
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
.z-icon-wrap {
  position: relative;
  .icon {
    display: block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
  .dot {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 5px;
    height: 5px;
    background: red;
    border-radius: 50%;
  }
  .z-badge {
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    min-width: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    background-color: @z-badge-bg;
    border-radius: 50%;
    transform: translate(50%, -50%);
  }
}
</style>