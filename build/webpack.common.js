/*
 * @Author: zjj
 * @Date: 2020-01-21 08:58:23
 * @LastEditors  : zjj
 * @LastEditTime : 2020-01-22 16:45:37
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html 并引入js
const VueLoaderPlugin = require('vue-loader/lib/plugin') //vue 单文件配置
// var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //清除dist
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // publicPath:"https://www.baidu.com/assets/"
    },
    //代码分离
    //把node_mudule中的第三方包打包成另一个文件
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: 'style.css'
        // }),
        new CleanWebpackPlugin(), //清除dist
        new VueLoaderPlugin(),//vue 单文件配置
        new HtmlWebpackPlugin({ //自动生成html 并引入js
            title: 'gulu-webpack',
            template: path.resolve(__dirname, '../public/index.html') //使用自己的模板
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    // process.env.NODE_ENV !== 'production'
                    // ? 'vue-style-loader'
                    // : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: { importLoaders: 2 }
                    },
                    'postcss-loader',
                    "less-loader",
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [
                                path.resolve(__dirname, '../src/assets/style/mixin.less')
                            ]
                        }
                    }
                ]
            },
            //file-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。
            //url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。
            //2个选一个（url-loader 推荐）
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false, // 这里设置为false
                            limit: 8192,
                            name: "[name]-zz.[ext]",
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name]-zz.[ext]",
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};