const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round 1.4 and 2.6 and return 4', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should round 1.5 and 2.5 and return 5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should round -1.4 and -2.6 and return -4', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should round 0.1 and 0.3 and return 0', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should round large positive numbers correctly', () => {
    assert.strictEqual(calculateNumber(123456.789, 987654.321), 1111111);
  });

  it('should round large negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-123456.789, -987654.321), -1111111);
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle very small numbers close to zero', () => {
    assert.strictEqual(calculateNumber(0.0001, 0.0001), 0);
  });

  it('should handle very large numbers', () => {
    const largeNumber = Number.MAX_SAFE_INTEGER;
    assert.strictEqual(calculateNumber(largeNumber, largeNumber), largeNumber * 2);
  });

  it('should handle infinity values', () => {
    assert.strictEqual(calculateNumber(Infinity, 1), Infinity);
    assert.strictEqual(calculateNumber(-Infinity, -1), -Infinity);
  });

  it('should handle NaN inputs', () => {
    assert.ok(isNaN(calculateNumber(NaN, 1)));
    assert.ok(isNaN(calculateNumber(1, NaN)));
  });
})

