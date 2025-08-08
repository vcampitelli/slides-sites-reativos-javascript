import { createContext, useState } from '@/react';

/** @typedef {{
 *   username: string|null,
 *   login: (username: string) => void,
 *   logout: () => void
 * }} Auth */

/** @type {Auth} */
const defaultValue = {
    username: null,
    login: (username) => {
        throw new Error('Login não está pronto');
    },
    logout: () => {},
};

export const AuthContext = createContext(defaultValue);

export default function AuthProvider ({ value, children }) {
    const [username, setUsername] = useState(defaultValue.username);

    /** @type {Auth} */
    const context = {
        username,
        login: (username) => {
            setUsername(username);
        },
        logout: () => {
            setUsername(undefined);
        },
    }

    return (
        <AuthContext.Provider value={context}>
            <div className="fieldset-highlight">
                <h1>Auth Provider</h1>
                {children}
            </div>
        </AuthContext.Provider>
    );
}
