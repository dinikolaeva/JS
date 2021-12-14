import { html } from '../../node_modules/lit-html/lit-html.js';
import { getBooks } from '../api/data.js';

const allBooksTemplate = (books) => html `<section id="dashboard-page" class="dashboard">
<h1>Dashboard</h1>
<ul class="other-books-list">
    ${books.length == 0 ? html`
    <p class="no-books">
        No books in database!
        </p>` : books.map(singleBookTemplate)}
</ul>`;

const singleBookTemplate = (book) => html `<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: ${book.type}</p>
<p class="img"><img src=${book.imageUrl}></p>
<a class="button" href="/details/${book._id}">Details</a>
</li>`;

export async function dashboardPage(ctx){
    
    const books = await getBooks();

    ctx.render(allBooksTemplate(books));
}