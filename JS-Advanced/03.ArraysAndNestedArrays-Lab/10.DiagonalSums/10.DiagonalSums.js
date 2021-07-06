function sum(arr) {

    let mainSum = 0;
    let secondarySum = 0;

    for (let row = 0; row < arr.length; row++) {

        mainSum += arr[row][0 + row];
        secondarySum += arr[row][arr.length-1-row];

    }
    console.log(`${mainSum} ${secondarySum}`);
}

sum([
    [20, 40],
    [10, 60]
]);

sum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);