<!--
 * @Author: zjj
 * @Date: 2020-01-13 09:04:56
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 17:56:14
 -->

<template>
  <button :class="c_type" @click="$emit('click')">
    <z-icon
      :iconName="iconName"
      v-if="iconName&&!isLoading"
      :class="classStyle"
      :color=" [this.type == 'custom' ?'#fff':''] "
    ></z-icon>
    <z-icon
      class="loading"
      v-if="isLoading"
      icon-name="i-loading"
      :class="[iconPosition=='right'?'loading-right':'']"
    ></z-icon>
    <slot></slot>
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
        this.block ? 'button-block' : ''
      ]
    },
    //icon style
    classStyle() {
      return [this.iconPosition == 'right' ? 'icon-right' : 'icon-left']
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
    isLoading: {
      type: Boolean,
      default: () => {
        return false
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