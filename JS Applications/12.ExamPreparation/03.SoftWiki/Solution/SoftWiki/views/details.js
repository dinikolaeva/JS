import { html } from "../node_modules/lit-html/lit-html.js";
import { getArticleById, deleteArticle } from "../src/api/data.js";

const detailsTemplate = (article, isOwner, onDeleteClick) => html `<div class="container details">
<div class="details-content">
    <h2>${article.title}</h2>
    <strong>${article.category}</strong>
    <p>${article.content}</p>
    <div class="buttons">

    ${isOwner ? html `<a href="#" @click=${onDeleteClick} class="btn delete">Delete</a>
        <a href="/edit/${article._id}" class="btn edit">Edit</a>` : html `<a href="/catalogue" class="btn edit">Back</a>`}
    </div>
</div>
</div>`;

export async function detailsPage(ctx) {

    const userId = sessionStorage.getItem('userId');
    const articleId = ctx.params.id;
    const article = await getArticleById(articleId);
    const isOwner = userId === article._ownerId;

    ctx.render(detailsTemplate(article, isOwner, onDeleteClick));

async function onDeleteClick(){
    const confirmed = confirm('Are you sure you want to delete this record?');

    if(confirmed){
        await deleteArticle(articleId);
        ctx.page.redirect('/catalogue');
    }
}
}