<!--  -->
<template>
  <div class="home">
    <img class="img-bg" src="../../assets/imgs/home-bg.jpg" alt />
   
      <div class="nav-list">
        <router-link
          tag="div"
          :to="'/' + item.name"
          class="nav-li"
          :class="'bg-'+item.color"
          :style="[{animation: 'delayShow ' + ((index+1)*0.2+1) + 's 1'}]"
          v-for="(item,index) in elements"
          :key="index"
        >
          <div class="nav-title">{{item.title}}</div>
          <div class="nav-name">{{item.name}}</div>
        </router-link>
      </div>
      <!-- <z-menu-group>
        <z-menu-item title="SwipeCell 滑动单元格" :path="{path:'/swipeCell'}"></z-menu-item>
      </z-menu-group>-->

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      elements: [
        {
          title: '按钮',
          name: 'button',
          color: 'purple'
        },
        {
          title: '图标 ',
          name: 'icon',
          color: 'mauve'
        },
        {
          title: 'Cell单元格',
          name: 'menuItem',
          color: 'pink'
        },
        {
          title: '粘性布局',
          name: 'sticky',
          color: 'brown'
        },
        {
          title: 'Tab标签页',
          name: 'tabs',
          color: 'red'
        },
        {
          title: '下拉刷新',
          name: 'refresh',
          color: 'orange'
        },
        {
          title: 'Popup弹出层',
          name: 'popup',
          color: 'green'
        },
        {
          title: '输入框',
          name: 'input',
          color: 'olive'
        },
        {
          title: 'Toast',
          name: 'toast',
          color: 'grey'
        },
        {
          title: '对话框',
          name: 'dialog',
          color: 'purple'
        },
        {
          title: '复选框',
          name: 'checkbox',
          color: 'mauve'
        },
        {
          title: '单选框',
          name: 'radio',
          color: 'orange'
        },
        {
          title: 'Picker选择器',
          name: 'picker',
          color: 'olive'
        },
        {
          title: '表单',
          name: 'form',
          color: 'cyan'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.home {
  position: relative;
  padding-top: 240px;
  padding-bottom: 20px;
  background: #4178f8;
  .img-bg {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    height: 240px;
    width: 100%;
  }
  .nav-list {
    position: relative;
    z-index: 10;
    border-radius: 15px;
    margin: 20px 10px 0;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    background: #fff;
    justify-content: space-between;
    .nav-li {
      padding: 15px;
      border-radius: 6px;
      width: 45%;
      margin: 0 2.5% 20px;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 1;
      box-sizing: border-box;
      .nav-li::after {
        content: '';
        position: absolute;
        z-index: -1;
        background-color: inherit;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: -10%;
        border-radius: 5px;
        opacity: 0.2;
        transform: scale(0.9, 0.9);
      }
      .nav-li.cur {
        color: #fff;
        background: rgb(94, 185, 94);
        box-shadow: 2px 2px 3px rgba(94, 185, 94, 0.4);
      }
      .nav-title {
        font-size: 16px;
        font-weight: 300;
        &::first-letter {
          font-size: 20px;
          margin-right: 2px;
        }
      }
      .nav-name {
        font-size: 14px;
        text-transform: Capitalize;
        margin-top: 10px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          display: block;
          width: 20px;
          height: 3px;
          background: #fff;
          bottom: 0;
          right: 0;
          opacity: 0.5;
        }
        &::after {
          content: '';
          position: absolute;
          display: block;
          width: 100px;
          height: 1px;
          background: #fff;
          bottom: 0;
          right: 20px;
          opacity: 0.3;
        }
        &::first-letter {
          font-weight: bold;
          font-size: 18px;
          margin-right: 1px;
        }
      }
      span {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 26px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
      }

      .text-light {
        font-weight: 300;
      }
    }
  }
}
</style>