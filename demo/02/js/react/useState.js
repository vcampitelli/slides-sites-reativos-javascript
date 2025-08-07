import { mountApp } from '@/react';

// "Storage"
const PILHA = {};
let index = -1;

// Handler do setTimeout() para evitar re-renders muito rápidos
let timeout;

/**
 * @template T
 * @param {T} defaultValue
 * @returns {[T,(function(value: T): T)]}
 */
export default function useState (defaultValue) {
    index++;
    console.group(index, 'useState()');
    console.log('valor atual:', PILHA[index]);
    console.trace();
    console.groupEnd();
    if (typeof PILHA[index] === 'undefined') {
        PILHA[index] = defaultValue;
    }
    return [
        PILHA[index],
        doSetState(index),
    ];
}

// @internal
export function resetStates() {
    index = -1;
}

const doSetState = (index) => {
    return (newValue) => {
        console.group(index, 'setState()');
        console.log('valor anterior:', PILHA[index]);
        console.log('novo valor:', newValue);
        console.trace();
        console.groupEnd();

        PILHA[index] = newValue;

        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(mountApp, 50);
    };
};

