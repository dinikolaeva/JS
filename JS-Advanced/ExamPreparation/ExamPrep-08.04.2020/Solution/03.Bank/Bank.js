class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        if (this.allCustomers.some(c => c.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {

        if (!this.allCustomers.some(c => c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        }

        let currentCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (currentCustomer.hasOwnProperty('totalMoney')) {
            currentCustomer.totalMoney += Number(amount);
        } else {
            currentCustomer.totalMoney = Number(amount);
        }

        if (!currentCustomer.hasOwnProperty('transactions')) {
            currentCustomer.transactions = [];
        }
        currentCustomer.transactions.push(`${currentCustomer.transactions.length + 1}.${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);

        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.some(c => c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        }

        let currentCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (currentCustomer.totalMoney < amount || !currentCustomer.hasOwnProperty('totalMoney')) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`)
        }

        currentCustomer.totalMoney -= Number(amount);

        if (!currentCustomer.hasOwnProperty('transactions')) {
            currentCustomer.transactions = [];
        }
        currentCustomer.transactions.push(`${currentCustomer.transactions.length + 1}.${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);
        return `${currentCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        if (!this.allCustomers.some(c => c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        }

        let currentCustomer = this.allCustomers.find(c => c.personalId == personalId);
        currentCustomer.transactions.reverse();

        let informationForCustomer = [];
        informationForCustomer.push(`Bank name: ${this.bankName}\nCustomer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\nCustomer ID: ${currentCustomer.personalId}\nTotal Money: ${currentCustomer.totalMoney}$\nTransactions:\n${currentCustomer.transactions.join('\n')}`);

        return informationForCustomer.join().trim();
    }
}

// let bank = new Bank('SoftUni Bank');

// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));

let bank = new Bank('SoftUni Bank');


console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 }));
//expect(customer1.firstName).to.be.equal('Svetlin');

console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 3333333 }));
// expect(customer2.lastName).to.be.equal('Mileva');
// expect(customer2.personalId).to.be.equal(3333333);

console.log(bank.depositMoney(1111111, 250));
//expect(totalMoney1).to.be.equal('250$', 'Function depositMoney returns incorrect totalMoney');

console.log(bank.depositMoney(1111111, 250));
//expect(totalMoney2).to.be.equal('500$', 'Function depositMoney returns incorrect totalMoney');

console.log(bank.depositMoney(3333333, 555));
//expect(totalMoney3).to.be.equal('555$', 'Function depositMoney returns incorrect totalMoney');

console.log(bank.withdrawMoney(1111111, 125));
//expect(totalMoney4).to.equal('375$', 'Function withdrawMoney returns incorrect totalMoney');

console.log(bank.customerInfo(1111111));
// let expectedOutput = `Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 1111111
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made deposit of 250$!
// 1. Svetlin Nakov made deposit of 250$!`;
// expect(expectedOutput).to.be.equal(output, 'Incorrect output');