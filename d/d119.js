// d119
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
  const VALUE = Number(lines[0]);
  const PI = 3.141592653589793;
  console.log(Math.floor(PI * Math.pow(10, VALUE)) / Math.pow(10, VALUE));
});