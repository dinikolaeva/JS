function solve(n, k) {

    n = Number(n);
    k = Number(k);
    
    let arr = [1];

    for (let i = 1; i < n; i++) {

        let index = Math.max(0, i - k);
        let element = arr
            .slice(index, index + k)
            .reduce((a, b) => a + b, 0);

        arr.push(element);
    }

    return(arr);
}

console.log(solve(6, 3));
console.log(solve(8, 2));
