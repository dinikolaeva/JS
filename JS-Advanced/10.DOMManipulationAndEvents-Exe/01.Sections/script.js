function create(words) {
    let contentIdElement = document.querySelector('#content');

    for (const word of words) {

        let divElement = document.createElement('div');
        let pElement = document.createElement('p');

        pElement.textContent = word
        pElement.style.display = 'none';

        divElement.appendChild(pElement);
        contentIdElement.appendChild(divElement);

        divElement.addEventListener('click', function(ev) {
            ev.target.children[0].style.display = 'block'
        })
    }
}