function smallest(arr) {

    arr.sort((a, b) => a - b);
    console.log(`${arr[0]} ${arr[1]}`)
}

smallest([30, 15, 50, 5]);
smallest([3, 0, 10, 4, 7, 3]);