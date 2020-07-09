function analyze(array) {
  const output = {};
  output.average = array.reduce((acc, val) => acc + val) / array.length;
  output.min = Math.min(...array);
  output.max = Math.max(...array);
  output.length = array.length;
  return output;
}

module.exports = analyze;