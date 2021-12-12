import { html } from "../node_modules/lit-html/lit-html.js";
import { getArticles } from "../src/api/data.js";

const catalogueTemplate = (cSharp, js, java, python) => html `<div class="content" id="catalog-page">
<section class="js">
    <h2>JavaScript</h2>
    <div class="article-preview">
    ${js.length != 0? js.map(articleCard) : html`<h3 class="no-articles">No articles yet</h3>`}
    </div>
</section>
<section class="CSharp">
    <h2>C#</h2>
    <div class="article-preview">
    ${cSharp.length != 0 ? cSharp.map(articleCard) : html`<h3 class="no-articles">No articles yet</h3>`}
</div>
</section>
<section class="Java">
    <h2>Java</h2>
    <div class="article-preview">
    ${java.length != 0 ? java.map(articleCard) : html`<h3 class="no-articles">No articles yet</h3>`}
    </div>
</section>
<section class="Pyton">
    <h2>Pyton</h2>
    <div class="article-preview">
    ${python.length != 0 ? python.map(articleCard) : html`<h3 class="no-articles">No articles yet</h3>`}
    </div>
</section>
</div>`;

const articleCard = (article) =>html`
    <article>
        <h3>${article.title}</h3>
        <p>${article.content}</p>
        <a href="/details/${article._id}" class="btn details-btn">Details</a>
    </article>`;

export async function cataloguePage(ctx){
    const articles = await getArticles();

    const cSharp = articles.filter(a => a.category==='C#');
    const js = articles.filter(a => a.category==='JavaScript');
    const java = articles.filter(a => a.category==='Java');
    const python = articles.filter(a => a.category==='Python');

    ctx.render(catalogueTemplate(cSharp, js, java, python));
}