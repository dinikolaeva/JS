function notify(message) {

    let notificationElement = document.querySelector('#notification');
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';

    notificationElement.addEventListener('click', (ev) => {
        ev.target.style.display = 'none'
    });
}