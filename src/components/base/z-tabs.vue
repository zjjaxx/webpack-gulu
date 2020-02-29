<!--  -->
<template>
  <div class="z-tabs flex">
    <slot></slot>
    <div class="tab-line flex aligin-center justify-center" :style="c_style">
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  model:{
    prop: 'active',
    event: 'change'
  },
  props: {
    active: {
      //激活索引
      type: Number,
      default: () => {
        return 0
      },
      required: true
    }
  },
  data() {
    return {
      length: 0
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
  watch: {},
  methods: {
  },
  created() {},
  mounted() {
    this.length = this.$children.length
    this.$children.forEach((element,index) => {
      element.$el.onclick=()=>{
        this.$emit('change',index)
      }
    });
  },
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-tabs {
  position: relative;
  height: 45px;
  .tab-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
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