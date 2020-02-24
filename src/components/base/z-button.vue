<!--
 * @Author: zjj
 * @Date: 2020-01-13 09:04:56
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 17:20:41
 -->

<template>
  <button :class="c_type" @click="$emit('click')">
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
import ZIcon from "./z-icon.vue";
export default {
  components: { ZIcon },
  computed: {
    c_type() {
      return this.type == "default" ? "z-button" : "z-custom-button";
    }
  },
  props: {
    type: {
      type: String,
      default: () => {
        return "default";
      },
      validator: value => value == "default" || value == "custom"
    },
    isLoading: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    iconName: {
      type: String,
      default: () => {
        return "";
      }
    },
    iconPosition: {
      type: String,
      default: () => {
        return "left";
      },
      validator: value => {
        return value == "left" || value == "right";
      }
    }
  },
  mounted() {
    document.body.addEventListener("touchstart", function() {});
  }
};
</script>
<style lang='less' scoped>
.z-button,.z-custom-button{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  transition: all 0.3s ease;
  &:disabled{
    opacity: 0.7;
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
.z-custom-button {
  font-size: @button-custom-font-size;
  line-height: @button-custom-font-size;
  background: @button-custom-bg;
  color: @button-custom-color;
  &:active {
    background: @button-custom-active-bg;
    transform: scale(0.9, 0.9);
  }
}
</style>