let form = document.querySelector('form');
form.addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(ev) {
    //stop reloading page:
    ev.preventDefault();

    //get formData from all inputFields:
    const formData = new FormData(ev.target);

    //get each element from formData array by name:
    const email = formData.get('email');
    const password = formData.get('password');

    let url = 'http://localhost:3030/users/login';

    //create post fetch to login user:
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'applications/jason' },
        body: JSON.stringify({ email, password })
    })

    //validate response:
    if (!response.ok) {
        return alert('Email or password did not exist!');
    }

    //get accessToken for current user:
    const token = await response.json();
    sessionStorage.setItem('userToken', token.accessToken);

    //redirect user to catalog page by changing pathname:
    window.location.pathname = 'index.html';

}