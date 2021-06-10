function operation(arr) {

    let sum = arr.reduce(function (arr, x) { return arr + x });
    let inverseSum = arr.reduce(function (arr, x) { return arr + 1 / x }, 0);
    let string = arr.reduce(function (arr, x) { return arr + x.toString() })
    
    console.log(sum);
    console.log(inverseSum);
    console.log(string);
}

operation([1, 2, 3]);
operation([2, 4, 8, 16]);