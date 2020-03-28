import ZToast from "../../components/base/z-toast.vue"
import Vue from "vue"
let ZToastConstrutor = Vue.extend(ZToast)
var toast = null
const Toast = function (option) {
    if (toast) {
        return
    }
    if (typeof option == "string") {
        option = { message: option }
    }
    toast = new ZToastConstrutor({
        propsData: option
    }).$mount()
    toast.$on("beforeDestroy", () => {
        toast = null
    })
    document.body.appendChild(toast.$el)
}
let statusList=["success","loading", "fail"]
statusList.forEach(element => {
    Toast[element] = function (option) {
        if (typeof option == "string") {
            option = { message: option }
        }
        option.type = element
        Toast(option)
    }
});
export default Toast