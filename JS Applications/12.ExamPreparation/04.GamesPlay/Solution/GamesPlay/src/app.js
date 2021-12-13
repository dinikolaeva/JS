import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { homePage } from '../views/home.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';
import { logout } from './api/data.js';
import { cataloguePage } from '../views/catalogue.js';
import { createPage } from '../views/create.js';
import { detailsPage } from '../views/details.js';
import { editPage } from '../views/edit.js';

const main = document.querySelector('#main-content');
setUserNav();
document.querySelector('#logout').addEventListener('click', onLogoutClick);

page('/', decorateContext, homePage);
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
        document.querySelector('#user').style.display = '';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = '';
    }
}

async function onLogoutClick() {
    await logout();
    setUserNav();
    page.redirect('/');
}