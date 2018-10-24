module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval-source-map',
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}