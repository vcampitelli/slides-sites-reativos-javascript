import { useContext } from '@/react';
import { AuthContext } from '@/providers/AuthProvider';

export default function Home () {
    const auth = useContext(AuthContext);

    if (!auth.username) {
        return (
            <div>
                Olá, convidado! Faça o login acima.
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p>Olá, <b>{auth.username}</b></p>

            <button
                type="button"
                className="pure-button"
                onClick={() => auth.logout()}>
                Logout
            </button>
        </div>
    );
}
