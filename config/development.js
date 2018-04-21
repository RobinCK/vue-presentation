const defaultConfig = require('./default');

module.exports = Object.assign(defaultConfig, {
  NODE_ENV: '"development"',
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {},
  host: process.env.HOST || 'localhost',
  port: !!process.env.PORT ? Number(process.env.PORT) : 8080,
  autoOpenBrowser: false,
  errorOverlay: true,
  notifyOnErrors: true,
  poll: false,
  useEslint: true,
  showEsLintErrorsInOverlay: true,
  devtool: 'cheap-module-eval-source-map',
  cssSourceMap: true
});
