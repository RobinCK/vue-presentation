const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');
const assetsPath = require('./assetsPath');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.showEsLintErrorsInOverlay
  }
});

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
    style: './src/main.less'
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: config.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '~': path.relative(__dirname, 'node_modules'),
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      ...(config.useEslint ? [createLintingRule()] : []),
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-import')(),
                ],
              }
            },
          ]
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'less-loader' },
          ]
        }),
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ]
        }),
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
