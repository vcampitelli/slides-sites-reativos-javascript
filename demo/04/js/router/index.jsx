import { h } from 'preact';

export default function Router ({ children }) {
    console.log("pathname", document.location.pathname);
    for (const child of children) {
        if (child.props.path === document.location.pathname) {
            console.log("child match", child.props.path);
            return child;
        }
        console.log("child doesn't match", child.props.path);
    }

    return (<div>não achei ninguém</div>);
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
