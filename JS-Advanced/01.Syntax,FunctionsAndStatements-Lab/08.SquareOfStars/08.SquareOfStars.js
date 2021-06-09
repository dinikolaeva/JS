function square(count = 5) {
    let arr = new Array(count);

    for (let i = 0; i < count; i++) {
        arr[i] = '* '.repeat(count).trim();
    }
    return arr.join("\n");
}

console.log(square());
console.log(square(4));
console.log(square(1));