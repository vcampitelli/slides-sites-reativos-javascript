import '~/pure-min.css';
import '~/styles.css';
import AuthProvider from '@/providers/AuthProvider';
import Dashboard from '@/components/Dashboard';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Router, { Route } from '@/router';

export default function App() {
    return (
        <div id="layout">
            <header>
                <h1>Criando sites reativos com JavaScript</h1>
                <h2>Demo de roteador</h2>
            </header>
            <main>
                <AuthProvider>
                    <Login />
                    <Router>
                        <Route path="/" component={Home} />
                        <Route path="/dashboard" component={<Dashboard />} />
                    </Router>
                </AuthProvider>
            </main>
            <footer>
                Por <a href="https://github.com/vcampitelli" target="_blank" rel="noopener">@vcampitelli</a>
            </footer>
        </div>
    )
};

