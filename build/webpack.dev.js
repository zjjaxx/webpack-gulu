/*
 * @Author: zjj
 * @Date: 2020-01-20 14:40:01
 * @LastEditors: zjj
 * @LastEditTime : 2020-01-21 17:14:41
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack=require("webpack")
module.exports = merge(common, {
    mode: "development",
    optimization: {
        usedExports: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'cheap-module-eval-source-map', //追踪到错误和警告在源代码中的原始位置
    devServer: {    //自动刷新浏览器
        host: "0.0.0.0",
        port:8089,
        open: true, //自动打开浏览器
        hot: true,//启用 webpack 的模块热替换特性：vue 局部刷新 不会刷新
        proxy: {
            "/api": "https://www.baidu.com"
        }
    },
});