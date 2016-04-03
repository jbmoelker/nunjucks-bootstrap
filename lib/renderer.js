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
renderer.addGlobal('randomHash', randomHash);
renderer.addGlobal('storage', storage());

function counter() {
    let count = 0;
    return  {
        increment: function() { count++; },
        print: function(){ return count; },
        reset: function() { count = 0; }
    };
}

function randomHash() {
    return Math.random()*0xffffffff|0;
}

/**
 * Storage based on Web Storage API (https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 * @returns {{getItem: Function, setItem: Function, removeItem: Function, clear: Function}}
 */
function storage() {
    let store = {};
    return {
        getItem: (key) => store[key],
        setItem: (key, value) => { store[key] = value; },
        removeItem: (key) => { delete store[key]; },
        clear: () => { store = {}; }
    }
}

module.exports = renderer;