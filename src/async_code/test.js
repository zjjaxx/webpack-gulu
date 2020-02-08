import ZButton from "../components/base/z-button.vue";
import Vue from "vue";
export default function(){
    let ButtonConstructor = Vue.extend(ZButton);
    let button = new ButtonConstructor({
      propsData: {
        iconName: "i-setting"
      }
    });
    button.$mount(".button-container");
}