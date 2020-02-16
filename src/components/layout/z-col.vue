<!--  -->
<template>
  <div class="z-col" :style="colStyle" :class="classStyle">
    <slot></slot>
  </div>
</template>

<script>
const _validator = value => {
  let valid = true
  for (let key in value) {
    valid = ['span', 'offset'].includes(key)
  }
  return valid
}
export default {
  components: {},
  inject: ['getGutter'],
  props: {
    span: {
      type: [String, Number],
      required: true
    },
    offset: {
      type: [String, Number]
    },

    ipad: {
      type: Object,
      validator: _validator
    },
    sm: {
      type: Object,
      validator: _validator
    },
    pc: {
      type: Object,
      validator: _validator
    },
    lg: {
      type: Object,
      validator: _validator
    }
  },
  data() {
    return {}
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: `${parseInt(this.getGutter) / 2}px`,
        paddingRight: `${parseInt(this.getGutter) / 2}px`
      }
    },
    classStyle() {
      return [
        `span-${this.span}`,
        this.offset && `offset-${this.offset}`,
        this.ipad && `span-${this.ipad.span}-ipad`,
        this.ipad && `offset-${this.ipad.offset}-ipad`,
        this.sm && `span-${this.sm.span}-sm`,
        this.sm && `offset-${this.sm.offset}-sm`,
        this.pc && `span-${this.pc.span}-pc`,
        this.pc && `offset-${this.pc.offset}-pc`,
        this.lg && `span-${this.lg.span}-lg`,
        this.lg && `offset-${this.lg.offset}-lg`
      ]
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
@counter: 1;
.loop(@i) when (@i <= 24) {
  .span-@{i} {
    width: @i / 24 * 100%;
  }
  .offset-@{i} {
    margin-left: @i / 24 * 100%;
  }
  .loop(@i+1);
}
.loop(@counter);
.z-col {
  float: left;
  box-sizing: border-box;
}
@media screen and (min-width: 576px) {
  @counter: 1;
  .loop(@i) when (@i <= 24) {
    .span-@{i}-ipad {
      width: @i / 24 * 100%;
    }
    .offset-@{i}-ipad {
      margin-left: @i / 24 * 100%;
    }
    .loop(@i+1);
  }
  .loop(@counter);
}
@media screen and (min-width: 768px) {
  @counter: 1;
  .loop(@i) when (@i <= 24) {
    .span-@{i}-sm {
      width: @i / 24 * 100%;
    }
    .offset-@{i}-sm {
      margin-left: @i / 24 * 100%;
    }
    .loop(@i+1);
  }
  .loop(@counter);
}
@media screen and (min-width: 1200px) {
  @counter: 1;
  .loop(@i) when (@i <= 24) {
    .span-@{i}-pc {
      width: @i / 24 * 100%;
    }
    .offset-@{i}-pc {
      margin-left: @i / 24 * 100%;
    }
    .loop(@i+1);
  }
  .loop(@counter);
}
@media screen and (min-width: 1600px) {
  @counter: 1;
  .loop(@i) when (@i <= 24) {
    .span-@{i}-lg {
      width: @i / 24 * 100%;
    }
    .offset-@{i}-lg {
      margin-left: @i / 24 * 100%;
    }
    .loop(@i+1);
  }
  .loop(@counter);
}
</style>