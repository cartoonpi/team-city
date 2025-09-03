const Calculator = require('../src/calculator');

describe('Calculator Tests', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('✅ Addition: 2 + 3 should equal 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('❌ Subtraction: 10 - 3 should equal 7', () => {
    // This will FAIL due to bug in subtract method
    expect(calc.subtract(10, 3)).toBe(7);
  });

  test('✅ Multiplication: 4 * 5 should equal 20', () => {
    expect(calc.multiply(4, 5)).toBe(20);
  });

  test('❌ Division: 10 / 0 should throw error', () => {
    // This will FAIL because divide doesn't check for zero
    expect(() => calc.divide(10, 0)).toThrow();
  });

  test('✅ Power: 2^3 should equal 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });
});
