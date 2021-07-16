function magic(arr) {

    let result = [];

    let sumOfRows = arr.map(row => row
        .reduce((acc, curr) => (acc + curr)))
        .every((a, index, arr) => a === arr[0]);

    let sumOfCols = arr.reduce((col, currentIndex) => col
        .map((el, i) => el + currentIndex[i]))
        .every((a, index, arr) => a === arr[0]);

    return sumOfCols && sumOfRows;
}

console.log(magic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));