<!--
 * @Author: zjj
 * @Date: 2020-01-13 14:21:50
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-13 14:27:57
 -->
<!--  -->
<template>
  <div class="z-icon-wrap">
    <svg class="icon" :style="classStyle" aria-hidden="true">
      <use :xlink:href="`#${iconName}`" />
    </svg>
    <span class="dot" v-if="dot"></span>
    <span class="z-badge" v-if="info">{{info}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    iconName: {
      //icon 名称
      type: String,
      default: () => {
        return ''
      }
    },
    dot: {
      //右上角的小红点
      type: Boolean,
      default: () => {
        return false
      }
    },
    info: {
      //角标
      type: [Number, String],
      default: () => {
        return 0
      }
    },
    color: {
      //颜色
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    classStyle() {
      return this.color && { fill: this.color }
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
.z-icon-wrap {
  position: relative;
  .icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
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
    line-height: 14px;
    text-align: center;
    background-color: @z-badge-bg;
    border: 1px solid #fff;
    border-radius: 16px;
    transform: translate(50%, -50%);
    transform-origin: 100%;
  }
}
</style>