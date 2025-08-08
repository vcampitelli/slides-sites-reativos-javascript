import { useContext } from '@/react';
import { AuthContext } from '@/providers/AuthProvider';
import Link from '@/router/Link';

export default function Home () {
    const auth = useContext(AuthContext);

    if (!auth.username) {
        return (
            <div className="fieldset-highlight">
                Olá, convidado! Faça o login acima.
            </div>
        )
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p>Olá, <b>{auth.username}</b></p>

                <button
                    type="button"
                    className="pure-button"
                    onClick={() => auth.logout()}>
                    Logout
                </button>
            </div>
            <div>
                <Link href="/dashboard" className="pure-button">Ir para o Dashboard &rarr;</Link>
            </div>
        </div>
    );
}
