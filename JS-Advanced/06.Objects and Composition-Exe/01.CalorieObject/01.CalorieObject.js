function calorie(input) {

    const products = {};

    for (let i = 0; i < input.length; i += 2) {
        products[input[i]] = Number(input[i + 1]);
    }

    return products;
}

console.log(calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));