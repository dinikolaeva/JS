function toggle() {
    let textOfButton = document.getElementsByClassName('button')[0];

    let showMore = document.getElementById('extra');

    if (textOfButton.textContent === 'More') {
        showMore.style.display = 'block';
        textOfButton.textContent = 'Less';
    } else {
        showMore.style.display = 'none';
        textOfButton.textContent = 'More';
    }
}