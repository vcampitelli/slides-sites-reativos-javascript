import { useEffect, useState } from '@/react';

export default function Home() {
    /** @typedef Post {id: number, userId: number, title: string, body: string} */
    const [data, setData] = useState(/** @type {Post[]|Error|null} */ null);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if (!response.ok) {
                        console.error(response);
                        throw new Error(`HTTP error: ${response.status}`);
                    }

                    return response.json();
                })
                .then(setData)
                .catch(err => {
                    setData((err instanceof Error) ? err : new Error(err));
                });
        }, 1000);
    }, []);

    if (data === null) {
        return (
            <>
                <p>
                    Buscando dados dos posts...
                </p>
                <div className="loading">Carregando...</div>
            </>
        );
    }

    if (data instanceof Error) {
        return (
            <div className="error">
                Erro: {data.message}
            </div>
        )
    }

    return (
        <>
            <form className="pure-form">
                <fieldset>
                    <div className="mb-1">
                        Valor do <code>number</code>: <input type="text" readOnly value={number} size={2} />{' '}
                        <button
                            type="button"
                            id="btn-increase"
                            className="pure-button"
                            onClick={() => setNumber(number + 1)}>
                            Aumentar valor
                        </button>
                    </div>
                </fieldset>
            </form>
            <table class="pure-table pure-table-striped">
                <thead>
                    <tr>
                        <th>Post</th>
                        <th>Título</th>
                        <th>Usuário</th>
                        <th>Conteúdo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((post) => (
                        <tr key={post.id}>
                            <td><b>#{post.id}</b></td>
                            <td><b>{post.title}</b></td>
                            <td><i>#{post.userId}</i></td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

