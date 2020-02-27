import Toast from "../components/base/z-toast.vue"
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
            let ToastConstruct = Vue.extend(Toast)
            let toast = new ToastConstruct({
                propsData:{
                    customCloseButton:closeOption
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
