const { expect } = require('chai');
const numberOperations = require('./numberOperations');

describe("Tests", function() {

    describe("powNumber", function() {
        it("returns the power of the given number", function() {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
    });

    describe("numberChecker", function() {
        it("parses the input to number and validates it with number greater or equal to 100", function() {
            expect(numberOperations.numberChecker('200')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
        });

        it("parses the input to number and validates it with number lower than 100", function() {
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('-250')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('0')).to.equal('The number is lower than 100!');
        });

        it("if the input is not a number throws an error", function() {
            expect(() => { numberOperations.numberChecker('something') }).to.throw();
            expect(() => { numberOperations.numberChecker({}) }).to.throw();
            expect(() => { numberOperations.numberChecker([2, 3, 5]) }).to.throw();
        });
    });

    describe("sumArrays", function() {
        it("sum the numbers from two arrays", function() {
            expect(numberOperations.sumArrays([1, 2, 3], [1])).to.deep.equal([2, 2, 3]);
            expect(numberOperations.sumArrays([1], [1, 5])).to.deep.equal([2, 5]);
        });
    });
});