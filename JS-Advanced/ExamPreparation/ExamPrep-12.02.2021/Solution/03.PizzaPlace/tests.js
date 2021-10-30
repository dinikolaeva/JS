const { expect } = require('chai');
const pizzUni = require('./pizzaPlace');

describe("Tests", function() {
    describe("makeAnOrder", function() {

        it("return object pizza with valid object", function() {
            const pizza = {
                orderedPizza: 'Margarita',
                orderedDrink: 'Coke'
            }

            expect(pizzUni.makeAnOrder(pizza)).to.equal(`You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`)
        });

        it("throw an error with invalid pizza object", function() {
            const pizza = {};

            expect(() => { pizzUni.makeAnOrder(pizza) }).to.throw();
        });
    });

    describe("getRemainingWork", function() {

        it("check pizza status and return remaining pizzas in array ", function() {
            const pizzaArray = [{ pizzaName: 'Margarita', status: 'preparing' }, { pizzaName: 'Caprichoza', status: 'ready' }];
            expect(pizzUni.getRemainingWork(pizzaArray)).to.equal(`The following pizzas are still preparing: Margarita.`);
        });

        it("check pizza status and return message for all complete orders", function() {
            const pizzaArray = [{ pizzaName: 'Margarita', status: 'ready' }, { pizzaName: 'Caprichoza', status: 'ready' }];
            expect(pizzUni.getRemainingWork(pizzaArray)).to.equal('All orders are complete!');
        });
    });

    describe("orderType", function() {

        it("carry out returns total sum with discount of 10%", function() {
            expect(pizzUni.orderType(10, 'Carry Out')).to.equal(9);
        });

        it("delivery returns total sum", function() {
            expect(pizzUni.orderType(10, 'Delivery')).to.equal(10);
        });
    });
});