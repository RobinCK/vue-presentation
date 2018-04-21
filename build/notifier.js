const path = require('path');
const notifier = require('node-notifier');
const packageConfig = require('../package');

module.exports = () => {
  return (severity, errors) => {
    if (severity !== 'error') {
      return
    }

    const error = errors[0];
    const filename = error.file && error.file.split('!').pop();

    notifier.notify({
      title: packageConfig.name,
      message: `${severity}: ${error.name}`,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
};
