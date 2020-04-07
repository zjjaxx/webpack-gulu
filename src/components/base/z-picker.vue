<!--  -->
<template>
  <div class="z-picker">
    <div class="picker-toolbar flex justify-between aligin-center">
      <span class="cancel-btn">取消</span>
      <span class="confirm-btn">确认</span>
    </div>
    <div
      class="content"
      @touchstart.prevent="touchstart"
      @touchmove.prevent="touchmove"
      @touchend.prevent="touchend"
    >
      <div id="selected" class="selected border-top-1px border-bottom-1px"></div>
      <div id="scrollContent" :style="c_style" class="scroll-content">
        <template v-for="(item,index) in columns">
          <div class="scroll-item">{{item}}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {scrollTo} from "../../utils/animate"
import Vue from 'vue'
export default {
  inject: {
    event: {
      default: () => {
        return new Vue()
      }
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => {
        return []
      },
      required: true
    }
  },
  components: {},
  data() {
    return {
      startY: 0,
      deltaY: 0,
      distance: 0,
      minScrollDistance: 0,
      maxScrollDistance: 0
    }
  },
  computed: {
    c_style() {
      return `transform: translate3d(0, ${this.distance}px, 10px);`
    }
  },
  watch: {},
  methods: {
    calcDistance() {
      this.minScrollDistance = document.getElementById('selected').offsetHeight
      this.maxScrollDistance = document.getElementById(
        'scrollContent'
      ).offsetHeight
      this.distance = 2 * this.minScrollDistance
    },
    touchstart(ev) {
      ev = ev || event
      this.startY = ev.touches[0].clientY
    },
    touchmove(ev) {
      ev = ev || event
      this.deltaY = (ev.touches[0].clientY - this.startY)/4
      //向下
      if (this.deltaY > 0) {
        this.distance =
          this.distance + this.deltaY > this.minScrollDistance * 3
            ? this.minScrollDistance * 3
            : this.distance + this.deltaY
      } else {
        this.distance =
          this.deltaY > this.maxScrollDistance
            ? this.maxScrollDistance
            : this.deltaY
      }
    },
    touchend(ev) {
      ev = ev || event
      if(this.distance>=3*this.minScrollDistance){
          scrollTo.call(this,2*this.minScrollDistance-this.distance)
      }
    //   this.distance =
    //     Math.round(this.distance / this.minScrollDistance) *
    //     this.minScrollDistance
    }
  },
  created() {},
  mounted() {
    this.calcDistance()
    this.event.$on('popupShow', this.calcDistance)
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-picker {
  display: flex;
  flex-direction: column;
  height: 100%;
  .picker-toolbar {
    height: 44px;
    color: #1989fa;
    font-size: 14px;
    .cancel-btn,
    .confirm-btn {
      height: 100%;
      width: 60px;
      text-align: center;
      line-height: 44px;
    }
  }
  .content {
    height: 220px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    .selected {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 44px;
      transform: translateY(-50%);
    }
    .scroll-content {
      .scroll-item {
        height: 44px;
        text-align: center;
        font-size: 14px;
        line-height: 44px;
      }
    }
  }
}
</style>