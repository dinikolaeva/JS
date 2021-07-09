function print(arr, step) {

    let arrResult = [];
    for (let i = 0; i < arr.length; i += step) {
        arrResult.push(arr[i]);
    }

    return arrResult;
}

console.log(print(['5', 
'20', 
'31', 
'4', 
'20'], 
2));

console.log(print(['dsa',
'asd', 
'test', 
'tset'], 
2));

console.log(print(['1', 
'2',
'3', 
'4', 
'5'], 
6));