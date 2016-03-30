const express = require('express');
const listModules = require('./lib/list-modules');
const renderer = require('./lib/renderer');

const app = express();
const port = 65527;

app.use('/assets', express.static('src/assets'));

app.get('/', function(req,res){
    res.redirect('/demo/');
});

app.get('/demo/', function(req, res) {
    const html = renderer.render('demo/viewer/viewer.html', {});
    res.send(html);
});
app.use('/demo/viewer.css', express.static('src/demo/viewer/viewer.css'));
app.use('/demo/viewer.js', express.static('src/demo/viewer/viewer.js'));

app.get('/demo/modules.json', function(req, res) {
    const modules = listModules().map(name => {
        const nameParts = name.split('/');
        return {
            group: nameParts[0],
            name: (nameParts[1] === nameParts[2]) ? nameParts[2] : [nameParts[1], nameParts[2]].join('/'),
            url: '/demo/modules/' + name
        }
    });
    res.send(modules);
});

app.get('/demo/modules/*?', function(req, res) {
    const filename = req.params[0] + '.demo.html';
    const html = renderer.render(filename, {});
    res.send(html);
});

app.listen(port, function() {
    console.log('Demo available on http://localhost:' + port);
});
