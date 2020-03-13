
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
      sticky: false,
      children: []
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
    calcPaneInstances(forceUpdated = false) {
      let slots = this.$slots.default.filter(
        item =>
          item.tag &&
          item.componentOptions &&
          item.componentOptions.Ctor.options.name === 'ZTab'
      )
      this.length = slots.length
      let children = slots.map(item => item.componentInstance)
      const panesChanged = !(
        this.children.length === children.length &&
        children.every((pane, index) => pane === this.children[index]) 
      )
      if (panesChanged ||forceUpdated) {
        this.children = children
      }
    },
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
    setVModel() {
      this.children.forEach((element, index) => {
        element.$el.onclick = () => {
          this.$emit('change', index)
          this.$emit('click', { index, title: element.title })
          this.reset()
          element.isActive = true
          this.scroll(element)
        }
        if (index == this.active) {
          element.isActive = true
        }
      })
    },
    //重置tab激活样式
    reset() {
      this.children.forEach((element, index) => {
        element.isActive = false
      })
    }
  },
  render() {
    const zTabs = (
      <div
        class={[
          'z-tabs',
          'border-bottom-1px',
          'flex',
          this.sticky ? 'z-tabs-sticky' : ''
        ]}
      >
        {this.$slots.default}
        <div
          class="tab-line flex aligin-center justify-center"
          style={this.c_style}
        >
          <span class="line"></span>
        </div>
      </div>
    )
    let contentList = this.children.map((item, index) => {
      return (
        <div style={{ display: index == this.active ? '' : 'none' }}>
          {item.$slots.default}
        </div>
      )
    })
    return (
      <div class="z-tab-wrap">
        {this.isSticky ? (
          <div class={this.sticky ? 'polyfill-height' : ''}>
            <z-sticky vOn:scroll={this.stickyScroll} offsetTop={this.offsetTop}>
              {zTabs}
            </z-sticky>
          </div>
        ) : (
          zTabs
        )}
        <div class="tab-content-wrap">{contentList}</div>
      </div>
    )
  },
  created() {
    this.$on('tabUpdate', this.calcPaneInstances.bind(null, true))
  },
  mounted() {
    this.calcPaneInstances()
    //设置v-model
    this.setVModel()
  },
  updated() {
    this.calcPaneInstances()
  }, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-tabs {
  position: relative;
  height: 45px;
  overflow-x: auto;
  box-sizing: border-box;
  z-index: 200;
  background: #fff;
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