import { useState } from '@/react';

export default function Home() {
    const [number, setNumber] = useState(0);
    const [email, setEmail] = useState('');

    const submit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert(`Irei submeter o form com ${number} e ${email}`);
        setNumber(0);
        setEmail('');
    };

    return (
        <form className="pure-form" onSubmit={submit}>
            <fieldset>
                <div className="mb-1">
                    Valor do <code>number</code>: <input type="text" readOnly value={number} size={2} />
                    <button
                        type="button"
                        id="btn-increase"
                        className="pure-button"
                        onClick={() => setNumber(number + 1)}>
                        Aumentar valor
                    </button>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <button
                        type="submit"
                        id="btn-submit"
                        className="pure-button pure-button-primary">
                        Enviar
                    </button>
                </div>
            </fieldset>
        </form>
    );
};

