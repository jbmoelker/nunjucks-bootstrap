'use strict';

const fs = require('fs');
const marked = require('marked');
const renderCode = require('./render-code');

module.exports = { render, renderString };

const srcDir = 'src/';

function render (filename) {
    if (filename && fs.statSync(srcDir + filename)) {
        const markdown = fs.readFileSync(srcDir + filename, 'utf8');
        return renderString(markdown);
    }
    return '';
}

function renderString (markdown) {
    let renderer = new marked.Renderer();
    renderer.blockquote = (text) => `<blockquote class="blockquote"><p class="m-b-0">${text}</p></blockquote>`;
    renderer.code = renderCode;
    renderer.table = (header, body) => `<table class="table table-striped">${header}${body}</table>`;
    return marked(markdown, { renderer });
}
