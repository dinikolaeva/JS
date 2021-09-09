function deleteByEmail() {

    let emailElement = document.querySelector('input[name="email"]').value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let isDeleted = false;
    let result = document.getElementById('result');

    for (let row of rows) {
        if (row.children[1].textContent == emailElement) {
            row.parentNode.removeChild(row);
            isDeleted = true;
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }
}