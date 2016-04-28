'use strict';

var webpack = require('webpack');
// var autoprefixer = require('autoprefixer'); // automatically add vendor prefixes to css
var HtmlWebpackPlugin = require('html-webpack-plugin'); // simple html creation
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // separate css into it's own output file
var CopyWebpackPlugin = require('copy-webpack-plugin'); // copy files and directories from src to dest

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {
  var config = {};

  config.entry = isTest ? {} : { app: './src/app/app.js' }

  config.output = isTest ? {} : {
    path: __dirname + '/dist',
    publicPath: isProd ? '/' : 'http://localhost:8080',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js',
  }

  config.devtool = isTest ? 'inline-source-map' : isProd ? 'source-map' : 'eval-source-map';

  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  };

  // https://github.com/ColCh/isparta-instrumenter-loader
  if (isTest) {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: 'isparta-instrumenter'
    })
  }

  // https://github.com/postcss/autoprefixer-core
  // config.postcss = [
  //   autoprefixer({
  //     browsers: ['last 2 version']
  //   })
  // ];

  config.plugins = [];

  if (!isTest) {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin('[name].[hash].css', { disable: !isProd })
    )
  }

  if (isProd) {
    config.plugins.push(
      new webpack.NoErrorsPlugin, // Only emit files when there are no errors
      new webpack.optimize.DedupePlugin(), // Dedupe modules in the output
      new webpack.optimize.UglifyJsPlugin(), // Minify all javascript, switch loaders to minimizing mode
      new CopyWebpackPlugin([{
        from: __dirname + '/src/public'
      }])
    )
  }

  return config;
}();
