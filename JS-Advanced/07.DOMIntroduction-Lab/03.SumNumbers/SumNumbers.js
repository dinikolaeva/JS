function calc() {
    // TODO: sum = num1 + num2
    const furstNumber = Number(document.getElementById('num1').value);
    const secondNumber = Number(document.getElementById('num2').value);
    const result = furstNumber + secondNumber;

    document.getElementById('sum').value = result;
}