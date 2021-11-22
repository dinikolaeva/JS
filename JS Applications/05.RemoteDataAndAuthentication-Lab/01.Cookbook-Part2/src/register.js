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
    const rePass = formData.get('rePass');

    //get validations of email and passwords:
    if (email == '' || password == '') {
        return alert('All fields are required!');
    } else if (password != rePass) {
        return alert('Passwords don`t match');
    }

    let url = 'http://localhost:3030/users/register';

    //create post fetch to register new user:
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'applications/jason' },
        body: JSON.stringify({ email, password })
    })

    //validate response:
    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    //get accessToken for current user:
    const token = await response.json();
    sessionStorage.setItem('userToken', token.accessToken);

    //redirect user to catalog page by changing pathname:
    window.location.pathname = 'index.html';

}