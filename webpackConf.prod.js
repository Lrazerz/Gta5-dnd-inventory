const {merge} = require('webpack-merge');
const baseConfig = require('./webpackConf.base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

 const prodConfig = {
  mode: 'production',
  entry: './index.tsx',
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css", ".scss", "png", "jpg", "cur"],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: [MiniCssExtractPlugin.loader, 'css-loader'],
  //     }
  //   ]
  // },
  devServer: {
    contentBase: path.join(__dirname,'dist', 'main.html'),
    compress: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'main.html',
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimize: true,
  }
};

module.exports = merge(baseConfig, prodConfig);