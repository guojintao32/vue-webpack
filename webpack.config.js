const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve('./dist'),
    publicPath:'/assets/'
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
      },{
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "vue_stage",
      template: path.resolve(__dirname,'./index.html')
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization:{
    runtimeChunk: true,

    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback:{
      rewrites: [
        { from: /^\/$/, to: '/dist/index.html' }
      ]
    }
  }
}