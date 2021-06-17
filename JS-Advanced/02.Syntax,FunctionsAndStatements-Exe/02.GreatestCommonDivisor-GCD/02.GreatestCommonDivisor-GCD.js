function gcd(num1, num2) {
    if (num2 == 0) {
        return num1
    }
    else {
        let divisor = num1 % num2;
        return gcd(num2, divisor);
    }
}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));