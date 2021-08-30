function subtract() {

    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);

    const result = firstNumber - secondNumber;
    document.getElementById('result').textContent = result;
}