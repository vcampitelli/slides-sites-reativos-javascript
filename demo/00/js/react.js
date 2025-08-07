const PILHA = {};
let index = -1;

export function init () {
    index = -1;
};

let dataUltimaRerenderizacao = (new Date()).getTime();
const doSetState = (index) => {
    return (newValue) => {
        PILHA[index] = newValue;
        dataUltimaRerenderizacao++;

        const date = (new Date).getTime();
        if (date - dataUltimaRerenderizacao > 100) { // 100ms
            window.render();
            dataUltimaRerenderizacao = date;
        }
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
