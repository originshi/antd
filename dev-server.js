
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var webpackConfig = require('./webpack.config')
var WebpackDevServer = require('webpack-dev-server');
var webpackMiddleware=require('webpack-dev-middleware');
var  webpackHotMiddleware=require('webpack-hot-middleware')
var app = express()
var compiler = webpack(webpackConfig)
var ora = require('ora')
var spinner = ora('dev for production...')
spinner.start()
app.use(webpackMiddleware(compiler,{

    noInfo: false,
    reload: true,
    stats: { colors: true }
}));
app.use(webpackHotMiddleware(compiler,{
    log: console.log
}));
app.use( express.static('assets'))

app.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }
    spinner.stop()
})
