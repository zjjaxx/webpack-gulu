<!--  -->
<template>
  <button
    :class="[
    {'z-border-radius-1px':type=='default'},
    type=='default'?'rapple-default':'rapple-custom',
    {'z-border-1px':round},
    'z-default-button',
    buttonStatus==1?'loading':buttonStatus==2?'done':'',
    {'z-block':block}
    ]"
    @click="$emit('click')"
  >
    <slot :name="slotName" v-if="c_slotShow">
      <z-icon
        :class="{[iconPosition]:true}"
        :size="size"
        :classPrefix="classPrefix"
        :iconName="iconName"
        :color="color"
      ></z-icon>
    </slot>
    <template v-if="!slotName">
      <!-- 加载icon   -->
      <z-icon
        :size="size"
        :classPrefix="classPrefix"
        :class="[{[iconPosition]:true},'loading-icon']"
        :color="color"
        :iconName="loadingIconName"
        v-if="buttonStatus==1"
      ></z-icon>
      <!-- 完成icon -->
      <z-icon
        :size="size"
        :classPrefix="classPrefix"
        :class="{[iconPosition]:true}"
        :color="color"
        :iconName="complateIconName"
        v-else-if="buttonStatus==2"
      ></z-icon>
    </template>
    <div class="button-text">
      <slot v-if="!superButton"></slot>
      <div class="super-wrap" :style="{width:c_width+'px'}" v-else>
        <span class="item">{{commonText}}</span>
        <span class="item">{{loadingText}}</span>
        <span class="item">{{complateText}}</span>
      </div>
    </div>
  </button>
</template>

<script>
import ZIcon from './z-icon.vue'
export default {
  components: { ZIcon },
  props: {
    //block
    block: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //按钮状态 0->待激活 1->加载中 2->加载完成
    buttonStatus: {
      type: Number,
      default: () => {
        return 0
      }
    },
    //特选按钮
    superButton: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //待激活文字
    commonText: {
      type: String,
      default: () => {
        return '待激活'
      }
    },
    //加载中文字
    loadingText: {
      type: String,
      default: () => {
        return '加载中'
      }
    },
    //已完成文字
    complateText: {
      type: String,
      default: () => {
        return '完成'
      }
    },
    //加载图标名称
    loadingIconName: {
      type: String,
      default: () => {
        return 'loading'
      }
    },
    //完成图标名称
    complateIconName: {
      type: String,
      default: () => {
        return 'wancheng'
      }
    },
    //方形
    round: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //类型
    type: {
      type: String,
      default: () => {
        return 'default'
      },
      validator: value => value == 'default' || value == 'custom'
    },
    //icon位置
    iconPosition: {
      type: String,
      default: () => {
        return 'iconPositionLeft'
      },
      validator: value => {
        return value == 'iconPositionLeft' || value == 'iconPositionRight'
      }
    },
    //插槽名
    slotName: {
      type: String,
      default: () => {
        return ''
      },
      validator: value => {
        return value == 'leftSlot' || value == 'rightSlot' || value == ''
      }
    },
    //icon名
    iconName: {
      type: String,
      default: () => {
        return ''
      }
    },
    //大小
    size: {
      type: [Number, String],
      default: () => {
        return '16'
      }
    },
    //font-family
    classPrefix: {
      type: String,
      default: () => {
        return 'iconfont'
      }
    },
    //icon颜色
    color: {
      //颜色
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      c_width: 0,
      index: 0
    }
  },
  computed: {
    c_slotShow() {
      if (this.iconName && this.buttonStatus == 0) {
        return true
      } else {
        if (this.slotName) {
          return true
        } else {
          return false
        }
      }
    }
  },
  watch: {
    buttonStatus(newValue, oldValue) {
      this.comput_width(newValue)
    }
  },
  methods: {
    comput_width(index) {
      let itemList = this.$el.querySelectorAll('.super-wrap .item')
      if (itemList.length) {
        itemList = Array.prototype.slice.call(itemList)
        let widthList = itemList.map(item => {
          let cssObject = window.getComputedStyle(item)
          return parseFloat(cssObject.width)
        })
        this.c_width = widthList[index]
      }
    }
  },
  created() {},
  mounted() {
    if (this.$slots.leftSlot) {
    } else if (this.$slots.rightSlot) {
      this.$children[0].$el.style.order = '2'
    }
    document.body.addEventListener('touchstart', function() {})
    this.comput_width(0)
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-default-button {
  border: none;
  display: inline-flex;
  align-items: center;
  height: @button-height;
  padding: @button-h-padding;
  background: @button-bg;
  color: @button-color;
  font-size: @button-font-size;
  transition: all 0.3s ease;
  &:disabled {
    opacity: 0.6;
  }
  .iconPositionLeft {
    margin-right: 5px;
    order: 1;
    & + .button-text {
      order: 2;
    }
  }
  .iconPositionRight {
    margin-left: 5px;
    order: 2;
    & + .button-text {
      order: 1;
    }
  }
  .leftSlot {
    order: 1;
    & + .button-text {
      order: 2;
    }
  }
  .rightSlot {
    order: 2;
    & + .button-text {
      order: 1;
    }
  }
  .loading-icon {
    animation: loading 1s infinite linear;
    transform-origin: 50% 50%;
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .super-wrap {
    position: relative;
    transform-style: preserve-3d;
    height: @button-font-size;
    transition: transform 0.3s ease;
    .item {
      position: absolute;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      white-space: nowrap;
      height: @button-font-size;
      line-height: @button-font-size;
      transform-origin: 50% 50%;
      transform: rotateX(0deg) translateZ(10px);
      &:nth-child(2) {
        transform: rotateX(-90deg) translateZ(10px);
      }
      &:nth-child(3) {
        transform: rotateX(-180deg) translateZ(10px);
      }
    }
  }
}
.loading {
  .super-wrap {
    transform: rotateX(90deg);
  }
}
.done {
  .super-wrap {
    transform: rotateX(180deg);
  }
}
.z-block {
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
}
.z-border-radius-1px {
  border-radius: 5px;
  border: 1px solid #333;
}
.z-border-1px {
  border-radius: 0px;
  border: 1px solid #333;
}
</style>