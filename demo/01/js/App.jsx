import { useState } from './react.js';

export default function App() {
    const [number, setNumber] = useState(0);
    // const [email, setEmail] = useState('');

    // const $span = document.getElementsByTagName('span')[0];
    // const $input = document.getElementsByTagName('input')[0];
    // const $buttonIncrease = document.getElementById('btn-increase');
    // const $buttonSubmit = document.getElementById('btn-submit');
    //
    // $input.onchange = function (event) {
    //     event.preventDefault();
    //     setNumber(number + 10);
    //     setEmail(event.target.value);
    // };
    // $buttonSubmit.onclick = function (event) {
    //     event.preventDefault();
    //     alert("O email é " + email);
    // };
    // $span.innerText = number;

    const submit = () => {
        alert('submit');
    };

    return (
        <>
            <div>
                Meu valor é <span>{number}</span>
                <button
                    type="button"
                    id="btn-increase"
                    onClick={() => setNumber(number + 1)}>
                    Mudar valor
                </button>
            </div>
            <div>
                <label>
                    <input type="text" placeholder="Email" />
                </label>
                <button type="button" id="btn-submit" onClick={submit}>Submeter</button>
            </div>
        </>
    );
};

