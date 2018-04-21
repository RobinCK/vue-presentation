const path = require('path');
const config = require('../config');

module.exports = function(_path) {
  return path.posix.join(config.assetsSubDirectory, _path)
};
