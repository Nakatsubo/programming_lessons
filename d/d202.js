// d202
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const X = lines[0].split(/\s/).map(Number),
        Y = lines[1].split(/\s/).map(Number);
  const REDUCER = (a, b) => a + b;
  const VALUE_X = X.reduce(REDUCER),
        VALUE_Y = Y.reduce(REDUCER);
  VALUE_X < VALUE_Y ? console.log(VALUE_X) : console.log(VALUE_Y);
});