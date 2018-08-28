const webpack = require('webpack');
const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    node: {
        fs: "empty",
        tls: "empty",
        net: "empty"
    },
    cache: true,
    entry: [
        './src/index.js'
    ],
    output: {
        path:Path.resolve( __dirname + '/public/'),
        publicPath: '/public/',
        filename: 'js/bundle.js'
    },
    stats: {
        colors: true,
        reasons: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "src/[name].css",
            disable: false,
            allChunks: true
          })
    ],
    module: {
        rules: [
            {test: /\.js$/, loaders: ['babel-loader?cacheDirectory'], exclude: /node_modules/},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use:[
                {
                   loader: 'url-loader',
                   options: {
                       limit: 10000                       
                   }
                }
            ]},
            //to be removed - temp for DateTimePicker (react-widgets)
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.(png|jpg|gif)$/,
             use:[
                 {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        mimetype: 'image/png',
                        name: '[name].[ext]'                       
                    }
                 }
             ]},
            //{test: /\.json$/, loader: "json-loader"},
            {test: /\.html$/, loader: "html-loader"}
        ]
    }
}