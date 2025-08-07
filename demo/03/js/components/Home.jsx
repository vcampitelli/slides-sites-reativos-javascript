import { useContext } from '@/react';
import { AuthContext } from '@/providers/AuthProvider';

export default function Home () {
    const auth = useContext(AuthContext);
    return (
        <div>
            Olá, {auth.username || 'convidado'}
            {(auth.username) ? (
                <button
                    type="button"
                    className="pure-button"
                    onClick={() => auth.logout()}>
                    Logout
                </button>
            ) : null}
        </div>
    );
}
