const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
/* 
want to test : 
    https://www.npmjs.com/package/svg-url-loader
    https://github.com/webpack-contrib/file-loader

*/
module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],

    devServer: {
        port: 3000,
        contentBase: './dist',
        hot: true
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};