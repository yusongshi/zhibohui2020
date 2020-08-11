let path = require("path");
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        //path:'./dist/js',
        path: path.resolve(__dirname, './dist'),
        filename: './assets/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 5120,
                        name: '[name].[ext]?[hash]'
                      }
                    }
                ]
            },
            {
                //判断是否是css文件
                test: /\.css$/,
                //不用在指定文件设置loader
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ]
};
