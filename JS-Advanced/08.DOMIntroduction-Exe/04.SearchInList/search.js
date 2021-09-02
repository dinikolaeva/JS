function search() {
    let liElements = [...document.querySelectorAll('li')];
    let surchedTown = document.getElementById('searchText').value;
    let counter = 0;

    for (let i = 0; i < liElements.length; i++) {
        if ((liElements[i].textContent).includes(surchedTown)) {
            liElements[i].style.fontWeight = 'bold';
            liElements[i].style.textDecoration = 'underline';
            counter++;
        }
    }

    document.getElementById('result').textContent = `${counter} matches found`;
}