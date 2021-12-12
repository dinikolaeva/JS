import { html } from "../node_modules/lit-html/lit-html.js";
import { getArticleById, editArticle } from "../src/api/data.js";

const editTemplate = (article, onSubmit) => html `<div class="container">

<form @submit ="${onSubmit}" action="#" method="">
    <fieldset>
        <legend>Edit article</legend>
        <p class="field title">
            <input type="text" name="title" id="title" placeholder="Arrays" .value=${article.title}>
            <label for="title">Title:</label>
        </p>

        <p class="field category">
            <input type="text" name="category" id="category" placeholder="JavaScript" .value=${article.category}>
            <label for="category">Category:</label>
        </p>
        <p class="field content">
            <textarea name="content" id="content" .value=${article.content}></textarea>
            <label for="content">Content:</label>
        </p>

        <p class="field submit">
            <button class="btn submit" type="submit">Edit</button>
        </p>

    </fieldset>
</form>
</div>`;

export async function editPage(ctx) {
    const articleId = ctx.params.id;
    const article = await getArticleById(articleId);

    ctx.render(editTemplate(article, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');

        if (!title || !category || !content) {
            return alert('All field are required!');
        }

        await editArticle(articleId, {
            title,
            category,
            content
        });

        ctx.page.redirect('/catalogue');
    }
}