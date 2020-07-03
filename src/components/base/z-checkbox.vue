<!--  -->
<template>
  <div class="z-checkbox flex aligin-center">
    <div class="input-wrap flex">
      <input class="input" type="checkbox" :disabled="disabled" :checked="getChecked" @change="change" />
      <slot name="icon" :checked="getChecked">
        <z-icon classPrefix="gulu" :color="c_z_icon_class" iconName="checked" v-if="getChecked"></z-icon>
        <span :class="c_icon_class" v-else></span>
      </slot>
    </div>
    <span :class="c_label_class" class="label" @click="change">
      <slot>label</slot>
    </span>
  </div>
</template>

<script>
import Vue from "vue"
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  inject: {
    _event: {
      from: '_event',
      default: () => {
        return new Vue()
      }
    }
  },
  props: {
    checked: {
      //选中状态
      type: Boolean,
      default: () => {
        return false
      }
    },
    disabled: {
      //禁用状态
      type: Boolean,
      default: () => {
        return false
      }
    },
    name: {
      type: String,
      default: () => {
        return ''
      }
    },
    activeColor: {
      //自定义颜色
      type: String,
      default: () => {
        return '#ee0a24'
      }
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    getChecked(){
      if(this.$parent&&this.$parent.value){
         return this.$parent.value.includes(this.name)
      }
      return this.checked
    },
    c_icon_class() {
      return [this.getChecked ? 'active-icon' : 'inactive-icon']
    },
    c_z_icon_class() {
      return this.disabled ? '#ebedf0' : this.activeColor
    },
    c_label_class() {
      return this.disabled ? 'disabled-label' : ''
    }
  },
  watch: {},
  methods: {
    change() {
      if (this.disabled) {
        return
      }
      this.$emit('change', !this.checked)
      let value = !this.getChecked ? 'add' : 'remove'
      this._event.$emit('checkedChange', this.name, value)
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.z-checkbox /deep/ .icon {
  height: 20px;
  width: 20px;
}
.z-checkbox {
  .input-wrap {
    position: relative;
    .input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 1;
    }
    .inactive-icon {
      height: 20px;
      width: 20px;
      border: 1px solid #c8c9cc;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .active-icon {
      display: block;
    }
  }
  .label {
    margin-left: 8px;
    font-size: 16px;
  }
  .disabled-label {
    color: #c8c9cc;
  }
}
</style>