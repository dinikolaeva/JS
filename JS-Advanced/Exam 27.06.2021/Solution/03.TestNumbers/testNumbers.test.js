const { assert } = require('chai');
const testNumbers = require('./testNumbers');

describe("Tests …", function() {
    it('Check if parameters are numbers not numbers', () => {

        assert.isUndefined(testNumbers.sumNumbers('Stamat', 'Vergil'));
        assert.isUndefined(testNumbers.sumNumbers(10, false));
        assert.isUndefined(testNumbers.sumNumbers(0, 'Pesho'));

    });

    it('Works correct with valid parameters(positive, negative value)', () => {

        let expectedSum = 10 + 100;
        let actualSum = testNumbers.sumNumbers(10, 100);
        assert.equal(actualSum, expectedSum);

        let expectedSum2 = (-10) + 100;
        let actualSum2 = testNumbers.sumNumbers(-10, 100);
        assert.equal(expectedSum2, actualSum2);

    });

    it('Should be currect with sum numbers', () => {

        let expectedSum = (22.36874 + 10).toFixed(2);
        let actualSum = testNumbers.sumNumbers(22.36874, 10);

        let expectedSum2 = (22.36874 + (-10)).toFixed(2);
        let actualSum2 = testNumbers.sumNumbers(22.36874, (-10));

        assert.equal(actualSum2, expectedSum2);
        assert.equal(actualSum, expectedSum);
    });


    it('NumberChecker should throw exseption', () => {

        assert.throw(() => { testNumbers.numberChecker('Vergil'); });
        assert.throw(() => { testNumbers.numberChecker(NaN); });
        assert.throw(() => { testNumbers.numberChecker(undefined); });

    });

    it('Number checker works correct when it is even', () => {

        assert.equal(testNumbers.numberChecker(2), 'The number is even!');

    });

    it('Number checker works correct when it is odd', () => {

        assert.equal(testNumbers.numberChecker(1), 'The number is odd!');

    });

    it('AverageSumArray works correct', () => {

        assert.equal(testNumbers.averageSumArray([6, 6, 6]), 6);
        let expectedResult = (5 + 2 + 4) / 3;
        assert.equal(testNumbers.averageSumArray([5, 4, 2]), expectedResult);

    });
});