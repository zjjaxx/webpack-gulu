<!--
 * @Author: zjj
 * @Date: 2020-01-13 09:04:56
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-17 16:31:14
 -->

<template>
  <button class="z-button" @click="$emit('click')">
    <z-icon
      :iconName="iconName"
      v-if="iconName&&!isLoading"
      :class="[iconPosition=='right'?'icon-right':'icon-left']"
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
import ZIcon from "./z-icon.vue"
export default {
  components: {ZIcon},
  props: {
    isLoading: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    iconName: {
      type: String,
      default: () => {
        return ''
      }
    },
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
<style lang='less'>
.z-button {
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  transition: all 0.3s ease;
  height: var(--button-height);
  font-size: var(--font-size);
  line-height: var(--font-size);
  background: var(--button-bg);
  border-radius: var(--border-radius);
  color: var(--color);
  border: 1px solid var(--border-color);
  &:active {
    background: var(--button-active-bg);
    transform: scale(0.9, 0.9);
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:focus {
    outline: none;
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
</style>