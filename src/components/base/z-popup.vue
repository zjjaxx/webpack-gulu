<!--  -->
<template>
  <div class="z-popup-mask" :class="c_class" v-if="show" @click="$emit('change',false)">
    <div class="middle-wrap" v-if="position=='middle'" @click.stop>
      <slot>
        <span>内容</span>
      </slot>
    </div>
    <div class="top-wrap" v-else-if="position=='top'" @click.stop>
      <slot></slot>
    </div>
    <div
      class="bottom-wrap"
      v-else-if="position=='bottom'"
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
    <div class="left-wrap" v-else-if="position=='left'" @click.stop>
      <slot></slot>
    </div>
    <div class="right-wrap" v-else-if="position=='right'" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    round: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    closeIcon: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    show: {
      type: Boolean,
      default: () => {
        return false
      },
      required: true
    },
    position: {
      type: String,
      default: () => {
        return 'middle'
      },
      validator: value =>
        value == 'bottom' ||
        value == 'left' ||
        value == 'right' ||
        value == 'top' ||
        value == 'middle'
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    c_class() {
      return [
        this.position == 'middle' ? 'flex justify-center aligin-center' : ''
      ]
    },
    c_bottom_wrap_class() {
      return this.round ? 'bottom-round' : ''
    }
  },
  watch: {},
  methods: {
    open() {
      document.body.classList.add('z-overflow-hidden')
    },
    close() {
      document.body.classList.remove('z-overflow-hidden')
    }
  },
  created() {},
  mounted() {},
  updated() {
    if (this.show) {
      this.open()
    } else {
      this.close()
    }
  }, //生命周期 - 更新之后
  beforeDestroy() {
     this.close()
  },
  destroyed() {} //生命周期 - 销毁完成
}
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
  .middle-wrap {
    padding: @popup-padding-top-bottom @popup-padding-left-right;
    background: #fff;
    animation: show-out 0.3s ease;
  }
  .top-wrap {
    height: @popup-top-bottom-height;
    background: #fff;
    animation: top-in 0.3s ease;
  }
  .bottom-wrap {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: @popup-top-bottom-height;
    background: #fff;
    animation: bottom-in 0.3s ease;
  }
  .left-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: @popup-left-right-width;
    height: 100%;
    background: #fff;
    animation: left-in 0.3s ease;
  }
  .right-wrap {
    position: absolute;
    right: 0;
    top: 0;
    width: @popup-left-right-width;
    height: 100%;
    background: #fff;
    animation: right-in 0.3s ease;
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
}
</style>