const glob = require('glob');

module.exports = function listModules() {
    const baseDir = 'src/';
    const ext = '.demo.html';
    return glob.sync(baseDir + '**/*' + ext)
        .map(filename => filename.substring(baseDir.length, filename.length - ext.length))
};