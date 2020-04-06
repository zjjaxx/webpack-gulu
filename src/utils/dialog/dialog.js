import ZDialog from "../../components/base/z-dialog.vue"
import Vue from "vue"
var instance = null
var ZDialogConstructor = Vue.extend(ZDialog)
const Dialog = function (option) {
    return new Promise((resolve, reject) => {
        if (instance) {
            return
        }
        if (typeof option == "string") {
            option = { content: option }
        }
        option.value = true
        instance = new ZDialogConstructor({
            propsData: option
        }).$mount()
        let EventList=["input","confirm","cancel"]
        EventList.forEach(item=>{
            instance.$on(item, () => {
                if(typeof option.beforeClose=="function"&&option.type=="confirm"){
                    option.beforeClose(item,remove)
                    return
                }
                if(item=="cancel"){
                    reject()
                }
                else{
                    resolve()
                }
                remove()
            })
        })
        document.body.appendChild(instance.$el)
        function remove(){
            instance.$el.remove()
            instance.$destroy()
            instance = null
        }
    })

}
var typeList = ["alert", "confirm"]
typeList.forEach(item => {
    Dialog[item] = function (option) {
        if (typeof option == "string") {
            option = { content: option }
        }
        option.value = true
        option.type = item
        return Dialog(option)
    }
})
export default Dialog