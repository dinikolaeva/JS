import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../src/api/data.js";

const loginTemplate = (onSubmit) => html `<div class="container auth">
<form @submit=${onSubmit} action="#" method="">
    <fieldset>
        <legend>Login</legend>
        <blockquote>Knowledge is like money: to be of value it must circulate, and in circulating it can increase in quantity and, hopefully, in value</blockquote>
        <p class="field email">
            <input type="email" id="email" name="email" placeholder="maria@email.com">
            <label for="email">Email:</label>
        </p>
        <p class="field password">
            <input type="password" id="login-pass" name="password">
            <label for="login-pass">Password:</label>
        </p>
        <p class="field submit">
            <button class="btn submit" type="submit">Log In</button>
        </p>
        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </fieldset>
</form>
</div>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            return alert('All fields are reqired!');
        }

        await login(email, password);

        ctx.setUserNav();
        ctx.page.redirect('/catalogue');
    }
}