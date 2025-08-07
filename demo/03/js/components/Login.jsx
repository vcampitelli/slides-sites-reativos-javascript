import { useContext, useState } from '@/react';
import { AuthContext } from '@/providers/AuthProvider';

export default function Login () {
    const [username, setUsername] = useState('');
    const auth = useContext(AuthContext);

    const submit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!username) {
            return;
        }
        auth.login(username);
    };

    const onChange = (e) => setUsername(e.target.value.trim());

    if (auth.username) {
        return null;
    }

    return (
        <form className="pure-form" onSubmit={submit}>
            <fieldset>
                <label>Qual seu nome?</label>
                <input
                    type="text"
                    placeholder="Seu nome"
                    value={username}
                    onChange={onChange}
                    required/>
                <button type="submit" className="pure-button pure-button-primary">Entrar</button>
            </fieldset>
        </form>
    );
}
