import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { loginPage } from "../views/login.js";
import { logout } from "./api/data.js";
import { registerPage } from "../views/register.js";
import { cataloguePage } from "../views/catalogue.js";
import { createPage } from "../views/create.js";
import { detailsPage } from "../views/details.js";
import { editPage } from "../views/edit.js";

const main = document.querySelector('#main-content');
setUserNav();
document.getElementById('logoutBtn').addEventListener('click', onLogoutClick);

page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalogue', decorateContext, cataloguePage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}

async function onLogoutClick() {
    await logout();
    setUserNav();
    page.redirect('/login');
}