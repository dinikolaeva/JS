import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js';
import { dashboardPage } from './views/dashboard.js';
import { addBookPage } from './views/add-book.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/editPage.js';
import { myBooksPage } from './views/my-books.js';


const main = document.querySelector('#site-content');
setUserNav();
document.querySelector('#user > a:nth-child(4)').addEventListener('click', onLogoutClick);

page('/', decorateContext, dashboardPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/dashboard', decorateContext, dashboardPage);
page('/add-book', decorateContext, addBookPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/my-books', decorateContext, myBooksPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    const email = sessionStorage.getItem('email');

    if (token != null) {
        document.querySelector('#user > span').textContent = `Welcome, ${email}`;
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
    page.redirect('/dashboard');
}