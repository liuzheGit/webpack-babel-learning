var path = require('path');
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
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}