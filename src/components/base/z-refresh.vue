<!--  -->
<template>
  <div class="z-refresh" :style="c_style">
    <div class="loading-wrap">
      <slot name="loadingSlot">
        <div class="loading-content flex aligin-center justify-center">
          <z-icon class="loading" iconName="i-loading"></z-icon>
        </div>
      </slot>
    </div>
    <div
      class="refresh-content"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
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
  data() {
    return {
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      direction: 'down',
      maxHeight: 0,
      distance:0
    }
  },
  computed: {
    c_style() {
      return { transform: `translate3d(0,${this.distance}px, 0)` }
    }
  },
  watch: {},
  methods: {
    touchend() {
      this.resetTouchStatus()
    },
    touchstart(ev) {
      ev = ev || event
      this.resetTouchStatus()
      this.startX = ev.touches[0].clientX
      this.startY = ev.touches[0].clientY
      //   console.log('startX', this.startX, 'startX', this.startY)
    },
    touchmove(ev) {
      ev = ev || event
      const touch = ev.touches[0]
      this.deltaX = touch.clientX - this.startX
      if (this.offsetY >= this.maxHeight) {
        if (this.offsetY < this.maxHeight * 2) {
          this.deltaY = this.maxHeight + (this.offsetY - this.maxHeight) / 2
          console.log("deltaY",this.deltaY)
        } else {
          this.deltaY =
            this.maxHeight * 1.5 + (this.offsetY - this.maxHeight * 2) / 4
        }
      } else {
        this.deltaY = touch.clientY - this.startY
      }

      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)
      this.direction =
        this.direction || getDirection(this.offsetX, this.offsetY)
      //   console.log(
      //     'deltaX',
      //     this.deltaX,
      //     'deltaY',
      //     this.deltaY,
      //     'offsetX',
      //     this.offsetX,
      //     'offsetY',
      //     this.offsetY,
      //     'direction',
      //     this.direction
      //   )
    },
     ease(distance) {
      const headHeight = +this.headHeight;

      if (distance > headHeight) {
        if (distance < headHeight * 2) {
          distance = headHeight + (distance - headHeight) / 2;
        } else {
          distance = headHeight * 1.5 + (distance - headHeight * 2) / 4;
        }
      }

      return Math.round(distance);
    },

    resetTouchStatus() {
      this.direction = ''
      this.deltaX = 0
      this.deltaY = 0
      this.offsetX = 0
      this.offsetY = 0
    }
  },
  created() {},
  mounted() {
    let loadingWrap = this.$el.querySelector('.loading-wrap')
    this.maxHeight = loadingWrap.offsetHeight
  },
  updated() {}, //生命周期 - 更新之后
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
    }
    .loading {
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