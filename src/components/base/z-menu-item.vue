<!-- 、 -->
<template>
    <div class="menu-item-wrap" @click="clickEvent">
      <div class="menu-item flex justify-between aligin-center">
        <slot name="left"></slot>
        <span class="content-title">{{title}}</span>
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      //单元格内容
      type: String,
      default: () => {
        return ''
      },
      required: true
    },
    path: {
      //路由跳转路径
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
    clickEvent(){
      if(this.path){
        this.$router.push(this.path)
      }
      else{
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
  margin-left: @cell-padding-left-right;
  &:last-child{
    border-bottom: none;
  }
  .menu-item {
    padding: @cell-padding-top-bottom @cell-padding-left-right
      @cell-padding-top-bottom 0;
    .content-title {
      margin-left: 4px;
      flex: 1;
    }
  }
}
</style>