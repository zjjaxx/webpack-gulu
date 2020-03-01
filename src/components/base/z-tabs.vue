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
import Vue from "vue";
export default {
  components: {},
  model: {
    prop: "active",
    event: "change"
  },
  props: {
    active: {
      //激活索引
      type: Number,
      default: () => {
        return 0;
      },
      required: true
    }
  },
  data() {
    return {
      length: 0
    };
  },
  computed: {
    c_style() {
      return [
        {
          width: 100 / this.length + "%"
        },
        {
          transform: `translateX(${this.active * 100 + "%"})`
        }
      ];
    }
  },
  methods: {
    //滚动
    scroll(element){
          let el=element.$el;
          let window_width=document.documentElement.clientWidth||document.body.clientWidth
          let tabs = this.$el.querySelector(".z-tabs")
          let offsetLeft = el.offsetLeft;
					let half_width = el.offsetWidth/2;
					let half_window_width = window_width/2;
          let scrollL =tabs.scrollLeft
          tabs.scrollLeft=scrollL+(offsetLeft-half_window_width)+half_width
    },
    //设置v-model
    setVModel() {
      this.$children.forEach((element, index) => {
        element.$el.onclick = () => {
          this.$emit("change", index);
          this.reset();
          element.isActive = true;
          this.scroll(element)
        };
        if (index == this.active) {
          element.isActive = true;
        }
        this.setTabContent(index, element);
      });
    },
    //创建并添加tabContent组件
    setTabContent(index, element) {
      let that = this;
      let tabContentWrap = this.$el.querySelector(".tab-content-wrap");
      let ComponentConstructor = Vue.component("z-tab-content", {
        props: {
          index: {
            type: Number,
            default: () => {
              return 0;
            },
            required: true
          }
        },
        render: function(createElement) {
          var body = element.$slots.default;
          return createElement(
            "div",
            {
              style: {
                display: this.index == that.active ? "" : "none"
              }
            },
            body
          );
        }
      });
      let component = new ComponentConstructor({
        propsData: {
          index: index
        }
      });
      let div = document.createElement("div");
      tabContentWrap.appendChild(div);
      component.$mount(div);
    },
    //重置tab激活样式
    reset() {
      this.$children.forEach((element, index) => {
        element.isActive = false;
      });
    }
  },
  created() {},
  mounted() {
    //获取子元素的个数
    this.length = this.$children.length;
    //设置v-model
    this.setVModel();
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
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