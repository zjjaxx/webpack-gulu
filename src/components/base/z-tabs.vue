<!--  -->
<template>
  <div class="z-tab-wrap">
    <div :class="sticky?'polyfill-height':''" v-if="isSticky">
      <z-sticky @scroll="stickyScroll" :offsetTop="offsetTop">
        <div class="z-tabs border-bottom-1px flex" :class="c_tabs">
          <slot></slot>
          <div class="tab-line flex aligin-center justify-center" :style="c_style">
            <span class="line"></span>
          </div>
        </div>
      </z-sticky>
    </div>
    <div class="z-tabs border-bottom-1px flex" :class="c_tabs" v-else>
      <slot></slot>
      <div class="tab-line flex aligin-center justify-center" :style="c_style">
        <span class="line"></span>
      </div>
    </div>
    <div class="tab-content-wrap"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import ZSticky from '../../components/base/z-sticky.vue'
import router from '../../router/index.js'
export default {
  components: { ZSticky },
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    isSticky: {
      //是否吸顶
      type: Boolean,
      default: () => {
        return false
      }
    },
    active: {
      //激活索引
      type: Number,
      default: () => {
        return 0
      },
      required: true
    },
    offsetTop: {
      //吸顶距离
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  data() {
    return {
      length: 0,
      sticky: false
    }
  },
  computed: {
    c_tabs() {
      return [this.sticky ? 'z-tabs-sticky' : '']
    },
    c_style() {
      return [
        {
          width: 100 / this.length + '%'
        },
        {
          transform: `translateX(${this.active * 100 + '%'})`
        }
      ]
    }
  },
  methods: {
    stickyScroll({ scrollTop, isSticky }) {
      this.sticky = isSticky
    },
    //滚动
    scroll(element) {
      let el = element.$el
      let window_width =
        document.documentElement.clientWidth || document.body.clientWidth
      let tabs = this.$el.querySelector('.z-tabs')
      let offsetLeft = el.offsetLeft - tabs.scrollLeft
      let half_width = el.offsetWidth / 2
      let half_window_width = window_width / 2
      let scrollL = tabs.scrollLeft
      let totalScrollDistance =
        scrollL + (offsetLeft - half_window_width) + half_width
      if (totalScrollDistance > tabs.scrollWidth - window_width) {
        totalScrollDistance = tabs.scrollWidth - window_width
      } else if (totalScrollDistance < 0) {
        totalScrollDistance = 0
      }
      let to_scrollLeft = offsetLeft - half_window_width + half_width
      let params = {
        scrollDuration: 1500,
        tabs,
        to_scrollLeft,
        totalScrollDistance,
        direction: to_scrollLeft > 0 ? 'right' : 'left'
      }
      this.animate(params)
    },
    animate({
      scrollDuration,
      tabs,
      to_scrollLeft,
      totalScrollDistance,
      direction
    }) {
      let scrollCount = (scrollDuration / 1000) * 15
      let stepDistance = to_scrollLeft / scrollCount
      function step(newTimestamp) {
        if (direction == 'right') {
          if (tabs.scrollLeft >= totalScrollDistance) {
            tabs.scrollLeft = totalScrollDistance
            return
          }
        } else {
          if (tabs.scrollLeft <= totalScrollDistance) {
            tabs.scrollLeft = totalScrollDistance
            return
          }
        }
        tabs.scrollLeft = (tabs.scrollLeft * 100 + stepDistance * 100) / 100
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    },
    //设置v-model
    setVModel(chidren) {
      chidren.forEach((element, index) => {
        element.$el.onclick = () => {
          this.$emit('change', index)
          this.$emit('click', { index, title: element.title })
          this.reset(chidren)
          element.isActive = true
          this.scroll(element)
        }
        if (index == this.active) {
          element.isActive = true
        }
        this.setTabContent(index, element)
      })
    },
    //创建并添加tabContent组件
    setTabContent(index, element) {
      let that = this
      let tabContentWrap = this.$el.querySelector('.tab-content-wrap')
      let ZTabContent = Vue.component('z-tab-content', {
        props: {
          index: {
            type: Number,
            default: () => {
              return 0
            },
            required: true
          }
        },
        render: function(createElement) {
          var body = element.$slots.default
          return createElement(
            'div',
            {
              style: {
                display: this.index == that.active ? '' : 'none'
              }
            },
            body
          )
        }
      })
      let ZTabContentConstructor = Vue.extend(ZTabContent)
      let component = new ZTabContentConstructor({
        propsData: {
          index: index
        }
      })
      let div = document.createElement('div')
      tabContentWrap.appendChild(div)
      component.$mount(div)
    },
    //重置tab激活样式
    reset(chidren) {
      chidre.forEach((element, index) => {
        element.isActive = false
      })
    }
  },
  created() {},
  mounted() {
    let chidren = []
    //获取子元素的个数
    if (this.isSticky) {
      this.length = this.$children[0].$children.length
      chidren = this.$children[0].$children
    } else {
      this.length = this.$children.length
      chidren = this.$children
    }
    //设置v-model
    this.setVModel(chidren)
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-tabs {
  position: relative;
  height: 45px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  .tab-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    min-width: 84px;
    flex-shrink: 0;
    flex-grow: 1;
    transition: all 0.3s ease;
    .line {
      width: 50%;
      height: 100%;
      background-color: #ee0a24;
      border-radius: 3px;
    }
  }
}
.polyfill-height {
  height: 45px;
}
</style>