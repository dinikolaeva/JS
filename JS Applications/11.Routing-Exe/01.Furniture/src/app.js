import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js'
import { myFurniturePage } from './views/myFurniture.js';

const main = document.querySelector('.container');

page('/', decorateContext, dashboardPage);
page('/dashboard', decorateContext, dashboardPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/my-furniture', decorateContext, myFurniturePage);

document.querySelector('#logoutBtn').addEventListener('click', async() => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId != null) {
        document.querySelector('#user').style.display = 'inline-block';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline-block';
    }
}