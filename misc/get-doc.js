var doc = require('./api-doc');
var glob = require('glob');

function getFileNames() {
  return glob.sync('lib/src/**/*.ts', {
    ignore: ['lib/**/*.spec.ts', 'lib/util/**']
  });
}

function getApiDocs() {
  return doc(getFileNames());
}

module.exports = getApiDocs;
