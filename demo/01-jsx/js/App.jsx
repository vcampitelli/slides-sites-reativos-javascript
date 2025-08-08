import { useState } from 'preact/hooks';

export default function App () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você clicou {count} vezes</p>

            <button
                type="button"
                onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
}
