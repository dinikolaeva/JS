function buyAFruit(typeOfFruit, weight, price) {
    weight = Number(weight) / 1000;
    let totalPrice = weight * Number(price);
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`);
}

buyAFruit('orange', 2500, 1.80);
buyAFruit('apple', 1563, 2.35);