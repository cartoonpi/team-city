// Simple calculator with intentional bugs for testing
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    // Intentional bug: returns wrong result
    return a + b;  // Should be a - b
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    // Intentional bug: no zero check
    return a / b;
  }

  power(base, exp) {
    return Math.pow(base, exp);
  }
}

module.exports = Calculator;
