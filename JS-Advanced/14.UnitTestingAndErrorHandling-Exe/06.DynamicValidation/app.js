function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(ev) {
        const matcher = /[a-z]+\@[a-z]+\.[a-z]+/gm;

        if (matcher.test(email.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}