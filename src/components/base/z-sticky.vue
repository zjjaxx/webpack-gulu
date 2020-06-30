<!--  -->
<template>
  <div :style="{height: this.isSticky ? `${this.height}px` : null}">
    <div
      class="z-sticky"
      :class="[this.isSticky ? 'z-sticky-fixed' : '']"
      :style="{ top: this.offsetTop + 'px' }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getScroller } from "../../utils/dom.js";
import { throttle } from "../../utils/event";
export default {
  props: {
    offsetTop: {
      //吸顶时与顶部的距离
      type: Number,
      default: () => {
        return 0;
      }
    }
  },
  components: {},
  data() {
    return {
      isSticky: false,
      height: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    scrollEvent(scrollRoot) {
      let scrollTop =
        "scrollTop" in scrollRoot
          ? scrollRoot.scrollTop
          : scrollRoot.pageYOffset;
      let boundingTop = this.$el.getBoundingClientRect().top;
      if (boundingTop - this.offsetTop <= 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
      //放在下面，不然会出现抖动(吸顶已经浮动，但是添加高度还未0)
      this.$emit("scroll", {
        scrollTop: scrollRoot.scrollTop,
        isSticky: this.isSticky
      });
    }
  },
  created() {},
  mounted() {
    this.height = this.$el.offsetHeight;
    let scrollRoot = getScroller(this.$el);
    //节流
    let clearScrollEvent = throttle("scroll", "optimizedScroll", scrollRoot);
    scrollRoot.addEventListener(
      "optimizedScroll",
      this.scrollEvent.bind(null, scrollRoot)
    );
    //清理监听事件
    this.$on("hook:beforeDestroy", () => {
      clearScrollEvent();
      scrollRoot.removeEventListener("optimizedScroll", this.scrollEvent);
    });
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
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