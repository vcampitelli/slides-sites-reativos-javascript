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

let termineiDeMontar = true;
let devoMontarDeNovo = false;

export function mountApp () {
    if (!termineiDeMontar) {
        devoMontarDeNovo = true;
        return;
    }

    termineiDeMontar = false;
    console.groupCollapsed('Renderizando pela ' + (++rerenders) + 'ª vez');
    resetStates();
    resetEffects();
    render(entryComponent.type(), entryRoot);
    console.groupEnd();
    termineiDeMontar = true;

    if (devoMontarDeNovo) {
        console.log('Forçando re-render após montagem inicial...');
        devoMontarDeNovo = false;
        mountApp();
    }
}

const handleHistoryChange = () => {
    console.debug('Navegando para', document.location.pathname);

    if (termineiDeMontar) {
        mountApp();
        return;
    }

    if (!devoMontarDeNovo) {
        devoMontarDeNovo = true;
    }
};

window.addEventListener('popstate', handleHistoryChange);
window.addEventListener('pushstate', handleHistoryChange);

export { default as useState } from './useState';
export { default as useEffect } from './useEffect';
export { createContext, useContext } from './context.jsx';
