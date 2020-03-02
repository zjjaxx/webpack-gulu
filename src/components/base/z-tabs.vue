<!--  -->
<template>
  <div class="z-tab-wrap">
    <div class="z-tabs border-bottom-1px flex">
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
export default {
  components: {},
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    active: {
      //激活索引
      type: Number,
      default: () => {
        return 0
      },
      required: true
    }
  },
  data() {
    return {
      length: 0
    }
  },
  computed: {
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
      console.log('tabs.offsetWidth', tabs.scrollWidth)
      let totalScrollDistance =
        scrollL + (offsetLeft - half_window_width) + half_width
      if (totalScrollDistance > tabs.scrollWidth - window_width) {
        totalScrollDistance = tabs.scrollWidth - window_width
      } else if (totalScrollDistance < 0) {
        totalScrollDistance = 0
      }
      let to_scrollLeft = offsetLeft - half_window_width + half_width
      let params = {
        scrollDuration: 1000,
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
          tabs.scrollLeft += stepDistance
          window.requestAnimationFrame(step)
        } else {
          if (tabs.scrollLeft <= totalScrollDistance) {
            tabs.scrollLeft = totalScrollDistance
            return
          }
          tabs.scrollLeft = (tabs.scrollLeft * 100 + stepDistance * 100) / 100
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    },
    /* 
        Explanations:
        - pi is the length/end point of the cosinus intervall (see above)
        - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
          (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
        - newTimestamp - oldTimestamp equals the duration

          a * cos (bx + c) + d                      | c translates along the x axis = 0
        = a * cos (bx) + d                          | d translates along the y axis = 1 -> only positive y values
        = a * cos (bx) + 1                          | a stretches along the y axis = cosParameter = window.scrollY / 2
        = cosParameter + cosParameter * (cos bx)    | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
        = cosParameter + cosParameter * (cos scrollCount * x)
    */
    //设置v-model
    setVModel() {
      this.$children.forEach((element, index) => {
        element.$el.onclick = () => {
          this.$emit('change', index)
          this.reset()
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
      let ComponentConstructor = Vue.component('z-tab-content', {
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
      let component = new ComponentConstructor({
        propsData: {
          index: index
        }
      })
      let div = document.createElement('div')
      tabContentWrap.appendChild(div)
      component.$mount(div)
    },
    //重置tab激活样式
    reset() {
      this.$children.forEach((element, index) => {
        element.isActive = false
      })
    }
  },
  created() {},
  mounted() {
    //获取子元素的个数
    this.length = this.$children.length
    //设置v-model
    this.setVModel()
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
</style>