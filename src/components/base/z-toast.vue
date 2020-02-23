<!--  -->
<template>
  <div class="z-toast">
    <slot></slot>
    <span class="close" v-if="!autoClose">{{customCloseButton.title}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    autoClose: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    time: {
      type: Number,
      default: () => {
        return 5000;
      }
    },
    customCloseButton: {
      type: Object,
      default: () => {
        return {
          title: "知道了",
          callback: toast => {}
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    }
  },
  created() {},
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.time);
    }
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.z-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 14px;
  z-index: 300;
  .close{
    padding-left:16px;
    border-left: 1px solid #666;
  }
}
</style>