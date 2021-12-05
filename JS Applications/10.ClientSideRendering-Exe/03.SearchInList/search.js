//import { html, render } from '../node_modules/lit-html/lit-html.js';
import { html, render } from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js';

const divTownsElement = document.querySelector('#towns');
const ulElement = document.createElement('ul');
divTownsElement.appendChild(ulElement);

const listOfTowns = (towns) => towns.map(t => html `<li>${t}</li>`);
const result = listOfTowns(towns);
render(result, ulElement);

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search);

function search() {
    let liElements = [...document.querySelectorAll('li')];
    let surchedItem = document.getElementById('searchText');
    let counter = 0;

    if (surchedItem.value != '') {
        for (let i = 0; i < liElements.length; i++) {
            if ((liElements[i].textContent).includes(surchedItem.value)) {
                liElements[i].style.fontWeight = 'bold';
                liElements[i].style.textDecoration = 'underline';
                counter++;
            }
        }
    }

    document.getElementById('result').textContent = `${counter} matches found`;
}