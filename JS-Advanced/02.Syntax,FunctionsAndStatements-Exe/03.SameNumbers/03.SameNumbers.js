function comparison(someNumber) {

    someNumber = someNumber.toString();
    let areSame = true;
    let sum = 0;

    for (let i = 0; i < someNumber.length; i++) {
        let currentDigit = someNumber[i];
        let nextDigit = someNumber[i + 1];

        if (currentDigit != nextDigit && nextDigit != undefined) {
            areSame = false;
        }

        sum += Number(currentDigit);
    }

    console.log(areSame);
    console.log(sum);
}

comparison(2222222);
comparison(1234);