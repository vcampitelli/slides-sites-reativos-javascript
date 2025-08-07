import { useState } from './react.js';

export default function App() {
    const [number, setNumber] = useState(0);
    const [email, setEmail] = useState('');

    const $span = document.getElementsByTagName('span')[0];
    const $input = document.getElementsByTagName('input')[0];
    const $buttonIncrease = document.getElementById('btn-increase');
    const $buttonSubmit = document.getElementById('btn-submit');

    $buttonIncrease.onclick = function (event) {
        event.preventDefault();
        setNumber(number + 1);
    };
    $input.onchange = function (event) {
        event.preventDefault();
        setNumber(number + 10);
        setEmail(event.target.value);
    };
    $buttonSubmit.onclick = function (event) {
        event.preventDefault();
        alert("O email é " + email);
    };
    $span.innerText = number;
}
