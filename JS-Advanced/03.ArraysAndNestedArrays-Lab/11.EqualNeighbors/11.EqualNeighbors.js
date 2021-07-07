function equals(arr) {

    let counter = 0;

    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr[row].length; col++) {

            let element = arr[row][col];

            if (row == arr.length - 1) {

                if (element == arr[row][col + 1]) {

                    counter++;
                }
            } else {
                if (element == arr[row + 1][col]) {
                    counter++;
                }

                if (element == arr[row][col + 1]) {
                    counter++;
                }
            }
        }
    }

    return counter;
}

console.log(equals([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(equals([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));