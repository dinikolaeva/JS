const { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven', () => {

    it('returns undefind when input is number', () => {
        expect(isOddOrEven(152)).to.be.undefined;
    });

    it('returns undefind when input is array', () => {
        expect(isOddOrEven([100, 'something'])).to.be.undefined;
    });

    it('returns even when input is string with even length', () => {
        expect(isOddOrEven('Stamat')).to.equal('even');
    });

    it('returns even when input is string with even length', () => {
        expect(isOddOrEven('Stamatcho')).to.equal('odd');
    });
});