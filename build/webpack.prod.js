/*
 * @Author: zjj
 * @Date: 2020-01-20 14:42:53
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-22 14:52:31
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production", //development
    devtool: 'source-map', //追踪到错误和警告在源代码中的原始位置
    plugins: [],
});