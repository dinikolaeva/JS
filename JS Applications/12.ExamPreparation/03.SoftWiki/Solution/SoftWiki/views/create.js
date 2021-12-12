import { html } from "../node_modules/lit-html/lit-html.js";
import { createArticle } from "../src/api/data.js";

const createTemplate = (onSubmit) => html `<div class="container">
<form @submit="${onSubmit}" action="#" method="">
    <fieldset>
        <legend>Create article</legend>
        <p class="field title">
            <input type="text" id="title" name="title" placeholder="Arrays">
            <label for="title">Title:</label>
        </p>

        <p class="field category">
            <input type="text" id="category" name="category" placeholder="JavaScript">
            <label for="category">Category:</label>
        </p>
        <p class="field content">
            <textarea name="content" id="content"></textarea>
            <label for="content">Content:</label>
        </p>

        <p class="field submit">
            <button class="btn submit" type="submit">Create</button>
        </p>

    </fieldset>
</form>
</div>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');

        if (!title || !category || !content) {
            return alert('All field are required!');
        }

        await createArticle({
            title,
            category,
            content
        });

        ctx.page.redirect('/catalogue');
    }
}