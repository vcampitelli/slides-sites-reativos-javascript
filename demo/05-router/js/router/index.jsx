import { h } from 'preact';

export default function Router ({ children }) {
    console.debug('Checando rotas', document.location.pathname);
    for (const child of children) {
        if (child.props.path === document.location.pathname) {
            console.debug('Renderizando componente referente à', child.props.path);
            return child;
        }
    }

    return (<div>Nenhuma rota encontrada</div>);
}

export function Route({ path, component }) {
    console.log("rendering route", path, typeof component);
    if (typeof component === 'function') {
        return h(component, null);
    }

    return component;
}

/**
 *
 * @param {String} to
 */
export function navigate(to) {
    history.pushState(null, null, to);
    window.dispatchEvent(
        new CustomEvent('pushstate', {
            detail: {
                href: to,
            },
        })
    );
}
