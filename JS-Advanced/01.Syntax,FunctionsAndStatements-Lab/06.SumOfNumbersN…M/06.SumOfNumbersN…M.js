function sum(n, m) {
    let result = 0;
    let number1 = Number(n);
    let number2 = Number(m);

    for (let i = number1; i <= number2; i++) {
        result += i;
    }
    return result;
}

console.log(sum('-8', '20'));