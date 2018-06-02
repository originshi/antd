
//webpack.config.js
var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var path=require('path');

var ip="";
function getIPAdress(){
    var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}
ip=getIPAdress();

module.exports = {
    devtool: 'eval-source-map',
    // entry: ['webpack/hot/dev-server', __dirname + '/es6/main.js'],
    //entry: ['webpack/hot/dev-server', __dirname + '/antd/index.js'],
	entry: ['webpack/hot/dev-server', __dirname + '/redux1/index.js'],
    output: {
        path:  path.join(__dirname, './dist'),

        // filename: 'bundle.js',
        filename: 'js/[name].js',
        //assetsSubDirectory:"./assets",
        // publicPath:"./",
        chunkFilename: 'js/[name].chunk.js',
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.json$/,
                loader: 'json'
            }
            , {
                test: /\.css$/,
                //loaders: ['style', 'css', 'autoprefixer']
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader','autoprefixer')
            }, {
                test: /\.less/,
                //loaders: ['style', 'css', 'autoprefixer', 'less'],
               loader: 'style-loader!css-loader!less-loader'
               //loader: ExtractTextPlugin.extract('style', 'css', 'autoprefixer', 'less'),

            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?fonts/name=[hash].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?limit=1200&name=images/[name].[hash:8].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热模块替换插件
        new OpenBrowserPlugin({ url: "http://"+ip+":8080",browser: 'chrome' }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        //添加此项配置之后，无论有没有修改原文件，打包生成的js文件hash值不会再变化
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new webpack.NoErrorsPlugin(),


    ],

    devServer: {
        contentBase: './',
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8080,
        host:ip,
        process: true
    }
};
