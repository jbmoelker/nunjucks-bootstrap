'use strict';

const nunjucks = require('nunjucks');

const renderer = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('src', {
        noCache: true,
        watch: false
    }),
    { autoescape: true }
);

renderer.addGlobal('counter', counter());

function counter() {
    let count = 0;
    return  {
        increment: function() { count++; },
        print: function(){ return count; },
        reset: function() { count = 0; }
    };
}

module.exports = renderer;