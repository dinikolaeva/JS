const { expect } = require('chai');
const rgbToHexColor = require('./RGBToHex');

describe('rgbToHexColor', () => {

    it('check the input values for invalid params', () => {
        expect(rgbToHexColor('b', 'a', 'c')).to.be.undefined;
    });

    it('convert red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('convert green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('convert blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('returns undefind for negative values', () => {
        expect(rgbToHexColor(-2, 0, 255)).to.be.undefined;
    });

    it('returns undefind for bigger values than 255', () => {
        expect(rgbToHexColor(0, 0, 260)).to.be.undefined;
    });
});