var path = require('path');
const webpack = require('webpack');
module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval-source-map',
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  mode:'development',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    port: 7777
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有, 翻版必究')
  ]
}