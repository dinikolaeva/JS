//import { html, render } from '../node_modules/lit-html/lit-html.js'
import { html, render } from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';

const sectionAllCats = document.querySelector('#allCats');
const ulElement = document.createElement('ul');
sectionAllCats.appendChild(ulElement);

const cardOfCat = (cats) => cats.map(cat => html `
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${onClickShowBtn} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
           <h4>Status Code: ${cat.statusCode}</h4>
           <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`);

const result = cardOfCat(cats);
render(result, ulElement);

function onClickShowBtn(event) {
    const button = event.target;
    const parentDiv = button.parentNode;
    const statusDiv = parentDiv.querySelector('.status').style.display;

    if (statusDiv == 'none') {
        parentDiv.querySelector('.status').style.display = 'block';
        button.textContent = 'Hide status code';
    } else {
        parentDiv.querySelector('.status').style.display = 'none';
        button.textContent = 'Show status code';
    }
}