<!--  -->
<template>
  <div class="z-dialog-mask flex aligin-center justify-center" v-if="value">
    <div class="z-dialog" @click.stop>
      <div class="title">{{title}}</div>
      <slot name="content">
        <div class="content">{{content}}</div>
      </slot>
      <template v-if="type=='alert'">
        <div class="close" @click="$emit('input')">确认</div>
      </template>
      <template v-else>
        <div class="flex confirm-wrap">
          <div class="cancel flex aligin-center justify-center" @click="$emit('cancel')">取消</div>
          <div
            v-if="!waitIcon"
            class="confirm flex aligin-center justify-center"
            @click="confirm"
          >确认</div>
          <div class="loading-wrap flex aligin-center justify-center" v-else>
            <z-icon class="loading" classPrefix="gulu" iconName="loading_one" color="#1989fa"></z-icon>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => {
        return "alert";
      },
      validator: value => value == "alert" || value == "confirm"
    },
    title: {
      type: String,
      default: () => {
        return "标题";
      }
    },
    content: {
      type: String,
      default: () => {
        return "content";
      }
    },
    value: {
      type: Boolean,
      default: () => {
        return false;
      },
      required: true
    },
    beforeClose: {
      type: Function,
      default: null
    }
  },
  components: {},
  data() {
    return {
      waitIcon: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    confirm() {
      if (this.beforeClose) {
        this.waitIcon = true;
      }
      this.$emit("confirm");
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.z-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  background: rgba(0, 0, 0, 0.3);
  .z-dialog {
    z-index: 301;
    width: 320px;
    border-radius: 5px;
    background: #fff;
    animation: show-in 0.3s 1;
    box-shadow: 14px 25px 16px 7px rgba(0, 0, 0, 0.05);
    .title {
      padding: 10px 0;
      text-align: center;
      font-size: 16px;
    }
    .content {
      padding: 12px 24px 24px;
      font-size: 14px;
      text-align: center;
    }
    .close {
      height: 50px;
      color: #1989fa;
      line-height: 50px;
      text-align: center;
    }
    .confirm-wrap {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .confirm {
      color: #1989fa;
      flex: 1;
    }
    .cancel {
      flex: 1;
    }
    .loading-wrap {
      flex: 1;
    }
    .loading {
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
  }
}
</style>