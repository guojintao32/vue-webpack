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
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    }
}
}