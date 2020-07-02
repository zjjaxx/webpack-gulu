
<script>
import Vue from 'vue'
import ZSticky from './z-sticky.vue'
import ZTab from './z-tab.vue'
import { scrollToLeft } from '../../utils/animate'
import mixin from '../../mixin/emitter'
export default {
  provide() {
    return {
      tabParent: this
    }
  },
  name: 'ZTabs',
  mixins: [mixin],
  components: { ZSticky, ZTab },
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    //是否吸顶
    isSticky: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //激活索引
    active: {
      type: Number,
      default: () => {
        return 0
      },
      required: true
    },
    //吸顶距离
    offsetTop: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  data() {
    return {
      length: 0,
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
      // 使用$slots而不是用$children是因为$children不保证顺序
      if (this.$slots.default) {
        let slots = this.$slots.default.filter(
          item =>
            item.tag &&
            item.componentOptions &&
            item.componentOptions.Ctor.options.name === 'ZTabPanel'
        )
        this.length = slots.length
        let children = slots.map(item => item.componentInstance)
        const panesChanged = !(
          this.children.length === children.length &&
          children.every((pane, index) => pane === this.children[index])
        )
        if (panesChanged || forceUpdated) {
          this.children = children
        }
      }
    },
    change(index) {
      this.scroll(this.getChildren(this, 'ZTab')[index])
    },
    stickyScroll({ scrollTop, isSticky }) {},
    //滚动
    scroll(element) {
      let el = element.$el
      let window_width =
        document.documentElement.clientWidth || document.body.clientWidth
      let tabs = this.$el.querySelector('.z-tabs')
      let offsetLeft = el.offsetLeft - tabs.scrollLeft
      let half_width = el.offsetWidth / 2
      let half_window_width = window_width / 2
      let to_scrollLeft = offsetLeft - half_window_width + half_width
      scrollToLeft(tabs, to_scrollLeft, 500)
    }
  },
  render() {
    const zTabs = (
      <div class="z-tabs border-bottom-1px flex">
        {this.children.map(item => {
          return (
            <z-tab title={item.title}>
              <template slot="title">{item.$slots.title}</template>
            </z-tab>
          )
        })}
        <div
          class="tab-line flex aligin-center justify-center"
          style={this.c_style}
        >
          <span class="line"></span>
        </div>
      </div>
    )
    return (
      <div class="z-tab-wrap">
        {this.isSticky ? (
          <z-sticky offsetTop={this.offsetTop}>{zTabs}</z-sticky>
        ) : (
          zTabs
        )}
        <div class="tab-content-wrap">{this.$slots.default}</div>
      </div>
    )
  },
  created() {
    this.$on('tabUpdate', this.calcPaneInstances.bind(this, true))
    this.$on('change', this.change)
  },
  mounted() {
    this.calcPaneInstances()
  },
  updated() {
    console.log('z-tabs update')
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