const copyFile = require('../lib/copy-file');
const listModules = require('../lib/list-modules');
const Promise = require('bluebird');
const renderer = require('../lib/renderer');
const saveFile = require('../lib/save-file');

const srcDir = 'src/';
const distDir = 'dist/';
const ext = '.demo.html';

module.exports = Promise.all([
    buildModules(),
    buildViewer()
]);

function buildModules() {
    return Promise.all(
        listModules().map(name => {
            const filename = name + ext;
            const html = renderer.render(filename, {});
            return saveFile(distDir + filename, html);
        })
    );
}

function buildViewer() {
    return Promise.all([
        copyFile(`${srcDir}demo/viewer/viewer.html`, `${distDir}index.html`),
        copyFile(`${srcDir}demo/viewer/viewer.css`, `${distDir}viewer.css`),
        copyFile(`${srcDir}demo/viewer/viewer.js`, `${distDir}viewer.js`),
        buildViewerJson()
    ]);
}

function buildViewerJson() {
    const list = listModules().reduce((arr, name) => {
        const nameParts = name.split('/');
        arr.push({
            group: nameParts[0],
            name: (nameParts[1] === nameParts[2]) ? nameParts[2] : [nameParts[1], nameParts[2]].join('/'),
            url: name + ext
        });
        return arr;
    }, []);
    return saveFile(distDir + 'modules.json', JSON.stringify(list, null, 4));
}