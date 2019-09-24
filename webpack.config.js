const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve('./dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
            hmr: false,
            reloadAll: true
          },
        }, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "vue_stage",
      template: './index.html'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}