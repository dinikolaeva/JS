function solve(arr) {

    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= 0) {
            resultArr.push(arr[i]);
        } else {
            resultArr.unshift(arr[i]);
        }
    }

    for (let i = 0; i < resultArr.length; i++) {
        console.log(resultArr[i]);
    }
}

solve([7, -2, 8, 9]);
console.log('-----')
solve([3, -2, 0, -1]);