import '~/pure-min.css';
import '~/styles.css';
import AuthProvider from '@/providers/AuthProvider';
import Home from '@/components/Home';
import Login from '@/components/Login';

export default function App() {
    return (
        <div id="layout">
            <header>
                <h1>Criando sites reativos com JavaScript</h1>
                <h2>Demo do <code>useContext</code></h2>
            </header>
            <main>
                <AuthProvider>
                    <Login />
                    <Home />
                </AuthProvider>
            </main>
            <footer>
                Por <a href="https://github.com/vcampitelli" target="_blank" rel="noopener">@vcampitelli</a>
            </footer>
        </div>
    )
};

