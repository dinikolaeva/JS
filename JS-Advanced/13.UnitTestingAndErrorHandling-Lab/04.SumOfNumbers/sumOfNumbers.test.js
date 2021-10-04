const { expect } = require('chai');
const sum = require('./sumOfNumbers');

describe('Sum Of Numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    })

    it('sums multiple number', () => {
        expect(sum([1, 1])).to.equal(2);
    })

    it('sums different number', () => {
        expect(sum([2, 3, 4])).to.equal(9);
    })
});