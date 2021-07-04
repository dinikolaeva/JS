function odd(arr) {

    let result = [];
    
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 1) {
            result.push(arr[i] * 2);
        }
    }

    return result.reverse().join(' ');
}

console.log(odd([10, 15, 20, 25]));
console.log(odd([3, 0, 10, 4, 7, 3]));