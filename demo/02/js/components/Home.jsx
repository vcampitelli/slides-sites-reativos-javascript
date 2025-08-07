import { useEffect, useState } from '@/react';

export default function Home () {
    const [postId, setPostId] = useState(0);

    return (
        <>
            <form className="pure-form">
                <fieldset>
                    <div className="mb-1">
                        Buscar post:
                        <input
                            type="number"
                            value={postId}
                            min={0}
                            max={100}
                            size={2}
                            onChange={(e) => setPostId(parseInt(e.target.value, 10))}/>
                    </div>
                </fieldset>
            </form>
            <PostContent id={postId}/>
        </>
    );
};

function PostContent ({ id }) {
    /** @typedef {{id: number, userId: number, title: string, body: string}} Post */
    const [data, setData] = useState(/** @type {Post|Error|null} */ null);

    useEffect(() => {
        if (!id) {
            return;
        }
        setData(null);
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
    }, [id]);

    if (!id) {
        return (
            <div>Escolha o ID de um post de 1 a 100</div>
        );
    }

    if (data === null) {
        return (
            <>
                <p>
                    Buscando dados do post {id}...
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
        );
    }

    return (
        <div key={data.id}>
            <p><b>#{data.id} {data.title}</b></p>
            <p><i>Por #{data.userId}</i></p>
            <p>{data.body}</p>
        </div>
    );
}
