<!--  -->
<template>
  <div class="form-container">
    <z-header
      leftArrow
      @leftEvent="$router.back()"
      title="表单"
      bg="linear-gradient(45deg, #0081ff, #1cbbb4)"
    ></z-header>

    <z-form :model="form" ref="Form" :rules="rule">
      <z-form-item style="marginLeft:20px;marginRight:20px" prop="name" label="姓名">
        <z-input v-model="form.name"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px" prop="age" label="年龄">
        <z-input v-model.number="form.age"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px" prop="from" label="籍贯">
        <z-input v-model="form.from" placeholder="请输入籍贯"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px" prop="address" label="邮箱">
        <z-input v-model="form.address" placeholder="请输入邮箱"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px" label="不校验输入">
        <z-input v-model="form.noCheck" placeholder="不校验输入"></z-input>
      </z-form-item>
      <z-form-item style="marginLeft:20px;marginRight:20px">
        <div class="flex justify-center">
          <z-button
            class="z-custom-button"
            type="custom"
            iconName="download"
            classPrefix="gulu"
            superButton
            :buttonStatus="buttonStauts"
            @click="submit('Form')"
          >
          </z-button>
          <z-button style="marginLeft:20px" @click="show">取消</z-button>
        </div>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
import ZForm from '../../components/base/z-form.vue'
import ZFormItem from '../../components/base/z-form-item.vue'
import ZInput from '../../components/base/z-input.vue'
import ZButton from '../../components/base/z-button.vue'
import ZPopup from '../../components/base/z-popup.vue'
const COMMON_STATUS = 0 //待激活状态
const LOADING_STATUS = 1 //加载状态
const COMPLATE_STATUS = 2 //完成状态
export default {
  components: { ZForm, ZFormItem, ZInput, ZButton, ZPopup },
  data() {
    return {
      buttonStauts:COMMON_STATUS,
      form: {
        name: '小明',
        age: '',
        from: '',
        address: '',
        noCheck: ''
      },
      rule: {
        name: [
          {
            required: true,
            message: '请输入名字',
            trigger: 'blur'
          }
        ],
        age: [
          { required: true, message: '请输入年龄' },
          { type: 'number', message: '年龄必须为数字' },
          { type: 'number', min: 18, max: 36, message: '年龄必须为18至36之间' }
        ],
        from: [{ required: true, message: '请输入籍贯', trigger: 'blur' }],
        address: [
          { type: 'email', trigger: 'blur', message: '请输入正确的邮箱' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    submit(ref) {
      this.$refs[ref]
        .validate()
        .then(valid => {
          this.$toast('校验成功')
          if (this.buttonStauts == COMMON_STATUS) {
            this.buttonStauts = LOADING_STATUS
            setTimeout(() => {
              this.buttonStauts = COMPLATE_STATUS
              setTimeout(() => {
                this.buttonStauts = COMMON_STATUS
              }, 1600)
            }, 3200)
          }
        })
        .catch(error => {
          this.$toast('校验失败')
        })
    },
    show() {}
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
 .z-custom-button {
    background: linear-gradient(
      66deg,
      rgba(232, 48, 56, 1),
      rgba(247, 88, 151, 1)
    );
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
  }
</style>