function sort(arr) {
    return arr.sort((a, b) => a.localeCompare(b))
        .map((el, index) => console.log(`${index + 1}.${el}`))
        .join('\n');
}

console.log(sort(["John", "Bob", "Christina", "Ema"]));