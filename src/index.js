'use strict';

// Small CLI wrapper to call the calculator module in src/calculator.js
// Keeps interface minimal and matches examples from the repository issue.

const { calculate } = require('./calculator');

function main(argv) {
  const [op, a, b] = argv;
  if (!op || a === undefined || b === undefined) {
    console.error('Usage: node src/index.js <op> <a> <b>');
    console.error('Operations: add(+), sub(-), mul(*), div(/)');
    process.exit(2);
  }

  try {
    const res = calculate(op, a, b);
    console.log(res);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = { main };
