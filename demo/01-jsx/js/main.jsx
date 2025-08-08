import { h, render } from 'preact';
import App from './App.jsx';

window.h = h;
window.render = render;

render(<App />, document.getElementById('app'));
