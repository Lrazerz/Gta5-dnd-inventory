const { merge } = require('webpack-merge');
const baseConfig = require('./webpackConf.base.js');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist', 'main.html'),
    compress: true,
    port: 3000,
  },
});
