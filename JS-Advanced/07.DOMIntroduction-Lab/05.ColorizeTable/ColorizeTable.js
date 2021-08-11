function colorize() {
    [...document.querySelectorAll('table tr:nth-child(2n)')].forEach(e => e.style.backgroundColor = 'teal');
}