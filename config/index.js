/**
 * @type {{
 *    NODE_ENV: string,
 *    assetsSubDirectory: string,
 *    assetsPublicPath: string,
 *    proxyTable: {},
 *    host: string,
 *    port: number,
 *    autoOpenBrowser: boolean,
 *    errorOverlay: boolean,
 *    notifyOnErrors: boolean,
 *    poll: boolean,
 *    useEslint: boolean,
 *    showEsLintErrorsInOverlay: boolean,
 *    devtool: string,
 *    cssSourceMap: boolean
 * }}
 */
module.exports = process.env.NODE_ENV === 'production'
  ? require('./production')
  : require('./development')
;
