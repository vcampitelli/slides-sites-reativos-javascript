// "Storage"
const OBSERVABLES = {};
let index = -1;

/**
 * @param {Function} callback
 * @param {String[]} dependencies
 */
export default function useEffect(callback, dependencies = []) {
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

    console.log("vou disparar");
}

// @internal
export function resetEffects() {
    index = -1;
}
