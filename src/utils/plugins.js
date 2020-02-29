import Toast from "../components/base/z-toast.vue"
let currentToast=null
export default {
    install: (Vue, options) => {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑...
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode) {
                // 逻辑...
            }
        })

        // 3. 注入组件选项
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
        })

        // 4. 添加实例方法
        Vue.prototype.$toast = function (message,closeOption) {
            if(currentToast){
                currentToast.close()
            }
            //创建并挂载toast
            let ToastConstruct = Vue.extend(Toast)
            let toast = new ToastConstruct({
                propsData:{
                    customCloseButton:closeOption
                }
            })
            toast.$slots.default = [message]
            toast.$on("beforeDestroy",()=>{
                currentToast=null
            })
            toast.$mount()
            document.body.appendChild(toast.$el)
            currentToast=toast
        }
    }
}
