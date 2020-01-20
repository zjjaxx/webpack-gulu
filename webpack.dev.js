/*
 * @Author: zjj
 * @Date: 2020-01-20 14:40:01
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-20 16:14:36
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    optimization: {
        usedExports: true,
    },
    devtool: 'inline-source-map', //追踪到错误和警告在源代码中的原始位置
    devServer: {
        contentBase: './dist'//自动刷新浏览器
    },
});