<!-- 、 -->
<template>
  <div class="menu-item-wrap" @click="clickEvent">
    <div class="menu-item flex justify-between aligin-center">
      <slot name="left"></slot>
      <span class="content-title">{{title}}</span>
      <slot name="right">
        <span class="content">{{value}}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    //单元格标题
    title: {
      type: String,
      default: () => {
        return '单元格'
      },
      required: true
    },
    //单元格内容
    value: {
      type: String,
      default: () => {
        return ''
      }
    },
    //是否路由模式
    route: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //是否采用replace模式跳转路由
    replace: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    //路由跳转参数
    to: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    clickEvent() {
      if (this.route) {
        if(this.replace){
           this.$router.replace(this.to)
        }
        else{
           this.$router.push(this.to)
        }
      } else {
        this.$emit('click')
      }
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.menu-item-wrap {
  background: #fff;
  .menu-item {
    padding: @cell-padding-top-bottom @cell-padding-left-right;
    .content-title {
      margin-left: 4px;
      flex: 1;
    }
    .content {
      font-size: 14px;
      color: @cell-content-color;
    }
  }
}
</style>