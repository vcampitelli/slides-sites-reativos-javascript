import { h, render, Fragment } from 'preact';
import { resetStates } from './useState';
import { resetEffects } from './useEffect';

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
    entryComponent = component;
    entryRoot = root;
    mountApp();
}

export function mountApp () {
    console.groupCollapsed('Renderizando pela ' + (++rerenders) + 'ª vez');
    resetStates();
    resetEffects();
    render(entryComponent.type(), entryRoot);
    console.groupEnd();
}

export { default as useState } from './useState';
export { default as useEffect } from './useEffect';
