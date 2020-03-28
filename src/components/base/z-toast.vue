<!--
 * @Author: zjj
 * @Date: 2020-02-24 09:51:51
 * @LastEditors: zjj
 * @LastEditTime: 2020-02-24 14:22:17
 -->
<!--  -->
<template>
  <div class="z-mask">
    <div class="z-toast">
      <template v-if="type=='common'">{{message}}</template>
      <template v-else-if="type=='loading'">
        <div class="loading-wrap flex aligin-center justify-center">
          <z-icon class="loading" iconName="i-loading-out"></z-icon>
          <div>{{message}}</div>
        </div>
      </template>
      <template v-else-if="type=='success'">
        <div class="success-wrap flex aligin-center justify-center">
          <z-icon iconName="i-tipssuccess"></z-icon>
          <div class="message">{{message}}</div>
        </div>
      </template>
      <template v-else-if="type=='fail'">
        <div class="fail-wrap flex aligin-center justify-center">
          <z-icon iconName="i-cloud-error"></z-icon>
          <div class="message">{{message}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ZIcon from '../../components/base/z-icon.vue'
export default {
  components: { ZIcon },
  props: {
    message: {
      type: String,
      default: () => {
        return ''
      },
      required: true
    },
    type: {
      type: String,
      default: () => {
        return 'common'
      },
      validator: value =>
        value == 'loading' ||
        value == 'common' ||
        value == 'success' ||
        value == 'fail'
    },
    duration: {
      type: Number,
      default: () => {
        return 1000
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.close()
    }, this.duration)
  },
  beforeDestroy() {
    this.$emit('beforeDestroy')
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-toast .loading-wrap /deep/ .icon {
  height: 50px;
  width: 50px;
}
.z-toast .success-wrap /deep/ .icon {
  height: 50px;
  width: 50px;
}
.z-toast .fail-wrap /deep/ .icon {
  height: 50px;
  width: 50px;
}
.z-mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 300;
}
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
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .success-wrap,
  .loading-wrap,
  .fail-wrap {
    font-size: 14px;
    color: #fff;
    flex-direction: column;
  }
  .loading-wrap {
    .loading {
      margin-bottom: 5px;
      animation: loading 2s infinite linear;
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
  .message {
    margin-top: 5px;
  }
}
</style>