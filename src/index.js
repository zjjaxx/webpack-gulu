/*
 * @Author: zjj
 * @Date: 2020-01-19 14:02:57
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-19 16:41:20
 */
import "../src/assets/style/global.less"
import printMe from './print.js';
console.log("enter index.js")
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
