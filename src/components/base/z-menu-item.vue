<!-- 、 -->
<template>
  <div @click="toPath" class="menu-item-wrap">
    <div class="menu-item border-bottom-1px flex justify-between aligin-center">
      <slot name="left"></slot>
      <span class="content-title">{{title}}</span>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
      title:{ //单元格内容
          type:String,
          default:()=>{
              return ""
          },
          required:true
      },
      path:{ //路由跳转路径
        type:Object,
        default:()=>{
          return {
            path:""
          }
        }
      }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    toPath(){
      if(!this.path.path){
        return
      }
      this.$router.push(this.path)
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
  padding-left: @cell-padding-left-right;
  .menu-item {
    padding: @cell-padding-top-bottom @cell-padding-left-right @cell-padding-top-bottom 0;
    .content-title{
        margin-left: 4px;
        flex: 1;
    }
  }
}
</style>