// Tests for my advanced calc function

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should round 1.4 and 2.6 and return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });

    it('should round 1.5 and 2.5 and return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });

    it('should round -1.4 and -2.6 and return -4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    });

    it('should round 0.1 and 0.3 and return 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });

    it('should round large positive numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 123456.789, 987654.321), 1111111);
    });

    it('should round large negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -123456.789, -987654.321), -1111111);
    });

    it('should handle zero correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('should handle very small numbers close to zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0001, 0.0001), 0);
    });

    it('should handle very large numbers', () => {
      const largeNumber = Number.MAX_SAFE_INTEGER;
      assert.strictEqual(calculateNumber('SUM', largeNumber, largeNumber), largeNumber * 2);
    });

    it('should handle infinity values', () => {
      assert.strictEqual(calculateNumber('SUM', Infinity, 1), Infinity);
      assert.strictEqual(calculateNumber('SUM', -Infinity, -1), -Infinity);
    });

    it('should handle NaN inputs', () => {
      assert.ok(isNaN(calculateNumber('SUM', NaN, 1)));
      assert.ok(isNaN(calculateNumber('SUM', 1, NaN)));
    });
  });

  describe('SUBTRACT operation', () => {
    it('should subtract two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.4), 4);
    });

    it('should subtract a negative rounded number from a positive correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -2.5), 4);
    });

    it('should subtract a positive number from a negative rounded number correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 2.5), -4);
    });

    it('should handle zero correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('should handle infinity values', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', Infinity, 1), Infinity);
      assert.strictEqual(calculateNumber('SUBTRACT', -Infinity, -1), -Infinity);
    });

    it('should round large positive numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 123456.789, 987654.321), -864197);
    });

    it('should round large negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -123456.789, -987654.321), 864197);
    });
  });
  describe('DIVIDE operation', () => {
    it('should divide two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    });

    it('should handle division by zero correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.7, 0), 'Error');
    });

    it('should handle division of negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8, -2), 4);
    });

    it('should handle division of a negative number by a positive number correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9, 3), -3);
    });

    it('should handle division of a positive number by a negative number correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 12, -4), -3);
    });

    it('it should return the right number', () => {
      assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
      assert.equal(calculateNumber('DIVIDE', 10, 1.2), 10);
      assert.equal(calculateNumber('DIVIDE', 10.3, 1.3), 10);
      assert.equal(calculateNumber('DIVIDE', 10.7, 1.2), 11);
      assert.equal(calculateNumber('DIVIDE', 10.3, 1.8), 5);
      assert.equal(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error if b is equal to 0', () => {
      assert.equal(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
      assert.equal(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
  });
});