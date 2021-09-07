function addItem() {
    let text = document.getElementById('newItemText').value;
    let newLiElement = document.createElement('li');

    newLiElement.textContent = text;

    let ulElement = document.getElementById('items');
    ulElement.appendChild(newLiElement)
}