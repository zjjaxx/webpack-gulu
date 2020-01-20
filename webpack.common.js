const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); ////自动生成html 并引入js
const VueLoaderPlugin = require('vue-loader/lib/plugin') //vue 单文件配置
module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist') //
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),//vue 单文件配置
        new HtmlWebpackPlugin({ //
            title: 'gulu-webpack'
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "less-loader",
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },

        ]
    }
};