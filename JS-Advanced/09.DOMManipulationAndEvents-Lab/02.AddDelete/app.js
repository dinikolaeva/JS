function addItem() {
    let text = document.getElementById('newItemText').value;
    let newLiElement = document.createElement('li');

    newLiElement.textContent = text;

    let deleteBtn = document.createElement(`a`);
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    newLiElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    })


    let ulElement = document.getElementById('items');
    ulElement.appendChild(newLiElement)
    document.getElementById('newItemText').value = '';
}