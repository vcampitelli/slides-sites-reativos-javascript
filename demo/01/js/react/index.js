import { h, render, Fragment } from 'preact';
import { initStates, resetStates } from './useState';

// Usado pelo esbuild para renderizar JSX
window.h = h;
window.Fragment = Fragment;

// Contador de renderizações do app
let rerenders = 0;

/** @type {import('preact').VNode} */
let entryComponent;

/** @type {HTMLElement} */
let entryRoot;

/**
 * @param {import('preact').VNode} component
 * @param {HTMLElement} root
 */
export function init (component, root) {
    console.log(component);
    entryComponent = component;
    entryRoot = root;
    mountApp();
}

function mountApp () {
    console.group('Renderizando pela ' + (++rerenders) + 'ª vez');
    resetStates();
    render(entryComponent.type(), entryRoot);
    console.groupEnd();
}

initStates(mountApp);

export { default as useState } from './useState';
