function sorting(arr) {
    arr.sort((a, b) => a - b);
    let arrResult = [];

    while (arr.length) {
        arrResult.push(arr.shift());
        arrResult.push(arr.pop());
    }

    return arrResult.filter(е => е != undefined) //при нечетен брой елементи в масива
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));