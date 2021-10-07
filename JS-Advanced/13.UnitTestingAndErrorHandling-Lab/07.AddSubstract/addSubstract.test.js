const { expect } = require('chai');
const createCalculator = require('./addSubtract');

describe('createCalculator', () => {

    let calculator = '';

    beforeEach(function() {
        calculator = createCalculator()
    });

    it('check that get keep internal value', () => {
        expect(calculator.get(0)).to.equal(0);
    });

    it('add property works correct with number', () => {
        calculator.add(5);
        let value = calculator.get();
        expect(value).to.equal(5);
    });

    it('add property works correct with string number', () => {
        calculator.add('5');
        calculator.add('10');
        let value = calculator.get();
        expect(value).to.equal(15);
    });

    it('subtract property works correct with number', () => {
        calculator.add(5);
        calculator.subtract(2);
        let value = calculator.get();
        expect(value).to.equal(3);
    });

    it('subtract property works correct with string number', () => {
        calculator.add('10');
        calculator.subtract('5');
        let value = calculator.get();
        expect(value).to.equal(5);
    });
});