/**
 * Created by 核武器 on 2017/7/26.
 */
require('shelljs/global');
var webpack = require('webpack')
var path=require('path');
var webpackConfig = require('./webpack.config')
var merge = require('webpack-merge');
var ora = require('ora')
var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(__dirname, "./dist")//__dirname当前根目录
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', './assets/*', assetsPath);
// merge(webpackConfig);
// console.log(assetsPath);
// webpack(merge(webpackConfig));
const compiler = webpack(webpackConfig);
compiler.run((err,stats) => {
    // ...
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
});