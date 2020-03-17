<!--
 * @Author: zjj
 * @Date: 2020-01-13 09:04:56
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 17:56:14
 -->

<template>
  <button :class="c_type" :style="c_style" @click="$emit('click')">
    <z-icon
      :iconName="iconName"
      v-if="iconName&&buttonStatus=='common'"
      :class="classStyle"
      :color="this.type == 'custom' ?'#fff':'' "
    ></z-icon>
    <slot v-if="buttonStatus=='loading'" name="loading-icon">
      <z-icon
        class="loading"
        icon-name="i-loading"
        color="#fff"
        :class="[iconPosition=='right'?'loading-right':'']"
      ></z-icon>
    </slot>
    <slot v-else-if="buttonStatus=='complate'" name="complate-icon">
      <z-icon
        color="#3fdc75"
        class="loading"
        icon-name="i-complate"
        :class="[iconPosition=='right'?'loading-right':'']"
      ></z-icon>
    </slot>

    <slot v-if="!turnOnSuper"></slot>
    <span class="super-wrap" v-else>
      <span class="item">{{commonText}}</span>
      <span class="item">{{loadingText}}</span>
      <span class="item">{{complateText}}</span>
    </span>
  </button>
</template>

<script>
import ZIcon from './z-icon.vue'
export default {
  components: { ZIcon },
  computed: {
    //button style
    c_type() {
      return [
        this.type == 'default' ? 'z-button' : 'z-custom-button',
        this.size == 'small'
          ? 'size-small'
          : this.size == 'large'
          ? 'size-large'
          : '',
        this.block ? 'button-block' : '',
        this.buttonStatus=='loading'?'loading':this.buttonStatus=='done'?'done':''
      ]
    },
    //icon style
    classStyle() {
      return [this.iconPosition == 'right' ? 'icon-right' : 'icon-left']
    },
    //自定义背景
    c_style() {
      return {
        background: this.bg,
        color: this.bg ? '#fff' : '',
        border: this.bg ? 'none' : ''
      }
    }
  },
  props: {
    //块级元素
    block: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //类型
    type: {
      type: String,
      default: () => {
        return 'default'
      },
      validator: value => value == 'default' || value == 'custom'
    },
    //尺寸
    size: {
      type: String,
      default: () => {
        return 'common'
      },
      validator: value =>
        value == 'small' || value == 'large' || value == 'common'
    },
    //是否下载状态
    buttonStatus: {
      type: String,
      default: () => {
        return 'common'
      },
      validator: value =>
        value == 'common' || value == 'loading' || value == 'complate'
    },
    //是否开启超级按钮
    turnOnSuper: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //完成文本
    complateText: {
      type: String,
      default: () => {
        return ''
      }
    },
    //默认文本
    commonText: {
      type: String,
      default: () => {
        return ''
      }
    },
    //加载文本
    loadingText: {
      type: String,
      default: () => {
        return ''
      }
    },
    //icon
    iconName: {
      type: String,
      default: () => {
        return ''
      }
    },
    //icon 位置
    iconPosition: {
      type: String,
      default: () => {
        return 'left'
      },
      validator: value => {
        return value == 'left' || value == 'right'
      }
    },
    bg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  mounted() {
    document.body.addEventListener('touchstart', function() {})
  }
}
</script>
<style lang='less' scoped>
.z-button /deep/ .fill-white.icon {
  fill: #fff;
}
.z-custom-button /deep/ .fill-white.icon {
  fill: #fff;
}
.z-button,
.z-custom-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  transition: all 0.3s ease;
  border-radius: 4px;
  &:disabled {
    opacity: 0.6;
  }
  .icon-left {
    margin-left: 0;
    margin-right: 0.3em;
  }
  .icon-right {
    margin-left: 0.3em;
    order: 2;
  }
  .loading {
    margin-left: 0;
    margin-right: 0.3em;
    animation: loading 2s infinite linear;
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .loading-right {
    margin-left: 0.3em;
    margin-right: 0;
    order: 2;
  }
  .super-wrap {
    display: inline-block;
    height: @button-font-size;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    width: 50px;
    .item {
      position: absolute;
      backface-visibility: hidden;
      top: 0;
      bottom: 0;
      width: 100%;
      transform-origin: 50% 50%;
      transform: rotateX(0deg) translateZ(10px);
      &:nth-child(2) {
        transform: rotateX(-90deg) translateZ(10px);
      }
      &:nth-child(3) {
        transform: rotateX(-180deg) translateZ(10px);
      }
    }
  }
  .loading{
    .super-wrap{
      transform: rotateX(90deg);
    }
  }
  .done{
    .super-wrap{
       transform: rotateX(180deg);
    }
  }
}
.z-button {
  height: @button-height;
  font-size: @button-font-size;
  line-height: @button-font-size;
  background: @button-bg;
  color: @button-color;
  border: 1px solid @button-border-color;
  &:active {
    background: @button-active-bg;
    transform: scale(0.9, 0.9);
  }
}
.z-custom-button {
  height: @button-height;
  font-size: @button-custom-font-size;
  line-height: @button-custom-font-size;
  background: @button-custom-bg;
  color: @button-custom-color;
  &:active {
    background: @button-custom-active-bg;
    transform: scale(0.9, 0.9);
  }
}
.size-small {
  height: @button-mini-height;
}
.size-large {
  height: @button-large-height;
}
.button-block {
  display: flex;
  width: 100%;
  border-radius: 0;
}
</style>