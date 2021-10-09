const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('lookupChar', () => {
    it('returns undefined when type of first input parameter is not a string', () => {
        expect(lookupChar(123)).to.be.undefined;
    });

    it('returns undefined when input second parameter is not an integer', () => {
        expect(lookupChar(Number.isInteger(3))).to.be.undefined;
    });

    it('returns undefined when input second parameter is s floating-point number', () => {
        expect(lookupChar('Omurtag', 3.5)).to.be.undefined;
    });

    it('returns undefined when bouth parameters are invalid ', () => {
        expect(lookupChar(2, -2)).to.be.undefined;
    });

    it('returns "Incorrect index" if index is negative number', () => {
        expect(lookupChar('Omurtag', -2)).to.equal('Incorrect index');
    });

    it('returns "Incorrect index" if index is outside of the bounds', () => {
        expect(lookupChar('Omurtag', 10)).to.equal('Incorrect index');
    });

    it('returns char at given index', () => {
        expect(lookupChar('Omurtag', 1)).to.equal('m');
    });
});