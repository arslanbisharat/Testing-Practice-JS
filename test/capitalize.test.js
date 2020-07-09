/* eslint-disable linebreak-style */
const capitalize = require('../src/capitalize');

test('capitalize string "ahmed" to "Ahmed"', () => {
  expect(capitalize('ahmed')).toBe('Ahmed');
});