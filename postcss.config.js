/*
 * @Author: zjj
 * @Date: 2020-01-22 13:46:07
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-22 13:57:35
 */
module.exports = {
  "plugins": {
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,     // (Number) The width of the viewport.
      viewportHeight: 667,    // (Number) The height of the viewport.
      unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw',     // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
      mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "default",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }

}