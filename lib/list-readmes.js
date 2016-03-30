const glob = require('glob');

module.exports = function listReadmes() {
    const baseDir = 'src/';
    const basename = 'README.md';
    return glob.sync(baseDir + '**/' + basename)
        .map(filename => filename.substring(baseDir.length))
};