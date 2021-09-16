function lockedProfile() {
    let showMoreBtns = [...document.getElementsByTagName('button')];
    showMoreBtns.forEach(e => e.addEventListener('click', onClick));

    function onClick(ev) {
        let inputLockElement = ev.target.parentNode.getElementsByTagName('input')[0];
        let hidenElement = ev.target.parentNode.children[9];
        let btn = ev.target;

        if (!inputLockElement.checked) {

            if (btn.textContent == 'Show more') {
                hidenElement.style.display = 'inline';
                btn.textContent = 'Hide it';
            } else {
                hidenElement.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}