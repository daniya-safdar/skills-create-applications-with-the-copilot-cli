const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('calculator functions', () => {
  test('addition: 2 + 3 and aliases', () => {
    expect(add(2, 3)).toBe(5);
    expect(calculate('add', '2', '3')).toBe(5);
    expect(calculate('+', '2', '3')).toBe(5);
  });

  test('subtraction: 10 - 4 and aliases', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(calculate('sub', '10', '4')).toBe(6);
    expect(calculate('-', '10', '4')).toBe(6);
  });

  test('multiplication: 45 * 2 and aliases', () => {
    expect(multiply(45, 2)).toBe(90);
    expect(calculate('mul', '45', '2')).toBe(90);
    expect(calculate('*', '45', '2')).toBe(90);
  });

  test('division: 20 / 5 and aliases', () => {
    expect(divide(20, 5)).toBe(4);
    expect(calculate('div', '20', '5')).toBe(4);
    expect(calculate('/', '20', '5')).toBe(4);
  });

  test('division by zero should throw', () => {
    expect(() => divide(1, 0)).toThrow(/Division by zero/);
    expect(() => calculate('div', '1', '0')).toThrow(/Division by zero/);
  });

  test('invalid numeric inputs should throw', () => {
    expect(() => calculate('add', 'a', '1')).toThrow(/Invalid number/);
    expect(() => calculate('add', '1', 'b')).toThrow(/Invalid number/);
  });

  test('supports floating point numbers', () => {
    expect(calculate('add', '2.5', '1.25')).toBeCloseTo(3.75);
    expect(calculate('div', '7', '2')).toBeCloseTo(3.5);
  });
});
