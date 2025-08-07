import { useState } from './react';

export default function App() {
    const [number, setNumber] = useState(0);
    const [email, setEmail] = useState('');

    const submit = () => {
        alert(`Irei submeter o form com ${number} e ${email}`);
        setNumber(0);
        setEmail('');
    };

    return (
        <>
            <div>
                Valor do <kbd>number</kbd>: <span>{number}</span>
                <button
                    type="button"
                    id="btn-increase"
                    onClick={() => setNumber(number + 1)}>
                    Aumentar valor
                </button>
            </div>
            <div>
                <label>
                    <input type="text"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="button" id="btn-submit" onClick={submit}>Submeter</button>
            </div>
        </>
    );
};

