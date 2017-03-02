var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var DashboardPlugin = require('webpack-dashboard/plugin');
ExtractTextPlugin = require('extract-text-webpack-plugin');
var argv = require('yargs').argv;

const config = {};

// This configured production
if (argv.p) {
    config.entry = [
      './src/client/scripts/index',
      './src/client/scripts/utils/index',
      './src/client/styles/index.scss'
    ]
    config.plugins = [
      new DashboardPlugin(),
      new ExtractTextPlugin('bundle.css', {
          allChunks: true
      }),
    ]
}
else {
  config.entry = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/client/scripts/index',
    './src/client/scripts/utils/index',
    './src/client/styles/index.scss'
  ]
  config.plugins = [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css', {
        allChunks: true
    }),
  ]
}

module.exports = {
  entry: config.entry,
  output: {
    path: path.join(__dirname, 'src', 'client', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: config.plugins,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass'])
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
