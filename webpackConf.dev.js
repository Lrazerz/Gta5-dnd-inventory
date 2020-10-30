const {merge} = require('webpack-merge');
const baseConfig = require('./webpackConf.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
  }
});