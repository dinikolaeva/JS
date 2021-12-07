//import { html, render } from '../node_modules/lit-html/lit-html.js';
import { html, render } from 'https://unpkg.com/lit-html?module';

const url = 'http://localhost:3030/jsonstore/advanced/table';
const tBodyElement = document.querySelector('tbody');

async function getSrudentsFromData() {

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const elements = await response.json();
    const students = Object.values(elements);

    createTemplate(students);
}

getSrudentsFromData();

document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick() {

    const selectedClasses = document.querySelector('.select');

    if (selectedClasses) {
        selectedClasses.classList.remove('select');
    }

    let searchText = document.getElementById('searchField').value;
    let rowsElements = document.querySelectorAll('tbody tr');

    for (const e of rowsElements) {
        if (e.textContent.includes(searchText)) {
            e.className = 'select';
        }
    }

    document.getElementById('searchField').value = '';
}

function createTemplate(studentsData) {
    const template = (studentsData) => studentsData.map(s => html `
   <tr>
       <td>${s.firstName} ${s.lastName}</td>
       <td>${s.email}</td>
       <td>${s.course}</td>
   </tr>`);

    const result = template(studentsData);
    render(result, tBodyElement);
}