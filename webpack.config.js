const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "vue_stage",
      template: './index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    hot:true
  }
}