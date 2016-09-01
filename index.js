const express = require('express');
const listModules = require('./lib/list-modules');
const markdownToHtml = require('./lib/markdown-to-html');
const renderer = require('./lib/renderer');

const app = express();
const port = process.env.PORT || 65527;
const demoDir = 'node_modules/demo-viewer/dist/';

app.use('/assets', express.static('src/assets'));

app.get('/', (req,res) => res.redirect('/demo/'));

app.get('/demo/', (req, res) => res.send(renderer.render('demo/viewer/viewer.html')));
app.use('/demo/viewer.css', express.static(`${demoDir}demo-viewer.css`));
app.use('/demo/viewer.js',  express.static(`${demoDir}demo-viewer.js`));

app.get('/demo/modules.json', function(req, res) {
    const modules = listModules().map(name => {
        const nameParts = name.split('/');
        return {
            group: nameParts[0],
            name: (nameParts[1] === nameParts[2]) ? nameParts[2] : [nameParts[1], nameParts[2]].join('/'),
            url: '/demo/modules/' + name,
            info: {
                readme: '/demo/modules/' + [nameParts[0], nameParts[1]].join('/') + '/readme'
            }
        }
    });
    res.send(modules);
});

app.get('/demo/modules/*?/readme', function(req, res) {
    const filename = req.params[0] + '/README.md';
    const body = markdownToHtml.render(filename);
    const html = renderer.render('demo/info/info.html', { title: req.params[0], body });
    res.send(html);
});

app.get('/demo/modules/*?', function(req, res) {
    const filename = req.params[0] + '.demo.html';
    const html = renderer.render(filename, {});
    res.send(html);
});

app.listen(port, function() {
    console.log('Demo available on http://localhost:' + port);
});
