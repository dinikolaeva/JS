function half(arr) {
    return arr.sort((a, b) => a - b)
        .slice(Math.floor(arr.length / 2));
}

console.log(half([4, 7, 2, 5]));
console.log(half([3, 19, 14, 7, 2, 19, 6]));
console.log(half([3, 19, 14, 7, 2, 61, 6, 12, 18, 20, 60]));