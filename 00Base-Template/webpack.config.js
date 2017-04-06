var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      new ExtractTextPlugin({
        filename: 'bundle.css',
        allChunks: true
      }),
    ]
}
else {
  config.entry = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client/scripts/index',
    './src/client/scripts/utils/index',
    './src/client/styles/index.scss'
  ]
  config.plugins = [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ]
}

module.exports = {
  entry: config.entry,
  output: {
    path: path.join(__dirname, 'src', 'client', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'src', 'client', 'static'),
    publicPath: (__dirname, 'src', 'client', 'static')
  },
  plugins: config.plugins,
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', ['es2015', { 'modules': false }], 'stage-0'],
              plugins: ['react-hot-loader/babel', 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader?limit=100000'
          }
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
};
