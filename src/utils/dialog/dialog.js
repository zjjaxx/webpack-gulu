import ZDialog from "../../components/base/z-dialog.vue"
import Vue from "vue"
var instance=null
var ZDialogConstructor=Vue.extend(ZDialog)
const Dialog=function(option){
    if(instance){
        return
    }
    if(typeof option == "string"){
        option={content:option,value:true}
    }
    instance=new ZDialogConstructor({
        propsData:option
    }).$mount()
    instance.$on("input",()=>{
        instance.$el.remove()
        instance.$destroy()
        instance=null
    })
    document.body.appendChild(instance.$el)
}
export default Dialog