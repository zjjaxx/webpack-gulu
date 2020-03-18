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
      v-if="iconName&&status=='common'"
      :class="classStyle"
      :color="this.type == 'custom' ?'#fff':'' "
    ></z-icon>
    <span class="loading" :class="classStyle">
      <slot v-if="status=='loading'" name="loading-icon">
        <z-icon icon-name="i-loading" color="#fff"></z-icon>
      </slot>
    </span>
    <span v-if="status=='complate'" :class="classStyle">
      <slot name="complate-icon">
        <z-icon color="#fff" icon-name="i-wancheng"></z-icon>
      </slot>
    </span>
    <slot v-if="!turnOnSuper"></slot>
    <span class="super-wrap" :style="c_width+'px'" v-else>
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
  watch: {},
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
        this.status == 'loading'
          ? 'loading'
          : this.status == 'complate'
          ? 'done'
          : ''
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
        border: this.bg ? 'none' : '',
        borderRadius: this.rect ? '0' : ''
      }
    }
  },
  props: {
    rect: {
      //无圆角
      type: Boolean,
      default: () => {
        return false
      }
    },
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
    status: {
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
  data() {
    return {
      c_width: 0
    }
  },
  methods: {
    comput_width() {
      let itemList = this.$el.querySelectorAll('.super-wrap .item')
      if (itemList.length) {
        itemList=Array.prototype.slice.call(itemList)
        let widthList = itemList.map(item => {
          let cssObject = window.getComputedStyle(item)
          return cssObject.width
        })
        console.log(widthList)
        this.c_width = Math.max(widthList)
        console.log("this.c_width",this.c_width)
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
    transform-origin: 50% 50%;
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
    .item {
      position: absolute;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      bottom: 0;
      white-space: nowrap;
      height: 100%;
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
.loading {
  .super-wrap {
    transform: rotateX(90deg);
  }
}
.done {
  background: #3fdc75;
  .super-wrap {
    transform: rotateX(180deg);
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