// Tests using chai for my advanced calc function

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should round 1.4 and 2.6 and return 4', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    });

    it('should round 1.5 and 2.5 and return 5', () => {
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    });

    it('should round -1.4 and -2.6 and return -4', () => {
      expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
    });

    it('should round 0.1 and 0.3 and return 0', () => {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });

    it('should round large positive numbers correctly', () => {
      expect(calculateNumber('SUM', 123456.789, 987654.321)).to.equal(1111111);
    });

    it('should round large negative numbers correctly', () => {
      expect(calculateNumber('SUM', -123456.789, -987654.321)).to.equal(-1111111);
    });

    it('should handle zero correctly', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should handle very small numbers close to zero', () => {
      expect(calculateNumber('SUM', 0.0001, 0.0001)).to.equal(0);
    });

    it('should handle very large numbers', () => {
      const largeNumber = Number.MAX_SAFE_INTEGER;
      expect(calculateNumber('SUM', largeNumber, largeNumber)).to.equal(largeNumber * 2);
    });

    it('should handle infinity values', () => {
      expect(calculateNumber('SUM', Infinity, 1)).to.equal(Infinity);
      expect(calculateNumber('SUM', -Infinity, -1)).to.equal(-Infinity);
    });

    it('should handle NaN inputs', () => {
      expect(isNaN(calculateNumber('SUM', NaN, 1))).to.be.true;
      expect(isNaN(calculateNumber('SUM', 1, NaN))).to.be.true;
    });
  });

  describe('SUBTRACT operation', () => {
    it('should subtract two rounded numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', 5.6, 2.4)).to.equal(4);
    });

    it('should subtract a negative rounded number from a positive correctly', () => {
      expect(calculateNumber('SUBTRACT', 1.5, -2.5)).to.equal(4);
    });

    it('should subtract a positive number from a negative rounded number correctly', () => {
      expect(calculateNumber('SUBTRACT', -1.5, 2.5)).to.equal(-4);
    });

    it('should handle zero correctly', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('should handle infinity values', () => {
      expect(calculateNumber('SUBTRACT', Infinity, 1)).to.equal(Infinity);
      expect(calculateNumber('SUBTRACT', -Infinity, -1)).to.equal(-Infinity);
    });

    it('should round large positive numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', 123456.789, 987654.321)).to.equal(-864197);
    });

    it('should round large negative numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', -123456.789, -987654.321)).to.equal(864197);
    });
  });

  describe('DIVIDE operation', () => {
    it('should divide two rounded numbers correctly', () => {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });

    it('should handle division by zero correctly', () => {
      expect(calculateNumber('DIVIDE', 1.7, 0)).to.equal('Error');
    });

    it('should handle division of negative numbers correctly', () => {
      expect(calculateNumber('DIVIDE', -8, -2)).to.equal(4);
    });

    it('should handle division of a negative number by a positive number correctly', () => {
      expect(calculateNumber('DIVIDE', -9, 3)).to.equal(-3);
    });

    it('should handle division of a positive number by a negative number correctly', () => {
      expect(calculateNumber('DIVIDE', 12, -4)).to.equal(-3);
    });

    it('it should return the right number', () => {
      expect(calculateNumber('DIVIDE', 10.3, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE', 10, 1.2)).to.equal(10);
      expect(calculateNumber('DIVIDE', 10.3, 1.3)).to.equal(10);
      expect(calculateNumber('DIVIDE', 10.7, 1.2)).to.equal(11);
      expect(calculateNumber('DIVIDE', 10.3, 1.8)).to.equal(5);
      expect(calculateNumber('DIVIDE', 10.6, 1.8)).to.equal(5.5);
    });

    it('it should return Error if b is equal to 0', () => {
      expect(calculateNumber('DIVIDE', 10.3, 0).toLowerCase()).to.equal('error');
      expect(calculateNumber('DIVIDE', 10.7, 0).toLowerCase()).to.equal('error');
      expect(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase()).to.equal('error');
      expect(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase()).to.equal('error');
    });
  });
});
