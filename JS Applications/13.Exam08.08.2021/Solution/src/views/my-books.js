import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../api/data.js';

const myBooksTemplate = (books) => html `<section id="my-books-page" class="my-books">
<h1>My Books</h1>
<ul class="my-books-list">
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

export async function myBooksPage(ctx){

    const books = await getMyBooks();
    ctx.render(myBooksTemplate(books));

}