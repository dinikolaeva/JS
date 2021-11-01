class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = +budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        products.forEach(element => {
            let returnMessage = [];
            let [productName, productQuantity, productTotalPrice] = element.split(' ');

            if (this.budgetMoney - Number(productTotalPrice) >= 0) {

                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += Number(productQuantity);
                } else {
                    this.stockProducts[productName] = Number(productQuantity);
                }
                this.budgetMoney -= productTotalPrice;
                returnMessage.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                returnMessage.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

            this.history = [...this.history, ...returnMessage];
            return this.history.join('\n').trimEnd();
        });
    }

    addToMenu(meal, neededProducts, price) {

        if (!this.menu[meal]) {

            this.menu[meal] = {
                products: neededProducts,
                price: +price
            }

            let result = '';

            if (Object.keys(this.menu).length == 1) {
                result = 'meal';
            } else {
                result = 'meals'
            } //> 1 ? 'meals' : 'meal';

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} ${result} in the menu, other ideas?`;

        } else {

            return `The ${meal} is already in the our menu, try something different.`;

        }
    }

    showTheMenu() {
        let result = [];

        for (let key of Object.keys(this.menu)) {
            result.push(`${key} - $ ${this.menu[key].price}`);
        }

        if (!result.length) {
            return ('Our menu is not ready yet, please come later...');
        } else {
            return result.join('\n');
        }
    }

    makeTheOrder(meal) {

        if (!this.menu[meal]) {
            return (`There is not ${meal} yet in our menu, do you want to order something else?`);
        }

        let surchedProducts = this.menu[meal].products;

        for (let item of surchedProducts) {

            item = item.split(' ');
            let quantity = +item.pop();
            let product = item.join(' ');

            if (this.stockProducts[product] < quantity || !this.stockProducts[product]) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`);
            }
        }

        for (let item of surchedProducts) {
            item = item.split(' ')
            let quantity = +item.pop()
            let product = item.join(' ')
            this.stockProducts[product] -= quantity
        }

        this.budgetMoney += this.menu[meal].price;

        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`);
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));