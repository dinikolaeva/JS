function reduce(arr) {

    let max = Number.MIN_SAFE_INTEGER;

    //return arr = arr.filter(el => el >= max ? max = el : false) //незнайно защо в Джъдж резултатът е 60/100...

    let result = arr.reduce((acc, curr) => {

        if (curr >= max) {
            max = curr;
            acc.push(max);
        }
        return acc;
    }, []);
    
    return result;
}

console.log(reduce([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));