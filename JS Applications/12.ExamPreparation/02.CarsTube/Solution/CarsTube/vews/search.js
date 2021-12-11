import { html } from '../node_modules/lit-html/lit-html.js';
import { searchCar } from '../src/api/data.js';
import { carTemplate } from './listings.js';

const searchTemplate = (cars, onSearch, year) => html `<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year" 
    .value=${year || ''}>
    <button @click=${onSearch} class="button-list">Search</button>
</div>

<h2>Results:</h2>
<div class="listings">

${cars.length == 0 ? html`
<p class="no-cars"> No results.</p>` : cars.map(carTemplate)}

</div>
</section>`;

export async function searchPage(ctx){

    const year = Number(ctx.querystring.split('=')[1]);
    const cars = Number.isNaN(year) ? [] : await searchCar(year);

    ctx.render(searchTemplate(cars, onSearch, year));

    function onSearch(){
        
        const query = Number(document.querySelector('#search-input').value);
        
        if(!Number.isNaN(query)){

            ctx.page.redirect(`/search?query=${query}`);
        }else{
            return alert ('Year must be a positive number!');
        }

    }
}