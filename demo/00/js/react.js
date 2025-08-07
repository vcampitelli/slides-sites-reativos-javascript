// "Storage"
const PILHA = {};
let index = -1;

// Handler do setTimeout() para evitar re-renders muito rápidos
let timeout;

export function init () {
    index = -1;
};

const doSetState = (index) => {
    return (newValue) => {
        PILHA[index] = newValue;

        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(window.render, 50);
    };
};

export function useState (defaultValue) {
    index++;
    if (typeof PILHA[index] === 'undefined') {
        PILHA[index] = defaultValue;
    }
    return [
        PILHA[index],
        doSetState(index)
    ];
};
