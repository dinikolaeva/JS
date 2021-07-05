function biggest(arr) {

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < arr.length; row++) {

        for (let element = 0; element < arr[row].length; element++) {

            if (arr[row][element] > biggest) {
                biggest = arr[row][element];
            }
        }
    }

    return biggest;
}

console.log(biggest([
    [20, 50, 10],
    [8, 33, 145]
]));

console.log(biggest([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));