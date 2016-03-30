const copyFile = require('../lib/copy-file');
const listModules = require('../lib/list-modules');
const listReadmes = require('../lib/list-readmes');
const markdownToHtml = require('../lib/markdown-to-html');
const Promise = require('bluebird');
const renderer = require('../lib/renderer');
const saveFile = require('../lib/save-file');

const srcDir = 'src/';
const distDir = 'dist/';
const ext = '.demo.html';
const moduleNames = listModules();

module.exports = Promise.all([
    buildModules(),
    buildReadmes(),
    buildViewer()
]);

function buildModules() {
    return Promise.all(
        moduleNames.map(name => {
            const filename = name + ext;
            const html = renderer.render(filename, {});
            return saveFile(distDir + filename, html);
        })
    );
}

function buildReadmes() {
    return Promise.all(
        listReadmes().map(filename => {
            const body = markdownToHtml.render(filename);
            const html = renderer.render('demo/info/info.html', { title: filename, body });
            return saveFile(distDir + filename.replace('/README.md', '/readme.html'), html);
        })
    )
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
    const list = moduleNames.reduce((arr, name) => {
        const nameParts = name.split('/');
        arr.push({
            group: nameParts[0],
            name: (nameParts[1] === nameParts[2]) ? nameParts[2] : [nameParts[1], nameParts[2]].join('/'),
            url: name + ext,
            info: {
                readme: [nameParts[0], nameParts[1], 'readme.html'].join('/')
            }
        });
        return arr;
    }, []);
    return saveFile(distDir + 'modules.json', JSON.stringify(list, null, 4));
}