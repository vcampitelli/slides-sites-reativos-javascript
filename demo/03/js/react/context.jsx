import { Component } from 'preact';

// "Storage"
const CONTEXTS = {};
let index = -1;

/**
 * @template T
 * @typedef {{Provider: Component, __context__: {defaultValue: T, value: T | undefined, id: number}}} Context<T = any>
 */

/**
 * @template T
 * @param {T} defaultValue
 * @returns {Context<T>}
 */
export function createContext (defaultValue) {
    index++;

    /** @type {Context} */
    function Context ({ children }) {
        return children;
    }

    Context.__context__ = {
        defaultValue: defaultValue,
        value: undefined,
        id: index,
    };
    Context.Provider = function Provider ({ value, children }) {
        Context.__context__.value = value;
        return children;
    };

    CONTEXTS[index] = Context;

    return CONTEXTS[index];
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
