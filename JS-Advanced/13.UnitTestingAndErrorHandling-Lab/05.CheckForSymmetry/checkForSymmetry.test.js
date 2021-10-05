const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('isSymmetric', () => {
    it('returns true with symmetric valid input', () => {
        expect(isSymmetric([1, 1])).to.be.true; //(to.equal(true))
    });

    it('returns false with non-symmetric valid input', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });

    it('returns false for invalid argument', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    });

    it('returns false for invalid type element', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns true with symmetric odd-element array', () => {
        expect(isSymmetric([1, 1, 1])).to.be.true; //(to.equal(true))
    });

    it('returns true with symmetric valid string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true; //(to.equal(true))
    })

    it('returns false with non-symmetric valid string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false; //(to.equal(true))
    })
})