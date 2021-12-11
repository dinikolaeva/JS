import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { homePage } from '../vews/home.js';
import { loginPage } from '../vews/login.js';
import { registerPage } from '../vews/register.js';
import { logout } from '../src/api/data.js';
import { listingsPage } from '../vews/listings.js';
import { createPage } from '../vews/create.js';
import { detailsPage } from '../vews/details.js';
import { editPage } from '../vews/edit.js';
import { myListingsPage } from '../vews/myListings.js';
import { searchPage } from '../vews/search.js';

const main = document.querySelector('#site-content');
setUserNav();
document.querySelector('#logoutBtn').addEventListener('click', onClickLogout);

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/listings', decorateContext, listingsPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/myListings', decorateContext, myListingsPage);
page('/search', decorateContext, searchPage);


page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    const username = sessionStorage.getItem('username');

    if (token != null) {
        document.querySelector('#profile > a').textContent = `Welcome, ${username}`;
        document.querySelector('#profile').style.display = '';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#guest').style.display = '';
    }
}

async function onClickLogout() {
    await logout();
    setUserNav();
    page.redirect('/listings');
}