const errorBox = document.querySelector('#errorBox');

export function notify(message) {
    errorBox.innerHTML = `<span>${message}</span>`;
    errorBox.style.display = 'block';

    setTimeout(() => {
        errorBox.style.display = 'none';
    }, 3000);
}