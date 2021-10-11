const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('returns undefined when input is invalid', () => {
            expect(mathEnforcer.addFive('Stamat')).to.be.undefined;
            expect(mathEnforcer.addFive([5.15, 'Vergil'])).to.be.undefined;
            expect(mathEnforcer.addFive([5.15])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it('returns correct value from method', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(10.50)).closeTo(15.5, 0.01);
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        });
    });

    describe('subtractTen', () => {
        it('returns undefined when input is invalid', () => {
            expect(mathEnforcer.subtractTen('Stamat')).to.be.undefined;
            expect(mathEnforcer.subtractTen([5.15, 'Vergil'])).to.be.undefined;
            expect(mathEnforcer.subtractTen([5.15])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        it('returns correct value from method', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(10.50)).closeTo(0.50, 0.01);
            expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
        });
    });

    describe('sum', () => {
        it('returns undefined when input is invalid', () => {
            expect(mathEnforcer.sum('Stamat', 'Strahil')).to.be.undefined;
            expect(mathEnforcer.sum(5, 'Vergil')).to.be.undefined;
            expect(mathEnforcer.sum('Vergil', 10)).to.be.undefined;
        });

        it('returns correct value from method', () => {
            expect(mathEnforcer.sum(20, 60)).to.equal(80);
            expect(mathEnforcer.sum(-30, -10)).to.equal(-40);
            expect(mathEnforcer.sum(-30, 10)).to.equal(-20);
            expect(mathEnforcer.sum(30, -10)).to.equal(20);
            expect(mathEnforcer.sum(10.90, 20.50)).closeTo(31.40, 0.01);
        });
    });
});