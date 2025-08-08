/**
 * @template T
 * @typedef {{Provider: import('preact').Component, __context__: {defaultValue: T, value: T | undefined}}} Context<T = any>
 */

/**
 * @template T
 * @param {T} defaultValue
 * @returns {Context<T>}
 */
export function createContext (defaultValue) {
    /** @type {Context} */
    function Context ({ children }) {
        return children;
    }

    Context.__context__ = {
        defaultValue: defaultValue,
        value: undefined,
    };
    Context.Provider = function Provider ({ value, children }) {
        Context.__context__.value = value;
        return children;
    };

    return Context;
}

/**
 * @template T
 * @param {Context<T>} component
 * @returns {T}
 */
export function useContext (component) {
    return (component.__context__.value == null)
        ? component.__context__.defaultValue
        : component.__context__.value;
}
