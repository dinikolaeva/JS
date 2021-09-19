function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let option = document.createElement('option');

    option.textContent = text.value;
    option.value = value.value;

    let menuElement = document.getElementById('menu');
    menuElement.appendChild(option);

    text.value = '';
    value.value = '';
}