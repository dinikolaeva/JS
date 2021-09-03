function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let searchText = document.getElementById('searchField').value;
        let rowsElements = document.querySelectorAll('.container tbody tr');

        //   rowsElements.forEach(row => {
        //       if (row.textContent.includes(searchText)) {
        //           row.className = 'select';
        //       }
        //   });

        for (const e of rowsElements) {
            if (e.textContent.includes(searchText)) {
                e.className = 'select';
            }
        }

        document.getElementById('searchField').value = '';
    }
}