//import { html, render } from '../node_modules/lit-html/lit-html.js';
import { html, render } from 'https://unpkg.com/lit-html?module';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const selectElement = document.querySelector('#menu');

async function getAllElementsFromData() {

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const elements = await response.json();
    const valuesOfObject = Object.values(elements);

    createElementsByTemplate(valuesOfObject);
}

const addBtn = document.querySelector('input[type=submit]');
addBtn.addEventListener('click', onAddClick);

async function onAddClick(ev) {
    ev.preventDefault();
    const inputField = document.querySelector('#itemText');

    if (inputField.value != '') {

        const text = inputField.value;

        const response = fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text })
        });

        getAllElementsFromData();
        inputField.value = '';
    }
}

getAllElementsFromData();

function createElementsByTemplate(valuesOfObject) {
    const template = (valuesOfObject) => valuesOfObject.map(v => html `<option value="${v._id}">${v.text}</option>`);

    const result = template(valuesOfObject);
    render(result, selectElement);
}