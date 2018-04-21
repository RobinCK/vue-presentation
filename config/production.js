const path = require('path');
const defaultConfig = require('./default');

module.exports = Object.assign(defaultConfig, {
  NODE_ENV: '"production"',
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '',
  productionSourceMap: true,
  devtool: '#source-map',
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  showEsLintErrorsInOverlay: false,
  bundleAnalyzerReport: process.env.npm_config_report
});
