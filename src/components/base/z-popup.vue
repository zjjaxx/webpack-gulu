<!--  -->
<template>
  <div>
    <div class="z-popup-mask" :class="c_class" v-show="show" @click="$emit('change',false)">
      <div class="middle-wrap" v-if="position=='middle'" @click.stop>
        <slot>
          <span>内容</span>
        </slot>
      </div>
    </div>
    <transition name="top">
      <div class="top-wrap" v-if="position=='top'&&show" @click.stop>
        <slot></slot>
      </div>
    </transition>
    <transition name="bottom">
      <div
        class="bottom-wrap"
        v-if="position=='bottom'&&show"
        @click.stop
        :class="c_bottom_wrap_class"
      >
        <slot></slot>
        <span class="close-wrap" v-if="closeIcon" @click="$emit('change',false)">
          <slot name="closeIcon">
            <z-icon iconName="i-close"></z-icon>
          </slot>
        </span>
      </div>
    </transition>
    <transition name="left">
      <div class="left-wrap" v-if="position=='left'&&show" @click.stop>
        <slot></slot>
      </div>
    </transition>
    <transition name="right">
      <div class="right-wrap" v-if="position=='right'&&show" @click.stop>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ZPopup",
  model: {
    prop: "show",
    event: "change"
  },
  provide() {
    return {
      event: this
    };
  },
  props: {
    round: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    closeIcon: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    show: {
      type: Boolean,
      default: () => {
        return false;
      },
      required: true
    },
    position: {
      type: String,
      default: () => {
        return "middle";
      },
      validator: value =>
        value == "bottom" ||
        value == "left" ||
        value == "right" ||
        value == "top" ||
        value == "middle"
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    c_class() {
      return [
        this.position == "middle" ? "flex justify-center aligin-center" : ""
      ];
    },
    c_bottom_wrap_class() {
      return this.round ? "bottom-round" : "";
    }
  },
  watch: {
    show(newValue, oldValue) {
      if (newValue) {
        this.$emit("popupShow");
      }
    }
  },
  methods: {
    open() {
      document.body.classList.add("z-overflow-hidden");
    },
    close() {
      document.body.classList.remove("z-overflow-hidden");
    }
  },
  created() {},
  mounted() {},
  updated() {
    if (this.show) {
      this.open();
    } else {
      this.close();
    }
  }, //生命周期 - 更新之后
  beforeDestroy() {
    this.close();
  },
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.z-popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  background: rgba(0, 0, 0, 0.3);
  animation: mask-in 0.3s ease;
}
.middle-wrap {
  padding: @popup-padding-top-bottom @popup-padding-left-right;
  background: #fff;
  animation: middle-in 0.3s ease reverse;
}
.middle-in {
  animation: middle-in 0.3s ease;
}
.top-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: @popup-top-bottom-height;
  background: #fff;
  z-index: 310;
}
.top-enter-active {
  animation: top-in 0.3s ease;
}
.top-leave-active {
  animation: top-in 0.3s ease reverse;
}
.bottom-wrap {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  min-height: @popup-top-bottom-height;
  background: #fff;
  z-index: 310;
}
.bottom-enter-active {
  animation: bottom-in 0.3s ease;
}
.bottom-leave-active {
  animation: bottom-in 0.3s ease reverse;
}
.left-wrap {
  position: fixed;
  left: 0;
  top: 0;
  min-width: @popup-left-right-width;
  height: 100%;
  background: #fff;
  z-index: 310;
}
.left-enter-active {
  animation: left-in 0.3s ease;
}
.left-leave-active {
  animation: left-in 0.3s ease reverse;
}
.right-wrap {
  position: fixed;
  right: 0;
  top: 0;
  min-width: @popup-left-right-width;
  height: 100%;
  background: #fff;
  z-index: 310;
}
.right-enter-active {
  animation: right-in 0.3s ease;
}
.right-leave-active {
  animation: right-in 0.3s ease reverse;
}
.close-wrap {
  position: absolute;
  top: 16px;
  right: 16px;
  height: 22px;
  width: 22px;
}
.bottom-round {
  border-top-left-radius: @popup-border-top-left-right-radius;
  border-top-right-radius: @popup-border-top-left-right-radius;
}
</style>