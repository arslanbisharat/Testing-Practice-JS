/* eslint-disable linebreak-style */
const calculator = require('../src/calculator');

test('Add two and three and get five', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('Subtract six from two and get four', () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});

test('Multiply ten and nine and get ninety', () => {
  expect(calculator.multiply(10, 9)).toBe(90);
});

test('Divide three by three and get one', () => {
  expect(calculator.divide(3, 3)).toBe(1);
});