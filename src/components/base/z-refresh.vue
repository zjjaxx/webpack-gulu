<!--  -->
<template>
  <div class="z-refresh flex flex-column" :style="c_style">
    <div class="loading-wrap">
      <slot name="loadingSlot" :pullStatus="status" :pullDistance="distance" :hideHeight="maxHeight">
        <div class="loading-content flex aligin-center justify-center">
          <z-icon
            class="loading-icon"
            v-if="status=='loading'"
            color="#969799"
            iconName="i-loading"
          ></z-icon>
          <span class="loading-status">{{c_status}}</span>
        </div>
      </slot>
    </div>
    <div
      class="refresh-content"
      @touchstart.prevent="touchstart"
      @touchmove.prevent="touchmove"
      @touchend.prevent="touchend"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
const MIN_DISTANCE = 10
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }
  return ''
}
export default {
  components: {},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    successTip: {
      type: String,
      default: () => {
        return ''
      }
    },
    successDuration: {
      type: Number,
      default: () => {
        return 500
      }
    }
  },
  data() {
    return {
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      direction: 'vertical',
      maxHeight: 0,
      distance: 0,
      status: 'normal'
    }
  },
  computed: {
    touchable() {
      return this.status != 'loading' && this.status != 'success'
    },
    c_style() {
      return { transform: `translate3d(0,${this.distance}px, 0)` }
    },
    c_status() {
      switch (this.status) {
        case 'normal':
          return '下拉刷新'
        case 'pull':
          return '释放即可刷新...'
        case 'loading':
          return '加载中'
        case 'success':
          return this.successTip
      }
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (!newValue && this.successTip) {
        this.status = 'success'
        setTimeout(() => {
          this.resetTouchStatus()
        }, this.successDuration)
      } else if (!newValue) {
        this.resetTouchStatus()
      }
    }
  },
  methods: {
    touchend() {
      if (this.status == 'pull') {
        this.status = 'loading'
        this.distance = this.maxHeight
        this.$emit('change', true)
        this.$nextTick(() => {
          this.$emit('refresh', this.resetTouchStatus)
        })
      } else {
        this.resetTouchStatus()
      }
    },
    touchstart(ev) {
      ev = ev || event
      this.startX = ev.touches[0].clientX
      this.startY = ev.touches[0].clientY
    },
    touchmove(ev) {
      ev = ev || event
      const touch = ev.touches[0]
      this.deltaX = touch.clientX - this.startX
      this.deltaY = touch.clientY - this.startY
      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)
      this.direction =
        this.direction || getDirection(this.offsetX, this.offsetY)
      if (this.direction == 'vertical' && this.deltaY >= 0) {
        this.distance = this.ease(this.deltaY)
      }
    },
    ease(distance) {
      if (distance > this.maxHeight) {
        this.status = 'pull'
        if (distance < this.maxHeight * 2) {
          distance = this.maxHeight + (distance - this.maxHeight) / 2
        } else {
          distance = this.maxHeight * 1.5 + (distance - this.maxHeight * 2) / 4
        }
      }
      return Math.round(distance)
    },
    resetTouchStatus() {
      this.direction = ''
      this.deltaX = 0
      this.deltaY = 0
      this.offsetX = 0
      this.offsetY = 0
      this.distance = 0
      this.status = 'normal'
    }
  },
  created() {},
  mounted() {},
  updated() {
    let loadingWrap = this.$el.querySelector('.loading-wrap')
    this.maxHeight = loadingWrap.offsetHeight
  }, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-refresh {
  position: relative;
  .loading-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: translateY(-100%);
    .loading-content {
      height: 45px;
      .loading-status {
        font-size: 14px;
        color: #969799;
      }
    }
    .loading-icon {
      margin-right: 6px;
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
  }
}
</style>