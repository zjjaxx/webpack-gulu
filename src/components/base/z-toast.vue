<!--
 * @Author: zjj
 * @Date: 2020-02-24 09:51:51
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 14:22:17
 -->
<!--  -->
<template>
  <div class="z-toast">
    <slot></slot>
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
        return 2000;
      }
    },
    customCloseButton: {
      type: Object,
      default: () => {
        return {
          title: "知道了",
          callback: (toast, close) => {
            toast.close();
          }
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
      this.$emit("beforeDestroy")
      this.$destroy();
    },
    closeToast() {
      this.customCloseButton.callback(this, this.close);
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
  width: fit-content;
  max-width: 240px;
  z-index: 300;
  animation: fade_in 0.3s ease;
  @keyframes fade_in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
}
</style>