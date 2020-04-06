import Dialog from "./dialog"
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
        Vue.prototype.$dialog = function (option) {
            return Dialog(option)     
        }   
    }
}
