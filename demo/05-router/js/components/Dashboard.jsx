import Link from '@/router/Link';
import Redirect from '@/router/Redirect';
import { useContext } from '@/react';
import { AuthContext } from '@/providers/AuthProvider';

export default function Dashboard () {
    const auth = useContext(AuthContext);

    if (!auth.username) {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Dashboard</h1>

            <Link href="/" className="pure-button">&larr; Voltar para a Home</Link>
        </div>
    );
}
