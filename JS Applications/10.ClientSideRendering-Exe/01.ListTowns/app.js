//import { html, render } from '../node_modules/lit-html/lit-html.js'
import { html, render } from 'https://unpkg.com/lit-html?module';

const listTemplate = (data) => html `
<ul>
    ${data.map(e=>html`<li>${e}</li>`)};
</ul>`;

const btnLoad = document.querySelector('#btnLoadTowns');
btnLoad.addEventListener('click', onClickLoad);

function onClickLoad(event){
    event.preventDefault();

    const inputTowns = document.querySelector('#towns');
    const towns = inputTowns.value.split(', ').map(t=>t.trim());

    const result = listTemplate(towns);
    const divElement = document.querySelector('#root');
    render(result, divElement);
    
    inputTowns.value = '';
}