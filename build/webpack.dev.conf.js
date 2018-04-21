const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');

const notifier = require('./notifier');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.devtool,

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: config.host,
    port: config.port,
    open: config.autoOpenBrowser,
    overlay: config.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.assetsPublicPath,
    proxy: config.proxyTable,
    quiet: true,
    watchOptions: {
      poll: config.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.NODE_ENV,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: config.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port;
      devWebpackConfig.devServer.port = port;
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.notifyOnErrors
        ? notifier()
        : undefined
      }));

      resolve(devWebpackConfig);
    }
  })
});
