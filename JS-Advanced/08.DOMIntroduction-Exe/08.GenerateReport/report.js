function generateReport() {
    let headerElement = Array.from(document.querySelectorAll('th'))
        .map(th => th.children[0]);

    let rowsElement = Array.from(document.querySelectorAll('tbody tr'));

    let result = [];

    rowsElement.forEach(row => {
        let curRow = Array.from(row.children).reduce((obj, curCol, i) => {
            if (headerElement[i].checked) {
                let title = headerElement[i].name;
                obj[title] = curCol.textContent;
            }

            return obj
        }, {});

        result.push(curRow);
    })

    document.querySelector('#output').value = JSON.stringify(result);
}