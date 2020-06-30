<!--  -->
<template>
  <div :style="{height: this.isSticky ? `${this.height}px` : null}">
    <div class="z-sticky" :class="[this.isSticky ? 'z-sticky-fixed' : '']" :style="{ top: this.offsetTop + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {getScroller} from "../../utils/dom.js"
export default {
  props: {
    offsetTop: {
      //吸顶时与顶部的距离
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  components: {},
  data() {
    return {
      isSticky: false,
      scrollRoot: null,
      eleToTop: 0,
      height: 0
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    //监听滚动事件并设置吸顶
    setScrollListener() {
      this.scrollRoot = getScroller(this.$el)
      this.scrollRoot.addEventListener('scroll', this.scrollEvent)
    },
    scrollEvent() {
      this.height = this.$el.offsetHeight
      let scrollTop =
        'scrollTop' in this.scrollRoot
          ? this.scrollRoot.scrollTop
          : this.scrollRoot.pageYOffset
      this.eleToTop = this.$el.getBoundingClientRect().top + scrollTop
      if (scrollTop >= this.eleToTop - this.offsetTop) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
      //放在下面，不然会出现抖动(吸顶已经浮动，但是添加高度还未0)
      this.$emit('scroll', {
        scrollTop: this.scrollRoot.scrollTop,
        isSticky: this.isSticky
      })
    },
  },
  created() {},
  mounted() {
    //防止Vue-router路由切换时触发scroll函数
    // this.$nextTick(() => {
      this.setScrollListener()
    // })
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {
    this.scrollRoot.removeEventListener('scroll', this.scrollEvent)
    this.scrollRoot = null
  } //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-sticky {
}
.z-sticky-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 100;
}
</style>