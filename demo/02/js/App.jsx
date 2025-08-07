import Home from '@/components/Home';
import '~/pure-min.css';
import '~/styles.css';

export default function App() {
    return (
        <div id="layout">
            <header>
                <h1>Criando sites reativos com JavaScript</h1>
                <h2>Demo do <code>useEffect</code></h2>
            </header>
            <main>
                <Home />
            </main>
            <footer>
                Por <a href="https://github.com/vcampitelli" target="_blank" rel="noopener">@vcampitelli</a>
            </footer>
        </div>
    )
};

