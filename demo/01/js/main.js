import { init } from './react.js';
import App from './App.jsx';
import { h, render, Fragment } from 'preact';
// import '../node_modules/@babel/core/lib/index.js';
// import '../node_modules/@babel/plugin-transform-react-jsx/lib/index.js';

window.h = h;
window.Fragment = Fragment;

let rerenders = 0;
window.render = function () {
    console.log('Renderizando ' + (++rerenders));
    init();
    const vnode = App.call(App);
    render(vnode, document.getElementById('app'));
};
window.render();
