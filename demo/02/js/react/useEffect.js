// "Storage"
const OBSERVABLES = {};
let index = -1;

/**
 * @param {Function} callback
 * @param {String[]} dependencies
 */
export default function useEffect(callback, dependencies = []) {
    if (!Array.isArray(dependencies)) {
        throw new Error('As dependências do useEffect() devem ser um array');
    }

    index++;
    console.log('useEffect', index);

    // Se passarmos um array vazio, queremos executar apenas
    // na primeira montagem do componente
    if (dependencies.length === 0) {
        if (!OBSERVABLES[index]) {
            OBSERVABLES[index] = true;
            callback();
        }
        return;
    }

    // Se temos dependências passadas, mas é a primeira execução
    // do useEffect(), então executamos o callback
    if (!OBSERVABLES[index]) {
        OBSERVABLES[index] = dependencies;
        callback();
        return;
    }

    console.log('old', OBSERVABLES[index]);
    console.log('new', dependencies);
    let shouldRun = false;
    for (let i = index; i < dependencies.length; i++) {
        if (OBSERVABLES[index][i] !== dependencies[i]) {
            shouldRun = true;
            break;
        }
    }

    // Atualiza as dependências
    OBSERVABLES[index] = dependencies;

    console.log('shouldRun', shouldRun);
    if (shouldRun) {
        callback();
    }

    console.log("vou disparar");
}

// @internal
export function resetEffects() {
    index = -1;
}
