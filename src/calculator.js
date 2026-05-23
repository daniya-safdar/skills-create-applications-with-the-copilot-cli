'use strict';

// Supported operations:
//  - addition: add, +
//  - subtraction: sub, subtract, -
//  - multiplication: mul, multiply, *
//  - division: div, divide, /

// This file can be used as a module or run directly as a CLI:
// Examples:
//   node src/calculator.js add 2 3
//   node src/calculator.js + 4 5

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function calculate(op, aRaw, bRaw) {
  const a = toNumber(aRaw);
  const b = toNumber(bRaw);
  switch (op) {
    case 'add': case '+':
      return add(a, b);
    case 'sub': case 'subtract': case '-':
      return subtract(a, b);
    case 'mul': case 'multiply': case '*':
      return multiply(a, b);
    case 'div': case 'divide': case '/':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

// CLI entrypoint when run with `node src/calculator.js ...`
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;
  if (!op || aRaw === undefined || bRaw === undefined) {
    console.error('Usage: node src/calculator.js <op> <a> <b>');
    console.error('Operations: add(+), sub(-), mul(*), div(/)');
    process.exit(2);
  }

  try {
    const result = calculate(op, aRaw, bRaw);
    // Print integer results without trailing .0 when possible
    if (Number.isInteger(result)) console.log(result);
    else console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
